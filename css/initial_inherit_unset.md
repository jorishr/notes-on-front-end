# Initial, inherit and unset 
## Inherit
The inherit keyword value causes the element to take the value of the   property from its parent element. This reinforces the default behavior, and is only needed to override a previously defined rule.

Example: Make second-level headers green 
```CSS
h2 { color: green; }
/* 
...but leave those in the sidebar alone so they use their parent's color 
*/
#sidebar h2 { color: inherit; }
```
## Initial
Use initial to set a property to its initial value. This initial value is set by the browser default.

## Unset
Use unset to set a property to its inherited value if it inherits, or to its initial value if does not inherit from its parent.