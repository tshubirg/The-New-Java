"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var stringPool = new Map();
var asmCode = [];
var VarType;
(function (VarType) {
    VarType[VarType["INTEGER"] = 0] = "INTEGER";
    VarType[VarType["FLOAT"] = 1] = "FLOAT";
    VarType[VarType["STRING"] = 2] = "STRING";
    VarType[VarType["VOID"] = 3] = "VOID";
})(VarType || (VarType = {}));
var VarInfo = /** @class */ (function () {
    //also the line number, if you want
    function VarInfo(t, location) {
        this.location = location;
        this.type = t;
    }
    return VarInfo;
}());
function moveBytesFromStackToLocation(loc) {
    emit("pop rax");
    emit("mov [" + loc + "], rax");
}
var SymbolTable = /** @class */ (function () {
    function SymbolTable() {
        this.table = new Map();
    }
    SymbolTable.prototype.get = function (name) {
        if (!this.table.has(name))
            throw new Error("Bitch aint there");
        return this.table.get(name);
    };
    SymbolTable.prototype.set = function (name, v) {
        if (this.table.has(name))
            throw new Error("Bitch already here");
        this.table.set(name, v);
    };
    SymbolTable.prototype.has = function (name) {
        return this.table.has(name);
    };
    return SymbolTable;
}());
var symtable = new SymbolTable();
function outputSymbolTableInfo() {
    var e_1, _a;
    try {
        for (var _b = __values(symtable.table.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var vname = _c.value;
            var vinfo = symtable.get(vname);
            emit(vinfo.location + ":");
            emit("dq 0");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function outputStringPoolInfo() {
    var e_2, _a;
    try {
        for (var _b = __values(stringPool.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var lbl = stringPool.get(key);
            emit(lbl + ":");
            var nl_f = void 0, be_f = false;
            for (var i = 0; i < key.length; ++i) {
                if (key.charAt(i) === '\n')
                    emit("db 10");
                else
                    emit("db " + key.charCodeAt(i));
            }
            emit("db 0"); //null terminator
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
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
    stringPool = new Map();
    symtable = new SymbolTable();
    asmCode = [];
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("%include 'doCall.asm' ");
    emit("global main");
    emit("main:");
    emit("mov arg0, 0");
    emit("mov arg1, string_r");
    emit("ffcall fdopen");
    emit("mov [stdin], rax");
    emit("mov arg0, 1");
    emit("mov arg1, string_w");
    emit("ffcall fdopen");
    emit("mov [stdout], rax");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    emit("stdin: dq 0");
    emit("string_a:       db 'a',0");
    emit("string_rplus:   db 'r+',0");
    emit("string_percent_s:    db '%s',0");
    emit("string_percent_d:    db '%d',0");
    emit("fgets_buffer:   times 64 db 0");
    emit("stdout: dq 0");
    emit("string_r: db 'r',0");
    emit("string_w: db 'w',0");
    //emit("")
    outputSymbolTableInfo();
    outputStringPoolInfo();
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
    //program : varDeclList braceblock;
    if (n.sym != "program")
        ICE();
    varDeclListNodeCode(n.children[0]);
    braceblockNodeCode(n.children[1]);
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
    //stmt : funcCall | cond | loop | returnStmt SEMI | assign SEMI;
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
        case "assign":
            assignNodeCode(c);
            break;
        case "funcCall":
            funcCallNodeCode(c);
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
        case "ID":
            if (symtable.has(n.children[0].token.lexeme)) {
                var ad = symtable.get(n.children[0].token.lexeme);
                emit("push qword [" + ad.location + "]");
                return ad.type;
            }
            else {
                throw new Error("ID not in table");
            }
        case "STRINGCONST":
            var a = stringconstantNodeCode(n.children[0]);
            emit("lea rcx,[" + a + "]");
            emit("push rcx");
            return VarType.STRING;
        case "funcCall":
            var type = funcCallNodeCode(n.children[0]);
            if (type === VarType.VOID)
                throw new Error("no void boys");
            emit("push rax");
            return type;
            break;
        default:
            console.log(child.sym);
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
function stringconstantNodeCode(n) {
    var s = n.token.lexeme;
    s = s.substring(1, s.length - 1);
    var rex1 = new RegExp('\\\\"', "g");
    var rex2 = new RegExp('\\\\\\\\', "g");
    var rex3 = new RegExp('\\\\\\\\n', "g");
    var temp = "";
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == '\\' && i + 1 < s.length && s.charAt(i + 1) == 'n') {
            temp += '\n';
            i += 2;
        }
        if (s.charAt(i) == '\\' && i + 1 < s.length) {
            temp += s.charAt(i + 1);
            i++;
        }
        else
            temp += s.charAt(i);
    }
    s = temp;
    if (!stringPool.has(s))
        stringPool.set(s, label());
    //console.log(stringPool);
    return stringPool.get(s); //return the label
}
function assignNodeCode(n) {
    // assign -> ID EQ expr
    var t = exprNodeCode(n.children[2]);
    var vname = n.children[0].token.lexeme;
    if (symtable.get(vname).type !== t)
        throw new Error("Type mismatch: " + symtable.get(vname).type + " != " + t + ".");
    moveBytesFromStackToLocation(symtable.get(vname).location);
}
function typeNodeCode(n) {
    if (n.token.lexeme == "int") {
        return VarType.INTEGER;
    }
    else if (n.token.lexeme == "string") {
        return VarType.STRING;
    }
    else if (n.token.lexeme == "double") {
        return VarType.FLOAT;
    }
    else {
        throw new Error("shits whack");
    }
}
function varDeclListNodeCode(n) {
    //varDeclList : varDecl SEMI varDeclList |  ;
    if (n.children.length > 0) {
        varDeclNodeCode(n.children[0]);
        varDeclListNodeCode(n.children[2]);
    }
    else {
        return;
    }
}
function pvarDeclNodeCode(n, v) {
    //pVarDecl : CMA ID pVarDecl | ;
    if (n.children.length > 0) {
        var vname = n.children[1].token.lexeme;
        symtable.set(vname, new VarInfo(v, label()));
        pvarDeclNodeCode(n.children[2], v);
    }
    else {
        return;
    }
}
function varDeclNodeCode(n) {
    //varDecl : TYPE ID pVarDecl | TYPE assign;
    if (n.children.length == 3) {
        var vname = n.children[1].token.lexeme;
        var vtype = typeNodeCode(n.children[0]);
        symtable.set(vname, new VarInfo(vtype, label()));
        if (n.children[2] != undefined)
            pvarDeclNodeCode(n.children[2], vtype);
    }
    else {
        var vtype = typeNodeCode(n.children[0]);
        var vname = n.children[1].children[0].token.lexeme;
        symtable.set(vname, new VarInfo(vtype, label()));
        assignNodeCode(n.children[1]);
    }
}
function funcCallNodeCode(n) {
    return builtinFuncCallNodeCode(n.children[0]);
}
function builtinFuncCallNodeCode(n) {
    //builtin-func-call -> PRINT LP expr RP | INPUT LP RP | OPEN LP expr RP | READ LP expr RP | WRITE LP expr CMA expr RP | CLOSE LP expr RP
    switch (n.children[0].sym) {
        case "OPEN":
            {
                var type = exprNodeCode(n.children[2]);
                if (type !== VarType.STRING)
                    throw new Error(" mismatch funccall open");
                //tmp = fopen( filename, "a" );
                emit("mov arg0, [rsp]"); //filename (string)
                emit("mov arg1, string_a"); //next slide
                emit("ffcall fopen");
                //fclose(tmp)
                emit("mov arg0, rax");
                emit("ffcall fclose");
                //fopen( filename, "r+" )
                emit("pop arg0"); //filename; remove from stack
                emit("mov arg1, string_rplus"); //next slide
                emit("ffcall fopen"); //result is in rax
                return VarType.INTEGER;
            }
        case "CLOSE":
            {
                var type = exprNodeCode(n.children[2]);
                if (type !== VarType.INTEGER)
                    throw new Error("Close requires numbers idiot");
                emit("pop arg0"); //argument for fclose
                emit("ffcall fclose");
                return VarType.VOID;
            }
        case "WRITE":
            {
                // WRITE LP expr CMA expr RP
                // fprintf( fp, "%s", str )  or  fprintf( fp, "%d", num )
                var handletype = exprNodeCode(n.children[2]);
                if (handletype !== VarType.INTEGER)
                    throw new Error("write no int");
                var outputtype = exprNodeCode(n.children[4]);
                var fmt = void 0;
                if (outputtype === VarType.INTEGER)
                    fmt = "string_percent_d";
                else if (outputtype === VarType.STRING)
                    fmt = "string_percent_s";
                else
                    throw new Error("no int or string yikes");
                emit("pop arg2"); //the thing to print
                emit("mov arg1, " + fmt);
                emit("pop arg0"); //the handle
                emit("ffvcall fprintf,0");
                //need to call fflush(NULL)
                emit("mov arg0, 0");
                emit("ffcall fflush");
                return VarType.VOID;
            }
        case "INPUT":
            {
                //INPUT LP RP
                //fgets( ptr, size, stream)
                //strtol( ptr, eptr, base )
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 64");
                emit("mov arg2, [stdin]");
                emit("ffcall fgets");
                //should do error checking...
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 0");
                emit("mov arg2, 10");
                emit("ffcall strtol"); //result is in rax
                return VarType.INTEGER;
            }
        case "READ":
            {
                // READ LP expr RP 
                //fgets( ptr, size, stream)
                //strtol( ptr, eptr, base )
                var handletype = exprNodeCode(n.children[2]);
                if (handletype !== VarType.INTEGER)
                    throw new Error("write no int");
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 64");
                emit("pop arg3");
                emit("mov arg2, arg3");
                emit("ffcall fgets");
                //should do error checking...
                emit("mov arg0, fgets_buffer");
                emit("mov arg1, 0");
                emit("mov arg2, 10");
                emit("ffcall strtol"); //result is in rax
                return VarType.INTEGER;
            }
        case "PRINT":
            {
                //console.log("yeet");
                var handletype = exprNodeCode(n.children[2]);
                if (handletype !== VarType.STRING && handletype !== VarType.INTEGER)
                    throw new Error("PRINT expected INTEGER or STRING but received: " + handletype + ".");
                var fmt = void 0;
                if (handletype === VarType.INTEGER)
                    fmt = "string_percent_d";
                else if (handletype === VarType.STRING)
                    fmt = "string_percent_s";
                else
                    throw new Error("Can only write types INTEGER and STRING.");
                //console.log("yote");
                emit("pop arg1");
                emit("mov arg0, " + fmt);
                emit("ffvcall printf,0");
                emit("mov arg0, 0");
                emit("ffcall fflush");
                return VarType.VOID;
            }
    }
}
