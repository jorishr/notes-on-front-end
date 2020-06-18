# jQuery methods
Table of contents
- [jQuery methods](#jquery-methods)
	- [CSS()](#css)
	- [Text() / html() / val()](#text--html--val)
	- [Attr()](#attr)
	- [Add/remove classes](#addremove-classes)
	- [Parent()](#parent)

There are many methods available in jQuery. Check the api docs and the 	learning center.

Most methods have a GETTER paradigm whereby they get the first element of a
NodeList. The SETTER paradigm is used for setting a new value to to the selected
element. The big difference with vanilla js is the ability to set new values on multiple elements without having to have to write a loop.

Usually the GETTER paradigm operates on the first found element only. You can use css selectors such as `nth-of-type` or other jquery methods suchs as `.map` or `.each` to work with multiple elements.  

See documentation for more info. 
	
## CSS()
To manipulate styles of selected elements you can write css directly or as a JS OBJECT:
```javascript
$('elem');
elem.css('property', 'value');	//	setter
elem.css('property')			// 	getter

$('li').last().css(styles);		
// only updates last elem of nodeList
let styles = {
	property: 'value',
	property: 'value'
}
$('.heading').css('font-size', '2em');
$('.heading').css('font-size');	// -> 2em;

$('.heading:first-of-type').css(fontChange);
let fontChange = {
	fontSize: '2em', 
	fontWeight: '300'
}
```
IMPORTANT to note is that in the first example you can write STRINGS that are 
written as they would appear in CSS. When using an OBJECT notation you have to write JS with the properties in camelCase notation. Also note that in vanillajs this would require extra lines for each change in a style property.

When you have selected, for example, all elements with class `.heading` you 	can apply the same style properties to the entire list of elements without a for loop: `$('.heading').css(styles);`

## Text() / html() / val()
The `text()` method works similarly to the `.textContent` in vanillajs. You can return the text of a selected element or manipulate it by passing a new string value.

If you have multiple elements in a nodeList you update all of them by simply passing a new string value. If you get there value together the result is a long string with all the strings concatenated together.
```javascript
$('h1').text();	//-> (3) -> "titeltiteltitel"
$('h1').text('hello');	//-> (3) -> h1: "hello", h1:"hello", h1:"hello"
$('h1').text();	//-> (3) -> "hellohellohello"
```
The html() method is the equivalent of innerHTML() in vanillajs. You can select the html content of an element (anchor tag) and manipulate it as you see fit. 

The val() method extracts and updates the value of an input. To know for example
which drop down menu item/radio button/checkbox the user selected.
```javascript
$('input').val()	// getter
$('select').val()	// getter
$('input').val('')	// setter
```
The only use case for a setter here would be to erase the content of an input element, to reset a todo list for example. 

## Attr()
Returns the first of the element with the selected attribute. Just as with CSS() you can add an object to manipulate multiple attributes at once.
```javascript
$('input').attr('type')	//-> password
$('input').attr('type', 'text')		
$('input').attr('type')	//-> text
let changeAttr = {
	type: 'text',
	class: 'hidden'
}
$('input').attr(changeAttr)
```
## Add/remove classes
You can chain these methods together:
```javascript
$('h1').removeClass('old').addClass('newClass');

$('h2').removeClass('oldClass');
$('h2').toggleClass('toggleClass');
```
## Parent()
The .parent() method on a selected item lets you manipulate the parent element of the selected element. For example, by clicking on a `<span>` inside an `<li>` you can remove or style the entire `<li>`.
```Javascript
$('child').on('click', function(){
	$(this).parent().css('color', 'green');
	$(this).parent().remove();
})