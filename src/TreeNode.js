"use strict";
exports.__esModule = true;
var Token_1 = require("./Token");
var TreeNode = /** @class */ (function () {
    function TreeNode(sym, token) {
        this.sym = '';
        this.children = [];
        this.sym = sym;
        this.token = token;
        this.children = [];
    }
    TreeNode.prototype.addChild = function (t) {
        this.children.push(t);
    };
    TreeNode.prototype.toString = function () {
        function walk(n, callback) {
            callback(n);
            n.children.forEach(function (x) {
                walk(x, callback);
            });
        }
        var L = [];
        L.push("digraph d{");
        L.push("node [fontname=\"Helvetica\",shape=box];");
        var counter = 0;
        walk(this, function (n) {
            n.NUMBER = "n" + (counter++);
            var tmp = n.sym;
            if (n.token) {
                tmp += "\n";
                tmp += n.token.lexeme;
            }
            tmp = tmp.replace(/&/g, "&amp;");
            tmp = tmp.replace(/</g, "&lt;");
            tmp = tmp.replace(/>/g, "&gt;");
            tmp = tmp.replace(/\n/g, "<br/>");
            L.push(n.NUMBER + " [label=<" + tmp + ">];");
        });
        walk(this, function (n) {
            n.children.forEach(function (x) {
                L.push(n.NUMBER + " -> " + x.NUMBER + ";");
            });
        });
        L.push("}");
        return L.join("\n");
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function walk(parser, node) {
    var p = node.getPayload();
    if (p.ruleIndex === undefined) {
        var line = p.line;
        var lexeme = p.text;
        var ty = p.type;
        var sym = parser.symbolicNames[ty];
        if (sym === null)
            sym = lexeme.toUpperCase();
        var T = new Token_1.Token(sym, lexeme, line);
        return new TreeNode(sym, T);
    }
    else {
        var idx = p.ruleIndex;
        var sym = parser.ruleNames[idx];
        var N = new TreeNode(sym, undefined);
        for (var i = 0; i < node.getChildCount(); ++i) {
            var child = node.getChild(i);
            N.children.push(walk(parser, child));
        }
        return N;
    }
}
exports.walk = walk;
