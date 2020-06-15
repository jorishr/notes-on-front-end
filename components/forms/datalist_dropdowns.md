# Dropdowns and datalists
## Dropdown selection input fields
The select element represents the dropdown menu, and it contains a bunch of option elements that represent each item in the dropdown list. Important: to keep the first option value (blank) out of the database use the attribute: `selected="disabled"`.
```HTML
<div class='form-row'>
    <label for='t-shirt'>T-Shirt Size</label>
    <select id='t-shirt' name='t-shirt'>
        <option value='xs'>Extra Small</option>
        <option value='s'>Small</option>
        <option value='m'>Medium</option>
        <option value='l'>Large</option>
    </select>
</div>

<div>
    <label for="birthday">Birthday:</label>
    <select id="birthday" name="birthday" >
        <option value="0" selected disabled>Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
    </select>					
    <select name="birthday">
        <option value="0" selected disabled>day</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <select name="birthday">
        <option value="0" selected disabled>year</option>
        <option value="1983">1983</option>
        <option value="1984">1984</option>
    </select>
</div>
```
## Styling dropdown fields
Dropdown menu's are hard to style because on Iphone for example it triggers the system's native UI. It’s usually best to keep the custom css to a minimum and let the browser
determine the best way to present a select element.
    
Try using radio buttons first or look for JavaScript UI widgets: Bootstrap Dropdowns and jQuery Selectmenu’s are common JavaScript solutions for customizing select menus.

Or better, use DATALIST instead.

## Datalist
Datalist geeft een leeg input vak maar met een voorgedefiniëerde keuzelijst
via "input list". Dit is beter dan bijv. een drop-down, zeker met een lange
lijst potentiële waarden. Dit is enkel HTML5 en niet in IE9 en Safari, dit 
kan je oplossen door de <option> tags in een <select> tag te stoppen.
```HTML
<form>
    <input list="browserlist" name="browsers">
    <datalist id="browserlist">
        <select>
            <option value="firefox"></option>
            <option value="Safari">
            <option value="Brave">
            <option value="IE">
            <option value="Chrome">
            <option value="Opera">
        </select>
    </datalist>
    <input type="submit">
</form>
```