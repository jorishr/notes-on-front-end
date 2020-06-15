# Input elements
- text input field
- email, search, tel
- text area
- date
## Text input field
Text input `<input type="text">` always creates some kind of interactive user input like text, email, password, etc. Conceptually, an input element represents a VARIABLE that gets sent to the backend server. The NAME attribute is the identifier for this variable and the VALUE is whatever the user entered into the text field or the value that is pre-defined with the value="" attribute.
```HTML
<form action="" method="">
    <div class='form-row'>
        <label  for='firstname'>First Name</label>
        <input  type="text" id="firstname" name="firstname" value="John" 
                placeholder="First name here..." required/>
        <label  for='lastname'>Name</label>
        <input  type="text" id="lastname" name="lastname" value="Doe" 
                placeholder="Last name here..." required/>
    </div>
</form>
```
### Styling text input fields
Adjust the size of the text input field to the expected length of the input. Thus ZIP code box should be smaller than name, for example.

Either add classes to the input element or use the attribute selector in css: `input[type='text']`.

Other PSEUDO CLASSES can be used to modify the appearance on different states. For example, on focus you can change the text-color by using the :focus selector. When an invalid email-adress is provided you can change the text to red with the :invalid pseudo-selector. 

### Border bottom line on text input element
Remove background. Set a border: none; AND border-bottom: 1px solid;

Then ::focus add a box-shadow with VERTICAL offset and a NEGATIVE SPREAD: 
`box-shadow: 0 .5rem 0 -.35rem;` Thus a zero offset on the X-axis, a .5 offset on the Y-axis, zero BLUR and a SPREAD of -.35. The spread will reduce the offset that is defined.

## Email, search, tel input fields
By telling browsers that we’re looking for an email address, they can provide a more intuitive user experience. For instance, when a smartphone browser sees this type="email" attribute, it gives the user a special email-specific keyboard with an easily-accessible @ character.

Use the pattern attribute to add basic validation.    

Same thing for search input field. Add the attribute `type="search".
Same thing for telephone input field. Add the attribute `type="tel".

## Textarea input field
You can leave the browsers and users to determine the size of the text-area or you set manually the ROW and COLS attributes. To avoid resizing on the client side add css property textarea { resize:none; }.
```HTML
<div class='form-row'>
    <label for='abstract'>Abstract</label>
    <textarea id='abstract' name='abstract' row='' cols=''></textarea>
</div>
```
## Date input field
The `<input type="date">` will trigger a calendar in the browser to pick, for example, a date of birth.

When using view templating engines to render the html you can add JS to the HTML markup prefill the DATE:
```HTML
<input  type="date" name="brthd" min="2000-01-01"   
        value=" <%= new Date().toLocaleDateString(('es-ES'), {year: 'numeric', month: '2-digit', day: '2-digit'}) %>
```