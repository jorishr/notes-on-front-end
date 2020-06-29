# Best practices in React
- [Best practices in React](#best-practices-in-react)
  - [File structure](#file-structure)
  - [Functional component structure](#functional-component-structure)
  - [Small components](#small-components)
  - [Naming](#naming)
  - [Props versus context](#props-versus-context)
  - [Seperation of concerns](#seperation-of-concerns)
  - [Immutability](#immutability)
## File structure
Use a specific js file for each component (don't put multiple components in one file) and export them as the default. 

## Functional component structure
At the top come the various state definitions, followed by the effect hooks, context and handler functions.
```js
function App() {
const defaultStateValue = {key: val, key: val, key: [{}, {}]}
//state defintions
const [...] = useState();
const [...] = useState(defaultState);
	//...
//use effects
useEffect(() => {}, [])
useEffect(() => {}, [])
	//...
//context api value
const contextObject = { }
//handler functions
function handleA() {}
function handleB() {}
//return the jsx inside a provider
return (
    <Context.Provider value={contextObject}>
      <Component prop={props}/>
	      <ChildComponent prop={props}/>}
    </Context.Provider>
)}
```
## Small components
Use as many components as you can. It may seem absurd to break down a page into atomic components but it makes the code easier to debug and easier to work with in the future. Take a look at the data model you work with: Separate your UI into components whereby each component matches one piece of your data model. The information architecture of the data model and the UI should be similar.

## Naming
The 'handler' name in a function always leads to some kind of click event.

## Props versus context
Props are adequate for just one level nesting, from PARENT to CHILD. That is manageable. If go down deeper, you'll have to repeat the process of passing/destructuring. Also, you may have other sections in the application with components that are not direcltly linked. Then use context. Plus, only define context in the major parts of you application, those components that have lots of children.

## Seperation of concerns
When writing `useState()` and `useEffect()` statements you could technically combine them all into the same object or same function respectively. However, it is better to seperate the different functionalities. For example, one useEffect() for localStorage code, another for animation that have to be played.
```js
useEffect(() =>{ /*LocalStorage*/},[])
useEffect(() =>{ /*play animation*/},[])
```

## Immutability
One of the advantages of React is that you cannot direclty modify the data objects. A copy with a unique idenity has to be made and then you can modify the copy and pass that to setSate() method, which triggers the update throughout the components. Always work with the id of an object in state, apart from the object itself. If not you may be referencing the wrong thing throughout your app:
```js
//state for editing: only id is required, it has no default state
const [selectedRecipeId, setSelectedRecipeId] = useState();

//default state for recipes-list is the sampleRecipes arr defined below
const [recipes, setRecipes] = useState(sampleRecipes) 
```