# Components and props
Table of contents
- [Components and props](#components-and-props)
	- [Components](#components)
		- [Pure functions](#pure-functions)
	- [Props](#props)
		- [Props inside class components](#props-inside-class-components)
		- [Props in a function component](#props-in-a-function-component)

## Components
Conceptually, components are like JavaScript functions. They accept arbitrary inputs, called PROPS and return React elements (JSX) describing what should appear on the screen.
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Most frequently you'll find react elements that represent existing DOM tags: div's, p's, input's. etc. But you can generate your own: 
```js
function Welcome(props) {
	const element = <Welcome> Hello, { props.name } </Welcome>;
	return element;
}
```
Props is an object stored as an attribute to the element. 

Always start component names with a capital letter, if not they are treated as DOM tags.

### Pure functions
All React components must act like pure functions with respect to their props. Thus you cannot modify the `props.name` property inside a component function, for example. Since prop changes may have consequences elswhere in the code any changes made should pass through the STATE protocol, not a component function.

## Props
Props can be passed through component functions and are set onto the element as
the same way you set ATTRIBUTES in html. For example, here the `initialCount` is a prop set to value 0. The {} is JS notation, you can use simple string "hello" as well, but here we want a number. This is the data that is going to be rendered inside the component. 
```js
function App(){
	return (
		<Counter initialCount={0}/>
	)
}
```
### Props inside class components
To refer to the prop data in the class definition of our component use we can use `this.props` as in regular class definitions:
```js
export default class <class-name> extends Component {
	render(){
		return (
			<h1>this.props.<prop-name></h1>
			...)}}
```
### Props in a function component
There are two ways to handle this:
- passing props as an argument and then use props.<prop-name> inside the function. 
- use object destructuring and create variables for each prop programmatically: 
```js	
export default function RecipeEdit({ recipe }) {}

//if there are lot of props to unpack, use use a seperate statement:
export default function Recipe(props) {
	const { id, name, cookTime, servings } = props
	...
}