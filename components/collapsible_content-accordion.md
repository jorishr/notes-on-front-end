# Collapsible content
How to create accordion style sections that have part of the content hidden by default with a 'read more/read less' button to toggle content.

## HTML Markup
Basically you have large buttons, that when clicked show the hidden content below each button.
```HTML
<button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>
```
## CSS and JS
The basic CSS styles are modified with JS code built around an eventListener.
- The panel class with the content is hidden by default
- A different background color is added to the button that is clicked on (active class). This color change could be the same as the :hover changes.
```CSS
.panel { display: none;}

.active, 
.accordion:hover {
  background-color: #ccc;
}
```
- loop over all the array of accordion buttons and 
1. add an eventListener
2. toggle the active class on the btn
3. set the display property of the CORRESPONDING panel to block. The corresponding panel is identified as the nextElementSibling in the html markup.
```Javascript
const btns = document.querySelector('.accordion');
for(let i=0; i < btns.length; i++){
	btns[i].addEventListener('click', () => {
		this.classList.toggle('active');
		let panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
   			panel.style.display = "block";
		}
	});
}
```
##	Animations
- To make the transition smoother you can work with the opacity or transition the max-height property.
- To add a changing +/- sign to the button use a pseudo-element.
```CSS
.accordion::after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active::after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}