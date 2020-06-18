# Navbar style changes on scroll
Table of contents
- [Navbar style changes on scroll](#navbar-style-changes-on-scroll)
- [jQuery](#jquery)
	- [Intersectional Observer API](#intersectional-observer-api)
	- [Vanilla JS](#vanilla-js)
		- [Slide into view on scroll](#slide-into-view-on-scroll)
		- [Shrink on scroll](#shrink-on-scroll)
		- [Hide on scroll/show on scroll up](#hide-on-scrollshow-on-scroll-up)
		- [Sticky navbar beyond a scroll reference point](#sticky-navbar-beyond-a-scroll-reference-point)

# jQuery
Detect the scroll: when the `scrollTop` is more than the height of the navbar. Toggle a css class
```javascript
var $nav = $("#mainNavbar");
$(document).scroll(function () {
	$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});
```

## Intersectional Observer API
With the Intersectional Observer API you observe a section of the page. As it leaves the viewport, you add the css class. When it re-enters the viewport, you remove the class.
```javascript
const header = document.querySelector('header');
const sectionOne = document.querySelector('.hero-section');
const sectionOneOptions = {};
const sectioOneObserver = 
	new IntersectionObserver(function(entries, sectionOneObserver){
		entries.forEach(entry => {
			//console.log(entry.target);
			//do smth
		})
	}, sectionOneOptions);
sectionOneObserver.observe(sectionOne);
```
The code that we want to run, is to ADD a css class when the hero section leaves the page, thus when it is no longer INTERSECTING with the page. In other words, when `entry.intersecting` is false.
```javascript
if(!entry.intersecting){
	header.classList.add('nav-scrolled');
} else { header.classList.remove('nav-scrolled') };
```
To have this effect kick in before the section is scrolled off the page completely you can play with the rootMargin in the options.
```
options { rootMargin: -200px 0px 0px 0px }; 
```
This will kick in the effect when the section is `200px` away from dissappearing from the page.

## Vanilla JS
The standard way of doing this is to add an EVENT LISTENER to the window and on scroll below a point (`offsetTop`) you add/remove a css class.

The `onscroll` property of the `GlobalEventHandlers` mixin is an event handler that processes scroll events.
```
//target.onscroll = functionReference;
window.onscroll = () => {do smth};
```
### Slide into view on scroll
Set a `position: fixed;` and `top: -<X>px;` whereby the negative top position is equal to the height of the bar.

In JS use the `window.onscroll` method and trigger an action when the scroll goes beyond a trigger point.
```Javascript
const navBar = document.querySelector('.navbar');
let scrollValue = document.body.scrollTop;
window.onscroll = () => {
	if(scrollValue > 20){
		navBar.style.top = '0';
	} else {
		navBar.style.top = '-50px'
	}
} 
```
### Shrink on scroll
This is similar to the example above. If the user has scrolled beyond a certain point, a `scrollValue`, you change the styles. If the user comes back up below that threshold, you revert back to previous styles.

### Hide on scroll/show on scroll up
Give the navbar a `position:fixed;` and `top: 0;`. Then you need to track the scrolling positions. If the NEW scrolling position has a higher value than the PREVIOUS position, the user is moving down. If not, he's moving up. 

Track the scrolling value with `window.pageOffsetY` value. 
```javascript
const navBar = document.querySelector('.nav-bar');
let basePosition = window.pageYOffset;
window.onscroll = () => {
	let currentPosition = window.pageYOffset;
	if(basePosition < currentPosition){
		navBar.style.position = '-50px';
	} else {
		navBar.style.position = '0';
	}
	basePosition = currentPosition;
}
```
IMPORTANT: Don't forget to set the basePosition value to the currentPosition value to track subsequent scrolling actions.

### Sticky navbar beyond a scroll reference point
The navbar is located not at the vary top but below a hero section, for example. When the user scrolls down and beyond the navbar position, the navbar becomes sticky on top.

Create a css class that can be added through JS.
```CSS
.sticky { position: fixed; top: 0; width: 100%; };
```
Store the vertical position of the navbar to use it as a reference.
```javascript	
const navBar 	= document.querySelector('.nav-bar');	
const navBarPos	= navBar.offsetTop; 
	
window.onscroll = () => {
	let currentPos = window.pageYOffset;
	if(currentPos > navBarPos){
		navBar.classList.add('sticky');
	} else {
		navBar.classList.remove('sticky');
	}
}
```