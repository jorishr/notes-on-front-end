# Node properties
Table of contents
- [Node properties](#node-properties)
  - [Nodetype, name and value](#nodetype-name-and-value)
  - [Innerhtml](#innerhtml)
  - [Outerhtml](#outerhtml)
  - [Textcontent](#textcontent)
  - [Root document properties](#root-document-properties)
  - [Element node attributes](#element-node-attributes)
  - [Data-attributes](#data-attributes)
  - [Style attributes](#style-attributes)
    - [Computed styles](#computed-styles)
  - [Class properties](#class-properties)
  
Each node can have properties specific to that node or nodetype but there also are common properties inherited from parent classes.

## Nodetype, name and value
```
elem.nodetype   //-> 1 for ELEMENT NODE, 3 for text nodes, 9 for root document
elem.nodeName	
elem.tagName    //-> only available for element nodes
elem.nodeValue  //-> text/comment nodes, value attribute for element nodes
elem.data       //-> same as nodeValue
```
## Innerhtml
The innerHTML property allows you to get the HTML inside the element as a string.

You can modify the innerHTML by setting `elem.innerHTML = '<new html>'` and do a full overwrite. To append html you can use += but this too overwrites the original:
```Javascript
elem.innerHTML += '<newHtml>' 
//is the same as 
elem.innerHTML = elem.innerHTML + '<newHtml>'
```

## Outerhtml
The outerHTML property contains the full HTML of an element. That's the innerHTML plus the element itself.

Writing to outerHTML does not change the element. Instead, it replaces it in the DOM by the new HTML. The old reference may continue to be used.

## Textcontent
The `textContent` property provides access to the text inside an element without the html tags.
```HTML
<div id="news">
  <h1>Headline!</h1>
  <p>Martians attack people!</p>
</div>
```
```Javascript
news.textContent		
//-> 'Headline! Martians attack people!'
```
Writing with textContent is considered to be the safe way to modify text inside an element.

## Root document properties
```Javascript
document.baseURI
document.domain
document.URL

document.body
document.head

document.cookie

document.forms		//-> HTML Collection
document.images		//-> HTML Collection

//To make the entire body of the document editable:
document.body.contentEditable = true;
```

## Element node attributes
```Javascript
elem.attributes                 //-> show all attributes
elem.hasAttribute('name')       //-> checks for existence
elem.getAttribute('name')       //-> gets the attribute value.
elem.setAttribute('name', value)//-> sets the value
elem.removeAttribute('name')  	//-> removes the attribute
```
## Data-attributes
Data-attributes written in HTML are available in an object called dataset.
```Javascript
elem.dataset	//-> DOMStringMap {...}
elem.dataset.<data-attribute>
```
## Style attributes
All style attributes are stored in the `CSSStyleDeclaration` object. To reset a style property you do not remove it but set the value of the attribute to an empty string.
```Javascript
elem.style 	//-> CSSStyleDeclaration {...}
elem.style.background = 'green';
elem.style.display = 'none';
elem.style.display = '';		
```
### Computed styles
The style property operates only on the value of the html element style attribute. So we can't read anything that comes from external CSS stylesheets using `elem.style`.

Also, the style attribute has the highest specificity in the CSS cascading algoritm. Thus anything you modify in through `elem.style` will override external css.

A computed style value is the value after all CSS rules and CSS inheritance is applied, as the final result of the CSS cascade.

To know what CSS styles are being applied by the external stylesheets you need to use the `getComputedStyle(element, [pseudo])` property.

You can store the computed styles as an object in a variable:
```Javascript
let computedStyle = getComputedStyle(document.body);
```

## Class properties
If we assign something to `elem.className`, it replaces the whole string of classes. Therefore usually you will work with `elem.classList` to which you can ADD, REMOVE or TOGGLE individual classes.
```Javascript
elem.classList.remove('class');
elem.classList.addd('class');
elem.classList.contains('class');	
//-> true/false
```