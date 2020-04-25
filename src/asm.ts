import {TreeNode} from "./treeNode"

let stringPool: Map<string,string> = new Map<string,string>()
let asmCode : string[] = []; 
enum VarType {INTEGER,FLOAT,STRING}

class VarInfo{
    type: VarType;
    location: string;  //asm label
    //also the line number, if you want
    constructor( t: VarType, location: string){
        this.location = location;
        this.type = t;
    }
}

function moveBytesFromStackToLocation( loc: string) {
    emit("pop rax");
    emit(`mov [${loc}], rax`);
}

class SymbolTable{
    table: Map<string,VarInfo>;
    constructor(){
        this.table = new Map();
    }
    get(name: string){
        if(!this.table.has(name) )
            throw new Error("Bitch aint there")
        return this.table.get(name);
    }
    set(name: string, v: VarInfo ){
        if( this.table.has(name) )
            throw new Error("Bitch already here")
        this.table.set(name,v);
    }
    has(name: string){
        return this.table.has(name);
    }
}

let symtable = new SymbolTable()


function outputSymbolTableInfo(){
    for(let vname of symtable.table.keys() ){
        let vinfo = symtable.get(vname);
        emit( `${vinfo.location}:`);
        emit( "dq 0" );
    }
}

function outputStringPoolInfo(){
    for(let key of stringPool.keys() ){
        let lbl = stringPool.get(key);
        emit( `${lbl}:` );
        for(let i=0;i<key.length;++i){
            emit( `db ${key.charCodeAt(i)}` );
        }
        emit("db 0");   //null terminator
    }
}

function convertStackTopToZeroOrOneInteger(type: VarType){
    if( type == VarType.INTEGER ){
        emit("cmp qword [rsp], 0");
        emit("setne al");
        emit("movzx rax, al");
        emit("mov [rsp], rax");
    }
    else if(type == VarType.FLOAT) 
    {
        emit("xorps xmm1, xmm1")
        emit("movq xmm0, [rsp]")
        emit("cmpneqsd xmm0, xmm1")
        emit("movq [rsp], xmm0")
        emit("and qword [rsp], 1")
    } 
    else {
        ICE()
    }
}

export function makeAsm( root: TreeNode ){
    stringPool = new Map<string,string>()
    symtable = new SymbolTable()
    asmCode = [];
    labelCounter = 0;
    emit("default rel");
    emit("section .text");
    emit("global main");
    emit("main:");
    programNodeCode(root);
    emit("ret");
    emit("section .data");
    outputSymbolTableInfo();
    outputStringPoolInfo();
    return asmCode.join("\n");
}
let labelCounter = 0;
function label(){
    let s = "lbl"+labelCounter;
    labelCounter++;
    return s;
}

function emit( instr: string ){
    asmCode.push(instr);
}

function programNodeCode(n: TreeNode) {
    //program : varDeclList braceblock;
    if( n.sym != "program" )
        ICE();
    varDeclListNodeCode( n.children[0] )
    braceblockNodeCode( n.children[1] );

}

function braceblockNodeCode(n: TreeNode){
    //braceblock -> LBR stmts RBR
    stmtsNodeCode(n.children[1]);
}

function stmtsNodeCode(n: TreeNode){
    //stmts -> stmt stmts | lambda
    if( n.children.length == 0 )
        return;
    stmtNodeCode(n.children[0]);
    stmtsNodeCode(n.children[1]);
}

function ICE()
{
    throw new Error("skate fast eat ass.");
    
} 

function stmtNodeCode(n: TreeNode){
    //stmt : cond | loop | returnStmt SEMI | assign SEMI;
    let c = n.children[0];
    switch( c.sym ){
        case "cond":
            condNodeCode(c); break;
        case "loop":
            loopNodeCode(c); break;
        case "returnStmt":
            returnStmtNodeCode(c); break;
        case "assign":
            assignNodeCode(c); break;
        default:
            ICE();
    }
}

function returnStmtNodeCode(n: TreeNode){
    //return-stmt -> RETURN expr
    let returnType = exprNodeCode( n.children[1] );
    if(returnType == VarType.INTEGER)
    {
        emit("pop rax")
        emit("ret");
    }
    else if(returnType == VarType.FLOAT)
    {
        emit("movq xmm0, [rsp]")
        emit("add rsp,8")
        emit("cvtsd2si rax, xmm0")
        emit("ret")
    }

}


