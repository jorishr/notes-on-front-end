# Creating shapes with HTML and CSS
- arrows
- squares
- skewed page section backgrounds
- upwards/downwards rounded page section corners
- clip path shapes 

## Arrows
Arrow are created with square boxes that have no width or height, only a border-width. Form a 45 degree corner with two sides.
```HTML
<p>Right arrow: <i class="arrow right"></i></p>
<p>Left arrow: <i class="arrow left"></i></p>
<p>Up arrow: <i class="arrow up"></i></p>
<p>Down arrow: <i class="arrow down"></i></p>
```
```CSS
.arrow {
  display: inline-block;
  border: solid black;
  border-width: 0 3px 3px 0;
  transform: rotate(-45deg);/* right */
  /*transform: rotate(135deg);/* left */ 
  /*transform: rotate(45deg); /* down*/  
  /*transform: rotate(135deg);/* up*/
}
```
The border-color order: top, right, bottom, left;

You can use pseudo elements ::before or ::after to add an empty element with a border to create an arrow shape to add to a tooltip. Position: absolute; to get it into place and position: relative; to the parent.

## Squares
Squares are block or inline-block elements with set width and height.

## Skewed page section backgrounds
You create .bg-container class that you can SKEW with transform: skewY(-2deg). 

Note that you need to skew the CONTENT back into the opposite direction.

Important is that the skew happens on both top and bottom. If you want the section to end with a straight edge you need another container that is bigger and has the same bg-color.

For example, the footer needs to be larger (height) than the container that generates the skew effect (.footer-bg-container) to compensate for skew and still keep a straight edge at the bottom.

ALTERNATIVE: use the clip-path property (see below). This is easier, as you don't have to correct the content.

## Upwards / downwards rounded cornsers on page sections
Pseudo elements can be used to create two overlapping shapes: a square and circle that create the illusion of upwards rounded corner. The circle has to be double the size of the square and white.

The downwards rounded corner edge is a simple border-radius equal to the size of the square.

## Clip path shapes
Use an empty div element.

Set the widht and height to 100% and position absolute as the clip path is drawn all over the screen, even though the actual shape only takes up part of it.

Give it a background-color.

The clip-path property can be generated with an online tool [CLIPPY](https://bennettfeely.com/clippy/).

You can use multiple elements and z-index to overlap and complement more then one shape.