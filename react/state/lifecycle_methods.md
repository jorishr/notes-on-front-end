## Lifecyle methods
We can declare special methods on a component class to run some code when a component mounts and unmounts, that is when the component has been rendered in the DOM (mounted) or when it has been removed from the DOM (unmounted).

For example, a timer with setInterval that updates the state of a clock every second. The component is initially rendered with the state object set to the current time. Once mounted in the DOM, the setInterval will trigger a state change every second. Thanks to the `this.setState()` call, React knows the state has changed, and calls the `render()` method again to learn what should be on the screen. If the Clock component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle method so the timer is stopped.

```js
class Clock extends React.Component {
	constructor(props) {
	super(props);
	this.state = { date: new Date() };
	}
	//state update method
  	tick(){this.setState({ date: new Date() });}
	//just before render() in DOM
	componentWillMount() {
		//do smth
	} 
	//after render() in DOM
	componentDidMount(){
		//timerID is stored as a binding in the object for later reference
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	//just before removal from the DOM
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
  	render(){return <Component>}
}
```