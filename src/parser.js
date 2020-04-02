"use strict";
exports.__esModule = true;
var treeNode_1 = require("./treeNode");
var asm_1 = require("./asm");
var antlr4 = require('./antlr4');
var Lexer = require('./gramLexer.js').gramLexer;
var Parser = require('./gramParser.js').gramParser;
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.syntaxError = function (rec, sym, line, column, msg, e) {
        console.log("Syntax error:", msg, "on line", line, "at column", column);
        throw new Error("Syntax error in ANTLR parse");
    };
    return ErrorHandler;
}());
// dont forget export NODE_PATH=.
function parse(txt) {
    var stream = new antlr4.InputStream(txt);
    var lexer = new Lexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new Parser(tokens);
    parser.buildParseTrees = true;
    var handler = new ErrorHandler();
    lexer.removeErrorListeners();
    lexer.addErrorListener(handler);
    parser.removeErrorListeners();
    parser.addErrorListener(handler);
    var antlrroot = parser.program();
    var root = treeNode_1.walk(parser, antlrroot);
    return asm_1.makeAsm(root);
}
exports.parse = parse;
// add whitespace WHITESPACE : ( ' ' | '\t' | '\n' | '\r' )+ -> skip   ;
