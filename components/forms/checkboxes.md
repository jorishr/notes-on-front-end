# Checkbox input fields 
Radio buttons are grouped into a set in which only one radio button can be
selected at a time, whereas checkboxes allow you to turn single values on 
and off. Where multiple controls exist, radio buttons allow only ONE to be 
selected out of them all, whereas checkboxes allow multiple values to be 
selected.

- NAME/VALUE

If a checkbox is UNCHECKED when its form is submitted, there is NO VALUE
SUBMITTED to the server to represent its unchecked state. Thus the server
does not receive any variable to work with at all.

When the checkbox is CHECKED the variable with NAME and VALUE is submitted
to the server with the default value of value="on". You can specify that 
value as you see fit.
```HTML
<div class='form-row'>
    <label for='available' class='checkbox-label' >
        <input type="checkbox" id="available" name="available" value="true"/>
        <span>I’m actually available the date of the talk</span>
    </label>
</div>
```
## Styling checkboxes
By putting the input element nside the label tag the layout on a SINGLE LINE becomes easier as you can use width: auto on the label. This will make the label as wide as the width of the content elements.