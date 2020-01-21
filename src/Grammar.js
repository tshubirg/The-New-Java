"use strict";
exports.__esModule = true;
var Grammar = /** @class */ (function () {
    function Grammar(reg) {
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
            n += 1;
        }
    }
    return Grammar;
}());
exports.Grammar = Grammar;
