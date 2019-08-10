'use strict'

let name = 'John';

function toUpper(word) {
    return word.toUpperCase();
}

let template = 
`<h1>${toUpper('Hellooooo')}, ${name}</h1>
<p>This is a simple template for template literals test.</p>
<p>The 3rd line.</p>`;

document.getElementById('template').innerHTML = template;