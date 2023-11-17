"use strict"

// Generator functions are written using the function* syntax. When called initially, 
// generator functions do not execute any of their code, instead returning a type of iterator 
// called a Generator. When a value is consumed by calling the generator's next method, 
// the Generator function executes until it encounters the yield keyword.

function* g1() {
    console.log('Hello');
    yield 'yield 1 ran ...';
    console.log('world');
    yield 'yield 2 ran ...';
    return 'returned ... ';
}

let g = g1();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

for (const val of g) {
    console.log(val);
}

function* makeRangeIterator(start = 0, end = 100, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

let it = makeRangeIterator(1, 10, 2);

for (const val of it) {
    console.log(val);
}