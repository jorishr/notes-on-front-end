# Images
- The image tag
- The image url in CSS
- Dimensions
- Attributes
- Quality and formats 
## The image tag
Image content is defined outside of the web page that renders it. We can refer to these external resources from within an HTML document by using the absolute, relative, and root-relative URLs.

The image tag has a SOURCE attribute, which points to the image file you want to display. 

By default images are in-line elements and get assigned a little white space underneath. To correct this: use css display: block;
```HTML	
<img src="" alt="">
```
With future ANIMATIONS or ADVANCED POSITIONING in mind it may be best to put the image  element inside a container div.

Since HTML5 it is also best to put the entire thing inside a figure element.

## Image url in CSS 
In case we want to host our website at a URL that isn't at the root of a domain (e.g. username.github.io/travel-site vs username.github.io/) we'll want to change the way we reference background image files within our CSS. Don't use a root-relative path.

This way your code works in a wider variety of hosting situations once you're ready to push the site live to the public.
```CSS
.container {
        background: url('/assets/images/testimonials-bg.jpg') top center no-repeat;
        background: url('assets/images/testimonials-bg.jpg') top center no-repeat;
}
```
## Image element dimensions
By default, the image ELEMENT uses the INHERITED dimensions of the image file itself. Setting both width="" or height="" will cause the image to stretch. If you only set one property, the image will scale proportionately.

Dimension values are specified in pixels, and you should NEVER include a unit in HTML. Thus width="75". 

## Image element attributes
Adding the alternative text ALT attribute is good practice. It helps search enigines and screen readers. Screen readers will communicate this ALT="VALUE" to visually impaired people.

The TITLE attribute will be visible when a user hovers over an image.
```HTML 
<img    src="/images/red_flower.png" 
        title="A red flower" 
        alt="An image of a red flower">
```

## Image quality and formats        
Statistically speaking you can get away with reducing quality to 85% before the user notices a difference. Quality reduction can be done automatically or manually.
- LINUX: GIMP, PNGQUANT --strip or IMAGEOPTIM
- WINDOWS: FileOptimizer 
- Taskrunners/build tool plugins: imagemin and svgo packages

1.  PIXEL-based formats: jpg, png, gif.

Jpg is a format that can handle large color pallets without increasing too much in size.

PNG has the best quality but will scale up in size relatively fast. Suitable for icons, diagrams and logos.

For simple animations use gif format. Gif are problematic for transparency against a background.

Pixel-based images need to be twice the size you want them to appear on RETINA displays. Thus you may need two or four versions:
- 350x250 for standard mobile
- 700x500 for retina mobile
- 600x400 for standard screens
- 1200x800 for retina screens

2.  VECTOR-based graphics

Scale up and down without quality loss, great for responsive design and mobile. Problematic when text is present inside the image.