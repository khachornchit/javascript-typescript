!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}({6:function(t,e,n){"use strict";var o,r;Promise.resolve("Hello").then((function(t){return console.log("Result of promise1 response "+t)})),new Promise((function(t,e){setTimeout((function(){return t(5)}),2e3)})).then((function(t){t+=5,console.log("Result of promise2 response "+t)})),(o="GET",r="https://jsonplaceholder.typicode.com/todos",new Promise((function(t,e){var n=new XMLHttpRequest;n.open(o,r),n.onload=function(){this.status>=200&&this.status<300?t(n.response):e({status:this.status,statusText:n.statusText})},n.onerror=function(){e({status:this.status,statusText:n.statusText})},n.send()}))).then((function(t){console.log(t);var e=JSON.parse(t),n="",o=!0,r=!1,u=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done);o=!0){var l=s.value;n+="\n            <li>\n                <h3>Title : ".concat(l.title,"</h3>\n                <p>Completed : ").concat(l.complete,"</p>\n            </li>\n        ")}}catch(t){r=!0,u=t}finally{try{o||null==i.return||i.return()}finally{if(r)throw u}}document.getElementById("template").innerHTML=n})).catch((function(t){console.log(t)}))}});