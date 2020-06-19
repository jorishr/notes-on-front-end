# NodeLists and array methods
NodeLists are array-like objects with some iterative functionality but they do not contain all methods available through the Array.prototype.

To have that functionality you should convert the collection to an array first.

## Example: Sorting HTML elements
While many of the ES5 array methods such as .filter, .map, and .reduce will return a new array and leave the original untouched, .sort will sort the array IN PLACE.

Select the elements with `querySelectorAll()`. Convert the Nodelist or collection to an array with `Array.from()`.

Then apply the `.sort()` method to the array.

Final step is to update the DOM: loop over the sorted array and insert each element one by one at the top, before the firstChild.
```Javascript
const ul = document.querySelector('#list')
let arr = document.querySelectorAll('li');
let sortedArr = arr.sort();
for(let i = 0; i < sortedArr.length; i++){
	ul.insertBefore (
		sortedArr[i], ul.firstChild);
}
```