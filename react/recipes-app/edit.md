# Edit functionality
Table of contents
- [Edit functionality](#edit-functionality)
	- [Edit and state](#edit-and-state)
	- [Hide or show components conditionally](#hide-or-show-components-conditionally)
	- [Edit forms](#edit-forms)
		- [Child components](#child-components)
		- [Onchange](#onchange)
		- [Updated state](#updated-state)
	- [Helper functions](#helper-functions)
		- [Input](#input)
		- [onChange vs onInput](#onchange-vs-oninput)
		- [Child component helper function](#child-component-helper-function)

## Edit and state
In App.js create a new state for the item that is selected for editing by the user. This state does not need a default value. 

Destructure it as other state to get an ID and a function to set a new state that updates the id: 
```js
const [selectedRecipeId, setSelectedRecipeId] = useState();
```
We also need a variable that stores the selected recipe, by selecting it from the array of existing recipes. The selectedRecipe will be either undefined or the one with an id corresponding to the one selected by the user (by clickning edit, see Recipe.js)
```js
const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
```
Define the function that will handle the selecting recipe event on the button. Add that function to the context api value.
```js
const recipeContextVal = {
	handleRecipeAdd,
	handleRecipeDelete, 
	handleRecipeSelect 
	}

	function handleRecipeSelect(id) { 
    	setSelectedRecipeId(id)
  	}
```
Go to the component that contains the button, import the function from the context and add a click event to the btn.
```js
const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)

<button onClick={() => handleRecipeSelect(id)} className="">Edit</button>
```
Make the selectedRecipe variable available as a PROP in the component that contains the editing forms.
In App.js: `<RecipeEdit recipe={selectedRecipe}/>`

Now we can work with the key-value pairs inside the selectedRecipe object through the EDIT FORMS on the RecipeEdit.js component.

## Hide or show components conditionally
In the App.js you can hide/show components based upon whether there is a variable value to work with inside that component. Inside the return statement of App.js:
```js
{selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
```
The second part of the equation is not evaluated unless the selectedRecipe is true, thus is not undefined or null. Another way doing it would the ternary operator:
```js
{selectedRecipe ? <RecipeEdit recipe={selectedRecipe}/> : null}
```
Note that 'recipe' is the name we give to the variable we will work with inside the component (seperate js file). The selectedRecipe variable is defined inside App.js and its value is evaluated and passed to the component.

## Edit forms
The functional component that contains the edit forms now takes in a paramater: `{ recipe }`, the variable(s) that have been passed to the component in App.js.

Now you can set the VALUE ATTRIBUTE of each input element: 
```js
<input value={recipe.name} />
<input value={recipe.servings} />
//...
```
### Child components
Note that if there are other child components inside the main edit component, you need to pass the required values as props to the child component. Usually, the data for the child components is an array and you can use that to render a child component for each one of them with MAP()
```js
	{recipes.ingredients.map(ingredient => 
		<RecipeIngredientEdit 
			key={ingredient.id} 
			ingredient={ingredient}/>	
		)
	} 
```
The key is required to indentify each component seperately, so that react knows which component to re-render upon change. The ingredient variable becomes the paramater of functional component and its properties are used to populate the component.

### Onchange
Important, just passing the value with nothing else prevents editing the value. Upon each re-render, the value is set to be the same. To actually edit with the input that is passed by the user a state change needs to update the state (setState()) of the data we are working with. If not, any input by the user is immediately overwritten by the value passed a prop.

The ONCHANGE ATTRIBUTE takes care of these changes.

### Updated state
We cannot simply change the RECIPES list and RECIPE values as it is represented by a STATE that can only be updated through setState(). To handle this, create a new function handleRecipeChange that takes in the id of the recipe that is being edit and the new recipe input.

Inside the function copy the RecipeList into a variable (the original one can only be update with setState()). 
```js
function handleRecipeChange(id, updatedRecipe){
	const newRecipes = [...recipes]
	const index = newRecipes.find(recipe => recipe.id === id)
	newRecipes[index] = updatedRecipe   
}
```
The newRecipes variable will be amended with the input we receive from the user. Then we have to old Recipes + the updated recipe.

To know which recipe to update in the ARR of recipes we need to find the index position in the arr of the recipe that is being edited. Once the update is completed, we can set the new state of the RecipeList
```js
function handleRecipeChange(id, updatedRecipe){
	const newRecipes = [...recipes]
	const index = newRecipes.findIndex(recipe => recipe.id === id)
	newRecipes[index] = updatedRecipe   
	setRecipes(newRecipes)
}
```

## Helper functions
Now simply trigger this function on the edit input elements in the EDIT component. Pass the function via the context api in the App.js and import in the component.
```js
import React, { useContext }from 'react'
import { RecipeContext } from './App'
```
BUT, we cannot just overwrite, for example, `recipe.name = 'new value'`. You should never overwrite props or states, only update them through the propper setState(). Create a new object via object destructuring that contains the original and adds the changes. This is done in a HELPER function:
```js
export default function <component({ props }) {
	const { handleRecipeChange } = useContext(RecipeContext)
	function handleChanges(changes){
        handleRecipeChange(
			recipe.id, {...recipe, ...changes})
	}
	return (	
		<input onInput={e => handleChanges(recipe.id, { name: e.target.value })}
		<input onInput={e => handleChanges(recipe.id, { servings: e.target.value })}
		//...
	)		
}
```
The helper function calls the handleRecipeChange function with the appropiate paramaters. The second paramater is the NEWLY crearted object that is the base updating our setState() as defined in the handleRecipeChange function.

### Input
On the input element we add an onInput attribute which has an event paramater. Use the value of that target to set the new value for the corresponding KEY in our new object. 

Note about setting the VALUE, DEFAULTVALUE or PLACEHOLDER attributes: To show the value and allowing changes you are expect to use the attribute `defaultValue={prop.value}`. If you want read-only you can use `value={prop.value}` but you need to specify the `readOnly` attribute as well.

### onChange vs onInput
In normal JS the onChange attribute would only fire when the change is made while onInput fires on each keystroke. In React however, onChange is bound to onInput and works in the very same way. Thus you can use onChange instead of onInput with the attibute `value={prop.value}` instead of defaultValue.


### Child component helper function
In the main edit component you can define a specific helper function to handle changes in the child components. But instead of directly setting the new state with setState() you pass the changes to the main helper function created above:
```js
function handleIngredientChange(id, updatedIngredient){
	const newIngredients  = [...recipe.ingredients]
	const index = newIngredients.findIndex(i => i.id === id) 
	newIngredients[index] = updatedIngredient
	handleChange({ ingredients: newIngredients})
}
```
Pass that function as a prop to the child component and use another similar helper it to handle the exact changes that come from the inputs:
```js
function handleChange(changes){
	handleIngredientChange(
		ingredient.id, { ...ingredient, ...changes})
}

<input onInput={e => handleChange({ name: e.target.value })} />
```