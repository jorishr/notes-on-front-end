# CSS Flexbox
Table of contents 
- [CSS Flexbox](#css-flexbox)
  - [Flexbox vs CSS Grid](#flexbox-vs-css-grid)
  - [Flex containers and flex items](#flex-containers-and-flex-items)
  - [Aligning flex items and flex direction](#aligning-flex-items-and-flex-direction)
    - [Values for justify-content and align-itmes](#values-for-justify-content-and-align-itmes)
  - [Flex-wrap and grid-like layouts with flexbox](#flex-wrap-and-grid-like-layouts-with-flexbox)
  - [Flexbox and margin auto](#flexbox-and-margin-auto)
  - [Manipulating individual flex-items](#manipulating-individual-flex-items)
    - [Order](#order)
    - [Vertical alignment](#vertical-alignment)
    - [Flex shorthand property](#flex-shorthand-property)
    - [Example: responsive three column layout with header and footer](#example-responsive-three-column-layout-with-header-and-footer)
    - [Example: two column layout with fixed sidebar](#example-two-column-layout-with-fixed-sidebar)

Flexbox aims at providing a more efficient way to lay out, align and   distribute space among items in a container, even when their size is   unknown and/or dynamic.

The main idea behind the flex layout is to give the container the ability to alter it's items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). 

A flex container expands items to fill available free space, or shrinks them 
to prevent overflow.

The flexbox layout is direction-agnostic as opposed to the regular layouts that are top-down. You can flex in the inline direction and cross axis direction.

## Flexbox vs CSS Grid
Flexbox calculates everything in a single direction, the content can wrap over various lines but it basically is calculated as one long line of elements.

CSS Grid calculates on both rows and colums at the same time, thus adjustments
are made based on what happens both on the rows and columns.

Both flexbox and grid can be combined and once browser compatibility is no longer an issue Grid is probably superior for major layout constructing while flexbox is the complent to easily position elements within GRID ITEMS.

Use flexbox to lay out your web pages as much as possible, reserving floats for when you need text to flow around a box (i.e., a magazine-style layout) or when you need to support legacy web browsers.

The hard part is not the coding itself but getting a clear picture of how items should relate and behave on different screen sizes. Use a piece of paper and draw the boxes to get a solid idea about what you have code.

## Flex containers and flex items
All direct children of the container defined as flexible become flex items. Those items can be manipulated individually (and become a flex container themselves for elements inside) but the main function of the items is to tell the flex container how many items it has to work with and line-up.

You manipulate the position of flex-items through a declaration at the parent level element, i.e. the flex-container.

The container is set to `display: flex;` if you want the container to be a block  level element. If you want the container to behave as an inline element than you set `display: inline-flex;`.

## Aligning flex items and flex direction
Flex-items can be aligned on the main axis or cross axis. 
  
The main axis uses the property justify-content and the cross axis uses  align-items. 
  
By default the main axis will be the X or horizontal axis. This is represented by the property FLEX-DIRECTION set to ROW. When switching the value to COLUMN the main axis becomes the Y or vertical axis.

The START value for both justify-content and align-items will be left and top by default but when using `flex-direction: row-reverse;` the start and end for justify-content will be switched. Similar thing for column-reverse.
```
123456  becomes  654321
789              987
```
```CSS
.flex-container {
    display: flex;
    justify-content: center;
    align-items: flex-end; 
    flex-direction: row;
}
```
### Values for justify-content and align-itmes
- Stretch: De stretch value rekt de flex-items uit tot de hele hoogte van de
flex-container, ongeacht de hoogte van de elementen die in het flex-item zitten. Voorwaarde is dat de container een height heeft. 

  Common use case for this behavior is creating EQUAL HEIGHT COLUMNS with a  variable amount of content in each one. 
- Baseline: De baseline zet alle flex-items ter hoogte van de basislijn van het hoogste flex-item. Zie reference guide at CSS-Tricks for a visual example.
- Align-content: This property only applies when the flex container has more than one line and there is extra space that is not filled up.

  Then align-content can re-distribute the multiple lines with flex-items over the available container space. See reference guide at CSS tricks for a visual example.

  The difference with align-items is that align-items only deals with the 
  current line. Alsod see flex-wrap below.  

## Flex-wrap and grid-like layouts with flexbox
Het voordeel tov een float-based grid is dat je de orde, richting en grootte   van de container en child elementen automatisch kan aanpassen aan de  mogelijkheden van de viewport. 

Het standaard flexbox gedrag zal de flex-items op één lijn FORCEREN door de width ervan aan te passen zodat ze passen in de container op 1 lijn.

Om de container child elementen of flex-item te spreiden over meerdere lijnen gebruik je `flex-wrap: wrap`. Het resultaat is een layout die op een grid gaat gelijken.
```CSS
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap-reverse;
  flex-wrap: nowrap;
}
```
Met `wrap-reverse` wordt het start en eindpunt van de wrap op de cross-axis
omgedraait. Dus het wrappen of uitlijnen over meerdere lijnen gebeurt van onder naar boven, ipv van vanboven naar onder.
```
1. Wrap-reverse
    
flex container div
  flex-items 123456 
  flex-items 789
// becomes ->
flex container div
  flex-items 789
  flex-items 123456 
  
Default: no-wrap
    
flex container div
  flex-items  123456

Wrap
    
flex container div
  flex-items    12234
  flex-items    56
```  
Note that wrap does not kick in when there is ample space on one line to fit all the elements. 

Example: responsive navBar
```CSS
.navigation { 
  display: flex; 
  flex-flow: row wrap; 
  justify-content: end; 
}
@media (max-width: 800px) {
  .navigation { 
    justify-content: space-around; }
  }
@media (max-width: 400px) { 
  .navigation { 
    justify-content: column; 
  }
}
```
##  Flexbox and margin auto
If the flexbox has a height and the flex-item has both width and height set then `margin: auto;` can perfectly center the item inside the container on both axis. 

This relies on the fact that a margin set to auto in a flex container absorbs extra space. So setting a margin of auto will make the item perfectly centered on both axis.  

## Manipulating individual flex-items
### Order
De basis volgorde is de orde uit de html markup. Met de ORDER property kan je een flex-item een x aantal positie doen opschuiven naar links of rechts. De basiswaarde is nul. Een negatieve waarde is positie opschuiven naar links, een  positieve waarde is verschuiven naar rechts.
```CSS
.flex-item {
  /* default */
  order: 0; 
  /* move 1 place to the right */
  order: 1; 
  /* move 1 place to the left */
  order: -1;
}
```
###  Vertical alignment
Het vertikaal uitlijnen van een individueel flex-item in een flex container: Soms wil je dat een bepaald item een uitzondering maakt op de uitlijning die je hebt gezet voor alle flex-items op container niveau.  
```CSS    
.div { align-items: flex-start; }
.flex-item { align-self: flex-end; }
```
### Flex shorthand property
The way in which multiple flex-items take up the available space can be  determined with the FLEX property. This is shorthand for three properties:
```
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
  
```
The default is flex: 0 1 auto; 

The second and third parameters are optional. Thus if you write `flex: 2;` this means `flex-grow: 2;` and default values for the other two.

Flex-grow defines the ability for a flex item to grow if more available space in the container is available. By default you let the browser handle this but when you want to take control you do two things: 
- let the flex-items all grow evenly by using `flex-grow: 1;` 
- give different positive values to each flex-item.
  
Thus if one item is set to `flex-grow: 2;` and the other to `flex-grow: 1;` the first one will try to take up twice the amount of the available space as the others.

The flex-shrink works the same way for shrinking when the space in the flex-container gets tigther. And here the default value is 1.
  
The flex-basis defines the default size of an element before the remaining  space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword: `auto, min-content, fit-content`. 

With flex-basis the item will grow and shrink when more or less space is available. It is NOT fixed width but establishes a baseline value.

### Example: responsive three column layout with header and footer 
The html markup:
```
  header
  main
  aside
  aside
  footer
```
The base style for mobile is full-width flex-items and flex-flow: row wrap. If you set the flex-items to flex-basis 100% they will stack, even with `flex-direction: row;` because they will wrap on seperate lines.

On medium screen you let both aside columns share a row by setting flex-basis to auto, which means it will go from 100% to auto while leaving the flex-grow at 1.

On large screens we set the order and make sure main fills up the available   space twice as fast as the asides.
```CSS
.container { 
  display: flex; 
  flex-flow: row wrap;
}
.aside, .main, .header, .footer { 
  flex: 1 100%; 
}
@media all and (min-width: 600px) {
    .aside { flex: 1 auto; }
  }
  
@media all and (min-width: 800px) {
   .main { flex: 2 }
   .aside-1 { order: 1; }
   .main    { order: 2; }
   .aside-2 { order: 3; }
   .footer  { order: 4; }
  }
```
### Example: two column layout with fixed sidebar
A practical example could a two column layout with a fixed-width sidebar for ads. The sidebar will always be 100px and the remain viewport real estate is  distributed over the other items at a ratio of 2 to 1.
```CSS
.container { display: flex}
.flex-itemA { flex: 1; }
.flex-itemB { flex: 2; }
.flex-itemC { width: 100px;}
```