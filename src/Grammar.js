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
        s.split(new RegExp('\\s')).forEach(function (t) {
            var tmp = t.trim();
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
        this.nullable = new Set();
        var allRegs = new Set();
        var splitted = reg.split("\n");
        var nameReg = new RegExp("([A-Z_]+) -> ", "g");
        var term = true;
        var addBool = true;
        var n = 0;
        var _loop_1 = function () {
            var splitMore = splitted[n].split(" -> ");
            if (allRegs.has(splitMore[0])) {
                throw new Error("Two or more of the same Regex" + splitMore[2]);
            }
            if (term) {
                if (splitMore.length > 1) {
                    try {
                        var testReg = new RegExp(splitMore[1]);
                    }
                    catch (_a) {
                        throw new Error("Invalid Regex" + splitMore[1]);
                    }
                    allRegs.add(splitMore[0]);
                }
                else if (splitMore[0] == "") {
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
                    if (found != undefined) {
                        var f = this_1.nonterm.indexOf(found);
                        this_1.nonterm[f][1] += (" | " + splitMore[1]);
                        addBool = false;
                    }
                    else {
                        this_1.nonterm.push([splitMore[0], splitMore[1]]);
                        addBool = false;
                    }
                }
                else if (splitMore[0] == "" && term) {
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
        var node = new NodeType();
        node.label = this.nonterm[0][0];
        var empty = new Set();
        dfs(node, empty, this.nonterm);
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
        for (var t = 0; t < this.nonterm.length; t++) {
            if (!empty.has(this.nonterm[t][0])) {
                throw new Error("Defined but not used" + this.nonterm[t][0]);
            }
        }
        for (var t = 0; t < this.term.length; t++) {
            if (!empty.has(this.term[t][0]) && this.term[t][0] != 'COMMENT') {
                throw new Error("Defined but not used" + this.term[t][0]);
            }
        }
        // if(!allRegs.has("WHITESPACE"))
        //     this.term.push(["WHITESPACE", "\\s+"])
        // if(!allRegs.has("COMMENT"))
        //     this.term.push(["COMMENT", "/[*](.|\n)*?[*]/"])
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
        this.getNullable();
    }
    Grammar.prototype.getNullable = function () {
        var _this = this;
        while (true) {
            var t = true;
            for (var i = 0; i < this.nontermA.length; i++) {
                for (var f = 0; f < this.nontermA[i][1].length; f++) {
                    if (this.nontermA[i][1][f].split(' ').every(function (sym) { return _this.nullable.has(sym) || sym == 'lambda'; })) {
                        if (!this.nullable.has(this.nontermA[i][0])) {
                            this.nullable.add(this.nontermA[i][0]);
                            t = false;
                        }
                    }
                }
            }
            if (t)
                break;
        }
        return this.nullable;
    };
    Grammar.prototype.getFirst = function () {
        var first = new Map();
        this.term.forEach(function (t) {
            first.set(t[0], new Set().add(t[0]));
        });
        var sont = 0;
        while (true) {
            var boo = true;
            var tempfirst = first;
            for (var i = 0; i < this.nontermA.length; i++) {
                for (var f = 0; f < this.nontermA[i][1].length; f++) {
                    var ch = this.nontermA[i][1][f].split(' ');
                    for (var t = 0; t < ch.length; t++) {
                        var tempp = first.get(this.nontermA[i][0]);
                        var tempc = first.get(ch[t]);
                        if (tempp == undefined) {
                            tempp = new Set();
                        }
                        if (tempc == undefined) {
                            tempc = new Set();
                        }
                        tempc.forEach(tempp.add, tempp);
                        first.set(this.nontermA[i][0], tempp);
                        if (tempfirst.size < first.size)
                            boo = false;
                        if (!this.nullable.has(ch[t]) && ch[t] != 'lambda') {
                            break;
                        }
                    }
                }
            }
            if (boo && sont > this.nontermA.length)
                break;
            sont++;
        }
        return first;
    };
    return Grammar;
}());
exports.Grammar = Grammar;
