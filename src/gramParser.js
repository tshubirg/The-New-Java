// Generated from /media/tshubirg/70741D6C741D35F6/Compiler/git/The-New-Java/src/gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var gramListener = require('./gramListener').gramListener;
var grammarFileName = "gram.txt";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"\u00ee\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u00038\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004?\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005E\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006K\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007R",
    "\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\b]\n\b\f\b\u000e\b`\u000b\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0007\th\n\t\f\t\u000e\tk\u000b\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\nx\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u0081\n\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0005\r\u0090\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00a6\n",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0007\u0012\u00b4\n\u0012\f\u0012\u000e\u0012\u00b7\u000b\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00bf\n\u0013\f\u0013\u000e\u0013\u00c2\u000b\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00c7\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u00e9\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0002\u0006\u000e\u0010\"$\u0018\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",\u0002\u0002\u0002\u00f3\u0002.\u0003\u0002\u0002\u0002\u00047\u0003",
    "\u0002\u0002\u0002\u0006>\u0003\u0002\u0002\u0002\bD\u0003\u0002\u0002",
    "\u0002\nJ\u0003\u0002\u0002\u0002\fQ\u0003\u0002\u0002\u0002\u000eS",
    "\u0003\u0002\u0002\u0002\u0010a\u0003\u0002\u0002\u0002\u0012w\u0003",
    "\u0002\u0002\u0002\u0014y\u0003\u0002\u0002\u0002\u0016\u0080\u0003",
    "\u0002\u0002\u0002\u0018\u008f\u0003\u0002\u0002\u0002\u001a\u0091\u0003",
    "\u0002\u0002\u0002\u001c\u00a5\u0003\u0002\u0002\u0002\u001e\u00a7\u0003",
    "\u0002\u0002\u0002 \u00ab\u0003\u0002\u0002\u0002\"\u00ad\u0003\u0002",
    "\u0002\u0002$\u00b8\u0003\u0002\u0002\u0002&\u00c6\u0003\u0002\u0002",
    "\u0002(\u00c8\u0003\u0002\u0002\u0002*\u00e8\u0003\u0002\u0002\u0002",
    ",\u00ea\u0003\u0002\u0002\u0002./\u0005\u0004\u0003\u0002/0\u0005\u001e",
    "\u0010\u000201\u0007\u0002\u0002\u00031\u0003\u0003\u0002\u0002\u0002",
    "23\u0005\u0006\u0004\u000234\u0007\u0003\u0002\u000245\u0005\u0004\u0003",
    "\u000258\u0003\u0002\u0002\u000268\u0003\u0002\u0002\u000272\u0003\u0002",
    "\u0002\u000276\u0003\u0002\u0002\u00028\u0005\u0003\u0002\u0002\u0002",
    "9:\u0007\u001f\u0002\u0002:;\u0007\"\u0002\u0002;?\u0005\b\u0005\u0002",
    "<=\u0007\u001f\u0002\u0002=?\u0005\u0014\u000b\u0002>9\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002?\u0007\u0003\u0002\u0002\u0002@A\u0007",
    "\u000e\u0002\u0002AB\u0007\"\u0002\u0002BE\u0005\b\u0005\u0002CE\u0003",
    "\u0002\u0002\u0002D@\u0003\u0002\u0002\u0002DC\u0003\u0002\u0002\u0002",
    "E\t\u0003\u0002\u0002\u0002FG\u0005\u0012\n\u0002GH\u0005\n\u0006\u0002",
    "HK\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002JF\u0003\u0002\u0002",
    "\u0002JI\u0003\u0002\u0002\u0002K\u000b\u0003\u0002\u0002\u0002LM\u0005",
    "\u000e\b\u0002MN\u0007\u001e\u0002\u0002NO\u0005\u000e\b\u0002OR\u0003",
    "\u0002\u0002\u0002PR\u0005\u000e\b\u0002QL\u0003\u0002\u0002\u0002Q",
    "P\u0003\u0002\u0002\u0002R\r\u0003\u0002\u0002\u0002ST\b\b\u0001\u0002",
    "TU\u0005\u0010\t\u0002U^\u0003\u0002\u0002\u0002VW\f\u0005\u0002\u0002",
    "WX\u0007\u001b\u0002\u0002X]\u0005\u0010\t\u0002YZ\f\u0004\u0002\u0002",
    "Z[\u0007\u001d\u0002\u0002[]\u0005\u0010\t\u0002\\V\u0003\u0002\u0002",
    "\u0002\\Y\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^\\\u0003",
    "\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_\u000f\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002ab\b\t\u0001\u0002bc\u0005\u0016\f\u0002",
    "ci\u0003\u0002\u0002\u0002de\f\u0004\u0002\u0002ef\u0007\u001c\u0002",
    "\u0002fh\u0005\u0016\f\u0002gd\u0003\u0002\u0002\u0002hk\u0003\u0002",
    "\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002j\u0011",
    "\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002lm\u0005(\u0015\u0002",
    "mn\u0007\u0003\u0002\u0002nx\u0003\u0002\u0002\u0002ox\u0005\u001c\u000f",
    "\u0002px\u0005\u001a\u000e\u0002qr\u0005,\u0017\u0002rs\u0007\u0003",
    "\u0002\u0002sx\u0003\u0002\u0002\u0002tu\u0005\u0014\u000b\u0002uv\u0007",
    "\u0003\u0002\u0002vx\u0003\u0002\u0002\u0002wl\u0003\u0002\u0002\u0002",
    "wo\u0003\u0002\u0002\u0002wp\u0003\u0002\u0002\u0002wq\u0003\u0002\u0002",
    "\u0002wt\u0003\u0002\u0002\u0002x\u0013\u0003\u0002\u0002\u0002yz\u0007",
    "\"\u0002\u0002z{\u0007\r\u0002\u0002{|\u0005 \u0011\u0002|\u0015\u0003",
    "\u0002\u0002\u0002}~\u0007\u001d\u0002\u0002~\u0081\u0005\u0016\f\u0002",
    "\u007f\u0081\u0005\u0018\r\u0002\u0080}\u0003\u0002\u0002\u0002\u0080",
    "\u007f\u0003\u0002\u0002\u0002\u0081\u0017\u0003\u0002\u0002\u0002\u0082",
    "\u0090\u0005(\u0015\u0002\u0083\u0090\u0007\u0015\u0002\u0002\u0084",
    "\u0090\u0007\u0014\u0002\u0002\u0085\u0086\u0007\u000b\u0002\u0002\u0086",
    "\u0087\u0005 \u0011\u0002\u0087\u0088\u0007\f\u0002\u0002\u0088\u0090",
    "\u0003\u0002\u0002\u0002\u0089\u008a\u0007\u000b\u0002\u0002\u008a\u008b",
    "\u0007\u001f\u0002\u0002\u008b\u008c\u0007\f\u0002\u0002\u008c\u0090",
    "\u0005\u0018\r\u0002\u008d\u0090\u0007\u001a\u0002\u0002\u008e\u0090",
    "\u0007\"\u0002\u0002\u008f\u0082\u0003\u0002\u0002\u0002\u008f\u0083",
    "\u0003\u0002\u0002\u0002\u008f\u0084\u0003\u0002\u0002\u0002\u008f\u0085",
    "\u0003\u0002\u0002\u0002\u008f\u0089\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u0019",
    "\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0004\u0002\u0002\u0092\u0093",
    "\u0007\u000b\u0002\u0002\u0093\u0094\u0005 \u0011\u0002\u0094\u0095",
    "\u0007\f\u0002\u0002\u0095\u0096\u0005\u001e\u0010\u0002\u0096\u001b",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u000f\u0002\u0002\u0098\u0099",
    "\u0007\u000b\u0002\u0002\u0099\u009a\u0005 \u0011\u0002\u009a\u009b",
    "\u0007\f\u0002\u0002\u009b\u009c\u0005\u001e\u0010\u0002\u009c\u00a6",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0007\u000f\u0002\u0002\u009e\u009f",
    "\u0007\u000b\u0002\u0002\u009f\u00a0\u0005 \u0011\u0002\u00a0\u00a1",
    "\u0007\f\u0002\u0002\u00a1\u00a2\u0005\u001e\u0010\u0002\u00a2\u00a3",
    "\u0007\u0010\u0002\u0002\u00a3\u00a4\u0005\u001e\u0010\u0002\u00a4\u00a6",
    "\u0003\u0002\u0002\u0002\u00a5\u0097\u0003\u0002\u0002\u0002\u00a5\u009d",
    "\u0003\u0002\u0002\u0002\u00a6\u001d\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0007\u0012\u0002\u0002\u00a8\u00a9\u0005\n\u0006\u0002\u00a9\u00aa",
    "\u0007\u0013\u0002\u0002\u00aa\u001f\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\u0005\"\u0012\u0002\u00ac!\u0003\u0002\u0002\u0002\u00ad\u00ae\b\u0012",
    "\u0001\u0002\u00ae\u00af\u0005$\u0013\u0002\u00af\u00b5\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\f\u0004\u0002\u0002\u00b1\u00b2\u0007\u0016",
    "\u0002\u0002\u00b2\u00b4\u0005$\u0013\u0002\u00b3\u00b0\u0003\u0002",
    "\u0002\u0002\u00b4\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6#\u0003\u0002",
    "\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b9\b\u0013",
    "\u0001\u0002\u00b9\u00ba\u0005&\u0014\u0002\u00ba\u00c0\u0003\u0002",
    "\u0002\u0002\u00bb\u00bc\f\u0004\u0002\u0002\u00bc\u00bd\u0007\u0017",
    "\u0002\u0002\u00bd\u00bf\u0005&\u0014\u0002\u00be\u00bb\u0003\u0002",
    "\u0002\u0002\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1%\u0003\u0002",
    "\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0018",
    "\u0002\u0002\u00c4\u00c7\u0005&\u0014\u0002\u00c5\u00c7\u0005\f\u0007",
    "\u0002\u00c6\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c5\u0003\u0002\u0002",
    "\u0002\u00c7\'\u0003\u0002\u0002\u0002\u00c8\u00c9\u0005*\u0016\u0002",
    "\u00c9)\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\u0005\u0002\u0002",
    "\u00cb\u00cc\u0007\u000b\u0002\u0002\u00cc\u00cd\u0005 \u0011\u0002",
    "\u00cd\u00ce\u0007\f\u0002\u0002\u00ce\u00e9\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\u0007\u0007\u0002\u0002\u00d0\u00d1\u0007\u000b\u0002\u0002",
    "\u00d1\u00e9\u0007\f\u0002\u0002\u00d2\u00d3\u0007\u0006\u0002\u0002",
    "\u00d3\u00d4\u0007\u000b\u0002\u0002\u00d4\u00d5\u0005 \u0011\u0002",
    "\u00d5\u00d6\u0007\f\u0002\u0002\u00d6\u00e9\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0007\b\u0002\u0002\u00d8\u00d9\u0007\u000b\u0002\u0002",
    "\u00d9\u00da\u0005 \u0011\u0002\u00da\u00db\u0007\f\u0002\u0002\u00db",
    "\u00e9\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007\t\u0002\u0002\u00dd",
    "\u00de\u0007\u000b\u0002\u0002\u00de\u00df\u0005 \u0011\u0002\u00df",
    "\u00e0\u0007\u000e\u0002\u0002\u00e0\u00e1\u0005 \u0011\u0002\u00e1",
    "\u00e2\u0007\f\u0002\u0002\u00e2\u00e9\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0007\n\u0002\u0002\u00e4\u00e5\u0007\u000b\u0002\u0002\u00e5",
    "\u00e6\u0005 \u0011\u0002\u00e6\u00e7\u0007\f\u0002\u0002\u00e7\u00e9",
    "\u0003\u0002\u0002\u0002\u00e8\u00ca\u0003\u0002\u0002\u0002\u00e8\u00cf",
    "\u0003\u0002\u0002\u0002\u00e8\u00d2\u0003\u0002\u0002\u0002\u00e8\u00d7",
    "\u0003\u0002\u0002\u0002\u00e8\u00dc\u0003\u0002\u0002\u0002\u00e8\u00e3",
    "\u0003\u0002\u0002\u0002\u00e9+\u0003\u0002\u0002\u0002\u00ea\u00eb",
    "\u0007\u0011\u0002\u0002\u00eb\u00ec\u0005 \u0011\u0002\u00ec-\u0003",
    "\u0002\u0002\u0002\u00127>DJQ\\^iw\u0080\u008f\u00a5\u00b5\u00c0\u00c6",
    "\u00e8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'while'", "'print'", "'open'", "'input'", 
                     "'read'", "'write'", "'close'", null, null, null, null, 
                     "'if'", "'else'", "'return'", null, null, null, null, 
                     "'or'", "'and'", "'not'", "'[^\"]*'" ];

