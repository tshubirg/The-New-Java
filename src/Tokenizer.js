"use strict";
exports.__esModule = true;
var Token_1 = require("./Token");
var Tokenizer = /** @class */ (function () {
    function Tokenizer(grammar) {
        this.allT = [];
        this.grammar = grammar;
    }
    Tokenizer.prototype.setInput = function (inputData) {
        this.lineNumber = 1;
        this.idx = 0;
        this.inputData = inputData;
    };
    Tokenizer.prototype.pprevious = function () {
        return this.allT[this.allT.length - 3];
    };
    Tokenizer.prototype.previous = function () {
        return this.allT[this.allT.length - 2];
    };
    Tokenizer.prototype.peek = function () {
        var tempInd = this.idx;
        var tempLN = this.lineNumber;
        var ret;
        //console.log(tempInd)
        ret = this.next();
        //console.log(ret)
        this.allT.pop();
        this.idx = tempInd;
        this.lineNumber = tempLN;
        return ret;
    };
    Tokenizer.prototype.next = function () {
        //console.log("made it 1")
        if (this.idx >= this.inputData.length - 1) {
            //special "end of file" metatoken
            return new Token_1.Token("$", undefined, this.lineNumber);
        }
        //console.log(this.grammar.Gram)
        for (var i = 0; i < this.grammar.Gram.length; ++i) {
            var terminal = this.grammar.Gram[i];
            var sym = terminal[0];
            var rex = new RegExp(terminal[1], "gy"); //RegExp
            rex.lastIndex = this.idx; //tell where to start searching
            //console.log(this.inputData[this.idx])
            var m = rex.exec(this.inputData); //do the search
            if (m) {
                //console.log("made it 3")
                var lexeme = m[0];
                this.idx += lexeme.length;
                var temp = this.lineNumber;
                this.lineNumber += lexeme.split('\n').length - 1;
                if (sym !== "WHITESPACE" && sym !== "COMMENT") {
                    this.allT.push(new Token_1.Token(sym, lexeme, this.lineNumber));
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
        console.log("No matches found");
        throw new Error("No Matches Found");
    };
    Tokenizer.prototype.expect = function (input) {
        //console.log("expect: "+ input)
        var ne = this.next();
        if (ne.sym != input)
            throw new Error("Expected the unexpected.");
        return ne;
    };
    return Tokenizer;
}());
exports.Tokenizer = Tokenizer;
