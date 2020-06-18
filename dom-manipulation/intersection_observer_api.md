# Intersection Observer API
Table of contents
- [Intersection Observer API](#intersection-observer-api)
- [About](#about)
- [How it works](#how-it-works)

# About 
The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task that caused performace issues.

The Intersection Observer API lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount. 

This way, sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit.

In short, the traditional event listener needs to be constantly running, while the Observer API allows for that code to run only when an intersection occurs.

# How it works
You initiate a new observer that takes in a callback fn and options.
```Javascript
const observer = new IntersectionObserver(callback, options)

// To call the method you created use:
observer.observe(<elementToObserve>)
```
The callback function takes in the arguments ENTRIES and the observer itself.
```javascript
function(entries, observer) {
	entries.forEach(entry => {
		console.log(entry); 
		console.log(entry.target);}
})

const options = { 
	root: null,
	threshold: <0 to 1>,
	rootMargin: <>px		
}
```	
Root is the point of reference to observe: set to `null` or `{}` means it is the viewport that is the point reference. 

Threshold: 1 means that 100% of the element that is being observed/monitored needs to be on the viewport. If it is not the callback will not run. At default the value is zero, the slightest pixel of the element on the viewport will fire up the callback.

By adding a `rootMargin` you displace the reference point up/down or left/right a number of pixels.


## Example: change navigation bar styles on scroll
The standard way of doing this is to add an EVENT LISTENER to the window and on scroll below a point (offsetTop) you add/remove a css class.

With the Intersection Observer API you observe a section of the page. As it leaves the viewport, you add the css class. When it re-enters the viewport, you remove the class.
```Javascript
const header = document.querySelector('header');
const sectionOne = document.querySelector('.hero-section');

const sectionOneOptions = {};
const sectioOneObserver = 
	new IntersectionObserver(function(entries, 						sectionOneObserver){
			entries.forEach(entry => {
				//console.log(entry.target);
				//<WHAT TO DO>
			})
}, 	sectionOneOptions);
	
sectionOneObserver.observe(sectionOne);
```
The code that we want to run, is to ADD a css class when the hero section leaves the page, thus when it is no longer INTERSECTING with the page. In other words, when `entry.intersecting` is false.
```Javascript
if(!entry.intersecting){
	header.classList.add('nav-scrolled');
} else {
	header.classList.remove('nav-scrolled')
};
```
To have this effect kick in before the section is scrolled of the page completely you can play with the rootMargin in the options.
```
options { rootMargin: -200px 0px 0px 0px }; 
```
This will kick in the effect when the section 200px away from dissappearing from the page.