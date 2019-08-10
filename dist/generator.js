"use strict";

// Generator functions are written using the function* syntax. When called initially, 
// generator functions do not execute any of their code, instead returning a type of iterator 
// called a Generator. When a value is consumed by calling the generator's next method, 
// the Generator function executes until it encounters the yield keyword.

var _marked = /*#__PURE__*/regeneratorRuntime.mark(g1),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(makeRangeIterator);

function g1() {
    return regeneratorRuntime.wrap(function g1$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('Hello');
                    _context.next = 3;
                    return 'yield 1 ran ...';

                case 3:
                    console.log('world');
                    _context.next = 6;
                    return 'yield 2 ran ...';

                case 6:
                    return _context.abrupt('return', 'returned ... ');

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var g = g1();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = g[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;

        console.log(val);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function makeRangeIterator() {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var i;
    return regeneratorRuntime.wrap(function makeRangeIterator$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    i = start;

                case 1:
                    if (!(i < end)) {
                        _context2.next = 7;
                        break;
                    }

                    _context2.next = 4;
                    return i;

                case 4:
                    i += step;
                    _context2.next = 1;
                    break;

                case 7:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var it = makeRangeIterator(1, 10, 2);

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = it[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _val = _step2.value;

        console.log(_val);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}