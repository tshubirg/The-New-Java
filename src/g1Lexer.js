// Generated from /media/tshubirg/70741D6C741D35F6/Compiler/git/The-New-Java/src/grammar.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\"\u0111\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003J\n\u0003",
    "\f\u0003\u000e\u0003M\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0006\rq\n\r\r\r\u000e\rr\u0003\r\u0003\r\u0007\r",
    "w\n\r\f\r\u000e\rz\u000b\r\u0003\r\u0003\r\u0006\r~\n\r\r\r\u000e\r",
    "\u007f\u0005\r\u0082\n\r\u0003\r\u0003\r\u0005\r\u0086\n\r\u0003\r\u0006",
    "\r\u0089\n\r\r\r\u000e\r\u008a\u0005\r\u008d\n\r\u0003\r\u0005\r\u0090",
    "\n\r\u0003\r\u0006\r\u0093\n\r\r\r\u000e\r\u0094\u0003\r\u0003\r\u0005",
    "\r\u0099\n\r\u0003\r\u0006\r\u009c\n\r\r\r\u000e\r\u009d\u0005\r\u00a0",
    "\n\r\u0003\u000e\u0006\u000e\u00a3\n\u000e\r\u000e\u000e\u000e\u00a4",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00bb\n\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u00d6\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019",
    "\u00db\n\u0019\f\u0019\u000e\u0019\u00de\u000b\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0007 \u0106\n \f \u000e \u0109\u000b \u0003!\u0006!\u010c\n!\r!\u000e",
    "!\u010d\u0003!\u0003!\u0002\u0002\"\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"\u0003\u0002\u0014\u0003\u0002\f\f\u0003\u0002**\u0003",
    "\u0002++\u0003\u0002}}\u0003\u0002\u007f\u007f\u0004\u0002^^ff\u0004",
    "\u000200^^\u0004\u0002GGgg\u0004\u0002--//\u0003\u0002//\u0004\u0002",
    ">>@@\u0003\u0002--\u0005\u0002\'\',,11\u0003\u0002$$\u0005\u0002$$^",
    "^pp\u0005\u0002C\\aac|\u0004\u0002^^yy\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u0002\u0128\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0002A\u0003\u0002\u0002\u0002\u0003C\u0003\u0002\u0002\u0002",
    "\u0005E\u0003\u0002\u0002\u0002\u0007P\u0003\u0002\u0002\u0002\tR\u0003",
    "\u0002\u0002\u0002\u000bX\u0003\u0002\u0002\u0002\rZ\u0003\u0002\u0002",
    "\u0002\u000f\\\u0003\u0002\u0002\u0002\u0011_\u0003\u0002\u0002\u0002",
    "\u0013d\u0003\u0002\u0002\u0002\u0015k\u0003\u0002\u0002\u0002\u0017",
    "m\u0003\u0002\u0002\u0002\u0019\u009f\u0003\u0002\u0002\u0002\u001b",
    "\u00a2\u0003\u0002\u0002\u0002\u001d\u00a6\u0003\u0002\u0002\u0002\u001f",
    "\u00a9\u0003\u0002\u0002\u0002!\u00ad\u0003\u0002\u0002\u0002#\u00ba",
    "\u0003\u0002\u0002\u0002%\u00bc\u0003\u0002\u0002\u0002\'\u00be\u0003",
    "\u0002\u0002\u0002)\u00c0\u0003\u0002\u0002\u0002+\u00c2\u0003\u0002",
    "\u0002\u0002-\u00c4\u0003\u0002\u0002\u0002/\u00d5\u0003\u0002\u0002",
    "\u00021\u00d7\u0003\u0002\u0002\u00023\u00e1\u0003\u0002\u0002\u0002",
    "5\u00e7\u0003\u0002\u0002\u00027\u00ed\u0003\u0002\u0002\u00029\u00f2",
    "\u0003\u0002\u0002\u0002;\u00f7\u0003\u0002\u0002\u0002=\u00fd\u0003",
    "\u0002\u0002\u0002?\u0103\u0003\u0002\u0002\u0002A\u010b\u0003\u0002",
    "\u0002\u0002CD\u0007&\u0002\u0002D\u0004\u0003\u0002\u0002\u0002EF\u0007",
    "1\u0002\u0002FG\u00071\u0002\u0002GK\u0003\u0002\u0002\u0002HJ\n\u0002",
    "\u0002\u0002IH\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003",
    "\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LN\u0003\u0002\u0002\u0002",
    "MK\u0003\u0002\u0002\u0002NO\b\u0003\u0002\u0002O\u0006\u0003\u0002",
    "\u0002\u0002PQ\u0007=\u0002\u0002Q\b\u0003\u0002\u0002\u0002RS\u0007",
    "y\u0002\u0002ST\u0007j\u0002\u0002TU\u0007k\u0002\u0002UV\u0007n\u0002",
    "\u0002VW\u0007g\u0002\u0002W\n\u0003\u0002\u0002\u0002XY\t\u0003\u0002",
    "\u0002Y\f\u0003\u0002\u0002\u0002Z[\t\u0004\u0002\u0002[\u000e\u0003",
    "\u0002\u0002\u0002\\]\u0007k\u0002\u0002]^\u0007h\u0002\u0002^\u0010",
    "\u0003\u0002\u0002\u0002_`\u0007g\u0002\u0002`a\u0007n\u0002\u0002a",
    "b\u0007u\u0002\u0002bc\u0007g\u0002\u0002c\u0012\u0003\u0002\u0002\u0002",
    "de\u0007t\u0002\u0002ef\u0007g\u0002\u0002fg\u0007v\u0002\u0002gh\u0007",
    "w\u0002\u0002hi\u0007t\u0002\u0002ij\u0007p\u0002\u0002j\u0014\u0003",
    "\u0002\u0002\u0002kl\t\u0005\u0002\u0002l\u0016\u0003\u0002\u0002\u0002",
    "mn\t\u0006\u0002\u0002n\u0018\u0003\u0002\u0002\u0002oq\t\u0007\u0002",
    "\u0002po\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rp\u0003\u0002",
    "\u0002\u0002rs\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tx\t",
    "\b\u0002\u0002uw\t\u0007\u0002\u0002vu\u0003\u0002\u0002\u0002wz\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y\u0082\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{}\t\b\u0002",
    "\u0002|~\t\u0007\u0002\u0002}|\u0003\u0002\u0002\u0002~\u007f\u0003",
    "\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\u0082\u0003\u0002\u0002\u0002\u0081p\u0003",
    "\u0002\u0002\u0002\u0081{\u0003\u0002\u0002\u0002\u0082\u008c\u0003",
    "\u0002\u0002\u0002\u0083\u0085\t\t\u0002\u0002\u0084\u0086\t\n\u0002",
    "\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002",
    "\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0089\t\u0007\u0002",
    "\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002",
    "\u0002\u008b\u008d\u0003\u0002\u0002\u0002\u008c\u0083\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u00a0\u0003\u0002\u0002",
    "\u0002\u008e\u0090\t\u000b\u0002\u0002\u008f\u008e\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002",
    "\u0002\u0091\u0093\t\u0007\u0002\u0002\u0092\u0091\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0098\t\t\u0002\u0002\u0097\u0099\t\n\u0002\u0002\u0098",
    "\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u009b\u0003\u0002\u0002\u0002\u009a\u009c\t\u0007\u0002\u0002\u009b",
    "\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d",
    "\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e",
    "\u00a0\u0003\u0002\u0002\u0002\u009f\u0081\u0003\u0002\u0002\u0002\u009f",
    "\u008f\u0003\u0002\u0002\u0002\u00a0\u001a\u0003\u0002\u0002\u0002\u00a1",
    "\u00a3\t\u0007\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0003\u0002\u0002\u0002\u00a5\u001c\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\u0007q\u0002\u0002\u00a7\u00a8\u0007t\u0002\u0002\u00a8\u001e",
    "\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007c\u0002\u0002\u00aa\u00ab",
    "\u0007p\u0002\u0002\u00ab\u00ac\u0007f\u0002\u0002\u00ac \u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0007p\u0002\u0002\u00ae\u00af\u0007q\u0002",
    "\u0002\u00af\u00b0\u0007v\u0002\u0002\u00b0\"\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0007@\u0002\u0002\u00b2\u00bb\u0007?\u0002\u0002\u00b3",
    "\u00b4\u0007>\u0002\u0002\u00b4\u00bb\u0007?\u0002\u0002\u00b5\u00bb",
    "\t\f\u0002\u0002\u00b6\u00b7\u0007#\u0002\u0002\u00b7\u00bb\u0007?\u0002",
    "\u0002\u00b8\u00b9\u0007?\u0002\u0002\u00b9\u00bb\u0007?\u0002\u0002",
    "\u00ba\u00b1\u0003\u0002\u0002\u0002\u00ba\u00b3\u0003\u0002\u0002\u0002",
    "\u00ba\u00b5\u0003\u0002\u0002\u0002\u00ba\u00b6\u0003\u0002\u0002\u0002",
    "\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb$\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0007?\u0002\u0002\u00bd&\u0003\u0002\u0002\u0002\u00be",
    "\u00bf\t\r\u0002\u0002\u00bf(\u0003\u0002\u0002\u0002\u00c0\u00c1\t",
    "\u000e\u0002\u0002\u00c1*\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007",
    "/\u0002\u0002\u00c3,\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007.\u0002",
    "\u0002\u00c5.\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007k\u0002\u0002",
    "\u00c7\u00c8\u0007p\u0002\u0002\u00c8\u00d6\u0007v\u0002\u0002\u00c9",
    "\u00ca\u0007u\u0002\u0002\u00ca\u00cb\u0007v\u0002\u0002\u00cb\u00cc",
    "\u0007t\u0002\u0002\u00cc\u00cd\u0007k\u0002\u0002\u00cd\u00ce\u0007",
    "p\u0002\u0002\u00ce\u00d6\u0007i\u0002\u0002\u00cf\u00d0\u0007f\u0002",
    "\u0002\u00d0\u00d1\u0007q\u0002\u0002\u00d1\u00d2\u0007w\u0002\u0002",
    "\u00d2\u00d3\u0007d\u0002\u0002\u00d3\u00d4\u0007n\u0002\u0002\u00d4",
    "\u00d6\u0007g\u0002\u0002\u00d5\u00c6\u0003\u0002\u0002\u0002\u00d5",
    "\u00c9\u0003\u0002\u0002\u0002\u00d5\u00cf\u0003\u0002\u0002\u0002\u00d6",
    "0\u0003\u0002\u0002\u0002\u00d7\u00dc\t\u000f\u0002\u0002\u00d8\u00db",
    "\t\u0010\u0002\u0002\u00d9\u00db\n\u000f\u0002\u0002\u00da\u00d8\u0003",
    "\u0002\u0002\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00db\u00de\u0003",
    "\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003",
    "\u0002\u0002\u0002\u00dd\u00df\u0003\u0002\u0002\u0002\u00de\u00dc\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\t\u000f\u0002\u0002\u00e02\u0003\u0002",
    "\u0002\u0002\u00e1\u00e2\u0007r\u0002\u0002\u00e2\u00e3\u0007t\u0002",
    "\u0002\u00e3\u00e4\u0007k\u0002\u0002\u00e4\u00e5\u0007p\u0002\u0002",
    "\u00e5\u00e6\u0007v\u0002\u0002\u00e64\u0003\u0002\u0002\u0002\u00e7",
    "\u00e8\u0007k\u0002\u0002\u00e8\u00e9\u0007p\u0002\u0002\u00e9\u00ea",
    "\u0007r\u0002\u0002\u00ea\u00eb\u0007w\u0002\u0002\u00eb\u00ec\u0007",
    "v\u0002\u0002\u00ec6\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007q\u0002",
    "\u0002\u00ee\u00ef\u0007r\u0002\u0002\u00ef\u00f0\u0007g\u0002\u0002",
    "\u00f0\u00f1\u0007p\u0002\u0002\u00f18\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0007t\u0002\u0002\u00f3\u00f4\u0007g\u0002\u0002\u00f4\u00f5",
    "\u0007c\u0002\u0002\u00f5\u00f6\u0007f\u0002\u0002\u00f6:\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0007y\u0002\u0002\u00f8\u00f9\u0007t\u0002",
    "\u0002\u00f9\u00fa\u0007k\u0002\u0002\u00fa\u00fb\u0007v\u0002\u0002",
    "\u00fb\u00fc\u0007g\u0002\u0002\u00fc<\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\u0007e\u0002\u0002\u00fe\u00ff\u0007n\u0002\u0002\u00ff\u0100",
    "\u0007q\u0002\u0002\u0100\u0101\u0007u\u0002\u0002\u0101\u0102\u0007",
    "g\u0002\u0002\u0102>\u0003\u0002\u0002\u0002\u0103\u0107\t\u0011\u0002",
    "\u0002\u0104\u0106\t\u0012\u0002\u0002\u0105\u0104\u0003\u0002\u0002",
    "\u0002\u0106\u0109\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002",
    "\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108@\u0003\u0002\u0002",
    "\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u010a\u010c\t\u0013\u0002",
    "\u0002\u010b\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002",
    "\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002",
    "\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0110\b!\u0002\u0002",
    "\u0110B\u0003\u0002\u0002\u0002\u0017\u0002Krx\u007f\u0081\u0085\u008a",
    "\u008c\u008f\u0094\u0098\u009d\u009f\u00a4\u00ba\u00d5\u00da\u00dc\u0107",
    "\u010d\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function g1Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

