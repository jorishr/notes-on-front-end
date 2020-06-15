# Form buttons
Clicking the button tells the browser to validate all of the input elements in the form and submit it to the action URL if there aren’t any validation problems.

The standard button markup uses the button-tags: `<button></button>`. Button is an inline level element that can be styled easily. It also can include child elements like icons or images.
	
## Attributes
In the context of a form the button the type attribute should be set to either `type="submit` or `type=reset`. Reset erases the data in the input fields. If the button elements is used outside the context of a form, set `type="button"`