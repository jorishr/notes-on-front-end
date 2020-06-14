# Bootstrap buttons 
- The button class and default style: .btn .btn-default
- Size: .btn-sm / .btn-lg / btn-block for full width of container
- Colors: primary, danger, success, info, warning, etc. 

A-tags versus button tags: the button tag is a semantic html element for which the role is clear but usually reserved for forms or navbars.

In the rest of the page use the a-tag and add a ROLE attribute: 
```HTML
<a class="btn btn-sm btn-success" role="button">
```
## Button groups
Group a series of buttons together on a SINGLE LINE with the .button-group class. 
This can be used for navigation bars in the default horizontal layout or VERTICALLY with the class: .btn-group-vertical
```HTML
<div class="btn-group" role="group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
</div>
```
## Button toolbar
This can be used for pagination, for example, so that the two groups will appear next to each other but seperated: 1-2  3-4
```HTML
<div class="btn-toolbar" role="toolbar">
    <div class="btn-group mr-2" role="group">
        <button type="button" class="btn btn-secondary">1</button>
        <button type="button" class="btn btn-secondary">2</button>
    </div>
    <div class="btn-group mr-2" role="group"> 
        <button type="button" class="btn btn-secondary">5</button>
        <button type="button" class="btn btn-secondary">6</button>
    </div>
</div>
```
## Dropdowns and nesting
Button groups can be nested inside one another and thus create DROPDOWN menu's. 
You have three components: 
- the parent div .btn-group 
- a button element with the class .dropdown-toggle AND the attribute data-toggle="dropdown"
- the dropdown menu itself is a div with anchor tags. 
```HTML
<div class="btn-group" role="group">
    <button id="btnGroupDrop1" 
            type="button" 
            class="btn dropdown-toggle" 
            data-toggle="dropdown">
    Dropdown
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Dropdown link</a>
        <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
</div>
```