# Equal height colums
- Flexbox: Set the container to `display: flex;` and all columns to `flex: 1;` 

- Tables: Make the container element behave like a table and set full-width to expand the whole page. Make the elements inside the container behave like table cells.
```CSS
.col-container { 
	display: table; 
	width: 100%; 
}
.col { display: table-cell; }
```
Make them stack on mobile screen with a media-query by reverting to `display: block; width: 100%;`