function exprNodeCode(n: TreeNode) : VarType {
    return orexpNodeCode(n.children[0]);
}

function orexpNodeCode(n: TreeNode ): VarType{
    //orexp -> orexp OR andexp | andexp
    if(n.children.length == 1)
        return andexpNodeCode(n.children[0]);
    else
    {
        let orexpType = orexpNodeCode( n.children[0] );
        convertStackTopToZeroOrOneInteger(orexpType);
        let lbl = label();
        emit("cmp qword [rsp], 0");
        emit(`jne ${lbl}`);
        emit("add rsp,8");      //discard left result (0)
        let andexpType = andexpNodeCode( n.children[2] );
        convertStackTopToZeroOrOneInteger(andexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER; 
    }
}

function andexpNodeCode(n: TreeNode ) : VarType{
    //andexp : andexp AND notexp | notexp;
    if(n.children.length == 1)
        return notexpNodeCode(n.children[0]);
    else
    {
        let andexpType = andexpNodeCode( n.children[0] );
        convertStackTopToZeroOrOneInteger(andexpType);
        let lbl = label();
        emit("cmp qword [rsp], 1");
        emit(`jne ${lbl}`);
        emit("add rsp,8");      //discard left result (0)
        let notexpType = notexpNodeCode( n.children[2] );
        convertStackTopToZeroOrOneInteger(notexpType);
        emit(`${lbl}:`);
        return VarType.INTEGER; 
    }
}

function notexpNodeCode(n: TreeNode ) : VarType{
    //notexp : NOT notexp | rel;
    if(n.children.length == 1)
        return relexpNodeCode(n.children[0]);
    else
    {
        let notexp = notexpNodeCode(n.children[1])
        convertStackTopToZeroOrOneInteger(notexp);
        let zerolbl = label();
        let onelbl = label();
        emit("cmp qword [rsp], 0")
        emit(`je ${zerolbl}`)
        emit("pop rax")
        emit("and rax, 0")
        emit("push rax")
        emit(`jmp ${onelbl}`)
        emit(`${zerolbl}:`)
        emit("pop rax")
        emit("mov qword rax, 1")
        emit("push rax")
        emit(`${onelbl}:`)
        return VarType.INTEGER
    }
}

function relexpNodeCode(n: TreeNode ): VarType {
    //rel : sum RELOP sum | sum;
    if(n.children.length == 1)
        return sumNodeCode(n.children[0]);
    else
    {
        let sum1Type = sumNodeCode( n.children[0] );
        let sum2Type = sumNodeCode( n.children[2] );
        if( sum1Type !=sum2Type )
            ICE()
        emit("pop rax");    //second operand
        //first operand is on stack
        emit("cmp [rsp],rax");    //do the compare
        switch( n.children[1].token.lexeme ){
            case ">=":   emit("setge al"); break;
            case "<=":   emit("setle al"); break;
            case ">":    emit("setg  al"); break;
            case "<":    emit("setl  al"); break;
            case "==":   emit("sete  al"); break;
            case "!=":   emit("setne al"); break;
            default:     ICE()
        }
        emit("movzx qword rax, al");   //move with zero extend
        emit("mov [rsp], rax");
        return VarType.INTEGER;
    }
}

function sumNodeCode(n: TreeNode ): VarType {
    //sum -> sum PLUS term | sum MINUS term | term
    
    if( n.children.length === 1 )
        return termNodeCode(n.children[0]);
    else
    {
        let sumType = sumNodeCode( n.children[0] );
        let termType = termNodeCode( n.children[2] );
        if(sumType != termType )
            ICE()
        if(sumType == VarType.INTEGER)
        {
            switch( n.children[1].sym ){
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
                    ICE()
            }
            emit("push rax")
            return VarType.INTEGER
        }
        else if(sumType == VarType.FLOAT)
        {
            switch( n.children[1].sym ){
                case "PLUS":
                    emit("movq xmm1, [rsp]");
                    emit("add  rsp,8")
                    emit("movq xmm0, [rsp]");
                    emit("add  rsp,8")
                    emit("addsd xmm0,xmm1");
                    break;
                case "MINUS":
                    emit("movq xmm1, [rsp]");
                    emit("add  rsp,8")
                    emit("movq xmm0, [rsp]");
                    emit("add  rsp,8")
                    emit("subsd xmm0,xmm1");
                    break;
                default:
                    ICE()
            }
            emit("sub rsp,8")
            emit("movq [rsp], xmm0")
            return VarType.FLOAT
        }
    }
    
}



function termNodeCode(n: TreeNode ): VarType {
    //term : term MULOP neg | neg;
    if( n.children.length === 1 )
        return negNodeCode(n.children[0]);
    else
    {
        let termType = termNodeCode(n.children[0])
        let negType = negNodeCode(n.children[2])

        if(negType != termType )
            ICE()
        if(negType == VarType.INTEGER)
        {
            switch( n.children[1].token.lexeme ){
                case "%":
                    emit("pop rbx");
                    emit("pop rax")
                    emit("and rdx, 0")
                    emit("idiv rbx")
                    emit("push rdx")
                    break;
                case "/":
                    emit("pop rbx");
                    emit("pop rax")
                    emit("and rdx, 0")
                    emit("idiv rbx")
                    emit("push rax")
                    break;
                case "*":
                    emit("pop rcx")
                    emit("pop rax")
                    emit("imul rcx")
                    emit("push rax")
                    break;
                default:
                    ICE()
            }
            return VarType.INTEGER
        }
        else if(negType == VarType.FLOAT )
        {
            switch( n.children[1].token.lexeme ){
                case "/":
                    emit("movq xmm1, [rsp]");
                    emit("add rsp, 8")
                    emit("movq xmm0, [rsp]")
                    emit("add rsp, 8")
                    emit("divsd xmm0,xmm1")
                    break;
                case "*":
                    emit("movq xmm1, [rsp]");
                    emit("add rsp, 8")
                    emit("movq xmm0, [rsp]")
                    emit("add rsp, 8")
                    emit("mulsd xmm0,xmm1")
                    break;
                default:
                    ICE()
            }
            emit("sub rsp,8")
            emit("movq [rsp], xmm0")
            return VarType.FLOAT
        }
    }
    
}

function negNodeCode(n: TreeNode ) : VarType{
    //neg : MINUS neg | factor;
    if( n.children.length === 1 )
        return factorNodeCode(n.children[0]);
    else
    {
        let negType = negNodeCode(n.children[1])
        if(negType == VarType.INTEGER)
        {
            emit("and rax, 0")
            emit("pop rbx")
            emit("sub rax,rbx")
            emit("push rax")
            return VarType.INTEGER
        }
        else if(negType == VarType.FLOAT)
        {
            emit("xorps xmm0, xmm0")
            emit("movq xmm1, [rsp]")
            emit("add rsp, 8")
            emit("subsd xmm0,xmm1")
            emit("sub rsp, 8")
            emit("movq [rsp], xmm0")
            return VarType.FLOAT
        }


    }
}

function loopNodeCode(n: TreeNode){
    //loop : WHILE LP expr RP braceblock;
    var startLoop = label()
    emit(`${startLoop}:`)
    let exprt = exprNodeCode(n.children[2])
    emit("pop rax")
    emit("cmp rax, 0")
    var endLoop = label()
    emit(`je ${endLoop}`)
    braceblockNodeCode(n.children[4])
    emit(`jmp ${startLoop}`)
    emit( `${endLoop}:` );
}

function factorNodeCode( n: TreeNode) : VarType{
    //factor : NUM | FPNUM | LP expr RP | LP TYPE RP factor;
    let child = n.children[0];
    switch( child.sym ){
        case "NUM":
            //console.log("made it" + child.token.lexeme)
            let v = parseInt( child.token.lexeme, 10 );
            emit(`push qword ${v}`)
            return VarType.INTEGER;
        case "FPNUM":
            let f = parseFloat(child.token.lexeme)
            let fstring = f.toString()
            if(!fstring.includes("."))
            {
                fstring += ".0"
                emit(`mov rax, __float64__(${fstring})`)
                emit("push rax")
                return VarType.FLOAT
            }
            emit(`mov rax, __float64__(${f})`)
            emit("push rax")
            return VarType.FLOAT
        case "LP":
            if(n.children[1].sym == "expr")
                return exprNodeCode( n.children[1] );
            else
            {
                let factorType = factorNodeCode(n.children[3])
                if(n.children[1].token.lexeme == "int" && factorType != VarType.INTEGER)
                {
                    emit("movq  xmm0, [rsp]")
                    emit("add rsp, 8")
                    emit("roundsd xmm0, xmm0, 0xb")
                    emit("cvtsd2si rax,xmm0")
                    emit("push rax")
                    return VarType.INTEGER
                }
                else if(n.children[1].token.lexeme == "double" && factorType != VarType.FLOAT)
                {
                    emit("pop rax")
                    emit("cvtsi2sd xmm0, rax")
                    emit("sub rsp, 8")
                    emit("movq [rsp], xmm0")
                    return VarType.FLOAT
                }
                return factorType
            }
        case "ID":
            if(symtable.has(n.children[0].token.lexeme))
            {
                let ad = symtable.get(n.children[0].token.lexeme)
                emit(`push qword [${ad.location}]`)
                return ad.type
            }
            else 
            {
                throw new Error("ID not in table")
            }
        case "STRINGCONST":
            let a = stringconstantNodeCode(n.children[0])
            emit(`push qword [${a}]`)
            return VarType.STRING
        default:
            console.log(child.sym)
            ICE();
    }
}

function condNodeCode(n: TreeNode){
    //cond -> IF LP expr RP braceblock |
    //  IF LP expr RP braceblock ELSE braceblock

    if( n.children.length === 5 ){
        //no 'else'
        exprNodeCode(n.children[2]);    //leaves result in rax
        emit("pop rax")
        emit("cmp rax, 0");
        var endifLabel = label();
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`${endifLabel}:`);
    } else {
        exprNodeCode(n.children[2]);    //leaves result in rax
        emit("pop rax")
        emit("cmp rax, 0");
        var endifLabel = label();
        var endelseLabel = label()
        emit(`je ${endifLabel}`);
        braceblockNodeCode(n.children[4]);
        emit(`jmp ${endelseLabel}`)
        emit(`${endifLabel}:`);
        braceblockNodeCode(n.children[6])
        emit(`${endelseLabel}:`);
    }
}

