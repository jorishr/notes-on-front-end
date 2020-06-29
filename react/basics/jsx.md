# JSX
Table of contents
- [JSX](#jsx)
	- [Attributes](#attributes)

JSX is a syntax extension to JavaScript and allows to you to write HTML inside JS. Very little difference with HTML, but self-closing elements like `<img>` need to be written like: `<img/>`. To return html over multiple lines use:
```js
function App(){
	 return (
		<div>
			<h1>title</h1>
			<h3>subtitle</h3>
		</div>
	)
}
```
Note that to have mulitple HTML elements inside the same return statement you need to have in a WRAPPER DIV as above OR use the JSX syntax without the need for extra elements:
```js
function App(){
	 return (
		<>
			<h1>title</h1>
			<h3>subtitle</h3>
		</>
	)
}
//if you put multiple elements without a wrapper or <> you get a fragments error.
```
## Attributes
Since 'class' is a reserved keyword in JS it cannot be used. Therefore, use the attribute `className=""`. Same thing for the 'for' in the `<label>` tag, use `<label htmlFor="">`.