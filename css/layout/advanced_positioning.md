# Advanced positioning
Table of contents
- [Advanced positioning](#advanced-positioning)
	- [Horizontally centering inline elements](#horizontally-centering-inline-elements)
	- [Horizontally centering block level elements](#horizontally-centering-block-level-elements)
	- [Vertically center block level elements](#vertically-center-block-level-elements)
		- [Unknown width and height](#unknown-width-and-height)
		- [Known width and height](#known-width-and-height)
	- [Vertically centering inline elements](#vertically-centering-inline-elements)
	- [Calc for calculating space](#calc-for-calculating-space)
	- [The body element as a one column grid](#the-body-element-as-a-one-column-grid)

## Horizontally centering inline elements
Inline-level elements are easily centered by setting `text-align: center` on the containing parent element. This will also work for inline-block, inline-table, inline-flex, etc.

## Horizontally centering block level elements
Er zijn drie manieren om blok-level elementen horizontaal te centreren:
- met floats kan je niet echt centreren maar het wel simuleren met pseudo elements. Zie floats doc.
- margins: je zet de marges links en rechts op auto en daarmee komt het 	blok in het centrum van het parent element te staan. Opgelet! Dit werkt 	enkel en alleen wanneer het blok een specifiek ingestelde breedte aanwezig is (width). Use: `margin: 0 auto;` If multiple block-level elements need to be centered on the same row then you need to use the `display: inline-block`  property.
- css flexbox: set the container to be a flexbox and use the `justify-content: center;` property.

## Vertically center block level elements	
### Unknown width and height
- Flexbox: set `display: flex` on the parent element and use either `align-items: center;` or set the inner elements you want centered to use `margin: auto`, as this will apply in all directions.
```CSS
.parentDiv {
	display: flex;
	align-items: center;
}
.innerDiv { margin:auto }
```
- Relative-absolute positioning: Set the inner element to `position: absolute` and 50% from the top (or bottom) and then pull it back up (or down) half of its own height.

This is the clasisc way to go for centering a div inside another div.
```CSS
.container { position: relative; }
.innerDiv {
	position: absolute; 
	top: 50%;
	transform: translateY(-50%);
}
```
- CSS Grid: Set `display: grid;` to the parent element and use `align-items: center;` as in the flexbox example or use the shorthand `place-items: center;` which is shorthand for `justify-content: center; align-items:center`. With css grid the `margin: auto;` would do the trick as well.

### Known width and height
Using negative margins equal to half of that width and height, after you've absolutely positioned it at 50% / 50% will center it with great cross browser support. 
	
Be aware of the padding if no `box-sizing: border-box;` is used!
```CSS
.parent {
	position: relative;
}
.child {
	width: 300px;
	height: 100px;
	/*padding: 20px;*/
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -50px 0 0 -150px;
	/*margin: -70px 0 0 -170px;*/
}
```
## Vertically centering inline elements
Use equal padding top and bottom. If padding can not be used you can try 	the line-height property on the condition you know the text will not wrap by setting it equal to the height of the inline element.
```CSS		
.inline-element {
	padding-top: 30px;
	padding-bottom: 30px;
}	

.inline-center-with-line-height {
	height: 100px;
	line-height: 100px;
	white-space: nowrap;
}
```
## Calc for calculating space
Bijvoorbeeld een header van 100px en vervolgens wil je dat de div eronder 	de ganze hoogte van de pagina beslaat, min de hoogte van de header.
```
height: calc(100% - 100px)
```
Hetzelfde voor een sidebar van 50px en main content: 
```		
width: calc(100% - 50px)
```
## The body element as a one column grid	
Turn the body into a one column grid and center all elements inside by default.
```CSS
body {
	display: grid;
	grid-template-columns: 100%;
	justify-content: center;
}