import {Token} from "./Token"
import {Tokenizer} from "./Tokenizer"
import { Grammar } from "./Grammar";

let operandStack: TreeNode[] = [];
let operatorStack: TreeNode[] = [];
let funcU : Boolean = false;
let operators: { [id: string] : number } = {
    "func-call": 7,
    "POWOP": 6,
    "BITNOT": 5,
    "NEGATE": 5,
    "MULOP": 4,
    "ADDOP": 3,
    "LP": 1,
    "COMMA": 2
};
let associativity: { [id: string] : string } = {
    "POWOP": "right",
    "NEGATE": "right",
    "func-call": "left",
    "MULOP": "left",
    "ADDOP": "left",
    "LP": "left",
    "COMMA": "left"
    
};
let arity: { [id: string] : number } = {
    "BITNOT": 1,
    "NEGATE": 1,
    "func-call": 2,
    "POWOP": 2,
    "MULOP": 2,
    "ADDOP": 2,
    "LP": 2,
    "COMMA": 2
};
class TreeNode{
    sym: string ='';
    token: Token;
    children: TreeNode[] = []
    constructor(sym: string, token: Token){
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
}

export function parse( inputData: string )
{
    let gram = new Grammar(
    'POWOP -> [*][*]\n' +
    'MULOP -> [*/]\n' +
    'BITNOT -> [~]\n' +
    'ADDOP -> [-+]\n' +
    'NUM -> -?\\d+\n' +
    'COMMA -> [,]\n' +
    'ASSIGNOP -> =(?!=)\n' +
    'SEMI -> [;]\n' +
    'IF -> \\bif\\b\n' +
    'ELSE -> \\belse\\b\n' +
    'LP -> [(]\n' +
    'RP -> [)]\n' +
    'ID -> [A-Za-z_]\\w*\n\n' +
    'S -> stmt\n' +
    'stmt -> cond | assign SEMI COMMA\n' +
    'cond -> IF LP expr RP stmt | IF LP expr RP stmt ELSE stmt\n' +
    'assign -> ID ASSIGNOP expr\n' +
    'expr -> expr ADDOP pow | pow \n' +
    'pow -> pow POWOP term | term\n'+
    'unary -> BITNOT unary | factor\n' +
    'term -> unary MULOP factor | unary\n' +
    'factor -> LP expr RP | NUM\n')

    let tokenizer = new Tokenizer(gram)
    tokenizer.inputData = inputData
    while(true)
    {
        let t = tokenizer.next();
        if(t.sym == '$')//check for EOF
            break
        if(t.lexeme == "-")
        {
            let p = tokenizer.previous()
            if (p == undefined || p.sym == "LP" || operators[p.sym] != undefined)//checking if its a negate operator
            {
                t.sym = "NEGATE"
                operatorStack.push( new TreeNode(t.sym,t) )   
                continue            
            }
        }
        let sym = t.sym
        if(t.lexeme == "~")
        {
            operatorStack.push( new TreeNode(t.sym,t) )
        }
        else if(sym == 'NUM' || sym == 'ID')
        {
            operandStack.push( new TreeNode(t.sym, t) )
        }
        else if(sym == 'LP')//checking if you need to add a func call to the stack
        {
            let p = tokenizer.previous()
            if(p != undefined && p.sym == 'ID')
            {
                operatorStack.push(new TreeNode("func-call",undefined))
                operatorStack.push( new TreeNode(t.sym,t) )
            }
            else
            operatorStack.push( new TreeNode(t.sym,t) )
        }
        else if(sym == 'RP')
        {
            let p = tokenizer.previous()
            let pp = tokenizer.pprevious()
            if(p.sym == 'LP')//checking if it is a funccall that has no params
            {
                if(pp.sym == 'ID')
                {
                    operatorStack.pop()
                    doUop()
                }
            }
            else
            {
                while(true)//clearing out the stack until you hit a (
                {   
                    if(operatorStack.length == 0)
                        break
                    if(operatorStack[operatorStack.length-1].sym == 'LP')
                    {
                        operatorStack.pop()
                        break
                    }
                    doOperation()
                }
            }
        }
        else
        {
            let assoc = associativity[sym]
            while(true)
            {
                if(operatorStack.length == 0)
                    break
                let A = operatorStack[operatorStack.length-1].sym
                if ( assoc == "left" && operators[A] >= operators[sym])
                {
                    doOperation()
                }
                else if ( assoc == "right" && operators[A] > operators[sym])
                    doOperation()
                else
                    break       
            }
            operatorStack.push( new TreeNode(t.sym,t) )
        }
    }
    while(operatorStack.length != 0)
    {
        doOperation()
    }
    
    let ret = operandStack[0]
    operandStack = []
    return ret
}
function doUop()//just for func call unary
{
    let c1 = operandStack.pop()
    let opNode = operatorStack.pop()
    opNode.children.push(c1)
    operandStack.push(opNode)
}
function doOperation()
{
    let c1 = operandStack.pop()
    let opNode = operatorStack.pop()
    if(arity[opNode.sym] == 2 )//if its not a unary operator
    {
        let c2 = operandStack.pop()
        opNode.children.push(c2)
    }
    opNode.children.push(c1)
    operandStack.push(opNode)
}
