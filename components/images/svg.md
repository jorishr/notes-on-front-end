# Scalable Vector Graphics
  I.    ABOUT
  II.   CREATING SVG'S
  III.  USE SVG IN HTML
  IV.   STYLING/ANIMATING SVG'S
###############################

# About SVG
SVG is a language to describe graphics in 2D in XML and an svg element represents an object that can be manipulated through JS. SVG is basically made out math calculus to create shapes, not pixels. Thus, they can be recreated as plain code in HTML removing the need for addtional http requests.

The only disadvantage is that it can clutter your html code. 

It is suitable for rendering large areas in the browser, e.g. Google Maps, and it is resolution independent. Therefore it scales very well.

Another method for graphical representation would be the CANVAS element but that more suitable for gaming and drawing.

Examples: 
```HTML
<p>Circle</p>
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
<p>Rectangle</p>
<svg width="400" height="100">
  <rect width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
</svg>
```
## Creating SVG elements
Use tools such as CLIPPY or ADOBEXD. If you have a clip-path, polygon, circle or any other shape you can easily code that yourself by copying the math references in the corresponding html elements. Note: add CLASSES to the various components you want to control in CSS and JS.

When you have well structured SVG components, you can control not just the styling but also the ANIMATION of individual components.

Important components are the VIEWBOX and VIEWPORT. The canvas upon which the svg image is drawn is infinte. What we do control is the viewport, the area of the canvas we can see. Thus if you set the width and height of an svg to 250px, you could still draw the shape beyond 
that but it won't be visible.

The VIEWABLE AREA or VIEWPORT is controlled by the width and height you set to the svg, through CSS styling.

The VIEWBOX controls what happens inside the VIEWABLE AREA. It basically gives us zooming options. 

Example: viewBox="0 0 250 250". The latter two numbers refer to the viewPORT
(width and height) while the first two are the starting coordinates for the viewBox. By default it is 0 0, thus top left. If you change it to viewBox="100 100 250 250" then the viewable area has been move to right and down 100px. 

This is how SPRITES work. For example, every 100px a new icon start and to display an icon you move up/down left/right with the first two viewBox coordinates. In combination with zoom-in/out.

## Zoom in/out
If you enlarge the viewBox beyond the width and height that is specified by the CSS, you create a zoom in effect. If you specify values that are smaller you create a zoom out effect.
viewBox="0 0 500 500" is zoom in, as you have double the value in the viewbox compared to the size of the viewable area. 

## SVG markup in HTML 
Option one is to simply paste the entire code inside the svg element as above. Important, inspect your SVG file code. Once you're happy with it, MINIFY it. Then it fits on one line!

Tool to use: SVGOMG

Once the svg gets complicated is will take up too much space in your code. Option two is to make use of the use element and an #ID. That way the html code remains readable and the actual SVG is placed at the bottom of the HTML, out of sight.
```HTML
<!-- use svg-->
<svg>
    <use href="#exampleSvg"></use>
</svg>
<!-- original svg at the bottom of the html-->
<svg>
  <symbol id="exampleSvg"></symbol>
  <circle></circle>
</svg>
```

## Styling and animating SVG
When you use them inside your html code you can manipulate the style attributes with css. It depends on the makeup of the actual svg file but you can add classes to each component and use the fill property to change the color, for example.

If each component has a class you can add css animation to it as well, for example on
:hover you scale it up or down.

For more complex animations however check out the GSAP js library.