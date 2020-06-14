# Modal
The HTML markup is straigthforward: a div container with content that is hidden by default through the CSS base style. Javascript code will trigger an additonal class that makes the modal visible and display on top of every other element.
```CSS
.modal {
	display: none; 
	/* or opacity: 0*/
}
.isVisible {
	display: block;
	z-index: 10;
}
```
## Blur background
If the modal does not take up the entire screen and leave some underlaying content visible on the sides you can blur out those underlaying elements using a box-shadow.
The box-shadow does not affect other elements and does not cause scrolling. You simple use a shadow SPREAD of 100vw.
```CSS
.modal { 
	box-shadow: 0 0 0 100vw rgba(0, 0, 0, .35) 
}
```