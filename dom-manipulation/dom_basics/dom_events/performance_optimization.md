# Event performance optimization
Table of contents
- [Event performance optimization](#event-performance-optimization)
	- [Performance issues](#performance-issues)
	- [Debouncing](#debouncing)
		- [Button example](#button-example)
		- [Search bar example](#search-bar-example)
	- [Throttling](#throttling)
		- [Window resize events](#window-resize-events)
		- [Tracking scroll events](#tracking-scroll-events)
  

## Performance issues
When working with DOM events you have to consider the possibility that a user may click a button or resize a window in very quick succession. This may trigger a lot of javascript calculations or multiple backend processes.

Examples: 
- in a shopping cart a buy button may be clicked twice accidently. 
- a search bar with an event listener that on every keypress calls a function that makes an API call to look for matches in a database. Thousands of users typing at the same time would result in millions of API calls every second/minute. 
- listening for a resizing event on the browsers will trigger for each pixel that changes.

On the front-end limiting the rate at which API calls are made upon typing or limiting the number of clicks that trigger a function can be achieved with either DEBOUNCING or THROTTLING functions.

## Debouncing
When using a DEBOUNCING function on a click event you will only execute the handler function on the last click, given a certain interval. Thus:
```
100ms		200ms		300ms
Click		click		click
No action	No action	Execute handler function
```
Thus a setTimeout of a couple of ms is used and if the user triple clicks on a submit button, the first clicks are ignored and only the last click executes the handler function, if the clicking stopped for x ms.
```Javascript
const debounce = function(func, delay) {
	let timeoutId;
	return function(){
		let context = this;
		let args = arguments;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(()=>{
			func.apply(context, arguments)}, delay)
	}
}
```
Thus no matter how many times the button is clicked, the event handler function is only executed ONCE, 500ms after the last click.

The setTimout is cleared on every new click and a new setTimeout of 500ms is set. Only if there is a time gap of minimum 500ms the handler function is executed.

### Button example
See my Codepen for a fully working example: [Debouncing](https://codepen.io/jorishr/pen/rNVYxmz)

```Javascript
btn.addEventListener('click', debounce((e) => {
  console.log(e.target);
  console.log('Debounce button clicked!');
}, 500));
```
### Search bar example
In stead of making the API call on every keystroke, you only make the function call if there is a delay or gap between keystrokes. A user will usually type very fast the very few first letters and then pause to see the result:

`sam - sung`, for example. Hereby you only execute the api call after the pause or delay after typing 'sam' which would result in a displaying:

samsung
samsonite
sam mendes
...
```Javascript
<input onkeyup="optimizedApiCall()"
const getData = () => {
	//call the API
	console.log('Fetching data...');
}
const apiCall = debounce(getData, 300ms);
```
## Throttling
When THROTTLING an event handler, the handler function is executed on the very first event (click, keystroke, resize, etc.) and all subsequent events are ignored untill x ms have expired. 
```
0ms			100ms		200ms		300ms
click		click		click		click
fn executed	no action	no action	fn executed
```
```Javascript
const throttle = function (fn, delay){
	let flag = true;
    	return function() {
		let args = arguments, 
		let context = this;
		if(flag){
			fn.apply(context, args); 
        		flag = false;
			setTimeout(() => {
          			flag = true;
        		}, delay)
		};
    	}
}
```
Upon first event, the event handler function needs to be executed. To track whether that function has been called, use a flag. After each execution that flag is set to false, preventing any further function executions for subsequent events. 

The setTimeout will reset the flag after x ms, allowing a new function execution to proceed.

### Window resize events
By adding an event listener to the window, each time the user resizes the window one pixel the event is triggered resulting into hundreds or thousands of function calls for a relatively small resize event. 

Throttling will largely ignore the speed of the resizing and trigger the function after set intervals. 

### Tracking scroll events
Each pixel that is scrolled up or down would trigger a function execution. By using a throttle function you basically only execute on set intervals.