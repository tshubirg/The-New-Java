
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
        this.lineNumber = 1;
        this.idx = 0;
    }
    setInput( inputData: string )
    {
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
    next(): Token 
    {
        if( this.idx >= this.inputData.length-1 ){
            //special "end of file" metatoken
            this.lineNumber=1;
            this.idx = 0;
            return new Token("$",undefined,this.lineNumber);
        }
        
        for(let i=0;i<this.grammar.Gram.length;++i)
        {
            let terminal = this.grammar.Gram[i];
            let sym = terminal[0];
            let rex = new RegExp(terminal[1],"gy");   //RegExp
            rex.lastIndex = this.idx;   //tell where to start searching

            let m = rex.exec(this.inputData);   //do the search
            if( m )
            {
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
        throw new Error("No Matches Found");
    }
}


