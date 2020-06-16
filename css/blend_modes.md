# CSS Blend modes
## Background blend mode
Use a color as background with and IMAGE on top of it and play around with the property: `background-blend-mode: <value>;`
```	
multiply/darken: emphasis on the darkest colors in the image with the background color blended in
	
screen/lighten: opposite of multiply, more emphasis on the lightest colors	

luminosity: blends in the background color into image
	
overlay: light layer on top of image
```
The results vary depending on the type of color you use in the background. Combining it with a gradient can get good results as well.

Instead of a bg color you can blend two images into each other as well but this a lot of try and error.

## Mix blend mode
The mix-blend-mode property works the same as background-blend-mode with the same values.

The difference is you apply it to stacked elements that you want to be partially see-through.

### Cutout text
Have an image background with on top a text container.
```
background-color: white;
color: black;
mix-blend-mode: screen; 
```
See my codepen for working example of [blend modes](https://codepen.io/jorishr/pen/BaaJzeB)