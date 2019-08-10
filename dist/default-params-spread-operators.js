"use strict";

// Default parameter

function greet() {
    var $greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello World';

    console.log($greeting);
}

greet();

var args1 = [1, 2, 3];
var args2 = [4, 5, 6];

function test() {
    console.log(args1 + ',' + args2);
}

test.apply(undefined, args1.concat(args2));