function stringconstantNodeCode( n: TreeNode ){
    let s = n.token.lexeme;
    s.substring(1, s.length - 1)
    if( !stringPool.has( s ) )
        stringPool.set( s, label() );
    return stringPool.get(s);   //return the label
}

function assignNodeCode( n: TreeNode ){
    // assign -> ID EQ expr
    let t: VarType = exprNodeCode( n.children[2] );
    let vname = n.children[0].token.lexeme;
    if( symtable.get(vname).type !== t  )
        throw new Error(`Type mismatch: ${symtable.get(vname).type} != ${t}.`)
    moveBytesFromStackToLocation( symtable.get(vname).location );
}

function typeNodeCode( n : TreeNode)
{
    if(n.token.lexeme == "int")
    {
        return VarType.INTEGER
    }
    else if(n.token.lexeme == "string")
    {
        return VarType.STRING
    }
    else if(n.token.lexeme == "double")
    {
        return VarType.FLOAT
    }
    else
    {
        throw new Error("shits whack")
    }
}

function varDeclListNodeCode( n: TreeNode ){
    //varDeclList : varDecl SEMI varDeclList |  ;
    if(n.children.length > 0)
    {
        varDeclNodeCode(n.children[0])
        varDeclListNodeCode(n.children[2])
    }
    else{
        return
    }
}

function pvarDeclNodeCode( n: TreeNode, v : VarType ){
    //pVarDecl : CMA ID pVarDecl | ;
    if(n.children.length > 0)
    {
        let vname = n.children[1].token.lexeme;
        symtable.set( vname, new VarInfo( v,label() ) );
        pvarDeclNodeCode(n.children[2],v)
    }
    else{
        return
    }
    
}


function varDeclNodeCode( n: TreeNode ){
    //varDecl : TYPE ID pVarDecl | TYPE assign;
    if(n.children.length == 3)
    {
        let vname = n.children[1].token.lexeme;
        let vtype = typeNodeCode( n.children[0] );
        symtable.set( vname, new VarInfo( vtype,label() ) );
        if(n.children[2] != undefined)
            pvarDeclNodeCode(n.children[2],vtype)
    }
    else{
        let vtype = typeNodeCode( n.children[0] );
        let vname = n.children[1].children[0].token.lexeme
        symtable.set( vname, new VarInfo( vtype,label() ) );
        assignNodeCode(n.children[1])
    }
}
