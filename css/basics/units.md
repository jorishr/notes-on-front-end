# Units of measurement in CSS
Table of contents
- [Units of measurement in CSS](#units-of-measurement-in-css)
	- [REM](#rem)
		- [Simplified REM calculations](#simplified-rem-calculations)
	- [EM](#em)
		- [Margin modifiers](#margin-modifiers)
		- [Media queries](#media-queries)
	- [Viewport dimensions](#viewport-dimensions)
		- [VW and VH](#vw-and-vh)
		- [VMIN and VMAX](#vmin-and-vmax)
		- [Font-size units](#font-size-units)
	- [Fractions](#fractions)

## REM
The root font-size is usually set at 16px by the browser. One of the benefits of REM is the end-user can control the default font in the browser, which helps people with disability issues.

Thus calculate accordingly: if you need x px, convert into rem by dividing by 16. This lets you scale the website when users have other default settings. 

### Simplified REM calculations
The base size for 1rem is 16px, this makes calculations difficult:
```
10px = 0.625rem
12px = 0.75rem
14px = 0.875rem
16px = 1rem (base)
18px = 1.125rem
20px = 1.25rem
24px = 1.5rem
30px = 1.875rem
32px = 2rem
// Media Queries: 
480px = 30rem (16px base)
800px = 50rem (16px base)
```
A trick is to set the global font-size at the root to 62,5%: 
```CSS
html { 
	font-size: 62.5%; 	
	/* 10px */ 
}  					
h1 { font-size: 2.4em; } 
	/* 24px */ 
p { font-size: 1.4em; } 
	/* 14px */ 
```
## EM
EM is relatief tov de grootte bij het directe parent element en is nuttig bij paragrafen die moeten meegroeien wanneer de font-size groter wordt. 

Opgelet, em kan problematisch zijn bij het nesten van elementen. 

Voorbeeld: een basis div met font-size 10px. Het eerste genestte element aan 1.4em = 14px. Maar het tweede genestte element heeft het voorgaande als basis dus: 14px x 1.4 = 20px. 

### Margin modifiers
Modifiers classes for margins should be defined in EM not REM. This way the margins are relative to the font-size of the element.

### Media queries
For choosing breakpoints in media-querries there is no difference between using em or rem. 1rem = 1em = browser-set font size by default because your custom font-size declarations have no effect on the media breakpoints that only use the browser settings (16px).

## Viewport dimensions
### VW and VH
Als je een container de ganse hoogte of breedte van het scherm wil laten in-nemen dan kan je gebruik maken van width: 100%; of height: 100%; 

Het verschil met vh and vw is dat een percentage altijd gebaseerd is op het PARENT element. Viewport units zijn altijd gelinked aan het fysieke scherm.

Voorbeeld: Een website met height: 100vh en width: 15vw betekent dan 100% van de hoogte en 15% van de breedte. Voor bijv. een sidebar die mee schaalt met de grootte van het scherm.

### VMIN and VMAX
VMAX will depend on which one of the axis is bigger. If the screen height is more than the screen width (mobile), the Y-axis or HEIGHT is affected. On desktop however it will refer to the X-axis or the WIDTH.

VMIN will look at which unit is the smallest.

Example:
```CSS
.hero { height: 80vmax; } 
/* 
The element will take up 80% of the height on PORTRAIT oriented screens but 80% of the WIDTH on LANDSCAPE oriented screens.
*/
```
### Font-size units
It is usefull to set the font-size in VW as it becomes very responsive automatically. It can save you the use of an additional media-query. Although you still need a media-query for very big screens and super small screens.

For paragraphs however this does not work very well as it will scale too fast too rapidly.

Therefore, it is probably best to stick with pixels and rem.

## Fractions
The problem with manual calculations of space divided between a number of items is that it can become complex very fast. 33% 33% 33%, 2em margins...is not precise.

The solutions: use predefined layouts such as Bootstrap OR let the computer do the exact calculations using fractions. 

Example: 

Three boxes with equal width in fractions width:1fr; width:1fr; width:1fr; and set set margins to 2em.

Based on the viewport, the browser will calculate a fraction for each of the elements while accounting for the 2em margins.
 
In practice you'll find situation where you need a fixed width column while the remaining space can be divided between two more columns. 

When you set them to width: 2fr; and width: 1fr; you tell the browser to allocate one fraction of the remaining space to one column and two fraction to the other.  

It is recommended to think in ratios: 6fr 2fr 1fr.

Fraction are widely used when setting up a css grid whereby you define a minimum width that is fixed in px and a max-width in fractions using the minmax() function.