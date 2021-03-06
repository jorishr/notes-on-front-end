# CSS Position Property
Table of contents
- [CSS Position Property](#css-position-property)
	- [Default](#default)
	- [Relative positioning](#relative-positioning)
	- [Absolute positioning](#absolute-positioning)
		- [Relative absolute positioning](#relative-absolute-positioning)
	- [Fixed positioning](#fixed-positioning)
	- [Sticky positioning](#sticky-positioning)
	- [Z-index](#z-index)

## Default
The default value for the position property of an element is `position:static`. When it is not static, the element is considered a to be a positioned element.

## Relative positioning
Relatief betekent gepositioneerd relatief tov van de positie waar het zich standaard bevindt in de static flow van de pagina.

De andere elementen rond dit element ondergaan geen wijziging. Zij zullen worden gerendered alsof het positioneerd element op z'n standaard positie zit. Dit kan dus voor overlapping zorgen.

Als je omliggende elementen wil laten meeschuiven dan kan je gebruik maken 	van een negatieve marge op het epositioneerd element gelijk aan de grootte van de verschuiving. 
```CSS
.positioned { 
	position: relative; 
	top: -10px;
	margin-bottom: -10px
}
``` 
The offset on can be on the x- or y- axis using top-right-bottom-left and 	this can include negative values. Various offsets can be combined.
```CSS
.class {
	position: relative;
	left: 100px; 
	right: -100px;
	top: 30px; 
	bottom: -30px;
}
```
## Absolute positioning
The positioning is now relative to the closest ancestor that is positioned as well. If there is no positioned parent element, the global browser window will become the reference.

Absolute positioning completely removes an element from the normal flow of the page, so the other elements are affected by it. 

Example: imagine a flex-container with three elements that are horizontally aligned with `justify-content: flex-start;`. You lift up the middle one to the top of the screen and the remaining flex-items will appear next to each other at the start as if the middle one doesn't exist. 

With a relative postioned flex-item this does not happen.

### Relative absolute positioning	
Requires a parent element to be positioned (relative, absolute, fixed or sticky). The positioned child element will be relative to the parent container.
Top left example:
```CSS
.container {
	position: relative;
}
.container-item {
	position: absolute;
	left: 50px;
	top: 50px;
}
```
/*
## Fixed positioning
Dit is identiek aan absolute: dus uit de flow van de pagina en je kan het herpositioneren relatief tov de linkerbovenhoek van de containing div of de browser window.

Het verschil is dat fixed op het scherm blijft wanneer je scrolt. Handig voor een menubar want het blijft op de aangegeven positie.

## Sticky positioning
An element with `position: sticky;` is positioned based on the user's scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (`position:fixed`). 

This is usefull for heading when scrolling. Once you scroll below the heading becomes fixed untill you reach the next section.
```CSS
div {
	position: sticky;
	top: -1px;
}
```
Important: the sticky element still stays within its container. Thus when you scroll beyond the bottom of the containing parent element it will no longer be visible.

If the containing div is the body, this is obviously not the case.

Example: have a button slide from underneath a text. Set `position: sticky `and `z-index: -1;`, plus a white background on the text. The btn will then be moving all the time in sync with scroll but only becomes visible on once you scroll to below the text.

## Z-index
Je kan de browser opdragen welke van de overlappende elementen als bovenste moet worden weergegeven met een index-waarde -1, 0, 1, 2. Dit werkt alleen voor elementen die gepositioneerd zijn (absolute, relative, fixed, sticky).

Dit is handig in combinatie met opacity (0 is onzichtbaar, 1 is solid) voor layering.