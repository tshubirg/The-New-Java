
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
        //console.log(s)
        s.split(new RegExp('\\s')).forEach(t =>
        {
            
            let tmp = t.trim();
            // console.log(tmp)
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

    constructor(reg : string)
    {
        let allRegs = new Set();
        let splitted = reg.split("\n");
        //console.log(splitted)
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
            
            //console.log(splitMore.length)
            if(term)
            {
                if (splitMore.length > 1)
                {
                    try
                    {
                        //console.log(splitMore[1])
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
                    //console.log("mad")
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
                    //console.log(found)
                    if(found != undefined)
                    {
                        //console.log(found)
                        let f = this.nonterm.indexOf(found)
                        this.nonterm[f][1] +=  (" | " + splitMore[1]);
                        //console.log(this.nonterm[f][1])
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
                    //console.log("mad")
                    term = !term    
                } 
            }
            
            let adding : Array<string> = splitted[n].split(" -> ")
            n += 1
            if(addBool && splitMore[1] != undefined)
                this.term.push([adding[0],adding[1]])
            addBool = true
        }
        //console.log(this.Gram)

        let node = new NodeType();
        //console.log()
        //console.log(this.term)
        node.label = this.nonterm[0][0]

        let empty:Set<string> = new Set()
        dfs(node, empty, this.nonterm)
        //console.log(empty)
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

        // for (let t = 0; t < this.nonterm.length; t++) 
        // {
        //     if(!empty.has(this.nonterm[t][0]))
        //     {
        //         throw new Error("Defined but not used" + this.nonterm[t][0])
        //     }
                
        // }

        // for (let t = 0; t < this.term.length; t++) 
        // {
        //     if(!empty.has(this.term[t][0]))
        //     {
        //         throw new Error("Defined but not used" + this.term[t][0])
        //     }
                
        // }
        if(!allRegs.has("WHITESPACE"))
            this.term.push(["WHITESPACE", "\\s+"])
        if(!allRegs.has("COMMENT"))
            this.term.push(["COMMENT", "/[*](.|\n)*?[*]/"])

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
    }

    getNullable() : Set<string>
    {
        let nullable : Set<string> = new Set()

        while(true)
        {
            let t = true
            for(let i = 0; i < this.nontermA.length;i++)
            {
                for (let f = 0; f < this.nontermA[i][1].length; f++) 
                {
                    if(this.nontermA[i][1][f].split(' ').every( (sym: string) => nullable.has(sym) || sym == 'lambda')) 
                    {
                        if(!nullable.has(this.nontermA[i][0]))
                        {
                            nullable.add(this.nontermA[i][0])
                            t = false
                        }
                    }
                }
            }
            
            if(t)
                break
        }
        return nullable
    }
} 

