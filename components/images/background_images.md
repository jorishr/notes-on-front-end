# Full bleed background images
Important note: consider the fact that on mobile screens there may not be enough space for the background image to shine through. Plus, the background image consumes data. Thus consider replacing it with a white or colored background.

The HTML markup consist of a container div (can be a page section) and another div inside for the background image. That background image be added in three ways:
- regular image element inside div
- style attribute in html
- set in css via background-image: url()

For responsive design on mobile the background-image property may not display the same as on desktop. Therefore probably the best approach is with an image element inside a container div. 

Text or other elements you may want on top can be set inside another div an positioned absolutely in combination with a higher z-index to create the overlap.
```HTML
<div class="container">
    <div class="background-image"
         style="background-image: url()">
         <!-- or use an image element -->
         <img src="" alt="">
    </div>
</div>
```
```CSS
.container {
    position: relative;   
    height: 100vh;
}
.background-image {
    /* background-image: url("img_path") top center no-repeat;*/
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: 'similar to dominant color in image';
    background-size: cover;
    /* this resizes the background image to cover the entire container, 
    could cut edges.
    */
    z-index: -1;
}
```
## Pseudo element method + blur style
Use a ::pseudo element on the container and add a background to it. 
Add blur to the background image for special effect and reveal on hover.
```HTML
<div class="container"></div>
```
```CSS
.container {
    width: ;
    height: ;
}
.container::before {
    background-image: url(); 
    background-size: cover; 
    filter: blur(10px);
}
.container:hover::before {
    filter: blur(0);
}
```
## Background images and wrapper classes
If you have a background image that covers the entire section the wrapper class for standard margins and padding cannot be set on the same div because it would add padding left en right and so avoid the background image to fill the entire width of the screen.

Therefore, add a additional wrapper div.

## Other background properties
- background-size: contain; resize the background image to make sure the image
is fully visible
- background-size: 100%; of the parent container
- background-size: auto; original size, default
- background-repeat: no-repeat;
- background-origin: border-box: starts against the border top left
- background-origin: content-box: starts around the content of the boxmodel not the border or padding
- background-clip: The background-clip property defines how far the background should extend within an element. default: border-box. Use background-clip: content-box; in combination with
background-position: center;