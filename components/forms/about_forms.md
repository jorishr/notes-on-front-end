# Forms
- About	
- HTML Markup
- Backend process
- Attributes
- Labels
- Styling
## About
Forms are the "money pages" of any website. Of crucial importance. There are two aspects of a functional HTML form: the frontend user interface and the backend server. The former is the appearance of the form (as defined by HTML and CSS), while the latter is the code that processes it (storing data in a database, sending an email, etc).

It’s always a good idea to have a mockup representing the exact page you want to build before you start coding it up, but this is particularly true for forms.

## HTML Markup
```HTML
<form action='/server/' method='get' class=''>
```	
The ACTION attribute holds the server url link where the data is send to once the user clicks the submit button.

The backend technologies for processing this data can be, for example, PHP, NodeJS(Express) or Ruby.

The METHOD attribute can be either post or get, both of which define how the form is submitted to the backend server. The general rule of thumb is to use "post" when you’re changing data on the server, reserving "get" for when you’re only getting data, like with search-bar.

NOTE: If you leave the action attribute blank and use the 'get' method you can easily inspect the content of the form as it is submitted to the same url in the address bar.
	
## Backend process
Generally speaking, there are two ways to process forms:
-  Submit and redirect: the form data is sent to a backend URL, which then redirects the user to a success or error page.
- Submit and render new info on the same page: the existing page is updated with AJAX queries and success or error messages are displayed on the same page by manipulating the HTML with JavaScript.

Forms usually send the data it contains URL ENCODED as application/x-www-form-urlencoded

That is why in EXPRESS you use the bodyParser.urlEncoded({extended: true}) method to PARSE the form info.

When working with FILE UPLOADS the data is send in a different format: multipart/form-data. The HTML attribute then needs to be: enctype="multipart/form-data"

When you have both data-types in the same form form you get errors. Thus either seperate the forms or use a library like FORMIDABLE to better handle the process.

### Workflow
Depending on how your organization is structured, form processing may not be part of your job role as a frontend web developer. If that’s the case, you’ll need to coordinate closely with a backend developer on your team to make sure the form submits the correct name-value pairs. Otherwise, it’ll be up to you to make sure the frontend and backend of your forms fit neatly
together.
- mockup: visual representation of what to build
- form markup in html
- form styling in css
- form animation in css/js
- form validation: front-end with pattern attribute and/or backend code

## Attributes
- title: enhances user experience with additional info on hover
- autofocus: a boolean value that automatically sets the input to autofocus on loading the page.
- required: a boolean value that uses browser styles to indicate to the user that he cannot leave it blank upon clicking submit.
- name: each input field should have a NAME attribute. 

The name and value attributes are included in HTTP request when we submit the form and the
name is used as a reference in the backend code to identify the input fields.
	
- value: defines the initial or default value of the input form.
- size: specifies the number of characters a text input field can have.
- instead of size you can use maxlength and minlength
- pattern: specifies a regular expression that the input element's value is checked against on form submission.
- placeholder: 

The placeholder attribute specifies a text within an input field which informs the user about the expected input of that filed. The placeholder attribute can be used with text, password, email, and URL values. It is removed once the user starts typing.

Note that when you specify a default value in the value="" attribute this will override the placeholder.

- form: 

Allows you to place input fields or buttons outside the form-tag markup while still being submitted when clicking the button. This requires two steps: an ID on the form element `<form id="fcontrol">` and a form attribute on the input element outside the form tags `<input form="fcontrol">`.

## Labels
The label element is good html semantic practice and helps screenreaders. The `<label for="">` attribute must match the input element id attribute `<input id="">`.
	
To add an ASTERIX after required field label use a ::pseudo element.

## Styling
What the forms should look like is something you need to draw up in advance. Also think about basic animation. 

Many components can be recycled into a seperate .scss file. Especally the styling of labels an input elements.

### Trigger button click on using enter key
If the users presses the ENTER KEY, the same action should occur as if he 
clicked the button next to the input element.

You select the input field in js and add an eventListener that listens for 'keyup' event. Prevent the default action. If the keyCode === 13 (enter key), btn.click();
```Javascript
const input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
    }
});
```
To clear the input field onfocus use the ATTRIBUTE onfocus="this.value=''"; Or add a reset btn and js.
