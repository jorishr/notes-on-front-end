/* 	
    PASSWORD BOX WITH EYE FOR TOGGLING **** VIEW

    HTML/CSS MARKUP

	The password input element should already be inside a form-group div 
	element. Inside you add another div.password-box that hold the <input>
	element and an <i> element.
	
	The password box is set to be position relative and the icon is positioned
	absolute to inside the input element.
	
	Use JS to change: 
		1. 	the input.type from password to text
        2.	change the icon class to toggle the display of another icon 

    The input element AND the icon should get an ID or class to be selected in 
    JS.

    The <i> should get an ATTRIBUTE onClick="" which accepts JS and inside you 
    add the function you've written.

    NOTE: the JS file should be imported at the bottom of the page.

    1.  The logic is simple: if the input field type attribute is set to 
    password, the click will trigger a change to type="text".

    2.  To change the icon you need to add an remove classes with the
    element.classList.add() or .remove() methods.
*/

let pwField = document.getElementById('pwField');
let icon = document.getElementById('pwIcon');

function passwordToggle(){
    if (pwField.type === 'password'){
        pwField.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        pwField.type = 'password';     
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    };
};