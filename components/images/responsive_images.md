# Images and responsive desigm
- About responsive images
- Cropping and art direction adjustments
- Adjusting images for different screen resolutions
- Combining crop and resolution specific adjustmenets
- Full width images vs sizes
- Testing different image resolutions on the same screen

## About responsive images
Images have inherent dimensions. A 500px wide img will be pixelated when stretched beyond this size. Thus, we have to take into account:
- image dimensions
- device dimensions,
- screen resolution

Work with responsive images in TWO situations:
- (a) when cropping and art direction need to be adjusted for smaller/bigger screens
- (b) when image resolution and file size are important for fast loading times

Basically we are trying to solve TWO PROBLEMS:
- make images fit into mobile layouts while respecting their intrinsic size 
- avoid making the user download unnecessarily large image files.

We accomplish (a) by making images always stretch to fill 100% of their container AND limiting the container size with an inline max-width style.

For (b), we use "srcset" to optimize for screen resolution, srcset plus "sizes" to optimize for device width, and finally the picture element for full manual control over which image file is displayed.

It is best to work with different sizes of the same image (high res, low res). So you let the browser decide which image to pick based on the device dimensions and resolution.

Retina displays have 2x or 3x the number of pixels per inch than standard displays and therefore need higher resolution images. Thus if you want a 500x250 image to display correctly it actually needs to be 1000x500.

## Cropping and art direction adjustments
If the cropping of an image or the content of the picture does not display well on smaller or bigger screens then serve differently cropped images for each screen width by using the
picture element.

IMPORTANT: the order of the code matters! From big to small!
```HTML
<picture>
	<!-- screens >= 1200px get adapted img -->
	<source media='(min-width: 1200px)' 
			srcset='images/photo-big.jpg'/>
	<!-- screens >= 760px get adapted img -->
  	<source media='(min-width: 760px)'        
          	srcset='images/photo-tall.jpg'/>
	<!-- fallback option -->
  	<img src='images/photo-small.jpg' alt="description"/>      
</picture>
```
While it is possible to get an image to adjust for different screen types it gets complicated real quick. Reserve this method for when you try to do something real fancy with support of a designer. In general the srcset plus sizes method below should suffice.

## Adjusting images for different screen resolutions
Even if the image displays well artistically on all screens, there is no need to have small devices download high-res files. Use the image element with srcset adjustments:
```HTML
<img 	srcset="smallPic.jpg 570w, 
				mediumPic.jpg 1200w, 
				largePic 1920w" 
		alt="desciption">
```
Now the browser will pick automatically which file has to be downloaded based on the screen it is working with. The choice of the browser is guided by the width we specified: 
- upto 570 pixels: small  
- upto 1200 pixels: medium  
- from 1920 pixels and up: large  

## Combining crop and resolution specific adjustments
Use the picture and source element as above with the media query and include a srcset instead of the regular src attribute.
```HTML
<picture>
	<!-- screens >= 1200px get adapted img, retina screens can get the hi-dpi resolution --->
  	<source media='(min-width: 1200px)'        
   			srcset='images/photo-big.jpg 1200w, 
					images/photo-big-hi-dpi.jpg 2400w'/>
	<!-- screens >= 760px get adapted img, retina screens can get the hi-dpi resolution --->
  	<source media='(min-width: 760px)'        
  	        srcset='images/photo-tall.jpg 760w, 
					images/photo-tall-hi-dpi.jpg 1520w'/>
	<!-- fallback options --->
  	<img srcset='images/photo-small.jpg 480w, 
				 images/photo-small-hi-dpi.jpg 960w' 
		alt="description"/>      
</picture>
```

## Full width images vs sizes
The browser will always assume that an image has to take up the full width of the screen and thus selects the image that is best suited for this purpose. 

However, if you work with images that do not take up all the page than you have to specify their maximum width with the SIZES property in the HTML.
The example from above get an extra attribute sizes:
```HTML
<picture>
	<!-- screens >= 1200px get adapted img, retina screens can get the hi-dpi resolution --->
  	<source sizes="(max-width: 1000px) 100vw 1000px" 
	  		media='(min-width: 1200px)'        
   			srcset='images/photo-big.jpg 1200w, 
					images/photo-big-hi-dpi.jpg 2400w'/>
```
## Testing different image resolutions on the same screen
Use placeholder files that can be easily identified in chrome dev tools.

Create a copy with an -i added to the filename and insert the resolution into the image picture as written number. This ways it is easy to change the filenames in HTML, and to read on the screen which image is used by the browser: `photo-big.jpg` and `photo-big.jpg-hi-dpi`

Before you start your project you need various versions of each image. The dimension of each image will give a good indication about the media queries you have to use with them.
- large 1920w; large-hiRes 3840w  	--media="(min-width: 1380px)"
- medium 1380w; medium hiRes 2760w 	--media="(min-width: 990px)"
- small 990w; small-hiREs 1980w 	--media="(min-width: 640px)"
- smallest 640w; smallest hiRes 1280w

Big screen size width: 1920px, half of that 960px is a good width for content mobile in portrait-mode: < 400px