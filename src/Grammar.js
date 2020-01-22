"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(reg) {
        this.Gram = new Array();
        var allRegs = new Set();
        var splitted = reg.split("\n");
        var nameReg = new RegExp("([A-Z_]+) -> ", "g");
        var n = 0;
        while (n < splitted.length - 1) {
            var splitMore = splitted[n].split(" ");
            if (allRegs.has(splitMore[0])) {
                throw new Error("Two or more of the same Regex" + splitMore[2]);
            }
            if (splitMore[1] == '->') {
                try {
                    var testReg = new RegExp(splitMore[2]);
                }
                catch (_a) {
                    throw new Error("Invalid Regex" + splitMore[2]);
                }
                allRegs.add(splitMore[0]);
            }
            else {
                throw new Error("Invalid Regex" + splitMore[2]);
            }
            var adding = splitted[n].split(" -> ");
            n += 1;
            this.Gram.push([adding[0], new RegExp(adding[1])]);
        }
        //console.log(this.Gram)
        this.Gram.push(["WHITESPACE", new RegExp("\\s+")]);
    }
    return Grammar;
}());
exports.Grammar = Grammar;
