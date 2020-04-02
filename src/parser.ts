declare var require:any;
import {TreeNode} from "./treeNode"
import {walk} from "./treeNode"
import {makeAsm} from "./asm"

let antlr4 = require('./antlr4')
let Lexer = require('./gramLexer.js').gramLexer;
let Parser = require('./gramParser.js').gramParser

class ErrorHandler{
    syntaxError(rec:any, sym:any, line:number,
                column:number,msg:string,e:any){
        console.log("Syntax error:",msg,"on line",line,
                    "at column",column);
        throw new Error("Syntax error in ANTLR parse");
    }
}
// dont forget export NODE_PATH=.
export function parse(txt: string) {
    let stream = new antlr4.InputStream(txt);
    let lexer = new Lexer(stream);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new Parser(tokens);
    parser.buildParseTrees = true;
    let handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener( handler );
    parser.removeErrorListeners()
    parser.addErrorListener( handler );
    let antlrroot = parser.program();
    let root : TreeNode = walk(parser,antlrroot);
    return makeAsm(root)
}
// add whitespace WHITESPACE : ( ' ' | '\t' | '\n' | '\r' )+ -> skip   ;