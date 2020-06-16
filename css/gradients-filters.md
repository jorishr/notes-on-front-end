# Gradients and filters
Table of contents
- [Gradients and filters](#gradients-and-filters)
	- [Gradients](#gradients)
		- [Vertical gradient](#vertical-gradient)
		- [Horizontal gradient](#horizontal-gradient)
		- [Diagonal gradient](#diagonal-gradient)
		- [Multi-color gradients](#multi-color-gradients)
		- [Radial gradients](#radial-gradients)
		- [Fill percentage of available width or height](#fill-percentage-of-available-width-or-height)
		- [Repeating gradient to create patterns](#repeating-gradient-to-create-patterns)
		- [Generic dark/light gradients](#generic-darklight-gradients)
	- [Filters](#filters)

## Gradients
Gradients are a good way to add some subtle styling to otherwise plain background colors. Gradients can be linear or radial and are set onto the background or background-image property.

It is advisable to add simple backup background-color for when something goes wrong or the user has a legacy browser.
```CSS
.div{
	width:100px;
	height: 100px;
	background-color: blue; 
	
	background: linear-gradient(white, blue);
}
```
When using gradient on the body element make sure it has height or width specified at 100vh or 100vw.

In the options you can set the color and the direction of the gradient. 

### Vertical gradient
```CSS
div {
	background: linear-gradient(to right, white, blue);
 	background: linear-gradient(to left, white, blue);
}
```
### Horizontal gradient
```CSS
div {
	background: linear-gradient(to top, white, blue);
}
```
### Diagonal gradient
```CSS 	
div {
	background: linear-gradient(to bottom right, white, blue);
}
```
### Multi-color gradients
```CSS
div {
	background: linear-gradient(to bottom right, white, blue, 			yellow, green)
}
```
### Radial gradients
```CSS
div {
	/* from center */
	background: radial-gradient(white, blue);
	/* horizontal */
	background: radial-gradient(to left, white, blue);
	/* vertical */
	background: radial-gradient(to top, white, blue);
	/* diagonal */
	background: radial-gradient(to bottom right, white, blue);
	/* multi-color, diagonal */
	background: radial-gradient(to bottom right, white, blue,  			yellow, green);
}
```

### Fill percentage of available width or height
This will start at an angle and have red fill 60% of the screen, the blue STARTS at 60%.
```CSS
div {
	background: linear-gradient(45deg, red 60%, blue 60%)
}
```

### Repeating gradient to create patterns
Repeat the gradient pattern every x pixels:
```CSS
div {
	repeating-linear-gradient(red 0%, purple 50%) 
}
```
### Generic dark/light gradients
The more pratical approach to gradients is to define a custom variable in sass and apply it to your elements, independent of the color they might have. It will always add a subtle effect that always looks good.

The light gradient creates a gradient that starts as fully white but 0 opacity and transitions to a white with 25% opacity.

The dark gradient does the same thing but in black.
```CSS
:root {
	--gradient-light: 
		linear-gradient(145deg, 
			rgba(255,255,255,0), 		rgba(255,255,255,.25)
		);

	--gradient-dark: 
		linear-gradient(145deg, 
			rgba(0,0,0,0), 
			rgba(0,0,0,.25)
		);
}
```
To add this property to the style declarations use the var() function on the background-image property.
```CSS
.box { 
	background-color: green; 
	background-image: var(--gradient-light)
}
.box { 
	background-color: red; 
	background-image: var(--gradient-dark)
}

```
## Filters
Apply a filter to images. Examples are grayscale, dropshadow or blurring an image (reveal on scroll, or blur on click).
```CSS
img {
	filter: grayscale(100%); 
	filter: blur(5px); 
	filter: drop-shadow(5px 8px 10px gray);
}
```