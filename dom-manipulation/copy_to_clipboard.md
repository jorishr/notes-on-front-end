# Copy to clipboard
Table of contents
- [Copy to clipboard](#copy-to-clipboard)
	- [Copy input text to the clipboard](#copy-input-text-to-the-clipboard)
	- [Copy textarea string to the clipboard](#copy-textarea-string-to-the-clipboard)
	- [Copy current page-url to the clipboard](#copy-current-page-url-to-the-clipboard)
	- [Adding a tooltip with user feedback](#adding-a-tooltip-with-user-feedback)
	- [Example](#example)

## Copy input text to the clipboard
This assumes an input element and a btn to copy the text the user has typed
into the box.

Select the input element from the DOM. Then use the `select()` method on that variable. Set the `selectionRange(0, 9999)` for mobile devices.
Use the `document.execCommand('copy');` method.


## Copy textarea string to the clipboard
Create a `<textarea>` element and set the value of that `<textarea>` to the string. Append the `<textarea>` to the DOM and use the `select()` method to select the content of the `<textarea>`.
Use `document.execCommand('copy');` to copy the content to clipboard. Then remove the `<textarea>` element from the DOM.

## Copy current page-url to the clipboard
The copy to clipboard function is usually part of the share-to-social-media icon bar lineup.

There is no direct way to select the current URL from the DOM. You have to 
create a dummy element in the DOM, set its value to the url as text, then 
select that dummy element and copy it to the clipboard. Finally, remove the
dummy element.

All that code is wrapped into a click event.

When using vanilla JS the `getElementbyClassName` expects to find a collection of elements with that class. To manipulate just one element use `collection[i]`, or you'll get undefined errors.

## Adding a tooltip with user feedback
The heavy work is done in HTML and CSS where a div is setup with a 
`<span>` element inside. It is set to `opacity: 0;` or `display: none;`. The
JS function adds a CSS class that makes it visibile. After three seconds
the tooltip disappears.

## Example
```Javascript
const dummy = document.createElement('input');
const text = window.location.href;
const shareBtn = document.getElementsByClassName('share-link');
const tooltip = document.getElementsByClassName('tooltip-link');
 	
shareBtn[0].addEventListener('click', (event) => {
	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand('copy');
    document.body.removeChild(dummy);
    
    tooltip[0].classList.add('tooltip-link--visible');
    setTimeout(() => {
        tooltip[0].classList.remove('tooltip-link--visible');
    }, 3000);
});
``` 
If the click event is also added to an element for which you don't want ANYTHING to happen the obligatory href attribute will guide the user to / or #. Use "return false" to prevent any further action.
```HTML
<a  href="#" onClick="return false" class="social__link share-link" 
 	title="copy link to clipboard">
 	<i class="fas fa-link fa-2x"></i>
</a>