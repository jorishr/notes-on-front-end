# Focus state
The default :focus state styling differs by browsers and is usually not very pretty.

Focus state is important to account for people that use keyboard navigation. Some users prefer to navigate a site through keyboard only, using tab, arrows and enter. 

The main style property by default is the outline. 

When you set `outline: none;` to avoid the ugly default browser frame you will have to specify other `:focus` styles so that users can see which btn or item is selected.

The easy way out it make the style the same as the :hover styles.

Outlines don't affect the document flow.

Just as box-shadows you can make them as large as you want without an effect on surrounding elements.

## Text link example
For example, create a box around text links in a custom color. 
```CSS
a:focus {
	outline: 3px red;
	outline-offset: 2px;
}
```
## Buttons
For rounded buttons you can use TWO BOXSHADOWS to create a nice circle around the button.
```
a:focus {
	box-shadow:
		0 0 0 5px <bg/white>;
		0 0 0 10px <color>;
}
```