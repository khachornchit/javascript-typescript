"use strict"

function testVar() {
    console.log("Test var ...");
    let a = 30;
    a = 50;
    console.log(a);
    console.log(a);
}

function testLet() {
    console.log("Test let ...");
    let a = 30;
    if (true) {
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

testVar();
testLet();

const colors = [];
colors.push('red');
colors.push('blue');

// colors = "Green";

console.log(colors);