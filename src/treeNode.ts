import {Token} from "./Token"

export class TreeNode{
    sym: string ='';
    token: Token;
    children: TreeNode[] = []
    constructor(sym: string, token: Token){
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
    toString(){
        function walk(n: any, callback: any){
            callback(n);
            n.children.forEach( (x:any) => {
                walk(x,callback);
            });
        }
        let L:string[] = [];
        L.push("digraph d{");
        L.push(`node [fontname="Helvetica",shape=box];`);
        let counter=0;
        walk(this, (n:any) => {
            n.NUMBER = "n"+(counter++);
            let tmp = n.sym;
            if( n.token ){
                tmp += "\n";
                tmp += n.token.lexeme;
            }
            tmp = tmp.replace(/&/g,"&amp;");
            tmp = tmp.replace(/</g,"&lt;");
            tmp = tmp.replace(/>/g,"&gt;");
            tmp = tmp.replace(/\n/g,"<br/>");
    
            L.push( `${n.NUMBER} [label=<${tmp}>];`);
        });
        walk(this, (n:any) => {
            n.children.forEach( (x:any) => {
                L.push( `${n.NUMBER} -> ${x.NUMBER};` );
            });
        });
        L.push("}");
        return L.join("\n");
    }
    
}
export function walk(parser: any, node: any){
    let p: any = node.getPayload();
    if( p.ruleIndex === undefined ){
        let line: number = p.line;
        let lexeme: string = p.text;
        let ty: number = p.type;
        let sym: string = parser.symbolicNames[ty]
        if(sym === null )
            sym = lexeme.toUpperCase();
        let T = new Token( sym,lexeme,line )
        return new TreeNode( sym,T )
    } else {
        let idx: number = p.ruleIndex;
        let sym: string = parser.ruleNames[idx]
        let N = new TreeNode( sym, undefined )
        for(let i=0;i<node.getChildCount();++i){
            let child: any = node.getChild(i)
            N.children.push( walk( parser, child) );
        }
        return N;
    }
}