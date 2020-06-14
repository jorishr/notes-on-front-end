# Buttons
- The a-tag as button
- Buttons inside forms: see [forms guide](../forms/forms.md)
- Styling and animating buttons
- Other buttons types

## The a-tag as button
This is the preferred way of creating buttons. A-tags versus button tags: the button tag is a semantic html element for which the role is clear but usually reserved for forms or navbars.

Always set display: inline-block, especially if there is vertical padding. By setting the inline-block, other elements around will be aware of the vertical padding.

HTML: add class .btn or .button. If not part of a form: add attribute role="button". The onclick attribute accepts plain Javascript and works as a click event listener, so you can add links or functions.
```HTML
<a 	class="btn" role="button" 
	onclick="location.href=`google.com`" value="Go to Google">
	Link to Google
</a>
```
## Styling and animating buttons
- Base styles 

The anchor tag is an INLINE element. Use display: inline-block to make it behave correctly if what you want it as a stand-alone button.

Text inside buttons may start to wrap on a second line when space is restricted. This may result in an ugly button. To avoid this you can use no-wrap in css or the text-nowrap class in html when using Bootstrap.

Padding on top and bottom is usually about half or less of the padding on the sides.
```CSS
.btn {
	display: inline-block;
	text-transform: uppercase;
	letter-spacing: .08em; 
	letter-spacing: .1em;

	white-space: nowrap;

	padding: .5em 1.25em;
	box-shadow: 0 12px 12px -6px rgba(black, .3)
	/* 
		None on the X-axis; 12px on the Y-axis; blur: none; spread: -6px;
		A negative value for the spread reduce the length of the shadow.
		A good rule of thumb is to use half of the offset.
 	*/
}
```
When working with TWO buttons next to each other make one have a BACKGROUND and the other a BORDER but no background, to have a contrasting OUTLINE effect.

- Unset styles
This will select all possible properties and set back to default values: initial or inherit. For example the font-size may be inherited from the container div but the bg color of the padding wil be set to initial value: none; so the btn is reduced to plain text.
```CSS
.btn { all: unset } 
```
## Improving user experience with animation
```CSS
.btn {
	opacity: .75;
	transform: scale(1);
	transition: transform ease-in-out 250ms, 
	box-shadow ease-in-out 250ms;
}
.btn:hover {
	opacity: 1;
	transform: scale(1.05);
}
```
## Advanced button animations
See this [Codepen](https://codepen.io/jorishr/pen/jQzRyv) for examples.

## Other button types
There a variety of options:
- split button with an arrow and dropdown menu
- read more.../less btn
- download btn
- btn with notification
- previous/next btns

See this [Codepen](https://codepen.io/jorishr/pen/oNNQwpy) for examples.