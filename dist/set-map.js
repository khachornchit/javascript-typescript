"use strict";

// Set

console.log('Start Set ...');
var array = [0, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9];
var set = new Set(array);
set.add('Hello');
set.add({ a: 2, b: 2 });
set.delete(0);

console.log(set);
console.log(set.size);

set.forEach(function (val) {
    console.log('val : ', val);
});

set.clear();
console.log(set);

// Map
console.log('Start Map ...');
var map = new Map([['a', 'Hello'], ['b', 'World']]);

map.set('c', 'Final');

console.log(map);

// WeakSet
console.log('Start WeakSet ...');
var carWeakSet = new WeakSet();

var car1 = {
    make: 'Honda',
    model: 'City'
};

var car2 = {
    make: 'Toyota',
    model: 'Camry'
};

carWeakSet.add(car1);
carWeakSet.add(car2);

console.log(carWeakSet);

// WeakSet
console.log('Start WeakMap ...');
var carWeakMap = new WeakMap();

var key1 = {
    id: 1
};

var key2 = {
    id: 2
};

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);
console.log(carWeakMap);

carWeakMap.delete(key1);
console.log(carWeakMap);