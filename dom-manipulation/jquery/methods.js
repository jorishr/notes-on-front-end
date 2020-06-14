/* 
	###############
	JQUERY METHODS
	############################
		I.	CSS()
		II.	TEXT()/HTML()/VAL()
		III.	ATTR()
		IV.	CLASSES
		V.	PARENT()
	############################

	There are many methods available in jquery. Check the api docs and the 
	learning center.

	Most attributes have a GETTER paradigm whereby they the first element of a
	NodeList. The SETTER paradigm is for setting a new value to to the selected
	element. The big difference with vanilla js is the ability to set new 
	values on multiple elements without having to have to write a loop.

	Usually the GETTER paradigm operates on the first found element only. You 
	can use css selectors such as nth-of-type or other jquery methods suchs as
	.map or .each, see doc for more info. 
	
	#########
	I.	CSS()
	#########

	To manipulate styles of selected attributes you can write css directly or 
	as a JS OBJECT:
 */
	$('elem');
	elem.css('property', 'value');	//	setter
	elem.css('property')			// 	getter

	$('elem').last().css(styles);		// only updates last elem of nodeList
	let styles = {
		property: 'value',
		property: 'value'
	}

	$('.heading').css('font-size', '2em');
	$('.heading').css('font-size');		// -> 2em;

	$('.heading:first-of-type').css(fontChange);
	let fontChange = {fontSize: '2em', fontWeight: '300'}
/* 
	IMPORTANT to note that in the first example you can write STRINGS that are 
	written as they would appear in CSS. When using an OBJECT notation you have 
	to write JS with the properties in camelCase notation.

	Note that in vanillajs this would require extra lines for each change in a 
	style property.

	SAME STYLE PROPERTY TO MULTIPLE ELEMENTS

	When you have selected, for example, all elements with class .heading you
	can apply the same style properties to the entire list of elements without 
	a for loop! 

	All style properties inside the style object will applied to ALL elements 
	in the selected NodeList.
 */
	$('.heading').css(styles);
/*
	#######################
	II.	TEXT()/HTML()/VAL()
	#######################

	This methods works similarly to the .textContent in vanillajs. 
	You can return the text of a selected element or manipulate it by passing a
	new string value.

	Note: if you have multiple elements in a nodeList you update all of them by
	simply passing a new string value. If you select them the result is a long
	string with all the strings concatenated together.
*/
	$('h1').text();				//  (3) -> "titeltiteltitel"
	$('h1').text('hello');		//	(3)	-> h1: "hello", h1:"hello", h1:"hello"
	$('h1').text();				//	(3)	-> "hellohellohello"
/*	
	The html() methods is the equivalent of innerHTML() in vanillajs. You can 
	select the html content of an element (anchor tag) and manipulate it as 
	you see fit. 

	The val() extract and updates the value of an input. To know for example
	which drop down menu item/radio button/checkbox the user selected.

		$('input').val()	// getter
		$('select').val()	// getter

		$('input').val('')	// setter

	The only use case for setter would be to erase the content of an input 
	element to reset a todo list, for example. 


	##############
	III.	ATTR()
	##############

	Returns the first of the element with the selected attribute. Just as with 
	CSS() you can add an object to manipulate multiple attributes at once.
*/
	$('input').attr('type')				//	-> password
	$('input').attr('type', 'text')		
	$('input').attr('type')				//	-> text
	
	let changeAttr = {
		type: 'text',
		class: 'hidden'
	}
	$('input').attr(changeAttr)
/*
	###########
	IV.	CLASSES
	###########

	You can chain these together:
	$('h1').removeClass('old').addClass('newClass');
	.removeClass('oldClass');
	.toggleClass('toggleClass');

	############
	V.	PARENT()
	############

	The .parent() method on a selected item lets you manipulate the parent 
	element of the selected element. For example, by clicking on a <span> inside
	an <li> you can remove or style the entire <li>
*/
	$('child').on('click', function(){
		$(this).parent().css('color', 'green');
		$(this).parent().remove();
	})
	