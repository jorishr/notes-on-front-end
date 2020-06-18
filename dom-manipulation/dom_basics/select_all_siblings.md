# Select all siblings of a DOM node
```Javascript
// helper function to get all element node siblings of a node element
const getSiblings = (elem) => {
  	let siblings = [];
	let sibling = elem.parentNode.firstChild;
  
 	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
   	 	sibling = sibling.nextSibling;
	}
	return siblings;
}
```
## Logic
Get the parent of the element who's siblings we want to find. Get the first element inside that parent element.
Loop over the child elements and if they are node elements and not the element itself, push to arr. Update the sibling element to current element for next loop.
	<ul>
		<li>	= firstChild
		<li>	= sibling.nextSibling
		<li> 	= element to start with

Important: you only want ELEMENT NODES, not other node types such as text or comment nodes. 