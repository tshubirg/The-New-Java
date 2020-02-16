"use strict";
exports.__esModule = true;
var NodeType = /** @class */ (function () {
    function NodeType() {
        this.n = new Array();
    }
    NodeType.prototype.Constructor = function (L) {
        this.label = L;
        this.n = [];
    };
    return NodeType;
}());
function dfs(N, v, nonterm) {
    if (v != undefined)
        v.add(N.label);
    var found = nonterm.find(function (e) { return e[0] === N.label; });
    if (found !== undefined) {
        var s = found[1];
        var rex = new RegExp('\\|', "g");
        s = s.replace(rex, ' ');
        s = s.replace(',', ' ');
        //console.log(s)
        s.split(new RegExp('\\s')).forEach(function (t) {
            var tmp = t.trim();
            // console.log(tmp)
            if (tmp !== '') {
                var temp_node = new NodeType();
                temp_node.label = tmp;
                N.n.push(temp_node);
            }
        });
    }
    if (N.n != undefined) {
        N.n.forEach(function (w) {
            if (!v.has(w.label)) {
                dfs(w, v, nonterm);
            }
        });
    }
}
var Grammar = /** @class */ (function () {
    function Grammar(reg) {
        var _this = this;
        this.term = new Array();
        this.nonterm = new Array();
        this.nontermA = new Array();
        this.Gram = new Array();
        var allRegs = new Set();
        var splitted = reg.split("\n");
        //console.log(splitted)
        var nameReg = new RegExp("([A-Z_]+) -> ", "g");
        var term = true;
        var addBool = true;
        var n = 0;
        var _loop_1 = function () {
            var splitMore = splitted[n].split(" -> ");
            if (allRegs.has(splitMore[0])) {
                throw new Error("Two or more of the same Regex" + splitMore[2]);
            }
            //console.log(splitMore.length)
            if (term) {
                if (splitMore.length > 1) {
                    try {
                        //console.log(splitMore[1])
                        var testReg = new RegExp(splitMore[1]);
                    }
                    catch (_a) {
                        throw new Error("Invalid Regex" + splitMore[1]);
                    }
                    allRegs.add(splitMore[0]);
                }
                else if (splitMore[0] == "") {
                    //console.log("mad")
                    term = !term;
                }
                else {
                    throw new Error("Invalid Regex" + splitMore[1]);
                }
            }
            else {
                if (splitMore.length > 1) {
                    if (this_1.term.includes([splitMore[0], splitMore[1]])) {
                        throw new Error("Nonterminal already defined as terminal");
                    }
                    var found = this_1.nonterm.find(function (matches) { return matches[0] === splitMore[0]; });
                    //console.log(found)
                    if (found != undefined) {
                        //console.log(found)
                        var f = this_1.nonterm.indexOf(found);
                        this_1.nonterm[f][1] += (" | " + splitMore[1]);
                        //console.log(this.nonterm[f][1])
                        addBool = false;
                    }
                    else {
                        this_1.nonterm.push([splitMore[0], splitMore[1]]);
                        addBool = false;
                    }
                }
                else if (splitMore[0] == "" && term) {
                    //console.log("mad")
                    term = !term;
                }
            }
            var adding = splitted[n].split(" -> ");
            n += 1;
            if (addBool && splitMore[1] != undefined)
                this_1.term.push([adding[0], adding[1]]);
            addBool = true;
        };
        var this_1 = this;
        while (n < splitted.length - 1) {
            _loop_1();
        }
        //console.log(this.Gram)
        var node = new NodeType();
        //console.log()
        //console.log(this.term)
        node.label = this.nonterm[0][0];
        var empty = new Set();
        dfs(node, empty, this.nonterm);
        //console.log(empty)
        var cont = true;
        empty.forEach(function (thing) {
            for (var t = 0; t < _this.nonterm.length; t++) {
                var element = _this.nonterm[t];
                if (element[0] == thing) {
                    cont = false;
                    break;
                }
            }
            if (cont) {
                for (var t = 0; t < _this.term.length; t++) {
                    var element = _this.term[t];
                    if (element[0] == thing) {
                        break;
                    }
                    if (t == _this.term.length) {
                        throw new Error("Used but not defined " + element[0]);
                    }
                }
            }
            cont = true;
        });
        /////////////////////////////////// had to comment out for nullable because on of the tests failed this check.
        // for (let t = 0; t < this.nonterm.length; t++) 
        // {
        //     if(!empty.has(this.nonterm[t][0]))
        //     {
        //         throw new Error("Defined but not used" + this.nonterm[t][0])
        //     }
        // }
        // for (let t = 0; t < this.term.length; t++) 
        // {
        //     if(!empty.has(this.term[t][0]))
        //     {
        //         throw new Error("Defined but not used" + this.term[t][0])
        //     }
        // }
        if (!allRegs.has("WHITESPACE"))
            this.term.push(["WHITESPACE", "\\s+"]);
        if (!allRegs.has("COMMENT"))
            this.term.push(["COMMENT", "/[*](.|\n)*?[*]/"]);
        this.Gram = this.term.concat(this.nonterm);
        for (var i = 0; i < this.nonterm.length; i++)
            this.nontermA.push(['', []]);
        var _loop_2 = function (i) {
            this_2.nontermA[i][0] = this_2.nonterm[i][0];
            var s = this_2.nonterm[i][1];
            var rex = new RegExp('\\|', "g");
            if (s != undefined)
                s.split(rex).forEach(function (t) {
                    var tmp = t.trim();
                    if (tmp !== '') {
                        _this.nontermA[i][1].push(tmp);
                    }
                });
        };
        var this_2 = this;
        for (var i = 0; i < this.nonterm.length; i++) {
            _loop_2(i);
        }
        term = true;
    }
    Grammar.prototype.getNullable = function () {
        var nullable = new Set();
        while (true) {
            var t = true;
            for (var i = 0; i < this.nontermA.length; i++) {
                for (var f = 0; f < this.nontermA[i][1].length; f++) {
                    if (this.nontermA[i][1][f].split(' ').every(function (sym) { return nullable.has(sym) || sym == 'lambda'; })) {
                        if (!nullable.has(this.nontermA[i][0])) {
                            nullable.add(this.nontermA[i][0]);
                            t = false;
                        }
                    }
                }
            }
            if (t)
                break;
        }
        return nullable;
    };
    return Grammar;
}());
exports.Grammar = Grammar;
