# Pseudo Elements
Table of contents
- [Pseudo Elements](#pseudo-elements)
	- [About pseudo-elements](#about-pseudo-elements)
	- [How it works](#how-it-works)
	- [Use cases](#use-cases)
		- [External link icons inside text](#external-link-icons-inside-text)
		- [Expand the clickable area](#expand-the-clickable-area)
		- [Custom underline for headings or text links](#custom-underline-for-headings-or-text-links)

## About pseudo-elements
Pseudo elements are used to add content before or after the CONTENT of other elements without changing your HTML markup very much. 

The pseudo element is part of the containing element, but comes before or after the CONTENT of that element. You can check that in the console.

Pseudo elements won't work on image elements.

Syntax: use double colons. Single colons are for pseudo classes, like :hover. 

##  How it works
By itself adding a pseudo element to an existing class does not nothing: thus `p::before { color: green; }` will not be visibile. 

You need to add a CONTENT property. That content can be empty. 

In the example below we create a small green square that will be inserted just INSIDE the containing element and just BEFORE the containing element CONTENT.
```CSS
p::before {
	content: '';
	background-color:green;
	display: block;
	width: 50px;
	height: 50px;
}
```
## Use cases
###	Badges
Add pseudo element after a title, with content: 'NEW' as a BADGE (similar to bootstrap badges).

###	Quotations
Add quotation marks to a paragraph or title:
```CSS
p::before { content: 'open-quote'; }
p::after { content: 'close-quote'; }
```
### External link icons inside text
Select the a-tags with href="http" attribute and a fontawesome link icon:
```CSS	
a[href^="http"]::after {
	font-family: 'Font Awesome 5 Free';
	content: '\f35d';
	font-weight: 900;
	font-size: .8em;
/*
The content refers to the font awesome icon identifier.
*/
}
```
### Expand the clickable area
Set the button or clickable element to position: relative; The width and height are for the expanded area. The positioning as you see fit.
```CSS
button:before {
	content: ' ';
	position: absolute;
	top: -35px;
	left: -35px;
	width: 140px; 
	height: 140px;
}
```
### Custom underline for headings or text links
See my Codpen for a working example: [custom underline](https://codepen.io/jorishr/pen/PooRper)

Add `::before` to the selector and set the width to a percentage of the heading. The height in pixels will give you a line. The content is empty.

Important is the z-index as the underline may overlap the y or j. Use inline-block to better control the dimensions of the pseudo-element.
```CSS
h2 { 
	position: relative; 
	z-index: 1; 
	display: inline-block;
}
h2::before {
    content: '';
    position: absolute;
    left: -.05em;
    bottom: -.15em;
    z-index: -1;
    width: 35%;
    height: 5px;
    border-radius: 25%;
    background: red;
}
```
The custom underline can be animated. You can start with an underline that is only 50% of the width and use transform: scaleX(1); to fully expand on :hover. Or have it shrink to half the width on :hover.

Use the transform-origin property to play around for the best effect.
```CSS
h2:hover::before {
  transform: scaleX(.5);
}
```