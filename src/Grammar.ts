
class NodeType
{
    label: string;
    n : Array<NodeType> = new Array();
    Constructor(L: string){
        this.label = L;
        this.n = [];
    }
}

function dfs(N:NodeType, v: Set<string>, nonterm: Array<[string,string]>)
{
    if(v != undefined)
        v.add(N.label);

    let found = nonterm.find(e => e[0] === N.label);
    if(found !== undefined)
    {
        let s = found[1];
        let rex = new RegExp('\\|',"g"); 
        s = s.replace(rex, ' ');
        s = s.replace(',', ' ');
        s.split(new RegExp('\\s')).forEach(t =>
        {           
            let tmp = t.trim();
            if(tmp !== '')
            {
                let temp_node : NodeType = new NodeType();
                temp_node.label = tmp;
                N.n.push(temp_node);
            }
        });
    }

    if(N.n != undefined)
    {

        N.n.forEach((w:NodeType) =>
        {
            if(!v.has(w.label)){
            dfs(w, v, nonterm);
            }
        });
    }
}
  

export class Grammar
{
    
    term : Array<[string,string]> = new Array()
    nonterm : Array<[string,string]> = new Array()
    nontermA : Array<[string,string[]]> = new Array()
    Gram : Array<[string,string]> = new Array()
    nullable : Set<string> = new Set()

    constructor(reg : string)
    {
        let allRegs = new Set();
        let splitted = reg.split("\n");
        let nameReg = new RegExp( "([A-Z_]+) -> ", "g" ); 
        let term : Boolean = true;
        let addBool : Boolean = true;
        var n = 0
        while (n < splitted.length-1)
        {
            let splitMore = splitted[n].split(" -> ");
            if(allRegs.has(splitMore[0]))
            {
                throw new Error("Two or more of the same Regex"+splitMore[2])
            }
            
            if(term)
            {
                if (splitMore.length > 1)
                {
                    try
                    {
                        let testReg = new RegExp(splitMore[1])
                    }
                    catch
                    {
                        throw new Error("Invalid Regex"+splitMore[1])
                    }
                    allRegs.add(splitMore[0])
                }
                else if(splitMore[0] == "")
                {
                    term = !term    
                } 
                else
                {
                    
                    throw new Error("Invalid Regex"+splitMore[1])
                }
            }
            else
            {
                if (splitMore.length > 1)
                {
                    if(this.term.includes([splitMore[0],splitMore[1]]))
                    {
                        throw new Error("Nonterminal already defined as terminal")
                    }
                    let found = this.nonterm.find(matches => matches[0] === splitMore[0]);

                    if(found != undefined)
                    {
                        let f = this.nonterm.indexOf(found)
                        this.nonterm[f][1] +=  (" | " + splitMore[1]);
                        addBool = false
                    }
                    else
                    {
                        this.nonterm.push([splitMore[0],splitMore[1]])
                        addBool = false
                    }

                }
                else if(splitMore[0] == "" && term)
                {
                    term = !term    
                } 
            }
            
            let adding : Array<string> = splitted[n].split(" -> ")
            n += 1
            if(addBool && splitMore[1] != undefined)
                this.term.push([adding[0],adding[1]])
            addBool = true
        }

        let node = new NodeType();

        node.label = this.nonterm[0][0]

        let empty:Set<string> = new Set()
        dfs(node, empty, this.nonterm)
   
        let cont : Boolean = true
        empty.forEach(thing => {
            for (let t = 0; t < this.nonterm.length; t++) 
            {
                const element = this.nonterm[t];
                if(element[0] == thing)
                {
                    cont = false
                    break;
                }
                    
            }
            if(cont)
            {
                for (let t = 0; t < this.term.length; t++) 
                {
                    const element = this.term[t];
                    if(element[0] == thing)
                    {
                        break;
                    }
                    if(t == this.term.length)
                    {
                        throw new Error("Used but not defined " + element[0])
                    }
                        
                }
            }
            cont = true
        });

        for (let t = 0; t < this.nonterm.length; t++) 
        {
            if(!empty.has(this.nonterm[t][0]))
            {
                throw new Error("Defined but not used" + this.nonterm[t][0])
            }
                
        }

        for (let t = 0; t < this.term.length; t++) 
        {
            if(!empty.has(this.term[t][0]) && this.term[t][0] != 'COMMENT')
            {
                throw new Error("Defined but not used" + this.term[t][0])
            }
                
        }

        // if(!allRegs.has("WHITESPACE"))
        //     this.term.push(["WHITESPACE", "\\s+"])
        // if(!allRegs.has("COMMENT"))
        //     this.term.push(["COMMENT", "/[*](.|\n)*?[*]/"])

        this.Gram = this.term.concat(this.nonterm)
        for(let i = 0; i < this.nonterm.length;i++)
            this.nontermA.push(['',[]])

        for(let i = 0; i < this.nonterm.length;i++)
        {
            this.nontermA[i][0] = this.nonterm[i][0]
            let s = this.nonterm[i][1]
            let rex = new RegExp('\\|',"g"); 
            if(s != undefined)
                s.split(rex).forEach(t =>
                {   
                    let tmp = t.trim();
                    if(tmp !== '')
                    {
                        this.nontermA[i][1].push(tmp)
                    }
                });
        }
        term = true

        this.getNullable()
    }

    getNullable() : Set<string>
    {

        while(true)
        {
            let t = true
            for(let i = 0; i < this.nontermA.length;i++)
            {
                for (let f = 0; f < this.nontermA[i][1].length; f++) 
                {
                    if(this.nontermA[i][1][f].split(' ').every( (sym: string) => this.nullable.has(sym) || sym == 'lambda')) 
                    {
                        if(!this.nullable.has(this.nontermA[i][0]))
                        {
                            this.nullable.add(this.nontermA[i][0])
                            t = false
                        }
                    }
                }
            }
            
            if(t)
                break
        }
        return this.nullable
    }

    getFirst() : Map<string,Set<string>>
    {
        let first : Map<string,Set<string>> = new Map()
        
        this.term.forEach(t => {
            first.set(t[0],new Set<string>().add(t[0]))
        })
        let sont = 0
        while(true)
        {
            let boo = true
            let tempfirst = first
            for(let i = 0; i < this.nontermA.length;i++)
            {
                for (let f = 0; f < this.nontermA[i][1].length; f++) 
                {
                    let ch = this.nontermA[i][1][f].split(' ')

                    for (let t = 0; t < ch.length; t++) 
                    {
                        let tempp = first.get(this.nontermA[i][0])
                        let tempc = first.get(ch[t])
                        if( tempp == undefined)
                        {
                            tempp = new Set<string>()
                        }
                        if(tempc == undefined)
                        {
                            tempc = new Set<string>()
                        }
                        tempc.forEach(tempp.add,tempp)
                        first.set(this.nontermA[i][0],tempp)

                        if(tempfirst.size < first.size)
                            boo = false
                        if(!this.nullable.has(ch[t]) && ch[t] != 'lambda')
                        {
                            break
                        }
                    }
                }
            }
            
            if(boo && sont > this.nontermA.length)
                break

            sont++
        }

        return first
    }
    
} 

