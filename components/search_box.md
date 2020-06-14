# Search boxes
See codepen for working examples:
- [link:Basic Search Box](https://codepen.io/jorishr/pen/rNNoWmg)
- [link:Expanding Search Box](https://codepen.io/jorishr/pen/dxGKvg)

1. HTML Markup / CSS
The main html elements are: 
- a containing div
- an input element from the text type with a placeholder attribute 
- another input tag or a-tag to submit the search (as btn and/or icon)
```
div.search-box
	input.search-text[name="search"]
		a.search-btn
			i.
```
Position the search-box where you want on the page and give it: 
- fixed height, 
- a background-color, 
- paddding.

The search-text class is floated to the left.

The search-btn is floated to the right.

- half circle rounded corners
The border-radius should be set equal to the height of the element. You can set this on the input element directly but it is better to to apply it to the search-box.

- input tag styles
```CSS 
input {
	outline: 0; /* remove the outer tiny box around the text*/
	border: none;
	background-color: none;
	padding: 0; /* only added on hover*/
	color:; 
	line-height:; /*experiment to find the correct one */
	font-size:;
	width: 0; /*expands on :hover or :focus (:focus-within)*/
}
```
- width expands on hover 
```CSS
.search-box:hover > search-text { width: 240px; padding: 0 	6px}
	
.search-box:hover > search-btn { background: white }
```
Use transitions of +- .4s to smoothen the expansion effect. 

2.	Bootstrap
The bootstrap markup consists: 
- a form
- a containing div
- a label
- two input elements
The second input tag can be swapped for a button tag.
```
form.form-inline
	div.form-group
		label
		input.form-control name=search type=text
		input.btn type=submit value=search
```
The bootstrap styles are not compatible with the example markup in 1. above. Either accept the limitations of bootstrap or create a fully custom search box with custom css.

## Yelp Camp example
See github code: [link: Yelp Camp](https://github.com/jorishr/yelp-camp)
To change the placeholder color text use the placeholder pseudo elememt class.
```
::placeholder { }
.search-box { }
```
Padding can be added to position better the input text.

IMPORTANT: set :focus-within on the search-box. The :focus on the input element is limited in functionality. When you want to change other elements than the input element itself the :focus-within pseudo class lets you make all the change when inside the box the input elememt is in focus.
```
.search-box:focus-within {
	background: $secondColor;

	.search-box__btn {
			color: $mainBackground;
	}
}
```
The button is straightfoward without an icon. If inside the a-tag or buttun an icon is used you need flexbox (align-items and justify-content) or postion: relative to centere it correctly.

If you want it to be a circle, then you set width=height and border-radius of 50%.