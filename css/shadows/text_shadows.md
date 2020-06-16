# Creating text shadows
Table of contents
- [Creating text shadows](#creating-text-shadows)
	- [Text shadow](#text-shadow)
		- [Glow](#glow)
		- [White text, black shadow](#white-text-black-shadow)
		- [Combining shadows](#combining-shadows)

## Text shadow
Use the css text-shadow property. 

There are various components to text shadows: the color, the blur and the off-set (x/y axis).
```CSS
p {
	text-shadow: <offset x> <offset y> <blur> <color>

}
```
The blur can lengthen and fade out the shadow. If you leave it at 0 the shadow will be solid.

The offset is usually very subtil with only a couple of pixels to the right and down.

### Glow
Without an offset and only blur you can create a GLOW effect.
```CSS	
h1 {
	text-shadow: 0px 0px 5px red; 
}
```
### White text, black shadow
Dark shadow offset, no blur. The rgba makes it subtle by setting opacity to just 10%.
```CSS
p {
	text-shadow: 2px 2px 0 rgba(0, 0, 0, .1); 
}	
```	
### White background, colored shadow 
Slight offset to the right, larger offset down, blur and green.	
```CSS	
p {
	text-shadow: 2px 5px 4px green; 
}
```
### Combining shadows
Combine two types of shadows with different color.
```CSS
p {
	text-shadow: 
		0px 0px 5px red, 
		-5px -5px 3px yellow;
}
```