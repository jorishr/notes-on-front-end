# Lazy loading
Table of contents
- [Lazy loading](#lazy-loading)
	- [jQuery](#jquery)
	- [Intersection Observer API](#intersection-observer-api)

Lazy loading is a technique whereby an image is only loaded in when the user comes close the section that contains that image. It reduces data consumptions and speeds up loading time.

## jQuery
See jQuery docs.

## Intersection Observer API
In HTML replace the SRC attributes on the image tags with a DATA-SRC attribute. In JS select all elements with the data-src attribute.

The actual code to run upon intersecting is placed in a seperate function `preloadImg()` and what it does is copy the content of the data-src attribute into the SRC attribute.
```Javascript
const images = document.querySelectorAll('[data-src]');
const imgObserverOptions = {
	rootMargin: 0px 0px 400px 0px
}
const imgObserver = new IntersectionObserver(function(
	entries,
	imgObserver	
	){
		entries.forEach(entry => {
			if(!entry.isIntersecting){return;}
			else {
				preloadImg(entry.target);
				imgObserver.unobserve(entry.target);
			}
		});
}, imgObserverOptions);
```
Store the content of the data-set attribute in variable. Add that variable to the SRC attribute of the img. If for some reason no src attribute is present on the img, abort.
```javascript
const preloadImg = function(img) {
	let source = img.getAttribute('data-src');
	if(!img.src) { return; };
	img.src = source;		
}
images.forEach(image => {
	imgObserver.observe(image);
});
```
To avoid issues with browser-rendering you can setup your CSS with `min-width` and `min-height` for your images. By default this is ZERO for the image tags and by not loading them, your layout may get distored, especially with images next to each other. 
```CSS
img[data-src] { 
	min-width: 100px; 
	min-height:10px;
}
```