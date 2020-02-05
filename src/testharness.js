"use strict";
exports.__esModule = true;
var fs = require("fs");
var shuntingyard_1 = require("./shuntingyard");
var util = require('util');
var testCount = 0;
function main() {
    var ok = testWithFile("basictests.txt");
    if (ok)
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Basic tests OK-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    else
        return;
    ok = testWithFile("bonus1tests.txt");
    if (ok)
        console.log("-=-=-=-=-=-=-=-=-=-=-Bonus 1 tests (1+ argument functions) OK-=-=-=-=-=-=-=-=-=-=-");
    else
        return;
    ok = testWithFile("bonus2tests.txt");
    if (ok)
        console.log("-=-=-=-=-=-=-=-=-=-=-Bonus 2 tests (0+ argument functions) OK-=-=-=-=-=-=-=-=-=-=-");
    else
        return;
    console.log(testCount + " tests OK");
}
function testWithFile(fname) {
    var data = fs.readFileSync(fname, "utf8");
    var lst = data.split(/\n/g);
    for (var i = 0; i < lst.length; ++i) {
        var line = lst[i].trim();
        if (line.length === 0)
            continue;
        var idx = line.indexOf("\t");
        var inp = line.substring(0, idx);
        var expectedStr = line.substring(idx);
        console.log("Testing " + inp + " ...");
        ++testCount;
        var expected = JSON.parse(expectedStr);
        var actual = shuntingyard_1.parse(inp);
        if (!treesAreSame(actual, expected)) {
            console.log(util.inspect(actual, { depth: null }));
            console.log("--------------------------");
            console.log(util.inspect(expected, { depth: null }));
            console.log("BAD!");
            return false;
        }
        else {
        }
    }
    return true;
}
function treesAreSame(n1, n2) {
    if (n1 === undefined && n2 !== undefined)
        return false;
    if (n2 === undefined && n1 !== undefined)
        return false;
    if (n1["sym"] != n2["sym"])
        return false;
    if (n1["children"].length != n2["children"].length)
        return false;
    for (var i = 0; i < n1["children"].length; ++i) {
        if (!treesAreSame(n1["children"][i], n2["children"][i]))
            return false;
    }
    return true;
}
main();
