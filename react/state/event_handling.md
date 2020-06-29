# Event handling in React
Table of contents
- [Event handling in React](#event-handling-in-react)

On traditional DOM elements you can set event handling attributes like `onclick="return false"` whereby you can write JS in the string, or add an event listener in your JS code. In React there should be no not need to call set an event listener after the element is created in the DOM. Instead, just provide a listener when the element is initially rendered. Set an attribute to the component in the JSX rendering code and define the handler function on the component class object:
```js
<>
	<button onClick={ this.handleClick }></button>
	<button onChange={ (e, param) => this.handleChange(e, param) }></button>
</>	
this.handleClick(e, param){
	e.preventDefault()
	console.log('Btn clicked', param)
}
```
The event parameter is standard available but you can also call the function explicitely: `onClick={ (e) => this.handleClick(e) }`. This is more useful when additional parameters need to be passed to the handler function. Both work but it depends on whether you need access to addtional parameters or not.