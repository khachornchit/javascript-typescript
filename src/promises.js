"use strict"

// Simple
let promise1 = Promise.resolve('Hello');
promise1.then((response) => console.log("Result of promise1 response " + response));

// Promise Object
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(5), 2000)
});

promise2.then((response) => {
    response += 5;
    console.log("Result of promise2 response " + response);
})

// Promise & XMLHttpRequest
function getData(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            })
        }
        xhr.send();
    });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then((data) => {
    console.log(data);
    let todos = JSON.parse(data);
    let result = '';
    for (let todo of todos) {
        result += `
            <li>
                <h3>Title : ${todo.title}</h3>
                <p>Completed : ${todo.complete}</p>
            </li>
        `;
    };
    document.getElementById('template').innerHTML = result;
}).catch(function (error) {
    console.log(error)
});