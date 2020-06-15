# Radio button input fieds
Radio buttons are a little more complex to work with than text fields because they always operate in groups, allowing the user to choose one out of many predefined options.

- Fieldset
Every radio button GROUP you create should be wrapped in a `<fieldset>` element,  which is labeled with a `<legend>` element. Associate a `<label>` element with each radio button.
    
Use the same NAME attribute for each radio button in the group, otherwise the server will not know they belong together.

Use different VALUE attributes for each radio button.
```HTML
<fieldset>
    <legend>Choose your radio station</legend>
    <label  for="radio1">Radio1</label>
    <input  type="radio" name="radiolist" id="radio1"
            value="radio1" checked />
    <label  for="radio2">Radio2</label>
    <input  type="radio" name="radiolist" id="radio2" value="radio2"/>
</fieldset>
```
## Styling radio buttons
The `<fieldset>` adds a border and margins by default that don't look very stylish in
most browsers.

Flexbox is not supported for `<fieldset>` thus you have to rely on floats and `position: relative` to position elements inside it.