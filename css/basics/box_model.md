# CSS Box Model
Table of contents
  - [Box model](#box-model)
  - [Box-sizing](#box-sizing)
  - [Borders](#borders)
    - [Style, width and color](#style-width-and-color)
    - [Shorthand code](#shorthand-code)
    - [Circles and rounded corners](#circles-and-rounded-corners)
  - [Padding](#padding)
  - [Margins](#margins)
    - [Shorthand 2 values](#shorthand-2-values)
    - [Shorthand 4 values](#shorthand-4-values)
    - [Shorthand 3 values](#shorthand-3-values)
    - [Margins vs position](#margins-vs-position)
    - [Margin direction](#margin-direction)
    - [Margin collapse](#margin-collapse)
## Box model
The CSS box model is a set of ruleshat define how every web page on the Internet is rendered. CSS treats each element in your HTML document as a box with a bunch of different properties that determine where it appears on the page.

Each box element has a content, border, padding amd margin. 

The padding is the space between the content and the border. 

The margin is the space added between the box(border) and other elements on the page.

Note that padding has a background color equal to the element content but margins are transparent.

Also, padding is included in the click area of an element, while margins are not.

## Box-sizing
By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. 
  
This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added.

When you change this property from content-box to border-box the browser will include any border and padding in the values for calculating width and height. 
  
Thus if you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much more predictable to size elements.

## Borders
### Style, width and color
You can set each property individually on the top, right, bottom or left. The most frequently used border styles are: solid, dotted, dashed, double, 3D.
```
border-right: solid green 5px;
```
### Shorthand code
```
border: solid red 5px;
// style, color, size
```  
###  Circles and rounded corners
The border-radius property adds a rounded edge to the corners. To create circles from a containing div or images you set the radius to half the width of the element or use 50%. 

The result is a circle regardless of the size in px. However, for a perfect circle the width and height properties need to have equal values.

## Padding
Padding allows the content of the element to 'breath' as it creates some space around it. This is usefull for readability but can also be used for spacing between elements without having to use specific positioning properties.

The default styling of browsers differs, thus it is recommended to reset margins and paddings to 0 at beginning of the stylesheet.

## Margins
Marges kunnen worden uitgedrukt in pixels maar beter is het gebruik van relatieve waarden bijv. auto of 50%, 25%, em, rem, etc.

You can set margins on all sides or just specific sides of the box.

### Shorthand 2 values
Margin with two values means the Y-axis and X-axis: 
```    
margin: 10px 20px 
```
Thus 10px on the top and bottom and 20px on the left and right.

### Shorthand 4 values
When using the four values the order is top, right, bottom, left.
```    
    margin: 10px 15px 25px 30px;
```
### Shorthand 3 values
When using three values the order is top, X-axis (left and right), bottom:
```    
margin: 10px 5px 20px 
```  
### Margins vs position
You can use margins instead of position:absolute; when you want to keep the element inside the flow of the page and spread the elements relative to  oneanother.
  
### Margin direction
Het is aanbovelen marges slechts in 1 richting te gebruiken maw, gebruik margin-left dwars over de pagina en margin-bottom om een item naar onder te
duwen. Dit maakt je code voorspelbaar en makkelijker om aan te passen EN is vooral van belang omwille van margin collapse.

### Margin collapse
The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the two individual margins. 

Dus bottom: 20px en top: 12px wordt 20px. 
  
Bij negatieve marges is het ook de som van de grootste positieve and kleinste
negatieve marge. Als beide negatief zijn dan wordt de kleinste negatieve marge weerhouden.

Dus 20px en -10px wordt 10px. Terwijl -10px en -15px wordt -10px.
  
Om dit verkomen kan een er een transparante div tussen zetten met een top of bottom marge van 1px. Die zal dan collapsen in het grotere orgineel. Je kan
ook werken met pseudo elementen.