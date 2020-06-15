# Image galleries
There many layout options when building galleries:
- floats
- grid
- multi-column layout
- flexbox 
- Bootstrap

See my Codepen for various working examples:
- [basic photo gallery with floats](https://codepen.io/jorishr/pen/LwEPmG)
- [basic animated gallery (floats layout)](https://codepen.io/jorishr/pen/RXNwEe)
- [responsive gallery with floats](https://codepen.io/jorishr/pen/xvbKOo)
- [responsive gallery with flexbox](https://codepen.io/jorishr/pen/PMwYmm)
- [responsive gallery with grid](https://codepen.io/jorishr/pen/Vowobg)
- [thumbnail gallery with lightboxes (grid layout)](https://codepen.io/jorishr/pen/QWWxdva)
- [advanced gallery animation](https://codepen.io/jorishr/pen/dyymwWm)
- [modal image gallery with navigation and caption](https://codepen.io/jorishr/pen/WNNaPQg)
- [image gallery with filters](https://codepen.io/jorishr/pen/ExxOZdQ)

## Style options
### Figure background color
Set a BACKGROUND-COLOR at the figure element and play with the OPACITY of the image element to let the background-color shine through. On :hover you change it to BLACK so that the overlapping text has good contrast for readability.

### Image width
By default set it to 100%, if you want to animate effects you can start at width: calc(100% + 50px); for example.

## Overlapping content: buttons and text on top of image
Create a markup such that the figcaption has two parts: a title or text that is visibile by default and a div container with additional content that becomes only visible on :hover. 

You can scale that content up first with opacity: 0; and scale(1.3); On :hover you create zoom out effect to scale(1) and opacity:1.

## Cut off corners of gallery items
Use a pseude element on the figure element with z-index:2; rotate it on an angle position it out of sight by default. On :hover you move it into place. Use a circle or rotated square to get the shape you want.
See my [Codepen](https://codepen.io/jorishr/pen/dyymwWm) for working example of animations.