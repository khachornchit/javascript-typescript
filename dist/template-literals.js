'use strict';

var name = 'John';

function toUpper(word) {
    return word.toUpperCase();
}

var template = '<h1>' + toUpper('Hellooooo') + ', ' + name + '</h1>\n<p>This is a simple template for template literals test.</p>\n<p>The 3rd line.</p>';

document.getElementById('template').innerHTML = template;