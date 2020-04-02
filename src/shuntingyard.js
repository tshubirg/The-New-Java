"use strict";
exports.__esModule = true;
var treeNode_1 = require("./treeNode");
var Tokenizer_1 = require("./Tokenizer");
var Grammar_1 = require("./Grammar");
var operandStack = [];
var operatorStack = [];
var funcU = false;
var operators = {
    "func-call": 7,
    "POWOP": 6,
    "BITNOT": 5,
    "NEGATE": 5,
    "MULOP": 4,
    "ADDOP": 3,
    "LP": 1,
    "COMMA": 2
};
var associativity = {
    "POWOP": "right",
    "NEGATE": "right",
    "func-call": "left",
    "MULOP": "left",
    "ADDOP": "left",
    "LP": "left",
    "COMMA": "left"
};
var arity = {
    "BITNOT": 1,
    "NEGATE": 1,
    "func-call": 2,
    "POWOP": 2,
    "MULOP": 2,
    "ADDOP": 2,
    "LP": 2,
    "COMMA": 2
};
function parse(inputData) {
    var gram = new Grammar_1.Grammar('POWOP -> [*][*]\n' +
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
        'pow -> pow POWOP term | term\n' +
        'unary -> BITNOT unary | factor\n' +
        'term -> unary MULOP factor | unary\n' +
        'factor -> LP expr RP | NUM\n');
    var tokenizer = new Tokenizer_1.Tokenizer(gram);
    tokenizer.inputData = inputData;
    while (true) {
        var t = tokenizer.next();
        if (t.sym == '$') //check for EOF
            break;
        if (t.lexeme == "-") {
            var p = tokenizer.previous();
            if (p == undefined || p.sym == "LP" || operators[p.sym] != undefined) //checking if its a negate operator
             {
                t.sym = "NEGATE";
                operatorStack.push(new treeNode_1.TreeNode(t.sym, t));
                continue;
            }
        }
        var sym = t.sym;
        if (t.lexeme == "~") {
            operatorStack.push(new treeNode_1.TreeNode(t.sym, t));
        }
        else if (sym == 'NUM' || sym == 'ID') {
            operandStack.push(new treeNode_1.TreeNode(t.sym, t));
        }
        else if (sym == 'LP') //checking if you need to add a func call to the stack
         {
            var p = tokenizer.previous();
            if (p != undefined && p.sym == 'ID') {
                operatorStack.push(new treeNode_1.TreeNode("func-call", undefined));
                operatorStack.push(new treeNode_1.TreeNode(t.sym, t));
            }
            else
                operatorStack.push(new treeNode_1.TreeNode(t.sym, t));
        }
        else if (sym == 'RP') {
            var p = tokenizer.previous();
            var pp = tokenizer.pprevious();
            if (p.sym == 'LP') //checking if it is a funccall that has no params
             {
                if (pp.sym == 'ID') {
                    operatorStack.pop();
                    doUop();
                }
            }
            else {
                while (true) //clearing out the stack until you hit a (
                 {
                    if (operatorStack.length == 0)
                        break;
                    if (operatorStack[operatorStack.length - 1].sym == 'LP') {
                        operatorStack.pop();
                        break;
                    }
                    doOperation();
                }
            }
        }
        else {
            var assoc = associativity[sym];
            while (true) {
                if (operatorStack.length == 0)
                    break;
                var A = operatorStack[operatorStack.length - 1].sym;
                if (assoc == "left" && operators[A] >= operators[sym]) {
                    doOperation();
                }
                else if (assoc == "right" && operators[A] > operators[sym])
                    doOperation();
                else
                    break;
            }
            operatorStack.push(new treeNode_1.TreeNode(t.sym, t));
        }
    }
    while (operatorStack.length != 0) {
        doOperation();
    }
    var ret = operandStack[0];
    operandStack = [];
    return ret;
}
exports.parse = parse;
function doUop() {
    var c1 = operandStack.pop();
    var opNode = operatorStack.pop();
    opNode.children.push(c1);
    operandStack.push(opNode);
}
function doOperation() {
    var c1 = operandStack.pop();
    var opNode = operatorStack.pop();
    if (arity[opNode.sym] == 2) //if its not a unary operator
     {
        var c2 = operandStack.pop();
        opNode.children.push(c2);
    }
    opNode.children.push(c1);
    operandStack.push(opNode);
}
