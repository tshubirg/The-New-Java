
import {Token} from "./Token"
import {Grammar} from "./Grammar"

export class Tokenizer
{
    grammar: Grammar;
    inputData: string;
    lineNumber: number;
    idx: number;    //index of next unparsed char in inputData
    allT:Token[] = [];
    constructor( grammar: Grammar )
    {
        this.grammar = grammar;
    }
    setInput( inputData: string )
    {
        this.lineNumber = 1;
        this.idx = 0;
        this.inputData = inputData
    }
    pprevious() : Token
    {
        return this.allT[this.allT.length-3]
    }
    previous() : Token
    {
        return this.allT[this.allT.length-2]
    }
    peek() : Token
    {
        let tempInd = this.idx
        let tempLN = this.lineNumber
        let ret : Token
        //console.log(tempInd)
        ret = this.next()
        //console.log(ret)
        this.allT.pop()

        
        this.idx = tempInd
        this.lineNumber = tempLN
        return ret
    }
    
    next(): Token 
    {
        //console.log("made it 1")
        if( this.idx >= this.inputData.length-1 ){
            //special "end of file" metatoken
            return new Token("$",undefined,this.lineNumber);
        }
        //console.log(this.grammar.Gram)
        for(let i=0;i<this.grammar.Gram.length;++i)
        {
            let terminal = this.grammar.Gram[i];
            let sym = terminal[0];
            let rex = new RegExp(terminal[1],"gy");   //RegExp
            rex.lastIndex = this.idx;   //tell where to start searching
            //console.log(this.inputData[this.idx])
            let m = rex.exec(this.inputData);   //do the search
            if( m )
            {
                //console.log("made it 3")
                let lexeme = m[0];
                this.idx += lexeme.length;
                let temp = this.lineNumber
                this.lineNumber += lexeme.split('\n').length-1
                if( sym !== "WHITESPACE" && sym !== "COMMENT" )
                {
                    this.allT.push(new Token(sym,lexeme,this.lineNumber))
                    return new Token(sym,lexeme,temp)
                    //return new Token using sym, lexeme, and line number
                } 
                else 
                {
                    //skip whitespace and get next real token
                    return this.next();
                }
                
            }
        }
        //no match; syntax error
        console.log("No matches found")
        throw new Error("No Matches Found");
    }
    expect(input:string) : Token
    {
        //console.log("expect: "+ input)
        let ne = this.next()
        if(ne.sym != input)
            throw new Error("Expected the unexpected.")

        return ne
    }
}


