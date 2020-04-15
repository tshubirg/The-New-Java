"use strict";
exports.__esModule = true;
var asmCode = [];
var VarType;
(function (VarType) {
    VarType[VarType["INTEGER"] = 0] = "INTEGER";
    VarType[VarType["FLOAT"] = 1] = "FLOAT";
    VarType[VarType["STRING"] = 2] = "STRING";
})(VarType || (VarType = {}));
function convertStackTopToZeroOrOneInteger(type) {
    if (type == VarType.INTEGER) {
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    }
    else if (type == VarType.FLOAT) {
        emit("xorps xmm1, xmm1");
        emit("movq xmm0, [rsp]");
        emit("cmpneqsd xmm0, xmm1");
        emit("movq [rsp], xmm0");
        emit("and qword [rsp], 1");
    }
    else {
        ICE();
    }
}
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
    var returnType = exprNodeCode(n.children[1]);
    if (returnType == VarType.INTEGER) {
        emit("pop rax");
        emit("ret");
    }
    else if (returnType == VarType.FLOAT) {
        emit("movq xmm0, [rsp]");
        emit("add rsp,8");
        emit("cvtsd2si rax, xmm0");
        emit("ret");
    }
}
function exprNodeCode(n) {
    return orexpNodeCode(n.children[0]);
}
function orexpNodeCode(n) {
    //orexp -> orexp OR andexp | andexp
    if (n.children.length == 1)
        return andexpNodeCode(n.children[0]);
    else {
        var orexpType = orexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(orexpType);
        var lbl = label();
        emit("cmp qword [rsp], 0");
        emit("jne " + lbl);
        emit("add rsp,8"); //discard left result (0)
        var andexpType = andexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(lbl + ":");
        return VarType.INTEGER;
    }
}
function andexpNodeCode(n) {
    //andexp : andexp AND notexp | notexp;
    if (n.children.length == 1)
        return notexpNodeCode(n.children[0]);
    else {
        var andexpType = andexpNodeCode(n.children[0]);
        convertStackTopToZeroOrOneInteger(andexpType);
        var lbl = label();
        emit("cmp qword [rsp], 1");
        emit("jne " + lbl);
        emit("add rsp,8"); //discard left result (0)
        var notexpType = notexpNodeCode(n.children[2]);
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(lbl + ":");
        return VarType.INTEGER;
    }
}
function notexpNodeCode(n) {
    //notexp : NOT notexp | rel;
    if (n.children.length == 1)
        return relexpNodeCode(n.children[0]);
    else {
        var notexp = notexpNodeCode(n.children[1]);
        convertStackTopToZeroOrOneInteger(notexp);
        var zerolbl = label();
        var onelbl = label();
        emit("cmp qword [rsp], 0");
        emit("je " + zerolbl);
        emit("pop rax");
        emit("and rax, 0");
        emit("push rax");
        emit("jmp " + onelbl);
        emit(zerolbl + ":");
        emit("pop rax");
        emit("mov qword rax, 1");
        emit("push rax");
        emit(onelbl + ":");
        return VarType.INTEGER;
    }
}
function relexpNodeCode(n) {
    //rel : sum RELOP sum | sum;
    if (n.children.length == 1)
        return sumNodeCode(n.children[0]);
    else {
        var sum1Type = sumNodeCode(n.children[0]);
        var sum2Type = sumNodeCode(n.children[2]);
        if (sum1Type != sum2Type)
            ICE();
        emit("pop rax"); //second operand
        //first operand is on stack
        emit("cmp [rsp],rax"); //do the compare
        switch (n.children[1].token.lexeme) {
            case ">=":
                emit("setge al");
                break;
            case "<=":
                emit("setle al");
                break;
            case ">":
                emit("setg  al");
                break;
            case "<":
                emit("setl  al");
                break;
            case "==":
                emit("sete  al");
                break;
            case "!=":
                emit("setne al");
                break;
            default: ICE();
        }
        emit("movzx qword rax, al"); //move with zero extend
        emit("mov [rsp], rax");
        return VarType.INTEGER;
    }
}
function sumNodeCode(n) {
    //sum -> sum PLUS term | sum MINUS term | term
    if (n.children.length === 1)
        return termNodeCode(n.children[0]);
    else {
        var sumType = sumNodeCode(n.children[0]);
        var termType = termNodeCode(n.children[2]);
        if (sumType != termType)
            ICE();
        if (sumType == VarType.INTEGER) {
            switch (n.children[1].sym) {
                case "PLUS":
                    emit("pop rbx");
                    emit("pop rax");
                    emit("add rax, rbx");
                    break;
                case "MINUS":
                    emit("pop rbx");
                    emit("pop rax");
                    emit("sub rax, rbx");
                    break;
                default:
                    ICE();
            }
            emit("push rax");
            return VarType.INTEGER;
        }
        else if (sumType == VarType.FLOAT) {
            switch (n.children[1].sym) {
                case "PLUS":
                    emit("movq xmm1, [rsp]");
                    emit("add  rsp,8");
                    emit("movq xmm0, [rsp]");
                    emit("add  rsp,8");
                    emit("addsd xmm0,xmm1");
                    break;
                case "MINUS":
                    emit("movq xmm1, [rsp]");
                    emit("add  rsp,8");
                    emit("movq xmm0, [rsp]");
                    emit("add  rsp,8");
                    emit("subsd xmm0,xmm1");
                    break;
                default:
                    ICE();
            }
            emit("sub rsp,8");
            emit("movq [rsp], xmm0");
            return VarType.FLOAT;
        }
    }
}
function termNodeCode(n) {
    //term : term MULOP neg | neg;
    if (n.children.length === 1)
        return negNodeCode(n.children[0]);
    else {
        var termType = termNodeCode(n.children[0]);
        var negType = negNodeCode(n.children[2]);
        if (negType != termType)
            ICE();
        if (negType == VarType.INTEGER) {
            switch (n.children[1].token.lexeme) {
                case "%":
                    emit("pop rbx");
                    emit("pop rax");
                    emit("and rdx, 0");
                    emit("idiv rbx");
                    emit("push rdx");
                    break;
                case "/":
                    emit("pop rbx");
                    emit("pop rax");
                    emit("and rdx, 0");
                    emit("idiv rbx");
                    emit("push rax");
                    break;
                case "*":
                    emit("pop rcx");
                    emit("pop rax");
                    emit("imul rcx");
                    emit("push rax");
                    break;
                default:
                    ICE();
            }
            return VarType.INTEGER;
        }
        else if (negType == VarType.FLOAT) {
            switch (n.children[1].token.lexeme) {
                case "/":
                    emit("movq xmm1, [rsp]");
                    emit("add rsp, 8");
                    emit("movq xmm0, [rsp]");
                    emit("add rsp, 8");
                    emit("divsd xmm0,xmm1");
                    break;
                case "*":
                    emit("movq xmm1, [rsp]");
                    emit("add rsp, 8");
                    emit("movq xmm0, [rsp]");
                    emit("add rsp, 8");
                    emit("mulsd xmm0,xmm1");
                    break;
                default:
                    ICE();
            }
            emit("sub rsp,8");
            emit("movq [rsp], xmm0");
            return VarType.FLOAT;
        }
    }
}
function negNodeCode(n) {
    //neg : MINUS neg | factor;
    if (n.children.length === 1)
        return factorNodeCode(n.children[0]);
    else {
        var negType = negNodeCode(n.children[1]);
        if (negType == VarType.INTEGER) {
            emit("and rax, 0");
            emit("pop rbx");
            emit("sub rax,rbx");
            emit("push rax");
            return VarType.INTEGER;
        }
        else if (negType == VarType.FLOAT) {
            emit("xorps xmm0, xmm0");
            emit("movq xmm1, [rsp]");
            emit("add rsp, 8");
            emit("subsd xmm0,xmm1");
            emit("sub rsp, 8");
            emit("movq [rsp], xmm0");
            return VarType.FLOAT;
        }
    }
}
function loopNodeCode(n) {
    //loop : WHILE LP expr RP braceblock;
    var startLoop = label();
    emit(startLoop + ":");
    var exprt = exprNodeCode(n.children[2]);
    emit("pop rax");
    emit("cmp rax, 0");
    var endLoop = label();
    emit("je " + endLoop);
    braceblockNodeCode(n.children[4]);
    emit("jmp " + startLoop);
    emit(endLoop + ":");
}
function factorNodeCode(n) {
    //factor : NUM | FPNUM | LP expr RP | LP TYPE RP factor;
    var child = n.children[0];
    switch (child.sym) {
        case "NUM":
            //console.log("made it" + child.token.lexeme)
            var v = parseInt(child.token.lexeme, 10);
            emit("push qword " + v);
            return VarType.INTEGER;
        case "FPNUM":
            var f = parseFloat(child.token.lexeme);
            var fstring = f.toString();
            if (!fstring.includes(".")) {
                fstring += ".0";
                emit("mov rax, __float64__(" + fstring + ")");
                emit("push rax");
                return VarType.FLOAT;
            }
            emit("mov rax, __float64__(" + f + ")");
            emit("push rax");
            return VarType.FLOAT;
        case "LP":
            if (n.children[1].sym == "expr")
                return exprNodeCode(n.children[1]);
            else {
                var factorType = factorNodeCode(n.children[3]);
                if (n.children[1].token.lexeme == "int" && factorType != VarType.INTEGER) {
                    emit("movq  xmm0, [rsp]");
                    emit("add rsp, 8");
                    emit("roundsd xmm0, xmm0, 0xb");
                    emit("cvtsd2si rax,xmm0");
                    emit("push rax");
                    return VarType.INTEGER;
                }
                else if (n.children[1].token.lexeme == "double" && factorType != VarType.FLOAT) {
                    emit("pop rax");
                    emit("cvtsi2sd xmm0, rax");
                    emit("sub rsp, 8");
                    emit("movq [rsp], xmm0");
                    return VarType.FLOAT;
                }
                return factorType;
            }
        default:
            ICE();
    }
}
function condNodeCode(n) {
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock
    if (n.children.length === 5) {
        //no 'else'
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("pop rax");
        emit("cmp rax, 0");
        var endifLabel = label();
        emit("je " + endifLabel);
        braceblockNodeCode(n.children[4]);
        emit(endifLabel + ":");
    }
    else {
        exprNodeCode(n.children[2]); //leaves result in rax
        emit("pop rax");
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
