import {Grammar} from "./Grammar"
import {Tokenizer} from "./Tokenizer"
import {TreeNode} from "./TreeNode"
let gram = "SEMI -> ;\n"+
    "LBR -> [{]\n"+
    "RBR -> [}]\n"+
    "LP -> [(]\n"+
    "RP -> [)]\n"+
    "EQ -> =\n"+
    "CMA -> ,\n"+
    "IF -> if\n"+
    "WHILE -> while\n"+
    "ELSE -> else\n"+
    "TYPE -> (int|double)\n"+
    "NUM -> [0-9]+\n" +
    "ID -> [A-Za-z_]+\n\n" +
    "S -> stmt-list\n" +
    "stmt-list -> stmt stmt-list | lambda\n"+
    "stmt -> loop | cond | assign SEMI | LBR stmt-list RBR\n"+
    "loop -> WHILE LP expr RP stmt\n"+
    "cond -> IF LP expr RP stmt | IF LP expr RP stmt ELSE stmt\n"+
    "assign -> ID EQ expr\n" +
    "expr -> NUM | ID"

let T = new Tokenizer(new Grammar(gram))

export function parse(input : string)
{ 
    T.setInput(input)
    return parse_S()
}

function parse_S()
{
    let n = new TreeNode("S",undefined)
    n.addChild(parse_stmt_list())
    if(T.peek().sym != '$')
        return undefined
    return n
}

function parse_stmt_list()
{
    let n = new TreeNode("stmt-list",undefined)

    if(T.peek().sym == '$')
    {
        return n
    }
    else if(T.peek().sym == "WHILE" || T.peek().sym == "IF" || T.peek().sym == "ID" || T.peek().sym == "LBR")
    {
        n.addChild(parse_stmt())
        n.addChild(parse_stmt_list())
    }

    return n

}

function parse_stmt()
{
    let n = new TreeNode("stmt",undefined)
    
    if(T.peek().sym == "WHILE")
    {
        n.addChild( parse_loop() )
    }
    else if(T.peek().sym == "IF")
    {
        n.addChild( parse_cond() )
    }
    else if (T.peek().sym == "ID")
    {
        n.addChild( parse_assign() )
        n.addChild(new TreeNode("SEMI",T.expect("SEMI")))
    }
    else if (T.peek().sym == "LBR")
    {
        n.addChild(new TreeNode("LBR", T.expect("LBR")))
        if (T.peek().sym == "RBR")
        {
            n.addChild(new TreeNode("RBR", T.expect("RBR")))
        }
        else
        {
            n.addChild( parse_stmt_list() )
            n.addChild(new TreeNode("RBR", T.expect("RBR")))
        }

    }
    else
        throw new Error("Expected the unexpected.1")
    return n
}

function parse_cond()
{
    let n = new TreeNode("cond", undefined)
    n.addChild(new TreeNode("IF", T.expect("IF") ))
    n.addChild( new TreeNode("LP",T.expect("LP") ))
    n.addChild( parse_expr() )
    n.addChild( new TreeNode("RP", T.expect("RP") ))
    n.addChild( parse_stmt() )
    if(T.peek().sym == "ELSE")
    {
        n.addChild(new TreeNode("ELSE", T.expect("ELSE") ))
        n.addChild( parse_stmt() )
    }
    return n
}

function parse_loop()
{
    let n = new TreeNode("loop",undefined)
    n.addChild(new TreeNode("WHILE", T.expect("WHILE") ))
    n.addChild(new TreeNode("LP", T.expect("LP") ))
    n.addChild( parse_expr() )
    n.addChild(new TreeNode("RP", T.expect("RP") ))
    n.addChild( parse_stmt() )
    return n
}
function parse_assign()
{
    let n = new TreeNode("assign",undefined)
    n.addChild(new TreeNode("ID", T.expect("ID") ))
    n.addChild(new TreeNode("EQ", T.expect("EQ") ))
    n.addChild(parse_expr())
    return n
}

function parse_expr()
{
    let n = new TreeNode("expr",undefined)
    if (T.peek().sym == "NUM")
    {
        n.addChild(new TreeNode("NUM", T.expect("NUM")))
    }
    else
    {
        n.addChild(new TreeNode("ID", T.expect("ID")))
    }
    
    return n
}