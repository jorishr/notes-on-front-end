# Close edit section
To close the edit section wihtout making changes, the user can click the close button. This sets the selectedRecipe variable to undefined by calling the handleRecipeSelect() function that is part of the context api.:
```js
const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)
<button onClick={() => handleRecipeSelect(undefined)}>
	&times;
</button>
```