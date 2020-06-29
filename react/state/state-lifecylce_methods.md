# State and life-cycle methods in React
Table of contents
- [State and life-cycle methods in React](#state-and-life-cycle-methods-in-react)
	- [State](#state)
		- [Component hierachy: extending the Parent class](#component-hierachy-extending-the-parent-class)
		- [The state object](#the-state-object)
		- [Encapsulation](#encapsulation)
		- [State changes](#state-changes)
			- [The setState method](#the-setstate-method)
				- [Previous state](#previous-state)
## State
To make a component interactive and change it upon certain events, we need to introduce STATE.
### Component hierachy: extending the Parent class
Since props are passed down the component hierarchy from parent to child components we need to adapt the parent constructor class in the child componenent constructor. This is done with the classic Javascript class extension syntax.
### The state object
State is an object defined in the component that owns that state. It's value can be arbitrarily set or taken from a prop. In this example we keepi track of the 'count state' which has an initial state defined by the `props.initialCount` variable defined in the parent component.
```js
export default class Child extends Parent {
	constructor(props){
		super(props)
		this.state = { count: props.initialCount }
	}
	render(){
		return ( 
			<>
				<h1>this.props.<prop-name></h1> 
                <button>-</button>
                <span>{ this.state.count }</span>
                <button>+</button>
		)
	}
}
```
### Encapsulation
State is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it. Thus the parent or child components do not know at which state this component is rendered. You CAN pass the STATE AS A PROP to a child element (top-down or uni-directional) but that state needs to be passed explicitely in the attribute and imported through the prop on the child.

You can use stateless components inside stateful components, and vice versa.

### State changes
To actually change the state we need an event or function that triggers the change. Instead of a traditional JS eventListener you can use the built-in onClick method on a button for example:
```js
<button onClick={() => {/*do smth*/}}>-</button>
<button onClick={() => this.changeCount(-1)}>-</button>
```
#### The setState method
The above function (`changeCount`) needs to be defined inside the Button class,whereby we update the state object. This is done by React through the Javascript native `Object.assign` method creates a new object from the existing one and only overrides the key-value pairs you wish to change. In this example the property `count: this.initialCount` gets overriden by its current state + amount specified in the argument of the function:
```js
export default class Child extends Parent {
	constructor(props){
		super(props)
		this.state = { count: props.initialCount }
	}
	this.changeCount(amount){
		this.setState({ count: this.state.count + amount});
	}
	render(){
		return ( 
			<>
				<h1>this.props.<prop-name></h1> 
                <button>-</button>
                <span>{ this.state.count }</span>
                <button>+</button>
			</>
		)
	}
}
```
#####  Previous state
All the calls that are being made to `this.setState()` are batched together and invoked in parrallel, not one after another. This means that you cannot chain various changes. The next invocation will already start before the previous one is updated.
```js
//example: this.state.count = 1 and amount = 1
changeCount(amount){
	this.setState({ count: this.state.count + amount })
	this.setState({ count: this.state.count + amount })
}
//-> 2
//-> 2
//both will start at the current state of count = 1
```
The solution is to use a variable called `prevState` which takes a function that returns the new state value based upon the previous state value, not the static base value (`this.state.count`).
```js
changeCount(amount){
	this.setState({ prevState => {
		return { count: prevState.count + amount }
	});
	this.setState({ prevState => {
		return { count: prevState.count + amount }
	});
}
```
Now if we run the same code twice, the second invocation start from the prevState which will be set already by the first invocation. Thus here, the new state that is returned by the second call is amount + amount.