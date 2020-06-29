# Hooks in function components
Table of contents
- [Hooks in function components](#hooks-in-function-components)
  - [About hooks](#about-hooks)
  - [The usestate hook](#the-usestate-hook)
    - [Async setState()](#async-setstate)
    - [State object destructuring](#state-object-destructuring)
## About hooks
Hooks are what allows us to manage or hook into a state inside a function components, something that wasn't possible before it's introduction in class components. Now basically all components are written as function components, and no longer as class components. React provides a few built-in Hooks like useState and useEffect. You can also create your own Hooks to reuse stateful behavior between different components.

## The usestate hook
State and state changes are not native to a JS function. A react HOOK makes this possible. The `useState()` method takes in as a parameter the STATE OBJECT but returns an ARRAY that contains the state object and a function that allows us to set our state. To access both values in the array, use javascript array destructuring.

It is important to always use the setState() HOOK at top of the function, it cannot be inside an if statement, for example. This is because React is storing the initial state and state changes globally based on the order of the useState() calls you define at the top of the functions.
```js
Import { useState } from 'react';

export default function Component(propObject){
	const [state, setState] = useState(stateObject)
	return(
		<>
		    //...
		    <h1>{state.property}</h1>
            //...
        </>
	)
}
//example:
export default function CounterHooks({ initialCount }){
    const [state, setState] = useState({ count: initialCount })
    return (
        <div>
            <button onClick={() => setState({count: state.count - 1})}>-</button>
            <span>{state.count}</span>
            <button onClick={() => {setState({count: state.count + 1})}}>+</button>
        </div>
    )
}
```
### Async setState()
Here too, subsequent calls of the setState method would be executed asynchronously and start from the same current state value. To amend this, here too use prevState:
```js
<button onClick={() => {setState(prevState => {
	return {count: state.count + 1}})}}>+</button>
```
### State object destructuring
By destructuring the state object we have control over the variable names. This simplify the code as you can modify the names STATE, SETSTATE and PREVSTATE to whatever you want, here: count (STATE), setCount (SETSTATE) and prevCount(PREVSTATE).
```js
export default function CounterHooks({ initialCount }){
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
 	)
}
```