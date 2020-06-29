# Context api
Table of contents
- [Context api](#context-api)
  - [About context](#about-context)
  - [Providoer and consumer](#providoer-and-consumer)
    - [Class component consumer](#class-component-consumer)
    - [Function component consumer](#function-component-consumer)

## About context
So far all props had to be referenced manually in each component but if you want to share the same prop over various components the process becomes tedious. The useContext method makes this process easier.

You define the context inside the App.js and then import it into the components you want. The context mimics the use of a global variable, which is not possible with modules in React. A good use case is the use of a Theme with pre-defined style properties. You define that theme on the components in App.js and in each Component you can import it with two lines of code. Other uses cases are the current authenticated user or preferred language settings.

## Providoer and consumer
Each context has two components: a PROVIDER and a CONSUMER. The provider provides a value, the consumer consumes that value. The provider encloses the components, it has to provide values for. The provider requires an ATTRIBUTE called `value={{}}`. That value usually is an object with various style rules.

For example, a toggle btn that sets the bgColor to blue, or from blue to red. The context is variable that later gets consumed (imported) in a child component. The changes are triggered by the regular setState method.
```js
import React, { useState } from 'react';

export const themeContext = React.createContext();
function App() {
	//define state
	const [theme, setTheme] = useState('red');
	return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <CounterHook initialCount={0}/>
	    <button onClick={() => setTheme(prevTheme => {
		    return prevTheme === 'red' ? 'blue' : 'red';
	    })}></button>
    </ThemeContext.Provider>
  );
}
```
### Class component consumer 
Create a consumer context with `<ThemeContext.Consumer>`. Inside use a function that returns the components with the style attribute applied from the value it gets through the context.
```js
import { ThemeContext } from './App';
export default class Counter extends Component {
    render(){
        return (
            <ThemeContext.Consumer>
                {style => (
                <div>
                    <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                    <span>{this.state.count}</span>
                    <button style={style} onClick={() => this.changeCount(+1)}>+</button>
                </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}
```
### Function component consumer
In a function component the same can be accomplished with just one line + an attribute update: define a variable that uses the contenxt defined in App.js. Then use that variable as the attribute value on the element of choice.

Note that useContext has the same requirement as the useState: it needs to be defined inside the function component at the very top.
```js
import React { useContext } from 'react'

export default function CounterHooks({ initialCount }){
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)

    return ( 
		<element style={style}></element>
	)
}