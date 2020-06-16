# Line-height
Table of contents
- [Line-height](#line-height)
	- [Leading](#leading)
	- [Units](#units)
	- [Vertically center an in-line element](#vertically-center-an-in-line-element)

The line-height property sets the height of a line inside a box. It's commonly used to set the distance between lines of text.

## Leading
LINE HEIGHT is the space between lines of the same paragraph. This is also called the "LEADING" of the paragraph, that can be in/decreased. You can use 1, 1.25, or 1.5 OR a percentage based on the font-size. 

Thus 20px font and 150% line-height corresponds to 30px.

When line-height = height the text line will take up the entire available space.

Recommendations: 
1. always be on the side of too much rather than not enough spacing
2. be cosistent with padding and margins throughout the page


## Units
In pixels.
In unitless numbers value.
In percentag of font-size.

The recommended line height is set to `1.5`. 

This is a unitless value, meaning that the line height will be relative to the font size. Thus a number that will be multiplied with the current font-size to set the line height.

A fixed line height in px, pt, cm, etc. of for example `25px` gives you exactly 25 pixels between the lines of a paragraph.


## Vertically center an in-line element
Set the line-height in px to the height of the element.
```CSS
.inline-center-with-line-height {
	height: 100px;
	line-height: 100px;
	white-space: nowrap;
}