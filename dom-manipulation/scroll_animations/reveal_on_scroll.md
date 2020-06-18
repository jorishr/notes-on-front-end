# Reveal on scroll
The approach below uses the Intersection Observer API. See this [note](../intersection_observer_api.md) for an introduction. 

Both reveal-on-scroll and slide-in-on-scroll can draw from the same observer function. The adjustments are made through the options objects we call SLIDERS or FADERS.
## Markup and styling
In html give the elements you want to have this effect a class `.fade-in` or `.scroll-reveal;` . In css create a class `.reveal` or `.appear` with the properties opacity and transform adapted to the baseline for the animation you want to apply.

Example for elements that FADE-IN:
```CSS	
.element {
	opacity: 0; 
	transition: opacity 250ms ease-in-out
}
.element.reveal { opacity: 1; }
Example for elements that SLIDE-IN:
```CSS
.element {
	opacity: 0; 
	transform: translateX(-50%); 		transition: opacity 250ms ease-in-out; 
	transition: transform 450ms ease-in;
}
.element.reveal {
	opacity: 1; 
	transform: translateX(0)
}
```
If you want elements to slide-in from the side their default state may cause horizontal scrolling issues. Fix that by adding `overflow-x: hidden;` to the body element.

## Create the observer
Select the elements from the DOM.
```javascript
const appearOnScroll = new IntersectionObserver(function(
			entries,
			appearOnScroll
			){
				entries.forEach(entry => {
					if(!entry.intersecting){ return; }
					else {
					   entry.target
						.classList.add('reveal');
					   appearOnScroll.
						unobserve(entry.target);
					}
				})	
			},	
		options);
```
Only if the element is intersection with the viewport, the code should run. Thus if the element is not intersecting, `entry.intersecting === false`; we return the function as we don't want anything to happen yet. When it does intersect, you add the css class.

Once an element has appeared on the page, UNOBSERVE the element as the animation should only be seen once.

## Call the observer and set options
In our current example the observer is added to an array of elements. Thus loop through the array for each element add the observer.
```javascript
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
faders.forEach(fader => {
	appearOnScroll.observe(fader);
})
sliders.forEach(slider => {
	appearOnScroll.obeserve(slider);
})
```
Adjust the options to finetune the effect: set the threshold to 1 to only have the effect start when the entire element can be inside the viewport. By adding the negative bottom rootMargin the user has to scroll down even further before the effect kicks in.
```javascript
appearOptions = {
	threshold: 1,
	rootMargin: 0px 0px -100px 0px
}
```
Setting the exact values can be a process of trial and error. The code below seems to work fine for both appear and slide-in animations.
```javascript
appearOptions = {
	threshold: 0,
	rootMargin: 0px 0px -250px 0px
}
```