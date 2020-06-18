# jQuery
Table of contents
- [jQuery](#jquery)
	- [About](#about)
	- [Adding jQuery](#adding-jquery)
	- [jQuery selectors](#jquery-selectors)
	- [Clean jQuery code](#clean-jquery-code)

## About
jQuery is a DOM manipulation library that makes it easier to handle events, create animation and manipulate pages.

A library is code (a single file), with mainly functions, that have been written to facilitate various task. Adding a library to a project means you can now access and use all that pre-written functionality.

In practice jQuery helps with: 
- creating, selecting and manipulating elements
- animate elements and add effects
- add event listeners
- make HTTP requests(AJAX)

The DOM API has lots of features already built-in, such as `querySelectorAll`, etc., so you can do everything in regular JS without external dependency. Often there are better performing native alternatives that are faster than jQuery.

It is often not necessary to load ALL those methods. For animations for example you can use smaller libraries, specifically created for that purpose.

## Adding jQuery
- CDN link: add script tag to html head
- Locally stored: `npm install jquery --save` and in the JS module `import $ from 'jquery';`.

IN HTML load the jquery at the top, before the other scripts that depend on it are loaded.

Console check: `type $ or jQuery`, if no errors jQuery is loaded.

## jQuery selectors
The `$()` function is similar to the regular js `querySelectorAll()`. It expects a CSS style selector and returns ALL matching elements that can be found in the DOM.

## Clean jQuery code
Selecting elements, adding event handling and defining functionality in the same statements becomes difficult to read:
```javascript
$(".site-header__menuBtn").click(() => { console.log("hello") });
$("h2").onClick(function(){ console.log("hello") });
```
Seperate functionalities (SOC):
1. use a class constructor for SELECTING ELEMENTS
2. define eventHandling method
3. toggle method for toggling classes on elements
```javascript	
class MobileMenu {
	constructor(){
		this.siteHeader = $('.site-header');
			this.menuIcon = $('.site-header__menuIcon');
			this.menuContent= $('.site-header__menuContent');
			this.events();
		this.toggle();
	}

	events(){
		this.menuIcon.click(this.toggle.bind(this));
	}

	toggle(){
		this.menuContent.toggleClass('site-header__menuContent--visible');
		this.siteHeader.toggleClass('site-header--expand');
		this.menuIcon.toggleClass('site-header__menuIcon--close')
	}
}
```