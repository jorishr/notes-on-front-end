# Password field box with visibility toggle

## HTML/CSS Markup
The password input element should already be inside a form-group div element. Inside you add another `div.password-box` that hold the `<input>` element and an `<i>` element.
	
The password box is set to be position relative and the icon is positioned
absolutely to overlap inside the input element.

## JS Logic	
Use JS to change: 
1. 	the `input.type` from password to text
2.	change the icon class to toggle the display of another icon 

The input element AND the icon should get an ID or class to be selected in 
JS.

The logic is simple: if the input field type attribute is set to password, the click on the icon will trigger a change to `type="text"`.

To change the icon you need to add and remove classes with the `element.classList.add()` or `-.remove()` methods.
```Javascript
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