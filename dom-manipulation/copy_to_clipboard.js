/* 
#################
COPY TO CLIPBOARD
#################

################################
I.	COPY INPUT TEXT TO CLIPBOARD
################################

This assumes an input element and a btn to copy the text the user has typed
into the box.

Select the input element.
Use the select() method on that variable.
Set the selectionRange(0, 9999), on the same variable for mobile devices.
Use the document.execCommand('copy');


#################################
II. COPY TEXT STRING TO CLIPBOARD    
#################################
- create a <textarea> element and 
- set the value of that <textarea> to the string
- append the <textarea> to the dom
- use select() method to select the content of the <textarea>
- use document.execCommand('copy') to copy content to clipboard
- remove <textarea> from the dom


##########################################
III.    COPY CURRENT PAGE URL TO CLIPBOARD
##########################################

The copy to clipboard function is usually part of the SOCIAL MEDIA ICON BAR
lineup. 

There is no direct way to select the current URL from the DOM. You have to 
create a dummy element in the dom, set its value to the url as text, then 
select that dummy element and copy it to the clipboard. Finally, remove the
dummy element.

All that code is wrapped into a click event.

NOTE: when using vanilla JS the getElementbyClassName is an array as it 
expects to find a collection of elements with that class. To manipulate
just one element use [], or you'll get undefined errors.

JS ORGANIZATION

T0 have this script run only the pages that have the share icons you have
various options: include a seperate script on each page. Or, better, make
it part of the main.js file and wrap the code in a function that has an a
conditional statement in it. This is especially useful when you want to
have modular code.

The challenge is to identify the pages that have or don't have social 
icons. The best way is to add a class to the body tag of that page. When
working with template engines however, this is more complicated as the body
tag is part of the header template. 

The workaround is to add a small script tag at the bottom of the page to 
add a class to the document.body.classList.add('<class>').

ADD A TOOLTIP AFTER COPY IS DONE
The heavy work is done in HTML and CSS where the div is setup with a 
<span> element inside. It is set to opacity: 0; or display:none; and the
JS functions adds a CSS class that makes it visibile. After three seconds
the tooltip disappears.

*/
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
/* 
If the click event is added to an element and you don't want ANYTHING to happens
the obligatory href attribute will guide the user to / or #. Use "return false" 
to prevent any further action.
*/
<a  href="#" onClick="return false" class="social__link share-link" 
 	title="copy link to clipboard">
 	<i class="fas fa-link fa-2x"></i>
</a>