var symbolicNames = [ null, "SEMI", "WHILE", "PRINT", "OPEN", "INPUT", "READ", 
                      "WRITE", "CLOSE", "LP", "RP", "EQ", "CMA", "IF", "ELSE", 
                      "RETURN", "LBR", "RBR", "FPNUM", "NUM", "OR", "AND", 
                      "NOT", "STRING", "STRINGCONST", "PLUS", "MULOP", "MINUS", 
                      "RELOP", "TYPE", "COMMENT", "WHITESPACE", "ID" ];

var ruleNames =  [ "program", "varDeclList", "varDecl", "pVarDecl", "stmts", 
                   "rel", "sum", "term", "stmt", "assign", "neg", "factor", 
                   "loop", "cond", "braceblock", "expr", "orexp", "andexp", 
                   "notexp", "funcCall", "builtinFuncCall", "returnStmt" ];

function gramParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

gramParser.prototype = Object.create(antlr4.Parser.prototype);
gramParser.prototype.constructor = gramParser;

Object.defineProperty(gramParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

gramParser.EOF = antlr4.Token.EOF;
gramParser.SEMI = 1;
gramParser.WHILE = 2;
gramParser.PRINT = 3;
gramParser.OPEN = 4;
gramParser.INPUT = 5;
gramParser.READ = 6;
gramParser.WRITE = 7;
gramParser.CLOSE = 8;
gramParser.LP = 9;
gramParser.RP = 10;
gramParser.EQ = 11;
gramParser.CMA = 12;
gramParser.IF = 13;
gramParser.ELSE = 14;
gramParser.RETURN = 15;
gramParser.LBR = 16;
gramParser.RBR = 17;
gramParser.FPNUM = 18;
gramParser.NUM = 19;
gramParser.OR = 20;
gramParser.AND = 21;
gramParser.NOT = 22;
gramParser.STRING = 23;
gramParser.STRINGCONST = 24;
gramParser.PLUS = 25;
gramParser.MULOP = 26;
gramParser.MINUS = 27;
gramParser.RELOP = 28;
gramParser.TYPE = 29;
gramParser.COMMENT = 30;
gramParser.WHITESPACE = 31;
gramParser.ID = 32;

gramParser.RULE_program = 0;
gramParser.RULE_varDeclList = 1;
gramParser.RULE_varDecl = 2;
gramParser.RULE_pVarDecl = 3;
gramParser.RULE_stmts = 4;
gramParser.RULE_rel = 5;
gramParser.RULE_sum = 6;
gramParser.RULE_term = 7;
gramParser.RULE_stmt = 8;
gramParser.RULE_assign = 9;
gramParser.RULE_neg = 10;
gramParser.RULE_factor = 11;
gramParser.RULE_loop = 12;
gramParser.RULE_cond = 13;
gramParser.RULE_braceblock = 14;
gramParser.RULE_expr = 15;
gramParser.RULE_orexp = 16;
gramParser.RULE_andexp = 17;
gramParser.RULE_notexp = 18;
gramParser.RULE_funcCall = 19;
gramParser.RULE_builtinFuncCall = 20;
gramParser.RULE_returnStmt = 21;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.varDeclList = function() {
    return this.getTypedRuleContext(VarDeclListContext,0);
};

ProgramContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(gramParser.EOF, 0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitProgram(this);
	}
};




