"use strict"

// That This
function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (array) {
    console.log('Use that word ...');
    let that = this;
    return array.map(function (x) {
        console.log(that.prefix + x);
    })
}

Prefixer.prototype.prefixArrayArrow = function (array) {
    console.log('Use arrow function ...')
    return array.map((x) => {
        console.log(this.prefix + x);
    })
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['x', 'y', 'z']);
pre.prefixArrayArrow(['x', 'y', 'z']);

/*
let add = function(a, b) {
    let sum = a+b;
    console.log(sum);
    return false;
}
*/

let add = (a, b) => {
    let sum = a + b;
    console.log('Replace function with arrow ... ' + sum);
    return false;
}

add(50, 52);