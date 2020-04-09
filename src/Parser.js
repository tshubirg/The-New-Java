"use strict";
exports.__esModule = true;
var Grammar_1 = require("./Grammar");
var Tokenizer_1 = require("./Tokenizer");
var TreeNode_1 = require("./TreeNode");
var gram = "SEMI -> ;\n" +
    "LBR -> [{]\n" +
    "RBR -> [}]\n" +
    "LP -> [(]\n" +
    "RP -> [)]\n" +
    "EQ -> =\n" +
    "CMA -> ,\n" +
    "IF -> if\n" +
    "WHILE -> while\n" +
    "ELSE -> else\n" +
    "TYPE -> (int|double)\n" +
    "NUM -> [0-9]+\n" +
    "ID -> [A-Za-z_]+\n\n" +
    "S -> stmt-list\n" +
    "stmt-list -> stmt stmt-list | lambda\n" +
    "stmt -> loop | cond | assign SEMI | LBR stmt-list RBR\n" +
    "loop -> WHILE LP expr RP stmt\n" +
    "cond -> IF LP expr RP stmt | IF LP expr RP stmt ELSE stmt\n" +
    "assign -> ID EQ expr\n" +
    "expr -> NUM | ID";
var T = new Tokenizer_1.Tokenizer(new Grammar_1.Grammar(gram));
function parse(input) {
    T.setInput(input);
    return parse_S();
}
exports.parse = parse;
function parse_S() {
    var n = new TreeNode_1.TreeNode("S", undefined);
    n.addChild(parse_stmt_list());
    if (T.peek().sym != '$')
        return undefined;
    return n;
}
function parse_stmt_list() {
    var n = new TreeNode_1.TreeNode("stmt-list", undefined);
    if (T.peek().sym == '$') {
        return n;
    }
    else if (T.peek().sym == "WHILE" || T.peek().sym == "IF" || T.peek().sym == "ID" || T.peek().sym == "LBR") {
        n.addChild(parse_stmt());
        n.addChild(parse_stmt_list());
    }
    return n;
}
function parse_stmt() {
    var n = new TreeNode_1.TreeNode("stmt", undefined);
    if (T.peek().sym == "WHILE") {
        n.addChild(parse_loop());
    }
    else if (T.peek().sym == "IF") {
        n.addChild(parse_cond());
    }
    else if (T.peek().sym == "ID") {
        n.addChild(parse_assign());
        n.addChild(new TreeNode_1.TreeNode("SEMI", T.expect("SEMI")));
    }
    else if (T.peek().sym == "LBR") {
        n.addChild(new TreeNode_1.TreeNode("LBR", T.expect("LBR")));
        if (T.peek().sym == "RBR") {
            n.addChild(new TreeNode_1.TreeNode("RBR", T.expect("RBR")));
        }
        else {
            n.addChild(parse_stmt_list());
            n.addChild(new TreeNode_1.TreeNode("RBR", T.expect("RBR")));
        }
    }
    else
        throw new Error("Expected the unexpected.1");
    return n;
}
function parse_cond() {
    var n = new TreeNode_1.TreeNode("cond", undefined);
    n.addChild(new TreeNode_1.TreeNode("IF", T.expect("IF")));
    n.addChild(new TreeNode_1.TreeNode("LP", T.expect("LP")));
    n.addChild(parse_expr());
    n.addChild(new TreeNode_1.TreeNode("RP", T.expect("RP")));
    n.addChild(parse_stmt());
    if (T.peek().sym == "ELSE") {
        n.addChild(new TreeNode_1.TreeNode("ELSE", T.expect("ELSE")));
        n.addChild(parse_stmt());
    }
    return n;
}
function parse_loop() {
    var n = new TreeNode_1.TreeNode("loop", undefined);
    n.addChild(new TreeNode_1.TreeNode("WHILE", T.expect("WHILE")));
    n.addChild(new TreeNode_1.TreeNode("LP", T.expect("LP")));
    n.addChild(parse_expr());
    n.addChild(new TreeNode_1.TreeNode("RP", T.expect("RP")));
    n.addChild(parse_stmt());
    return n;
}
function parse_assign() {
    var n = new TreeNode_1.TreeNode("assign", undefined);
    n.addChild(new TreeNode_1.TreeNode("ID", T.expect("ID")));
    n.addChild(new TreeNode_1.TreeNode("EQ", T.expect("EQ")));
    n.addChild(parse_expr());
    return n;
}
function parse_expr() {
    var n = new TreeNode_1.TreeNode("expr", undefined);
    if (T.peek().sym == "NUM") {
        n.addChild(new TreeNode_1.TreeNode("NUM", T.expect("NUM")));
    }
    else {
        n.addChild(new TreeNode_1.TreeNode("ID", T.expect("ID")));
    }
    return n;
}
