## Lightbox / Dimmed background
Dim everything behind an element to focus on a certain UI element.

Use an empty div as an overlay of the existing content and make it cover the entire page and add a dark transparent background:
```CSS
.dimmed {
    /* not affected by scroll */
    position: fixed; 
    top: 0; right: 0; bottom: 0; left: 0;
    background: rgba(0,0,0,.4) 		
} 
```
The lightbox get lifted out of the normal content flow and pulled to the front with z-index.
```CSS	
.lightbox {
    position: absolute;
    z-index: 1;	
}