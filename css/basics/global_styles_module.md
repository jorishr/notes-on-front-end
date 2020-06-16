# Global styles module
What you include in the _global.scss file can differ from project to project but these are some recommendations:

## Border, margin and padding
Margins will be 0 by default for all elements when you use a reset style sheet but not padding and border.

Box-sizing is advisable as it simplifies things. But take into account that you may have to change that to accomodate certain features.
```CSS
* { 
    padding: 0; 
    border: 0; 
	box-sizing: border-box;
}
```
## Images
Images may force you to scroll horizontally when they are very large. Avoid this by setting a max-width and auto height.
```CSS
img {
    max-width: 100%; 
    height: auto;  
}
```
## Anchor tags
You want consiste styles for all your links, in line with the brand color scheme. These styles can be set in a seperate module but very basic things may be used in the global module.
```
a {color:;}		
```
## Fonts
Apply a base font-family and font color to the body. This will streamline things from the beginning. 

Also provide similar back-up fonts. For example: 
```CSS
body {
   	font-family: 'Roboto', sans-serif;
   	color: #333;
	background-color: ;
} 
```
Also think about a background-color. This can be a slightly lesser white or lesser black that is the fall-back for when your site has loading issues.

## Headings
Some common features may be defined in the global styles or in seperate partial file.