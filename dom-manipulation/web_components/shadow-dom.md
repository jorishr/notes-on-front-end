# Shadow DOM
Table of contents
- [Shadow DOM](#shadow-dom)
	- [What is a shadow DOM](#what-is-a-shadow-dom)
		- [The virtual DOM](#the-virtual-dom)
	- [Implementing a Shadow DOM](#implementing-a-shadow-dom)
		- [Shadow host element](#shadow-host-element)
		- [Templates](#templates)
	- [Examples](#examples)

## What is a shadow DOM
The context: CSS is global to the entire the DOM. This means that with one single css style rule you can target and affect any element in the application. 
A potential problem arises when add an external component to the app that is written with its own given set of classes in its markup. The styling may become unpredictable a classes and style rules may overlap.

The Shadow DOM is a locally scoped subtree that can be placed inside an element. That subtree is not affected by the global css style rules and can thus have its own autonomous style regime.Styles created inside the single Shadow DOM element are isolated and stays in the scope of that Shadow DOM. 

Shadow DOM is a tool used to build component-based apps and websites.

The difference between the regular DOM and a Shadow DOM is the local scope. Changes made to the regular DOM usually mean that the entire DOM needs to re-rendered, thus hindering performance. When having parts of the site into  chuncks of Shadow DOMS, those specific parts of the DOM can be targeted without a full re-render of the entire object model.

### The virtual DOM
The only thing which is common for both VIRTUAL DOM and SHADOW DOM is that they help with performance issues. 

Both create a separate instance of the Document Object Model. Virtual DOM is creating a COPY of the whole DOM object. 

The Shadow DOM creates small pieces inside of the DOM object which have their own, isolated scope for the element they represent.

## Implementing a Shadow DOM
### Shadow host element
Select an HTML element that is going to be the HOST element for the new DOM TREE.
`<div id="shadowHost"></div>`. In JS you select that HOST ELEMENT and create a new DOM root element.

To that new ROOT ELEMENT you can append child elements, most likely a template.
```javascript
const host = document.querySelector('#shadowHost');
const shadowRoot = host.attachShadow(shadowRootInit);

shadowRoot.appendChild(element);
//or
shadowRoot.appendChild(template>);
```
### Templates
A TEMPLATE is a HTML5 element that does not get rendered by default. It can contain style tags and regular html elements.
```HTML
<template id="template">
	<style>* { color: red; }</style>
	<div><p>Hello world!</p></div>
</template>
```
To RENDER, append the CONTENT to the `shadowRoot`:
```Javascript
const template = document.querySelector('#template').content;
shadowRoot.appendChild(template);
```
## Examples 
- [BBC](https://medium.com/bbc-design-engineering/goodbye-iframes-6c84a651e137)
- [Shadow DOM and Web Components](https://www.youtube.com/watch?v=pQOuHNm5seY)