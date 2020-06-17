# Creating column layouts with floats
Table of contents
- [Creating column layouts with floats](#creating-column-layouts-with-floats)
	- [Patterns](#patterns)
		- [Row](#row)
		- [Column split](#column-split)
		- [Padding and margins between columns](#padding-and-margins-between-columns)
	- [From floats to flexbox](#from-floats-to-flexbox)

The tutorial is based on the 'travel site' project. See project files for working example.

## Patterns
Multiple page-sections will have two or more columns. This means you can use a MODULE to store a basic column-layout class with modifiers to adjust for specific sections.

### Row
Group elements that are on the same line of a grid or column into a html container div with class `.row`. Each element of the row gets their own DIV and a class `.row__element`.

When using cards, make sure that there is a dedicated containing div for the cards.

Inside the `__row.scss` module you can define modifier classes to add columns.

For determining the width of the elements inside the columns use a 12 column pattern for calculations:
```	
1/3 - 2/3, thus 4 - 8. 
```
Give each column a seperate div and class.

### Column split
Voor de breedte van elke kolom moet je de berekening maken: hoeveel percent van de container width gaan je kolom en marges innemen? 

Bijv. 31% x 3 = 93% EN 7% verdeeld over marges links en rechts.

The naming of the classes given to the row elements can be based on the number of GRID COLUMNS each element takes up. For example, the image takes up 1/3 and the text 2/3. 

Assume a 12 column grid: 
```
image gets class row__4 -> 12 / 3 = 4
text  gets class row__8 -> 12 / 3 * 2 = 8
```
Doing so makes this class re-usable on other sections. 
```SCSS
.row {
	&__medium-4{
		float:left; 
		width:33.33%;}
}
```
It is important to use percentages or viewport vw to have responsive columns.

To makes this work on mobile screens you need to switch to single a column layout, which is the default static block behavior. Therefore add a MEDIA QUERY which only applies the columns row__4 from Medium screens onwards. 

### Padding and margins between columns
To create gaps or gutters, use a re-usable `&--gutter` modifier class on the `.row.`
```HTML
<div class="row row--gutter">
```
In the css we need to apply this not to the row but to the direct child elements:
```SCSS
.row {
	&--gutter > div {
		padding-right: 65px;
	}
}
```
This will upset the 12 column layout calculations above, therefore use the `box-sizing: border-box;` in the _global.css module for all elements. 

Note that the LAST COLUMN will also have this padding applied to it, which is not necessary. 

When removing the final gutter (padding-right) on the last column you may aslo disrupt upset the calculations: each column is now 1/3 and 2/3 including the padding (if border-box is active).

The solution is a negative margin for the `&--gutter` modifier class itself set to the size of the padding added to the div elements.

This makes the row 65px wider than it should be and will create an OVERFLOW with horizontal scrolling on the WRAPPER class. To correct this add the property `overflow: hidden;` to the wrapper div. 

The negative margin will still exist but is no longer visible.
 
If you want to make columns just a little bit wider or smaller on certain viewports you can use --modifier classes with media queries to adjust the width to for example 37% and 63%.
```
.row__medium-4--large
.row__medium-8--small
```
You basically override your own base style rule declarations to keep the original as re-usable code.

## From floats to flexbox
On certain viewports you may want to ditch the floats and use flexbox. Inside the media-query make the following changes:
```SCSS
@media (max-width: 400px) {
	.container {
		display: flex;
		
		& > div { 
			float: none; 
			flex: 1 auto; 
		}
	}
}