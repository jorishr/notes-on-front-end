# Helper functions for DOM manipulations
Creating nodes and appending them to the DOM is something that is repeat often in many modules. Instead manually going through the motions every time, use helper functions that can be imported when needed.
```Javascript
function createNode(element) {
    return document.createElement(element); 
};
function appendNode(parent, el) {
    return parent.appendChild(el); 
};
module.exports = {
    createNode,
    appendNode
};
```
Import and apply:
```Javascript
const createNode = require('./<path>').createNode;
const appendNode = require('./<path>').appendNode;
const   li = createNode('li'),
        span = createNode('span');
li.innerHTML   = person.name;
span.innerHTML = person.email;
appendNode(li, span);
appendNode(ul, li); 
```