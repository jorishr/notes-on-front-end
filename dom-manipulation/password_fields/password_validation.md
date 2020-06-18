# Front-end password validation
Table of contents
- [Front-end password validation](#front-end-password-validation)
  - [The logic](#the-logic)
  - [HTML Markup](#html-markup)
  - [Instruction messages to the user](#instruction-messages-to-the-user)
## The logic
- define a set of conditions
- when the user clicks on the pw field: show the conditions, when out of focus, hide instructions
- when the user types, store the value in a variable, if the variable value matches one of the conditions, change the style/color of that condition in the instructions

## HTML Markup
Set the regex of all the combined conditions in the PATTERN attribute. Also add the written instructions to the TITLE attribute.
```HTML
<input type="password" id="psw" name="psw" 
	 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
       title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
	required>
```
## Instruction messages to the user
Below or above the paswword field, add a MESSAGE container with the instructions:
```HTML
<div id="message">
  <h3>Password must contain the following:</h3>
  <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
  <p id="number" class="invalid">A <b>number</b></p>
  <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>	
```
With JS and a CSS class `.valid` you turn those conditions green when a particular condition is met.
- When the user clicks on the password field, show the message box
	`myInput.onfocus = function() {}`
- When the user clicks outside of the password field, hide the message box
- When the user starts to type something inside the password field: 
  - Validate lowercase letters
	- Validate capital letters
	- Validate numbers
	- Validate length

See my Codepen for a working example [Form with validation](https://codepen.io/jorishr/pen/vYYwrQq)