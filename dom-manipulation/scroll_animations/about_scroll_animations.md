# Scroll Animations
Table of contents
- [Scroll Animations](#scroll-animations)
	- [Pure CSS](#pure-css)
		- [Snap scrolling](#snap-scrolling)
		- [Get the current scroll-height or scrollwidth](#get-the-current-scroll-height-or-scrollwidth)
		- [Show current scroll](#show-current-scroll)
		- [Scroll to a point on the page](#scroll-to-a-point-on-the-page)
		- [Scroll an element into view](#scroll-an-element-into-view)
		- [Prevent scrolling](#prevent-scrolling)
	- [Scroll animation libraries](#scroll-animation-libraries)

In general there are five ways to achieve animation effects when the user scrolls up or down a page.
- Pure CSS using the properties snap-scroll and scroll-behavior
- Vanilla JS
- Intersection Observer API 
- jQUERY 
- Specialist JS libraries.

The basic idea is use a set of functions and variables to detect the scroll and the amount of scrolling.

This can be done with an event listener but this is taxing on the browser's resources. A more efficient way is to use the Intersectional Observer API that allows callback functions that only get executed when the scroll is actually happening beyond a observed point on the page.

For basic webpage functionality Vanilla JS, Intersectional Observer API or jQuery will do the job. For more advanced animations you can look into specialist js libraries. Native CSS properties are the easiest to implement but lack browser support.

## Pure CSS
### Snap scrolling
Once you get to a specific section the scroll SNAPS into the full view of that section without having to scroll down further down or up.

Use the container element, usually the BODY element. On the SECTION ELEMENTS you add a scroll alignment.
```CSS	
body {
	scroll-snap-type: y mandatory; overflow-y: scroll;
}
```
To have a more subtle effect use:
```CSS
body {
	scroll-snap-type: y proximity; overflow-y: scroll;
}
.section {
	scroll-snap-align: start;
	scroll-snap-align: center;
	scroll-snap-align: end;
}
```
If you have a STICKY NAV BAR, you can account for that by adding a SCROLL PADDING:
```CSS
body {
	scroll-snap-type: y mandatory; 
	scroll-padding-top: 150px;
}
```	
### Smooth scroll to a page section
See [smooth scroll notes](smooth-scroll.md).
## Vanilla JS
### Coordinates
The document-relative coordinates are calculated relative to the document root element top edge. These coordinates (pageY/pageX) don't change when you scroll (like position: absolute);

Coordinates relative to the window are calculated like position: fixed relative to top window edge. These coordinates (clientY/clientX) do change on scroll.

### Get the width and height of the document
Because of browser inconsistencies the most reliable way to get the maximum height/width of a page is to get to use the max value from the following properties:
```Javascript
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
  	document.body.offsetHeight, document.documentElement.offsetHeight,
  	document.body.clientHeight, document.documentElement.clientHeight
);
```
### Get the current scroll-height or scrollwidth
Here too you can get browser inconsistencies but scrollTop/Left is pretty reliable. To be absolutely sure use the window page offset property:
```javascript
document.documentElement.scrollLeft
document.documentElement.scrollTop
window.pageYOffset;	//-> vertical offset
window.pageXOffset;	//-> horizontal offset
```
### Show current scroll
```javascript
window.addEventListener('scroll', function() {
  	elem.innerHTML = window.pageYOffset + 'px';
});
```
### Scroll to a point on the page
Scroll down or left x pixels set the property: `window.scrollBy(x, y);` to scroll the page to absolute coordinates relative to top left corner: `window.scrollTo(0,0);`.

### Scroll an element into view
```javascript
elem.scrollIntoView()		//-> elem at top of the window 
elem.scrollIntoView(false)	//-> elem at bottom of the window
```

### Prevent scrolling
```Javascript
document.body.style.overflow = "hidden";	//->page unscrollable
document.body.style.overflow = "";			//->scrolling resumed
```
The drawback of this method is that the scrollbar disappears. If it occupied some space, then that space is now free, and the content jumps to fill it.

The solution is to compare clientWidth before and after the freeze, and if it increased (the scrollbar disappeared) then add padding to `document.body` in place of the scrollbar.

## Scroll animation libraries
- GSAP (GreenSock Animation Platform)
- SCROLLMAGIC
- SAL.JS
- SCROLL-OUT