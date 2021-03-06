# DOM Navigation
Table of contents
- [DOM Navigation](#dom-navigation)
	- [Surrounding nodes of a selected element](#surrounding-nodes-of-a-selected-element)
	- [NodeLists](#nodelists)
		- [Live vs Static](#live-vs-static)
		- [Iteration](#iteration)
		- [Array methods](#array-methods)
	- [HTML Collection](#html-collection)
	- [Navigate element nodes only](#navigate-element-nodes-only)
		- [Manipulating attributes and text](#manipulating-attributes-and-text)
	- [Searching for element nodes](#searching-for-element-nodes)

## Surrounding nodes of a selected element
Once you selected an element you may want to manipulate elements around it. The methods firstChild, lastChild, parentNode and next/previousSibling are simple to understand.
```
document (root)
	-> document.documentElement (<html>)
		-> document.head (<head>)
		-> document.body (<body>)

				-> parentNode
previousSibling <-	div	-> nextSibling 
				-> childnodes
					-> firstChild
					-> lastChild
  
elem.hasChildNodes()	//-> true/false
elem.childNodes		//-> Nodelist
```
Each node has a `nodeName` and a `nodeValue` property. The nodeValue for a text nodes is the text itself, the nodeValue for an element nodes is the value attribute (`value=""`), usually null for a DIV.

Some DOM types have additional properties that can be used to navigate or access parts of the element, a `<table>` for example has additional properties like: 
```
table.rows	//-> collection of <tr> elements in the table
tr.cells	//-> collection if cells <td> and <th> inside a <tr>
```
## NodeLists
The above properties return the specified node as a NODE OBJECT. If there are multiple objects you get a NODE LIST OBJECT, an iterable array-like datastructure.

NodeList objects are collections of nodes, usually returned by properties such as `Node.childNodes` and methods such as `document.querySelectorAll()`.

The number of elements in nodeList is found in the .length property.

### Live vs Static
Some nodeLists objects are live and get updated when a change happens in the DOM. Example: `<node>.childnodes`

Other nodeLists objects are static and will not reflect such changes. This is the case of the `querySelectorAll()`.

### Iteration
Iterating over a nodeList object can be done with a for-loop or a for...in-loop.

Do not use a for...in-loop as it may show you object properties that are not usefull like length and item properties.

Most modern browsers support the `forEach()` method as well.

### Array methods
To use array methods like `.filter` you can convert the nodeList collection into an real array:
```Javascript
let elemArray = Array.from(document.body.childNodes);

```
## HTML Collection
A HTML Collection is similar to a nodeList and only contains element nodes. Elements can be targeted by name, id or index position in the collection, where the nodeList is limited to index position targeting only.

HTML collections are live and get updated with DOM changes.

HTML Collection are return by the `getElementsBy*` selector methods such as:
`getElementsByClassName` and `getElementsByTagName`.

To iterate over them proceed as with a nodeList.

## Navigate element nodes only
To exclude #text and comment nodes when targetting html tags you can use the following identifiers:

`parentElement`, `previous/nextElementSibling`, `first/lastElementChild`, `children`
```Javascript
document.body.children	
//-> HTML Collection
```
Usually the `parentElement` and `parentNode` are the same thing, except for the `<html>` tag because its parent is the root document which is not an element tag.
```Javascript
document.documentElement.parentElement	//-> null
document.documentElement.parentNode	//-> #document (root)
```

### Manipulating attributes and text
If you selected an element node and want to modify text inside that element you have to target the text node inside the element. That text node can be accessed by the `innerHTML` property. The nodeValue for the element node itself is null or the attribute value of value="".

Manipulating other element attributes can be done as well: `elem.setProperty(property, value)`. To change an attribute value on the `:root` html element in css use `document.documentElement.setProperty(property, value)`.

## Searching for element nodes
All methods `getElementsBy*` return a live collection. Such collections always reflect the current state of the document and auto-update when it changes.

- by ID
When using `document.getElementById('<id>')` there can be only one element that is also available as a global variable unless that variable is overwritten by your own JS code.

This selector return an HTML Element node.

- query selectors
The query selectors are STATIC and do not update automatically when new elements are added/removed to the DOM.

When using the `querySelector()` it returns the FIRST element that matches a given CSS style selector. Thus all CSS selectors can be used: #id, class, elements, pseudo selectors, etc..

When using the `querySelectorAll()` you get a NODELIST that represents a list of the document's elements that match the specified group of selectors.

A NODELIST can be iterated over with the `forEach()` method and can be CONVERTED into an array using `Array.from()`.

Example, find all currently `:active` or `:hovered` items: `querySelectorAll(:hover)`

- matches, closets, contains: 

There is `elem.matches(<css selector>)` to check if an element matches the given CSS selector.

There is `elem.closest(<css>)` to look for the nearest ancestor that matches the given CSS-selector. The element itself is also checked.

The `elemA.contains(elemB)` returns true if `elemB` is inside `elemA` (a descendant of elemA) or when `elemA == elemB`.