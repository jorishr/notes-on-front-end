# Javascript host environment
A host environment provides own objects and functions additional to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.

In the browsers you get the ROOT OBJECT, the global WINDOW which has multiple roles:
- the global object for the JS code, 
- the object that hold the DOM with its own root element DOCUMENT
- the object that holds the BOM, the browser object model with objects and methods that give you access to the navigator and location, for example.

## DOM
The DOM creates a model of every single HTML element and stores it into an object.

We use the DOM to make an HTML page interactive, make changes based on user behavior or get the value out of a form, custom validation, etc. 

## DOM TREE
```
DOCUMENT  ->  ROOT-NODE ELEMENT(<html>)
	          ->  ELEMEMT (<head>)
                    ->  ELEMENT (<title>)
                    ->  ELEMENT (<link>)
                ->  ELEMENT (<body>)
                    ->  ELEMEMT (<h1>)
```  
You can check this tree in the console for every page: `console.dir(document);`.

Every tree node is an object and everything in HTML, even comments, becomes a part of the DOM as nodes:
- document: the root entry point into DOM. 
- HTML tags are ELEMENT NODES. 
- Text nodes, #text, can be found in the document or as part of an ELEMENT NODE. A text node contains only a string. It may not have children and is always a leaf of the tree. There cannot be text (nor space or special characters) before the `<head>` tag and all text found after `</body>` will be moved inside the `<body>`.
- comments: sometimes we can put information there, it won't be shown, but JS can read it from the DOM.