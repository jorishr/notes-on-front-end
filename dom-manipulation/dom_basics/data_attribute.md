# Data-attribute for DOM manipulation
The data-* attributes allow you to store extra information on standard semantic HTML elements.

All attributes on any element whose name starts with `data-` is a data attribute. 

## Access data value through Javascript
In the HTML you simple add the attribute: `<h1 data-name</h2>`. In JS module select the element node from the DOM and find the data-attribute via its name in the dataset object: `h1.dataset.name`

## Example: Darkmode theme
Add data-theme attribute to the html element: `<html data-theme='light'>`. When a switch is toggled or btn clicked the JS code changes the attribute value to `data-theme='dark'` by using: `elem.setProperty(property, value)`.

## Display data-attribute values through CSS manipulation
Use a pseudo element to add the data-attribute value to an existing element. 
```
// HTML
<h1 data-name="Joris">Hello</h1>
// CSS
h1:hover::after {
	content: attr(data-name)
}
// -> h1: 'hello'; on :hover: 'hello Joris'
```