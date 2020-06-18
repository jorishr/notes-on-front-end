# Parallax scrolling
Table of contents
- [Parallax scrolling](#parallax-scrolling)
	- [About](#about)
	- [Pure CSS](#pure-css)
	- [Vanilla JS](#vanilla-js)
		- [Measuring scroll](#measuring-scroll)
		- [Multiple elements, different factor](#multiple-elements-different-factor)
	- [jQuery](#jquery)
	- [LAXX library](#laxx-library)
## About
Parallax of bewegingsparallax is het verschijnsel dat de schijnbare positie van een voorwerp ten opzichte van een ander voorwerp of de achtergrond varieert als het vanuit verschillende posities bekeken wordt.

## Pure CSS
If you have hero section with a `background: url();` you can easily create a parallax-like effect with the following property: `background-attachement: fixed;`

The default value is `scroll` and making it fixed does the trick.

## Vanilla JS
See my Codepen for a working example of [parallax scrolling](https://codepen.io/jorishr/pen/eYYKyVp)

Use the DOM event `scroll` to trigger the code.
```
window.addEventListener('scroll', function(e) {...});
```
Basically, what you do is on-scroll you MANIPULATE the style attributes of a given element. Especially useful is the TRANSFORM property and the TRANSLATE3D value. You can easily log the style attributes in the console:`console.log(<element>.style);`

To move the element 50px down:
```Javascript
const target = document.element.querySelector('.<class>')
target.style.transform = 'translate3d(0px, 50px, 0px)';
```
The actual parallax effect however requires strengthening the illusion whereby the amount of scroll relates to movement of the on-page element. The requires us to measure the scroll.

### Measuring scroll
The VERTICAL scroll is represented by the property `pageYOffset` on the window element. The HORIZONTAL scroll by the `pageXOffset`. To multiply the effect, use another variable that becomes the source of the `transform: translate` value.
```javascript
let scrolled = window.pageYOffset;
let rate = scrolled * -0.5;
target.style.transform = `translate3d		(0px, ${rate}px, 0px)`;
```
### Multiple elements, different factor
You can hard code a rate of multiply factor or set a different value for each element that you manipulate. Therefore you add a DATA ATTRIBUTES in the html.
```HTML
<li class="sroll" data-direction="vertical" data-rateY="2">
<li class="sroll" data-direction="vertical" data-rateY="-1">
<li class="sroll" data-direction="horizontal" data-rateX="3">
```
```Javascript
let posY = target.dataset.rateY;
let posX = target.dataset.rateX;

if(target[i].dataset.direction === 'vertical'){
	target[i].style.transform = 
	`translate3d(0px, ${posY}px, 0px)`;
}
```
## jQuery
The principle is the same as in Vanilla JS. You have a background image scroll at a different speed than the page scroll through multiplying it with a factor.

In html add a class `.parallax--bg`, adding this class to other elements makes it re-usable in case you need to add a loop or forEach to the js code.

You can do the same with a `<div>` box but then you have to be really carefull with the speed and use a very small multiplier so that effect become very subtile. Here you use the `position: absolute;` and `top:;` properties. If `top:;` was not zero you have to add that to your calculation, if not it will jump before adding the parallax.

In jQuery the you can access the window scroll position through the function `scrollTop()`.

Next you update the background-position property. This is set in css to be center. You can add values to it, so it will remain centered horizontally but on the Y-axis pixels will be added in function of the multiplier you set based on the scroll height.
```javascript
$(window).sroll(function(){
	parallax();
});
function parallax(){
	let windowScroll = $(window).scrollTop();

	$('.parallax--bg').css('background-position', 
		`center ${windowScroll}*0.75px`);

	$('.parallax--box').css('top', 
		`-5+${windowScroll}*0.005em`);
}
```
## LAXX library
The LAXX library offers a lot of predefined animations on scroll.