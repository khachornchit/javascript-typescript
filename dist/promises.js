"use strict";

// Simple

var promise1 = Promise.resolve('Hello');
promise1.then(function (response) {
    return console.log("Result of promise1 response " + response);
});

// Promise Object
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        return resolve(5);
    }, 2000);
});

promise2.then(function (response) {
    response += 5;
    console.log("Result of promise2 response " + response);
});

// Promise & XMLHttpRequest
function getData(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function (data) {
    console.log(data);
    var todos = JSON.parse(data);
    var result = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var todo = _step.value;

            result += "\n            <li>\n                <h3>Title : " + todo.title + "</h3>\n                <p>Completed : " + todo.complete + "</p>\n            </li>\n        ";
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

    ;
    document.getElementById('template').innerHTML = result;
}).catch(function (error) {
    console.log(error);
});