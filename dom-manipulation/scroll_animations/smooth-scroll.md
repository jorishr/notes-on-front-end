# Smooth Scrolling
Table of contents
- [Smooth Scrolling](#smooth-scrolling)
	- [Description](#description)
	- [jQuery](#jquery)
	- [Pure CSS](#pure-css)
	- [Smootscroll.js](#smootscrolljs)

## Description
When a `<nav>` link is clicked in a menu, the page is scrolled to the corresponding section. Without a scroll animation it has the same effect as changing to another page. To make this transition smoother you can animate it through dragging out the scrolling over a longer period of time, 1 second for example.

The animation is set on the body and html elements and uses the scrollTop property. Selecting both body and html is helpfull for browser compatibility.

The section to navigate to is stored in the HREF element of the link and the ID attribute of the page section itself.

## jQuery
Wrap the entire code in function that loads the code only when the document is fully loaded. Usually this is not a problem as most js scripts are referenced at the bottom of the page. But sometimes, as in Wordpress, it may get loaded in the `<head>` of the page, so it is a precautionary measure.
```javascript
$(document).ready(function(){
	const scrollLink = $('.scroll');
	scrollLink.click(function(e) {
    	e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000 );
  });
})
```
Add a `.scroll` class to the MENU LINK ELEMENTS and set the href attribute to `href="#<section-id>"`. On each page-section set attribute `id="<page-section>"`

Add an event listener to the each link element. When it is clicked, the body and html get an animation attached. 

The animation duration is one second and the animation that we target is the scrollTop property.

To indicate where to scroll to we need to gather the reference to the page section that is stored in the HREF attribute. 

From that section we extract the number of pixels it is offset from the top of the pag, using the `offset().top` method.

Thus we get `body.animate({scrollTop: value;});`

The `event.preventDefault();` prevents the default action from happening, in this case moving to the link stored in the href attribute. Without this, there would be nothing to animate anymore as the default action would already make the page jump to the corresponding page section.

`this.hash` reads the href attribute of the keyword `this`, and gets the part of the URL beginning with #. So if the anchor looks like:
`<a href="someURL#foobar">` you extract #foobar

The `.animate` property can contain any css property, combined with a duration:
`body.animate(property: value, <duration>)`

## Pure CSS
In the newer browsers you can use the css propery SCROLLING-BEHAVIOR and set it to smooth.

You need to setup the html the same way with nav links that have a href attribute referencing the id of a page section. In the css you target the page-section .class and add the property:
```
//HTML
<a href="#section1">section1</a>
<section id="section1"></section>
//CSS
html { scroll-behavior: smooth; }
.section1 { scroll-behavior: smooth; }
```

## Smootscroll.js
This a lightweigth script that you can use to avoid the heftier jQuery file. You create a new instance of the SmoothScroll constructor for each element and indicate the duration.
```javascript
const scroll = new SmoothScroll('.navbar a[href*="#"]', { speed: 500 };
```