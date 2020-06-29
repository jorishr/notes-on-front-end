# The effect hook in React
Table of contents
- [The effect hook in React](#the-effect-hook-in-react)
	- [Use cases](#use-cases)
	- [Local storage example](#local-storage-example)
	- [Return statements](#return-statements)

## Use cases
The Effect Hook `useEffect` adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. 

An example is to PERSIST DATA by saving the application state in LocalStorage or a DB and loading from it. Before we can do that we need an additional action to happen each time the state of the app changes. This is accomplished by the useEffects() method. This method takes in a function (action to perform on state change) and an array of dependencies that specify which state changes need to trigger this additional action.
```js
import React, { useEffect } from 'react'
function App(){
	//...
	useEffect(() => {/*do smth*/}, [dependency1, ..., dependencyX])
}
```
Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render including the first render.

## Local storage example
Store the current state in a `localStorage` item. Note, for the value of the key to be useful, convert it to a string with `JSON.stringify(value)`. If you use a `useEffect()` whereby the dependencies are set to an empty array, the `useEffect()` will only run once on page load.
```js
const LOCAL_STORAGE_KEY = '<appName>.<appStateVar>'

function App(){
	//..
	//example:
	useEffect(() => {
		const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
		if(recipesJSON != null){
			setRecipes(JSON.parse(recipesJSON))
		} 
	}, [])
		//...
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, appStateVar)}, 
	[appStateVar, ..., dependency])

}
```
Now if the page loads, and a localStorage key is found with recipe data, the app STATE is updated and set to the data that is parsed from the JSON object found in local storage. Note that order of the useEffects is important: first getItem, then setItem.

## Return statements
The useEffect() can not only perform additional actions upon state changes, it can also perform 'clean-up' actions when the rendering of a component is done. For example, each delete action updates the UI state of the app and in the return statement of useEffect() we can define another function which will run each time a component unmounts. Thus when you delete a component, the return function is called from all the useEffect() methods that apply to it.

Note that the return function is called not only when you delete the component, but every single time AFTER the first time useEffect() is called. Thus from the second call onwards, the return function is invoked. Followed by the regular useEffect code defined above it. This can be used to clean things up before the useEffect is appled.