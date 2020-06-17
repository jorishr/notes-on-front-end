# Event capturing, bubbling, delegation
Table of contents
- [Event capturing, bubbling, delegation](#event-capturing-bubbling-delegation)
	- [Event Delegation](#event-delegation)
		- [Event bubbling](#event-bubbling)
		- [Event capturing](#event-capturing)
		- [Stop event bubbling](#stop-event-bubbling)

## Event Delegation
If you add an event listener to an element with child elements, for example a `<ul>`, that event listener gets DELEGATED or added to all children as well. This happens through the process of either event bubbling (event propagation) or event capturing.

### Event bubbling
Consider the markup of a button that is nested in the following html markup: body > main container > parent container > child1 (button), child2(image), child3(paragraph).

Our JS code adds a click event listener to the button. 

But there may also be an event listener on the parent element. Which one gets executed?

The priority is always for the lowest level element. In this case the button. Next, the click on the parent element will also be executed, and so on 'bubbling' further up the chain onto the body in search of other click event listeners.

If you `console.log` the sequence, it looks like:
```
'child clicked'
'parent clicked'
```
### Event capturing
All modern browsers are set up to execute the event capturing first, then the event bubbling. But the Javascript execution defaults to EVENT BUBBLING unless you specify it otherwise. jQUERY only supports EVENT BUBBLING.

Event capturing is top down, thus in the above example the parent click event would be executed first, then the child.

Vanilla JS example:
```Javascript
//default event bubbling
parent.addEventListener('click', () => console.log('parent clicked'));
child.addEventListener('click', () => console.log('child clicked'));

//-> 'child clicked'
//-> 'parent clicked'

//event capturing, useCapture parameter set to true:
parent.addEventListener('click', () => console.log('parent clicked'), true);
child.addEventListener('click', () => console.log('child clicked'), true);

//	-> 'parent clicked'
//	-> 'child clicked'
```

### Stop event bubbling
Bubbling is convenient. Don't stop it without a real need that is obvious and architecturally well thought out. Stopping it may prevent, for example, your analytics from working.

The `event.stopPropagation()` method stops the move upwards, but on the current element all other handlers will still run.

To stop the bubbling and prevent handlers on the current element from running, there's a method `event.stopImmediatePropagation()`. After it no other handlers are execute.