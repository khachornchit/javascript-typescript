"use strict";

function testVar() {
    console.log("Test var ...");
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a);
    }
    console.log(a);
}

function testLet() {
    console.log("Test let ...");
    var a = 30;
    if (true) {
        var _a = 50;
        console.log(_a);
    }
    console.log(a);
}

testVar();
testLet();

var colors = [];
colors.push('red');
colors.push('blue');

// colors = "Green";

console.log(colors);