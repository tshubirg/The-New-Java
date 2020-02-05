
declare var require:any;
let fs = require("fs");

import {parse} from "./shuntingyard"

const util = require('util')
let testCount=0;

function main(){
    let ok = testWithFile("basictests.txt");
    if(ok)
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Basic tests OK-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    else
        return;
        
    ok = testWithFile("bonus1tests.txt");
    if(ok)
        console.log("-=-=-=-=-=-=-=-=-=-=-Bonus 1 tests (1+ argument functions) OK-=-=-=-=-=-=-=-=-=-=-");
    else
        return;
        
    ok = testWithFile("bonus2tests.txt");
    if(ok)
        console.log("-=-=-=-=-=-=-=-=-=-=-Bonus 2 tests (0+ argument functions) OK-=-=-=-=-=-=-=-=-=-=-");
    else
        return;
    console.log(testCount+" tests OK");
}
        
function testWithFile(fname:string): boolean{
    let data:string = fs.readFileSync(fname,"utf8");
    let lst = data.split(/\n/g);
    for(let i=0;i<lst.length;++i){
        let line = lst[i].trim();
        if( line.length === 0 )
            continue;
        let idx = line.indexOf("\t");
        let inp = line.substring(0,idx);
        let expectedStr = line.substring(idx);
        console.log("Testing "+inp+" ...");
        ++testCount;
        let expected = JSON.parse(expectedStr);
        let actual = parse(inp);
        
        if( !treesAreSame( actual, expected ) ){
            console.log(util.inspect(actual,{depth: null}))
            console.log("--------------------------")
            console.log(util.inspect(expected,{depth: null}))
            console.log("BAD!")
            return false;
        } else {
        }
    }
    return true;
}

function treesAreSame( n1: any, n2:any ){
    if( n1 === undefined && n2 !== undefined )
        return false;
    if( n2 === undefined && n1 !== undefined )
        return false;
    if( n1["sym"] != n2["sym"] )
        return false;
    if( n1["children"].length != n2["children"].length )
        return false;
    for(let i=0;i<n1["children"].length;++i){
        if(!treesAreSame( n1["children"][i], n2["children"][i] ) )
            return false;
    }
    return true;
}
    
    
    


main();