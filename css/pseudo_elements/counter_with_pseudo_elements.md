# CSS Counters
Table of contents
- [CSS Counters](#css-counters)
	- [Markup and CSS](#markup-and-css)
	- [Styling and repositioning counters](#styling-and-repositioning-counters)
	- [Ordered lists](#ordered-lists)
## Markup and CSS
If you have various section titles that need numbering or an ordered list. You can fully customize and automate that with pseudo elements.

For example:
You can hard code into HTML 
```
div.container
	1. Title
		p
	2. Title
		p
	3. Title
		p
```
Or just write the title in HTML and give each heading a class. In  CSS use the class::before pseudo element and use the COUNTER and CONTENT properties to add the NUMBERS and style them.

On the container div you set the COUNTER-RESET property. The counter name is especially important if you are going to include multiple counters. The name ensures they are independent from each other.

On the title class you increment the counter each time such a class is found and add the counter_number to the CONTENT property:
```CSS
.container {
	counter-reset: 'counter_name';
}
.title::before { 
	counter-increment: 'counter_name'; 
	content: counter(counter_name) '. ';
}
/*
You can simply add a string with a dot or a dash to the content property to create seperation.
*/
```
## Styling and repositioning counters
Example: create round circles with a border and the number centered in the middle.

Set the title class to position relative and the title::before pseudo element to position absolute. Negative left will pull the counter number outside the containing element.

Make it into a square and then add the border-radius to create the circle.

Use flexbox to center the content.
```CSS
.title {
	position: absolute; 
	counter-reset: 'counter_name';
}
.title::before {
	counter-increment: 'counter_name'; 
	content: counter(counter_name);
	position: absolute; 
	left: -2.5em;
	top: -.5em;
	background: white;
	width: 2em;
	height: 2em;
	box-sizing: border-box;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
```
## Ordered lists
When working with ordered lists you undo the default counter and set the counter-reset property on the ol element element. The counter-increment happens on each list items. 
