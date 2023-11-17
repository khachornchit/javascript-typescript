'use strict'

let string = 'Hello, this is a string !';

// General string function
console.log(string);
console.log("string.startsWith('Hello') : " + string.startsWith('Hello'));
console.log("string.endsWith('!')       : " + string.endsWith('!'));
console.log("string.includes('string')  : " + string.includes('string'));

// General number function
// Hex
console.log('0xFA   = ' + 0xFA);
console.log('0b1010 = ' + 0b1010);
console.log('0o17   = ' + 0o17);
console.log("Number.isFinite(10)  : " + Number.isFinite(10));
console.log("Number.isFinite(NaN) : " + Number.isFinite(NaN));
console.log("Number.isNaN(NaN)    : " + Number.isNaN(NaN));
console.log("Number.isInteger(NaN): " + Number.isInteger(NaN));