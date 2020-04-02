"use strict";
exports.__esModule = true;
var asmCode = [];
function makeAsm(root) {
    asmCode = [];
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    return asmCode.join("\n");
}
exports.makeAsm = makeAsm;
var labelCounter = 0;
function label() {
    var s = "lbl" + labelCounter;
    labelCounter++;
    return s;
}
function emit(instr) {
    asmCode.push(instr);
}
function programNodeCode(n) {
    //program -> braceblock
    if (n.sym != "program")
        ICE();
    braceblockNodeCode(n.children[0]);
}
function braceblockNodeCode(n) {
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}
function stmtsNodeCode(n) {
    //stmts -> stmt stmts | lambda
    if (n.children.length == 0)
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}
function ICE() {
    throw new Error("skate fast eat ass.");
}
function stmtNodeCode(n) {
    //stmt -> cond | loop | return-stmt SEMI
    var c = n.children[0];
    switch (c.sym) {
        case "cond":
            condNodeCode(c);
            break;
        case "loop":
            loopNodeCode(c);
            break;
        case "returnStmt":
            returnStmtNodeCode(c);
            break;
        default:
            ICE();
    }
}
function returnStmtNodeCode(n) {
    //return-stmt -> RETURN expr
    exprNodeCode(n.children[1]);
    //...move result from expr to rax...
    emit("ret");
}
function exprNodeCode(n) {
    //expr -> NUM
    var d = parseInt(n.children[0].token.lexeme, 10);
    emit("mov rax, " + d);
}
function loopNodeCode(n) {
    //loop : WHILE LP expr RP braceblock;
    var startLoop = label();
    emit(startLoop + ":");
    exprNodeCode(n.children[2]);
    emit("cmp rax, 0");
    var endLoop = label();
    emit("je " + endLoop);
    braceblockNodeCode(n.children[4]);
    emit("jmp " + startLoop);
    emit(endLoop + ":");
}
function condNodeCode(n) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("cmp rax, 0");
        var endifLabel = label();
        emit("je " + endifLabel);
        braceblockNodeCode(n.children[4]);
        emit(endifLabel + ":");
    }
    else {
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("cmp rax, 0");
        var endifLabel = label();
        var endelseLabel = label();
        emit("je " + endifLabel);
        braceblockNodeCode(n.children[4]);
        emit("jmp " + endelseLabel);
        emit(endifLabel + ":");
        braceblockNodeCode(n.children[6]);
        emit(endelseLabel + ":");
    }
}
