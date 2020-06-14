# Lists   
The HTML specification defines strict rules about what elements can go inside other elements. In this case, ul elements should only contain li elements, which means you should never ever write something like this: 
```HTML
<ul>
    <p></p>
</ul>
```
The correct way is for UNORDERED list:
```HTML
    <ul>
        <li><p>list item</p></li>
    </ul>
```
Examples:
```HTML
<h3>Lijsten</h3>
<p>Een niet-genummerde lijst via ul tag</p>
<ul type="circle">
    <li>eerste bak Goudster</li>
    <li>tweede bak goudster</li>
</ul>
<ul type="square" contenteditable="true"> 
    <li>HOME</li>
    <li>SHOP</li>
    <li>ABOUT</li>
</ul>
```
## List attributes     
List types: square, circle, none

Contenteditable lets the user modify list items
## CSS styling 
```CSS
ul { 
    list-style-type: none; 
    list-style-position: outside;
    /*list-style-position: inside; the list item*/
    list-style-image: none;
    list-style-image: url(''); /*url path (image)*/
    /*SHORTHAND for type, position, image:*/            
    list-style: none outside none;
}
```
## Numbered list
Attributes: 
- reversed reverse numerical order
- type="A" letters instead of numbers
- type="I" roman numerals
- start="5" start counting at x
```HTML
<p>Een genummerde lijst via ol tag</p>
<ol reversed>
    <li><strong>eerste glas</strong></li>
    <li><em>tweede glas</em></li>
</ol>
```
## Nested lists
```HTML
<p>
    <ul>
		<li>eerste bak Goudster</li>
		<li>tweede bak goudster</li>
			<ul>
				<li>met 6 flesjes</li>
				<li>met 24 flesjes</li>
					<ul>
						<li>met korting</li>
						<li>zonder korting</li>
					</ul>
			</ul>
	</ul></p>
```