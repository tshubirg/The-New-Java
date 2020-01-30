"use strict";
exports.__esModule = true;
var Token_1 = require("./Token");
var Tokenizer = /** @class */ (function () {
    function Tokenizer(grammar) {
        this.grammar = grammar;
        this.lineNumber = 1;
        this.idx = 0;
    }
    Tokenizer.prototype.setInput = function (inputData) {
        this.inputData = inputData;
    };
    Tokenizer.prototype.next = function () {
        if (this.idx >= this.inputData.length - 1) {
            //special "end of file" metatoken
            this.lineNumber = 1;
            this.idx = 0;
            return new Token_1.Token("$", undefined, this.lineNumber);
        }
        for (var i = 0; i < this.grammar.Gram.length; ++i) {
            var terminal = this.grammar.Gram[i];
            var sym = terminal[0];
            var rex = new RegExp(terminal[1], "gy"); //RegExp
            rex.lastIndex = this.idx; //tell where to start searching
            var m = rex.exec(this.inputData); //do the search
            if (m) {
                var lexeme = m[0];
                this.idx += lexeme.length;
                var temp = this.lineNumber;
                this.lineNumber += lexeme.split('\n').length - 1;
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    return new Token_1.Token(sym, lexeme, temp);
                    //return new Token using sym, lexeme, and line number
                }
                else {
                    //skip whitespace and get next real token
                    return this.next();
                }
            }
        }
        //no match; syntax error
        throw new Error("No Matches Found");
    };
    return Tokenizer;
}());
exports.Tokenizer = Tokenizer;
