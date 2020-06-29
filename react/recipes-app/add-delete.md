# Recipes app code review
Table of contents
- [Recipes app code review](#recipes-app-code-review)
- [Function definition](#function-definition)
	- [Apply functionality to buttons](#apply-functionality-to-buttons)
		- [Props](#props)
		- [Context API](#context-api)

Reference: see [github-repo](https://github.com/jorishr/cooking-react) and [live example](cooking-react@jorisr.com) on my portofolio site.

# Function definition
Adding and deleting are updates to the STATE of the app, updates that should trigger React to re-render the affected components. 

Inside the App.js create a new function `handleAdd(){}`. 

Inside you define what the new data should look like, for example:
```js
const newRecipe = {id: uuidv4(), name: 'new'}
```
The function itself uses an instance of setState() to update the existing state which is defined at the top of the App.js and consists of either an object or another value, in this example a sampleRecipes array. 

The delete function is very similar but instead of amending the initial array a filter function is used to create a new array without the the item that has to be removed. 
```js
function App(){
	const [recipes, setRecipes] = useState(sampleRecipes)

	function handleAdd(){
		const newRecipe = {id: uuidv4(), name: 'new'}
		setRecipes([...recipes, newRecipe])
	}

  	function handleRecipeDelete(id) {
    		setRecipes(recipes.filter(recipe => recipe.id !== id))
  	}
}
```
## Apply functionality to buttons
There are two possible approaches:
- (a) use the props object to pass the functions to the respective components,
- (b) use the context api.
### Props
Set both functions as props in App.js on the parent Component (the containing div) that contains the element that has to trigger the re-rendering (`<button>`).Now those two functions are available in the props that are passed as an argument to the function Component. 

In the function component function you destructure the props object:
```js
export default function Recipe(props) {
	const { /*...*/ , handlerFn } = props
  	return ( 
	  <div>
		<div>
			<AnotherChildComponent handlerFn = {handlerFn}/>
		</div>
		<div>
			<button className="" handlerFn={handlerFn}>
		</div>
	  <div>
	)
}
```
On the button, you add the attribute `onClick={handleRecipeAdd}` or `onClick={() => handleFn(parameter)}` depending on whether you need access to additional parameters. If a button is nested inside another CHILD component, you need to pass this again as a prop and repeat the process. This can become tedious. Therefore, a better way is to use the context api.

### Context API
Setup a context for the app and add a value to it, which are the handler functions, via an object. Note that when the key: value of an object is the same, you only need to write it once.
```js
export appContext = React.createNewContext() 
	const appContextVal = {
		handlerFn1
		handlerFn2
	}
	<appContext.Provider value={appContextVal}>
		<Component />
	</appContext.Provider>
```
Inside the respective function component files you import the context.
```js
import React, { useContext } from 'react'
import { appContext } from './App.js'

const { handleFn } = useContext(appContext)

<button onClick={handleFn1}><button>
<button onClick={() => handleFn2(param)}><button>
```