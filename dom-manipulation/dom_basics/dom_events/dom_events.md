# DOM Events
Table of contents
- [DOM Events](#dom-events)
	- [Common DOM Events](#common-dom-events)
		- [Mouse events](#mouse-events)
		- [Form events](#form-events)
		- [Keyboard events](#keyboard-events)
		- [DOM load event](#dom-load-event)
	- [Event handlers](#event-handlers)
		- [Event listeners](#event-listeners)
	- [Event Object](#event-object)
	- [Object handlers](#object-handlers)
	- [Browser default actions](#browser-default-actions)

## Common DOM Events
An event is a signal that something has happened. All DOM nodes can generate such signals (but events are not limited to DOM).

### Mouse events
```
click		//-> mouse clicks on an element (touch -> tap)
contextmenu 	//-> mouse right-clicks on an element
mouseover  	//-> mouse cursor comes over
mouseout		//-> mouse cursor leaves an element
mousedown / mouseup 	//-> mouse button is pressed
mousemove 	//-> when the mouse is moved
```
### Form events
```
submit 		//-> when the visitor submits a <form>
focus 		//-> when the visitor focuses on an element
```
### Keyboard events
```
keydown		//-> when the visitor presses a keyboard button
keyup 		//-> then releases the button
``` 
### DOM load event
```
DOMContentLoaded	//-> when the HTML is loaded and processed, 				DOM is fully built.

document.addEventListener("DOMContentLoaded", function(){});
```
## Event handlers
Handlers are a way to run JavaScript code in case of an event, usually a user actions.

A handler can be set in HTML with an attribute named `on<event>` or through Javascript on the DOM element node.
```HTML
<div class="button" onclick="runFunction()"></div>
```
```Javascript
elem.onclick = function(){};
```
Both methods are the same. They set the onclick property on the respective element node. Only one handler can be defined for the same event.

### Event listeners
`elem.addEventListener(event, handler, [options]);`

Options: 
- once: if true, then the listener is automatically removed after it triggers.
- capture: the phase where to handle the event. For historical reasons, options can also be false/true, that's the same as {capture: false/true}
- passive: if true, then the handler will not `preventDefault()` by the browser
```
element.removeEventListener(event, handler, [options]);
const handler = function(){};
```
## Event Object
When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.
```
event.type	
//-> type of event
event.currentTarget 
//-> the element that is currently handling the event. That's exactly the same as the THIS keyword. If an arrow function is used in the handler function you can always rely upon the event.currentTarget
event.target
//-> see event bubbling: a handler on a parent element can always get the details about where the event actually originated. The most deeply nested element that caused the event is called the target element and is accessible as event.target. It doesn't change through the bubbling process, while event.currentTarget does.
```
## Object handlers
We can assign not just a function, but an object as an event handler when using an addEventListener. When an event occurs, its handleEvent method is called: `elem.addEventListener(type, {...}, [options]);`

Example: you construct a string that defines the method based on the `event.type` data. The `onMouseover` string is made by: 'on' + capitalize the m of mouseover + 'ousover' without the first letter.

The handleEvent call is then: `this[onMouseover](event)` whereby this is the `elem.currentTarget`.
```Javascript
class Menu {
	handleEvent(event) {
		switch(event.type) {
			case 'mousedown':
          			elem.innerHTML = "Mouse button pressed";
          			break;
        		case 'mouseup':
          			elem.innerHTML += "...and released.";
          			break;
      	}
  	}
};
const menu = new Menu();
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);

//or

class Menu {
	handleEvent(event) {
		let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      	this[method](event);
    }

	onMousedown() {
      	elem.innerHTML = "Mouse button pressed";
    	}
	
	onMouseup() {
      	elem.innerHTML += "...and released.";
    	}
}
```
Each time you work with object you have to be careful witht the execution context of the keyword this.

What is wrong with the code below?
```Javascript
const counter = {
	cnt: 0,
	inc: function(){cnt++;console.log(cnt)}
}
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', counter.inc(), false);
```
First, the cnt++ should be this.cnt++ and console.log(this.cnt), otherwise they will be undefined.

## Browser default actions
Many events automatically lead to certain actions performed by the browser.For example, a click on a form submit button initiates its submission to the server.

The main way to prevent this action is to use the event object. There's a method `event.preventDefault()`.

When using the `onclick` node property or attribute you return false:
```HTML
<a href="/" onclick="return false">Click here</a>
<!-- or -->
<a href="/" onclick="event.preventDefault()">here</a>
```