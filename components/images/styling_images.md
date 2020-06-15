# Styling images with CSS
- Basic markup and styling
- Advanced positioning example
- Section image background with solid bottom line
- Image zoom effects
-   
## Basic markup and styling
With future ANIMATIONS or ADVANCED POSITIONING in mind it may be best to put the image element inside a container div.

To avoid an image forcing the browser to scroll horizontally because it is too wide, set a max-width of 100% and let the height be automatically calculated based on the image inherit dimensions.
```CSS 
img { 
    max-width: 100%; 
    height: auto; }
```
## Border-radius
Border-radius can applied directly to an image element for rounded corners OR it can be set on the containing div.

Set the width and height of the div equal to the width and height of the image (this works best with square images). Apply border-radius to the div.
Example: image as a circle 
```HTML
<div class="imgContainer">
    <img src="" alt="" width="100">
</div>
```
```CSS
.imgContainter { 
    border-radius: 50px; 
}
```
## Advanced positioning example
Example: pull up an image half its height outside the container div. 

This re-positioning has NO effect on the other elements inside the containter div. They will remain in place as if the image was still at its original position. 

However, this creates an unwanted gap. To pull the other items up: use negative bottom margin on the image containing div, equal to the number of pixels you pulled the image upwards.

The re-positioning outside the containing div may create a problem with the elements positioned above. Therefore you can add "padding-top" equal to the size of the image that sticks out.
```HTML
<div class="container">
    <div class="container__photo">
        <img height="100">
    </div>
    <h1>Name</h1>
    <p>Description</p>
</div>
```
```CSS
.container { padding-top: 50px; }
.container__photo {
	transform: translateY(-50px);
   	margin-bottom: -50px;
    /* Or use position relative
    position: relative;
     	top: -50px; 
    */
}    
```
## Section image background with solid bottom line
This example has two tricks:
- container div of the image with a border-bottom property 
- mind the gap: set image css to display: block;

Default display for images is inline and in-line elements get assigned a little gap or whitespace below the line because of characters such as the letter "g". Use display:block; to remedy this.
```HTML
<div class="section-container">
    <div class="container__photo">
        <img height="100">
    </div>
    <h1></h1>
    <p></p>
</div>
```
```CSS
.section-container { border-bottom: 10px; }
.container__photo { display: block; }
```
## Image zoom effects
The image element has to be inside a figure element and the figure element inside a container div. The container needs to have a set width and height.

The figure element comes with margins by default that you best set to 0.

The image gets a width: 100%;

LOGIC
When you "zoom" you enlarge the image through setting a width of more than 100% or a transform: scale(). This will create an overflow on the figure element, thus you set that to overflow: hidden;

You can transition the animation as you please.

For working example see [Image zoom effect on hover](https://codepen.io/jorishr/pen/NQNYxb) on my Codepen.