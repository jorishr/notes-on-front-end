# Modifying page content
Table of contents
- [Modifying page content](#modifying-page-content)
  - [Create and insert elements into the DOM](#create-and-insert-elements-into-the-dom)
    - [Create a new element node](#create-a-new-element-node)
    - [Create a new text node](#create-a-new-text-node)
    - [Insert nodes into the DOM](#insert-nodes-into-the-dom)
  - [Remove and clone nodes](#remove-and-clone-nodes)
    - [Remove an existing node](#remove-an-existing-node)
    - [Clone an existing node](#clone-an-existing-node)

## Create and insert elements into the DOM
### Create a new element node
```Javascript
// document.createElement(tag)
const newElem = document.createElement('div');
newElem.className = "alert";
newElem.innerHTML = "<strong>Hi there!</strong>"
```
### Create a new text node
```Javascript
// document.createTextNode(text)
const newText = document.createTextNode('hello world');
```
### Insert nodes into the DOM
```javascript
elem.append(); 	
//-> append nodes or strings at the end of an existing node
elem.prepend();	
//-> insert nodes at the beginning of an existing node
const newLi = document.createElement('li');
ul.append(newli);

elem.before()
//-> insert nodes or strings before an existing node
elem.after()
//-> insert nodes or strings after an existing node
elem.replaceWith()	
//-> replaces an existing node with another given node
```
## Remove and clone nodes
### Remove an existing node
```Javascript
elem.remove()

//Example: Make a div element dissappear for 1 second:

const div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong>";

document.body.append(div);
setTimeout(() => div.remove(), 1000);
```
### Clone an existing node
You can make a deep clone with all attributes and subelements.
```Javascript
const elemDeepClone = elem.clone(true);
const elemShallowClone = elem.clone(false);
```