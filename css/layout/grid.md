# CSS Grid
Table of contents
- [CSS Grid](#css-grid)
  - [How the grid works](#how-the-grid-works)
    - [Grid lines](#grid-lines)
    - [Placing items on the grid](#placing-items-on-the-grid)
    - [Grid cells and grid area's](#grid-cells-and-grid-areas)
  - [Full page layout with grid](#full-page-layout-with-grid)
    - [Rows](#rows)
    - [Colums](#colums)
    - [Grid areas](#grid-areas)
    - [Example: card layout with grid area's](#example-card-layout-with-grid-areas)
  - [Grid-template shorthand](#grid-template-shorthand)
  - [Page section grids](#page-section-grids)
  - [Aligning items inside a grid cell](#aligning-items-inside-a-grid-cell)
  - [Align the grid itself insid a bigger container](#align-the-grid-itself-insid-a-bigger-container)
  - [Special grid functions](#special-grid-functions)
    - [Minmax()](#minmax)
    - [Repeat()](#repeat)
    - [Auto-fill vs Auto-fit](#auto-fill-vs-auto-fit)
  - [Grid amimations](#grid-amimations)
  - [Need to know](#need-to-know)
  
## How the grid works
To get started you have to define a container element as a grid with `display: grid;`. Then set the column and row sizes with `grid-template-columns` and `grid-template-rows`. Indicate place of the child elements in the grid by setting their `grid-column` and `grid-row` properties.

By setting up a container element as a grid container all child elements inside of it become GRID ITEMS. Even plain text will be converted into a kind of virtual element in order to fit it into the grid.
  
There is a GRID GAP, that is set to zero by default. A grid gap cannot hold any elements. You can differentiate between `grid-row-gap` and `grid-column-gap`.

### Grid lines
Each row and column have a number whereby the very first line, before the first column is the starting point or number 1.  
```
|1 column |2 column |3 column |4 column |5 column
```
Thus when selecting column three and four you have to select line 3 and 5.

You can explicitely name the lines. In the example below we create three rows:
```CSS
div {
  display: grid;
  grid-template-rows: 
    [line1] 20px [line2] auto [line3] 50px [end];
}
```
### Placing items on the grid
This can be done through the use of the `grid-area` property (easy), manually by using the properties `grid-column` and `grid-row` or automatically by setting the `grid-auto-flow: column/row;` on the grid container.

The example below will position the grid-item in the column track between line 1 and 3. And in the row track between line 2 and 5.
```CSS
.griditem{
  grid-column: 1 / 3;
  grid-row: 2 / 5;
}
```
If you don't specify an end line the item will span one track. Or you can specify the number of tracks to span:
```
.griditem {
  grid-row: 1 / span 3; 
}
```  
### Grid cells and grid area's
You can also define rectangular GRID CELLS and GRID AREA's. A grid cell is  the space between two row lines and two column lines.

A grid area can be just one GRID CELL or mulitple adjacent cells.

Elements INSIDE a GRID-ITEM can be positioned using flexbox or you use NESTED or SUBGRIDS (level 2).

## Full page layout with grid
All of the below is done on the GRID CONTAINER.

### Rows
With the property `grid-template-rows` you indicate the HEIGHT of each row you want to create. Thus `grid-template-rows: 100px 100px 100px; ` creates three rows of equal height. 

In the example below we will simulate a HEADER row, a HERO row, a MAIN row and a 
FOOTER row. 

If you use AUTO than the height or width will depend on the size of the content elements.
  
### Colums
Using the `grid-template-column` you indicate the WIDTH of each column. If you want to have sections span over multiple columns you have define the pattern first.

### Grid areas
Once the GRID is set up with rows and columns you have a grid of cells or AREA's that can be named and asigned to HTML elements.

When using the `grid-template-area` property you follow the pattern setup in the rows and columns. In the example below we have four rows and and four  columns thus you use 4 STRINGS with 4 words.

The first row has four areas that all get named the same and asigned to the
`.header` class with the grid-area's `"header"` property. This means the HTML 
element with the class `.header` gets assigned 4 grid areas on the first row.

Similarly, the footer element and the hero element get assigned the same   areas on row 4 and 2 respectively.
  
The main element only gets assigned one grid area on row 3, as well as the  sidebar element.
```CSS
.container {
  display:grid;
  grid-template-rows: 10em 50vh auto 10em;
  grid-template-columns: 1fr 5fr 2fr 1fr;
  grid-template-areas: 
    "header header header header"
    "hero hero hero hero"
    ". main sidebar ."
    "footer footer footer footer";
}  

.header { grid-area: header;}
.hero { grid-area: hero;}
.main { grid-area: main;}
.sidebar { grid-area: sidebar;}
.footer { grid-area: footer;}
```
### Example: card layout with grid area's
Here we create a card with two rows: a title row and a content row. The content row contains an image and a description.

The title row height is set to `min-content`, which will take the minimum height necessary for displaying the title box element, not more.

The second row is set to auto as it will depend on the size of the image and the description text.

We also create two columns, one for the image and one for the title and description.

Thus we have a 2x2 grid that we assign as follows:
```
|11 img |12 title
|21 img |22 description
```
```CSS
.card {
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "img title"
    "img description"
}

.card__img { grid-area: img; }
.card__title { grid-area: title; }
.card__description { grid-area: description; }
```
## Grid-template shorthand
The above setup can be shortened with the property grid-template whereby you write the following syntax:
```
grid-template: 
    "<row-area-names>" <row-height>
    "<row-area-names>" <row-height>
    ...
    / <column-width> <column-width> ...
```
Refactor the examples from above:
```CSS  
.card {
  display: grid;
  grid-template: 
    "img title" min-content 
    "img description" auto
    / 1fr 3fr;
}
.container {
    display: grid;
    grid-template:
      "header header header header" 10em
      "hero hero hero hero" 50vh
      ". main sidebar ." auto
      "footer footer footer footer" 10em
      / 1fr 5fr 2fr 1fr;
}
```
## Page section grids
Example: create a grid with 8 rows and 5 columns and a grid gap. You indicate for each element how much rows and columns it can span over.
```CSS
.container {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
}
.item--small {
  grid-row: span 1;
  grid-column: span 2;
}
.item--wide {
  grid-row: span 1;
  grid-column: span 4;
}
.item--big {
  grid-row: span 3;
  grid-column: span 5;
}
```
## Aligning items inside a grid cell
The grid items you place into the cells do not always fill that cell  completely. Thus to center, for example, paragraphs and titles inside the GRID CELL we can use `justify-items` and `align-items` on the GRID CONTAINER:

Justify will arrange the the items on the main axis (row), while align items will arrange the items on the cross axis (column). The default value is stretch.
```
justify-items: start, center, end; 
align-items: start, center, end;
```
Note that you can also set this property on the grid-items using the properties `align-self: center;` or `justify-self: center;` The shorthand property for a combination of both:
```
place-items: start, center, end;
```  
## Align the grid itself insid a bigger container
When all the grid-items have a fixed non-flexible width in px the grid cannot stretch by default to fill the container.In that case you can use the `justify-content` and `align-content` properties or shorthand `place-content` to position the grid inside its container.

There are more values possible: center, space-evenly, space-between and space-around. Some will split up the tracks and create gaps  

## Special grid functions  
### Minmax()
The minmax() property allows you to more precisely define the width or height of the tracks by setting a minimum value.

The example below will set the second column to be no less than `200px` while trying to occupy `1fr`.
```
grid-template-column: 200px minmax(200px, 1fr) 
```
### Repeat()
The repeat() function allows you to type less by creating x columns or rows of the same size. The example below will create 10 rows with min width of `200px` and a maximum of `1fr`.
```
grid-template-row: repeat(10, minmax(200px, 1fr);
```
### Auto-fill vs Auto-fit
You can let the browser do all the calculations by using auto-fill. The 
browser will calculate how many columns or rows it needs to fit the requrements.
```
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr); 

grid-template-columns: repeat(auto-fit, minmax(200px, 1fr);  
```
When using auto-fit, the items are fluid on big screens, thus grow beyond the defined 200px while auto-fill will create extra empty columns.

## Grid amimations
Example: set the width of the column and height of the rows by default to a slightly smaller value than what you eventually want. Upon loading the page or scrolling down you can use Javascript to add a class that modifies the grid-template-row/column values and decreases/increase the grid-gap.
  
## Need to know  
De CSS grid bestaat alleen binnen de CSS, niet in de DOM. Je kan dus niet de
DOM manipuleren en elementen erbuiten zetten (bijv. een vertikale lijn links)

Margin collapse does not happen when the grid is active. 

You can set grid on the BODY element for full page layout. But, use `height: 100%;` on both the body and html elements to avoid scroll bars 

To make a grid fully responsive you can go along way with the minmax() property but to make it work on smaller screens or super large screen you may have to re-arrange area's with MEDIA QUERIES.

To create a site for mobile or tablet views that can swipe left and right you can set the GRID on the BODY element with columns that have a width of 100%.
```
body { display:grid; grid-template-columns: repeat(6, 100%);}
```