g1Lexer.prototype = Object.create(antlr4.Lexer.prototype);
g1Lexer.prototype.constructor = g1Lexer;

Object.defineProperty(g1Lexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

g1Lexer.EOF = antlr4.Token.EOF;
g1Lexer.T__0 = 1;
g1Lexer.COMMENT = 2;
g1Lexer.SEMI = 3;
g1Lexer.WHILE = 4;
g1Lexer.LP = 5;
g1Lexer.RP = 6;
g1Lexer.IF = 7;
g1Lexer.ELSE = 8;
g1Lexer.RETURN = 9;
g1Lexer.LBR = 10;
g1Lexer.RBR = 11;
g1Lexer.FPNUM = 12;
g1Lexer.NUM = 13;
g1Lexer.OR = 14;
g1Lexer.AND = 15;
g1Lexer.NOT = 16;
g1Lexer.RELOP = 17;
g1Lexer.EQ = 18;
g1Lexer.PLUS = 19;
g1Lexer.MULOP = 20;
g1Lexer.MINUS = 21;
g1Lexer.CMA = 22;
g1Lexer.TYPE = 23;
g1Lexer.STRINGCONSTANT = 24;
g1Lexer.PRINT = 25;
g1Lexer.INPUT = 26;
g1Lexer.OPEN = 27;
g1Lexer.READ = 28;
g1Lexer.WRITE = 29;
g1Lexer.CLOSE = 30;
g1Lexer.ID = 31;
g1Lexer.WHITESPACE = 32;

g1Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

g1Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

g1Lexer.prototype.literalNames = [ null, "'$'", null, "';'", "'while'", 
                                   null, null, "'if'", "'else'", "'return'", 
                                   null, null, null, null, "'or'", "'and'", 
                                   "'not'", null, "'='", null, null, "'-'", 
                                   "','", null, null, "'print'", "'input'", 
                                   "'open'", "'read'", "'write'", "'close'" ];

g1Lexer.prototype.symbolicNames = [ null, null, "COMMENT", "SEMI", "WHILE", 
                                    "LP", "RP", "IF", "ELSE", "RETURN", 
                                    "LBR", "RBR", "FPNUM", "NUM", "OR", 
                                    "AND", "NOT", "RELOP", "EQ", "PLUS", 
                                    "MULOP", "MINUS", "CMA", "TYPE", "STRINGCONSTANT", 
                                    "PRINT", "INPUT", "OPEN", "READ", "WRITE", 
                                    "CLOSE", "ID", "WHITESPACE" ];

g1Lexer.prototype.ruleNames = [ "T__0", "COMMENT", "SEMI", "WHILE", "LP", 
                                "RP", "IF", "ELSE", "RETURN", "LBR", "RBR", 
                                "FPNUM", "NUM", "OR", "AND", "NOT", "RELOP", 
                                "EQ", "PLUS", "MULOP", "MINUS", "CMA", "TYPE", 
                                "STRINGCONSTANT", "PRINT", "INPUT", "OPEN", 
                                "READ", "WRITE", "CLOSE", "ID", "WHITESPACE" ];

g1Lexer.prototype.grammarFileName = "grammar.txt";


exports.g1Lexer = g1Lexer;

