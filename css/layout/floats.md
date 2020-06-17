# Floats
Table of contents
- [Floats](#floats)
	- [About floats](#about-floats)
	- [Clear floats](#clear-floats)
		- [Clear with an empty div](#clear-with-an-empty-div)
		- [Clear with the next child element](#clear-with-the-next-child-element)
		- [Clear with the parent container element](#clear-with-the-parent-container-element)
		- [Clear with pseudo elements](#clear-with-pseudo-elements)
		- [Summary](#summary)
	- [Simulate horizontally centering block level elements](#simulate-horizontally-centering-block-level-elements)

## About floats
The default HTML behavior for elements is to stack vertically in a single column and each block-level element fills 100% width of its parent element. 

The HEIGHT of each block is determined by the size of its content, UNLESS you specify a specific height.

By FLOATING an element you take control of it's horizontal position. Thus `float:left;` tells the browser to align the block element on the left side of the parent element.
- float: left; (top-left of the parent container)
- float: right; (top-right of the parent container)

Important! It also tells other surrounding elements (usually the one directly below) they can flow around the floated element, and no longer stack underneath it. They will appear next or in between floated elements. 

To correct or end this behavior use "clear" or "hidden overflow" techniques.

Het probleem met floats onstaat wanneer je card of image een heel verschillende hoogte hebben. Dan moet je extra code gaan schrijven voor 'wrapping' en 'clearing'. Dit kan je omzeilen met nieuwere technieken zoals CSS Grid en CSS Flexbox.

## Clear floats
### Clear with an empty div
An extra empty div container is added below the floating elements and gets a class that in css gets the clear property assigned to it: `.clear { clear: both; }`. 

This is sloppy because it adds a meaningless html element.

### Clear with the next child element
You tell the next block element in the same container to ignore any floats that came before it. Basically forcing the block element to go back to default HTML behavior using: `clear: both;` or `clear: left/right;`.

This works well but the next child element may get removed at a later stage in development and one may forget to update the clear property on the next new element.

### Clear with the parent container element
Add the "overflow" property to the parent element so it recognize the height of the floated elements inside it and takes up the height of the biggest floated element: `.parent { overflow: hidden; }`

You can check this behavior with a border or background-color.

This solution may conflict with wrappers on the parent element or may be hard to track if there are a lot of other elements inside the parent that preceed the floats. And, this type code is hard to re-use.

### Clear with pseudo elements
This type of code is re-usable and can be defined as a SASS mixin that can be inlcuded anywhere on the page.

It adds a pseudo element to the parent element that contains the floating elements.
```SCSS
@mixin clear {
	&::after {
		content:''; 
		clear: both;
		display: table;
	}
}
.parent {
	// on the parent div class 
	@include clear;	
}
```
### Summary
When you have an extra unfloated HTML element at the bottom of a container div, use the clear solution. Otherwise, add an `overflow: hidden` declaration to the container element or go for the re-usable code on larger projects.

## Simulate horizontally centering block level elements
This is a particular case for using an image centered in between two paragraphs that wrap their text around the image.

The html markup is simple: 
```
div.page
	img
	div.left
	div.right
```
In the css you add a pseudo class to both the left and right div. The div on the left-side gets asigned a pseudo class which `float: right` and you give it the height of the image and 50% of the width of the image. 

This creates a space on the right edge of the div with the paragraph text wrapping around that space.

On the other side you repeat the same thing in reverse.
```CSS
#left:before, #right:before { 
  content: ""; 
  width: 125px; 
  height: 250px; 
}
#left:before { 
  float: right; 
}
#right:before { 
  float: left; 
}
```
The image then is set to `position: absolute;` and `top: 0;` to fill the gap. Or you can create a div above and use a negative margin to push it down.