gramParser.ProgramContext = ProgramContext;

gramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, gramParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.varDeclList();
        this.state = 45;
        this.braceblock();
        this.state = 46;
        this.match(gramParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarDeclListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_varDeclList;
    return this;
}

VarDeclListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclListContext.prototype.constructor = VarDeclListContext;

VarDeclListContext.prototype.varDecl = function() {
    return this.getTypedRuleContext(VarDeclContext,0);
};

VarDeclListContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

VarDeclListContext.prototype.varDeclList = function() {
    return this.getTypedRuleContext(VarDeclListContext,0);
};

VarDeclListContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterVarDeclList(this);
	}
};

VarDeclListContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitVarDeclList(this);
	}
};




gramParser.VarDeclListContext = VarDeclListContext;

gramParser.prototype.varDeclList = function() {

    var localctx = new VarDeclListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, gramParser.RULE_varDeclList);
    try {
        this.state = 53;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.varDecl();
            this.state = 49;
            this.match(gramParser.SEMI);
            this.state = 50;
            this.varDeclList();
            break;
        case gramParser.LBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_varDecl;
    return this;
}

VarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclContext.prototype.constructor = VarDeclContext;

VarDeclContext.prototype.TYPE = function() {
    return this.getToken(gramParser.TYPE, 0);
};

VarDeclContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

VarDeclContext.prototype.pVarDecl = function() {
    return this.getTypedRuleContext(PVarDeclContext,0);
};

VarDeclContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

VarDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterVarDecl(this);
	}
};

VarDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitVarDecl(this);
	}
};




gramParser.VarDeclContext = VarDeclContext;

gramParser.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gramParser.RULE_varDecl);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.match(gramParser.TYPE);
            this.state = 56;
            this.match(gramParser.ID);
            this.state = 57;
            this.pVarDecl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.match(gramParser.TYPE);
            this.state = 59;
            this.assign();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PVarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_pVarDecl;
    return this;
}

PVarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PVarDeclContext.prototype.constructor = PVarDeclContext;

PVarDeclContext.prototype.CMA = function() {
    return this.getToken(gramParser.CMA, 0);
};

PVarDeclContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

PVarDeclContext.prototype.pVarDecl = function() {
    return this.getTypedRuleContext(PVarDeclContext,0);
};

PVarDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterPVarDecl(this);
	}
};

PVarDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitPVarDecl(this);
	}
};




gramParser.PVarDeclContext = PVarDeclContext;

gramParser.prototype.pVarDecl = function() {

    var localctx = new PVarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gramParser.RULE_pVarDecl);
    try {
        this.state = 66;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.CMA:
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this.match(gramParser.CMA);
            this.state = 63;
            this.match(gramParser.ID);
            this.state = 64;
            this.pVarDecl();
            break;
        case gramParser.SEMI:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmts;
    return this;
}

StmtsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtsContext.prototype.constructor = StmtsContext;

StmtsContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

StmtsContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

StmtsContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmts(this);
	}
};

StmtsContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmts(this);
	}
};




gramParser.StmtsContext = StmtsContext;

gramParser.prototype.stmts = function() {

    var localctx = new StmtsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gramParser.RULE_stmts);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.WHILE:
        case gramParser.PRINT:
        case gramParser.OPEN:
        case gramParser.INPUT:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
        case gramParser.IF:
        case gramParser.RETURN:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 68;
            this.stmt();
            this.state = 69;
            this.stmts();
            break;
        case gramParser.RBR:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_rel;
    return this;
}

RelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelContext.prototype.constructor = RelContext;

RelContext.prototype.sum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SumContext);
    } else {
        return this.getTypedRuleContext(SumContext,i);
    }
};

RelContext.prototype.RELOP = function() {
    return this.getToken(gramParser.RELOP, 0);
};

RelContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterRel(this);
	}
};

RelContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitRel(this);
	}
};




gramParser.RelContext = RelContext;

gramParser.prototype.rel = function() {

    var localctx = new RelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gramParser.RULE_rel);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.sum(0);
            this.state = 75;
            this.match(gramParser.RELOP);
            this.state = 76;
            this.sum(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.sum(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_sum;
    return this;
}

SumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SumContext.prototype.constructor = SumContext;

SumContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

SumContext.prototype.sum = function() {
    return this.getTypedRuleContext(SumContext,0);
};

SumContext.prototype.PLUS = function() {
    return this.getToken(gramParser.PLUS, 0);
};

SumContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

SumContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterSum(this);
	}
};

SumContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitSum(this);
	}
};



gramParser.prototype.sum = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, gramParser.RULE_sum, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 92;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 90;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 84;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 85;
                    this.match(gramParser.PLUS);
                    this.state = 86;
                    this.term(0);
                    break;

                case 2:
                    localctx = new SumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_sum);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 88;
                    this.match(gramParser.MINUS);
                    this.state = 89;
                    this.term(0);
                    break;

                } 
            }
            this.state = 94;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULOP = function() {
    return this.getToken(gramParser.MULOP, 0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitTerm(this);
	}
};



gramParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, gramParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.neg();
        this._ctx.stop = this._input.LT(-1);
        this.state = 103;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TermContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_term);
                this.state = 98;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 99;
                this.match(gramParser.MULOP);
                this.state = 100;
                this.neg(); 
            }
            this.state = 105;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.funcCall = function() {
    return this.getTypedRuleContext(FuncCallContext,0);
};

StmtContext.prototype.SEMI = function() {
    return this.getToken(gramParser.SEMI, 0);
};

StmtContext.prototype.cond = function() {
    return this.getTypedRuleContext(CondContext,0);
};

StmtContext.prototype.loop = function() {
    return this.getTypedRuleContext(LoopContext,0);
};

StmtContext.prototype.returnStmt = function() {
    return this.getTypedRuleContext(ReturnStmtContext,0);
};

StmtContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitStmt(this);
	}
};




gramParser.StmtContext = StmtContext;

gramParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, gramParser.RULE_stmt);
    try {
        this.state = 117;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.PRINT:
        case gramParser.OPEN:
        case gramParser.INPUT:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
            this.enterOuterAlt(localctx, 1);
            this.state = 106;
            this.funcCall();
            this.state = 107;
            this.match(gramParser.SEMI);
            break;
        case gramParser.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.cond();
            break;
        case gramParser.WHILE:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.loop();
            break;
        case gramParser.RETURN:
            this.enterOuterAlt(localctx, 4);
            this.state = 111;
            this.returnStmt();
            this.state = 112;
            this.match(gramParser.SEMI);
            break;
        case gramParser.ID:
            this.enterOuterAlt(localctx, 5);
            this.state = 114;
            this.assign();
            this.state = 115;
            this.match(gramParser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

AssignContext.prototype.EQ = function() {
    return this.getToken(gramParser.EQ, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAssign(this);
	}
};




gramParser.AssignContext = AssignContext;

gramParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, gramParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(gramParser.ID);
        this.state = 120;
        this.match(gramParser.EQ);
        this.state = 121;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NegContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_neg;
    return this;
}

NegContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegContext.prototype.constructor = NegContext;

NegContext.prototype.MINUS = function() {
    return this.getToken(gramParser.MINUS, 0);
};

NegContext.prototype.neg = function() {
    return this.getTypedRuleContext(NegContext,0);
};

NegContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

NegContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNeg(this);
	}
};

NegContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNeg(this);
	}
};




gramParser.NegContext = NegContext;

gramParser.prototype.neg = function() {

    var localctx = new NegContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, gramParser.RULE_neg);
    try {
        this.state = 126;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.match(gramParser.MINUS);
            this.state = 124;
            this.neg();
            break;
        case gramParser.PRINT:
        case gramParser.OPEN:
        case gramParser.INPUT:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
        case gramParser.LP:
        case gramParser.FPNUM:
        case gramParser.NUM:
        case gramParser.STRINGCONST:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.factor();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.funcCall = function() {
    return this.getTypedRuleContext(FuncCallContext,0);
};

FactorContext.prototype.NUM = function() {
    return this.getToken(gramParser.NUM, 0);
};

FactorContext.prototype.FPNUM = function() {
    return this.getToken(gramParser.FPNUM, 0);
};

FactorContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

FactorContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

FactorContext.prototype.TYPE = function() {
    return this.getToken(gramParser.TYPE, 0);
};

FactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

FactorContext.prototype.STRINGCONST = function() {
    return this.getToken(gramParser.STRINGCONST, 0);
};

FactorContext.prototype.ID = function() {
    return this.getToken(gramParser.ID, 0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitFactor(this);
	}
};




gramParser.FactorContext = FactorContext;

gramParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, gramParser.RULE_factor);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 128;
            this.funcCall();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 129;
            this.match(gramParser.NUM);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 130;
            this.match(gramParser.FPNUM);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 131;
            this.match(gramParser.LP);
            this.state = 132;
            this.expr();
            this.state = 133;
            this.match(gramParser.RP);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 135;
            this.match(gramParser.LP);
            this.state = 136;
            this.match(gramParser.TYPE);
            this.state = 137;
            this.match(gramParser.RP);
            this.state = 138;
            this.factor();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 139;
            this.match(gramParser.STRINGCONST);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 140;
            this.match(gramParser.ID);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_loop;
    return this;
}

LoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopContext.prototype.constructor = LoopContext;

LoopContext.prototype.WHILE = function() {
    return this.getToken(gramParser.WHILE, 0);
};

LoopContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

LoopContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LoopContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

LoopContext.prototype.braceblock = function() {
    return this.getTypedRuleContext(BraceblockContext,0);
};

LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitLoop(this);
	}
};




gramParser.LoopContext = LoopContext;

gramParser.prototype.loop = function() {

    var localctx = new LoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, gramParser.RULE_loop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(gramParser.WHILE);
        this.state = 144;
        this.match(gramParser.LP);
        this.state = 145;
        this.expr();
        this.state = 146;
        this.match(gramParser.RP);
        this.state = 147;
        this.braceblock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_cond;
    return this;
}

CondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondContext.prototype.constructor = CondContext;

CondContext.prototype.IF = function() {
    return this.getToken(gramParser.IF, 0);
};

CondContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

CondContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CondContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

CondContext.prototype.braceblock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BraceblockContext);
    } else {
        return this.getTypedRuleContext(BraceblockContext,i);
    }
};

CondContext.prototype.ELSE = function() {
    return this.getToken(gramParser.ELSE, 0);
};

CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitCond(this);
	}
};




gramParser.CondContext = CondContext;

gramParser.prototype.cond = function() {

    var localctx = new CondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, gramParser.RULE_cond);
    try {
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 149;
            this.match(gramParser.IF);
            this.state = 150;
            this.match(gramParser.LP);
            this.state = 151;
            this.expr();
            this.state = 152;
            this.match(gramParser.RP);
            this.state = 153;
            this.braceblock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
            this.match(gramParser.IF);
            this.state = 156;
            this.match(gramParser.LP);
            this.state = 157;
            this.expr();
            this.state = 158;
            this.match(gramParser.RP);
            this.state = 159;
            this.braceblock();
            this.state = 160;
            this.match(gramParser.ELSE);
            this.state = 161;
            this.braceblock();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BraceblockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_braceblock;
    return this;
}

BraceblockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BraceblockContext.prototype.constructor = BraceblockContext;

BraceblockContext.prototype.LBR = function() {
    return this.getToken(gramParser.LBR, 0);
};

BraceblockContext.prototype.stmts = function() {
    return this.getTypedRuleContext(StmtsContext,0);
};

BraceblockContext.prototype.RBR = function() {
    return this.getToken(gramParser.RBR, 0);
};

BraceblockContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterBraceblock(this);
	}
};

BraceblockContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitBraceblock(this);
	}
};




gramParser.BraceblockContext = BraceblockContext;

gramParser.prototype.braceblock = function() {

    var localctx = new BraceblockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, gramParser.RULE_braceblock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(gramParser.LBR);
        this.state = 166;
        this.stmts();
        this.state = 167;
        this.match(gramParser.RBR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitExpr(this);
	}
};




gramParser.ExprContext = ExprContext;

gramParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, gramParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.orexp(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OrexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_orexp;
    return this;
}

OrexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrexpContext.prototype.constructor = OrexpContext;

OrexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

OrexpContext.prototype.orexp = function() {
    return this.getTypedRuleContext(OrexpContext,0);
};

OrexpContext.prototype.OR = function() {
    return this.getToken(gramParser.OR, 0);
};

OrexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterOrexp(this);
	}
};

OrexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitOrexp(this);
	}
};



gramParser.prototype.orexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new OrexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, gramParser.RULE_orexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.andexp(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 179;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new OrexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_orexp);
                this.state = 174;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 175;
                this.match(gramParser.OR);
                this.state = 176;
                this.andexp(0); 
            }
            this.state = 181;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AndexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_andexp;
    return this;
}

AndexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndexpContext.prototype.constructor = AndexpContext;

AndexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

AndexpContext.prototype.andexp = function() {
    return this.getTypedRuleContext(AndexpContext,0);
};

AndexpContext.prototype.AND = function() {
    return this.getToken(gramParser.AND, 0);
};

AndexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterAndexp(this);
	}
};

AndexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitAndexp(this);
	}
};



gramParser.prototype.andexp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new AndexpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 34;
    this.enterRecursionRule(localctx, 34, gramParser.RULE_andexp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.notexp();
        this._ctx.stop = this._input.LT(-1);
        this.state = 190;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AndexpContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, gramParser.RULE_andexp);
                this.state = 185;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 186;
                this.match(gramParser.AND);
                this.state = 187;
                this.notexp(); 
            }
            this.state = 192;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NotexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_notexp;
    return this;
}

NotexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotexpContext.prototype.constructor = NotexpContext;

NotexpContext.prototype.NOT = function() {
    return this.getToken(gramParser.NOT, 0);
};

NotexpContext.prototype.notexp = function() {
    return this.getTypedRuleContext(NotexpContext,0);
};

NotexpContext.prototype.rel = function() {
    return this.getTypedRuleContext(RelContext,0);
};

NotexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterNotexp(this);
	}
};

NotexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitNotexp(this);
	}
};




gramParser.NotexpContext = NotexpContext;

gramParser.prototype.notexp = function() {

    var localctx = new NotexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, gramParser.RULE_notexp);
    try {
        this.state = 196;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.match(gramParser.NOT);
            this.state = 194;
            this.notexp();
            break;
        case gramParser.PRINT:
        case gramParser.OPEN:
        case gramParser.INPUT:
        case gramParser.READ:
        case gramParser.WRITE:
        case gramParser.CLOSE:
        case gramParser.LP:
        case gramParser.FPNUM:
        case gramParser.NUM:
        case gramParser.STRINGCONST:
        case gramParser.MINUS:
        case gramParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 195;
            this.rel();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_funcCall;
    return this;
}

FuncCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncCallContext.prototype.constructor = FuncCallContext;

FuncCallContext.prototype.builtinFuncCall = function() {
    return this.getTypedRuleContext(BuiltinFuncCallContext,0);
};

FuncCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterFuncCall(this);
	}
};

FuncCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitFuncCall(this);
	}
};




gramParser.FuncCallContext = FuncCallContext;

gramParser.prototype.funcCall = function() {

    var localctx = new FuncCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, gramParser.RULE_funcCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.builtinFuncCall();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BuiltinFuncCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_builtinFuncCall;
    return this;
}

BuiltinFuncCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuiltinFuncCallContext.prototype.constructor = BuiltinFuncCallContext;

BuiltinFuncCallContext.prototype.PRINT = function() {
    return this.getToken(gramParser.PRINT, 0);
};

BuiltinFuncCallContext.prototype.LP = function() {
    return this.getToken(gramParser.LP, 0);
};

BuiltinFuncCallContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

BuiltinFuncCallContext.prototype.RP = function() {
    return this.getToken(gramParser.RP, 0);
};

BuiltinFuncCallContext.prototype.INPUT = function() {
    return this.getToken(gramParser.INPUT, 0);
};

BuiltinFuncCallContext.prototype.OPEN = function() {
    return this.getToken(gramParser.OPEN, 0);
};

BuiltinFuncCallContext.prototype.READ = function() {
    return this.getToken(gramParser.READ, 0);
};

BuiltinFuncCallContext.prototype.WRITE = function() {
    return this.getToken(gramParser.WRITE, 0);
};

BuiltinFuncCallContext.prototype.CMA = function() {
    return this.getToken(gramParser.CMA, 0);
};

BuiltinFuncCallContext.prototype.CLOSE = function() {
    return this.getToken(gramParser.CLOSE, 0);
};

BuiltinFuncCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterBuiltinFuncCall(this);
	}
};

BuiltinFuncCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitBuiltinFuncCall(this);
	}
};




gramParser.BuiltinFuncCallContext = BuiltinFuncCallContext;

gramParser.prototype.builtinFuncCall = function() {

    var localctx = new BuiltinFuncCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, gramParser.RULE_builtinFuncCall);
    try {
        this.state = 230;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case gramParser.PRINT:
            this.enterOuterAlt(localctx, 1);
            this.state = 200;
            this.match(gramParser.PRINT);
            this.state = 201;
            this.match(gramParser.LP);
            this.state = 202;
            this.expr();
            this.state = 203;
            this.match(gramParser.RP);
            break;
        case gramParser.INPUT:
            this.enterOuterAlt(localctx, 2);
            this.state = 205;
            this.match(gramParser.INPUT);
            this.state = 206;
            this.match(gramParser.LP);
            this.state = 207;
            this.match(gramParser.RP);
            break;
        case gramParser.OPEN:
            this.enterOuterAlt(localctx, 3);
            this.state = 208;
            this.match(gramParser.OPEN);
            this.state = 209;
            this.match(gramParser.LP);
            this.state = 210;
            this.expr();
            this.state = 211;
            this.match(gramParser.RP);
            break;
        case gramParser.READ:
            this.enterOuterAlt(localctx, 4);
            this.state = 213;
            this.match(gramParser.READ);
            this.state = 214;
            this.match(gramParser.LP);
            this.state = 215;
            this.expr();
            this.state = 216;
            this.match(gramParser.RP);
            break;
        case gramParser.WRITE:
            this.enterOuterAlt(localctx, 5);
            this.state = 218;
            this.match(gramParser.WRITE);
            this.state = 219;
            this.match(gramParser.LP);
            this.state = 220;
            this.expr();
            this.state = 221;
            this.match(gramParser.CMA);
            this.state = 222;
            this.expr();
            this.state = 223;
            this.match(gramParser.RP);
            break;
        case gramParser.CLOSE:
            this.enterOuterAlt(localctx, 6);
            this.state = 225;
            this.match(gramParser.CLOSE);
            this.state = 226;
            this.match(gramParser.LP);
            this.state = 227;
            this.expr();
            this.state = 228;
            this.match(gramParser.RP);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gramParser.RULE_returnStmt;
    return this;
}

ReturnStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStmtContext.prototype.constructor = ReturnStmtContext;

ReturnStmtContext.prototype.RETURN = function() {
    return this.getToken(gramParser.RETURN, 0);
};

ReturnStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ReturnStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.enterReturnStmt(this);
	}
};

ReturnStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof gramListener ) {
        listener.exitReturnStmt(this);
	}
};




gramParser.ReturnStmtContext = ReturnStmtContext;

gramParser.prototype.returnStmt = function() {

    var localctx = new ReturnStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, gramParser.RULE_returnStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(gramParser.RETURN);
        this.state = 233;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


gramParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.sum_sempred(localctx, predIndex);
	case 7:
			return this.term_sempred(localctx, predIndex);
	case 16:
			return this.orexp_sempred(localctx, predIndex);
	case 17:
			return this.andexp_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gramParser.prototype.sum_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.orexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

gramParser.prototype.andexp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gramParser = gramParser;
