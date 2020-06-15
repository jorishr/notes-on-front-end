# Bootstap grid
- basics
- column alignment
- column width
- multi-row inside a row with equal width
- column order
- nested rows and columns

## Basics: rows, columns and gutters
In a grid layout, content must be placed within columns and only columns may be immediate children of rows.

A basic example:
```HTML
<div class="container">
  <div class="row">
    	<div class="col-sm">
	<div class="col-sm">
	<div class="col-sm">
```
Rows are wrappers for columns. 

Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.

Columns have horizontal padding to create the gutters between individual columns. You can remove the padding from columns with .no-gutters on the .row. This also removes the margin from rows. 

Since ROW has -15px margins to counteract the gutters on the edges this can cause horizontal scrolling when you put extra padding or margins on the CONTAINER div. Thus use .no-gutters on the .row or don't use extra padding/margins on the container, or drop the .container div.

On rows that are not completely full (less than 12 columns) you can space the column automatically using mr-auto or ml-auto.

## Column alignment inside a row
Use the flexbox properties justify-content and align-items. 

Align-items-center/start/end will VERTICALLY align the column to the top, bottom or center of the row height.

Justify-content-center/start/end/around/between does the same thing HORIZONTALLY.

## Column width
If no width is specified as in the example above, Bootstrap will divide the 12 available columns evenly.

Also you can set the width of one column and the space left over will be distributed evenly over the remaining columns.

Thus .col .col .col col-6 means that the last column takes up 6/12 and the three remaining column get 2/12 each.
 
Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., .col-sm-4 applies to small, medium, large, and extra large devices, but not the first xs breakpoint).

Use col-{breakpoint}-AUTO classes to size columns based on the natural width of their content.

If you define too much columns (more than 12), then the excess will go to a new line.

## Multi-row inside a row with equal width
Create equal-width columns that span multiple rows by inserting a div.w-100 where you want the columns to break to a new line.
```HTML
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="w-100"></div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
```
The above Will result in: 
```
	row
		col	col
		col	col
	row
```
You may want this to happen only on or from certain MEDIA BREAKPOINTS, here only from md onwards:
```HTML	
<div class="w-100 d-none d-md-block"></div>
```

## Column order
In a column layout inside a row you can change the order of the columns div's by using the class .order:
```
	div.row
		div.col-md-4 order-3 order-md-1  
		div.col-md-4 order-1 order-md-3
		div.col-md-4 order-2 order-md-2
```		
The default would be to display each column in the order of the html. But through .order class you can alter that. In the example above we start with order 3-1-2 on small screens and from medium screens onwards things change again.

## Nested rows and columns 
In a two column grid you may have an image in one column and a text dominated column. You can further divide the latter with a ROW and COLUMN combo whereby you make the column 10/12 or 8/12 on medium and larger screens. This way paragraphs and titles have a natural wrapper in place already. It is not necessary nor required to use up all 12 available columns.