# Tab menu's
Tabs are perfect for single page web applications, or for web pages capable of displaying different subjects.

You have menu-bar on top and content section related to each link item in the bar. The other content is hidden and you can toggle between sections with JS.

For a working example see my Codpen: [toggleable tab header](https://codepen.io/jorishr/pen/RwweRqb)

## HTML Markup 
To create the tab links or tab buttons there are TWO OPTIONS: 
- use the data-attribute 
- use the onclick-attribute

Add a data-attribute to each LINK that corresponds with the ID of each content section. 
```HTML
<button class="btn-link" data-section="section1">Section1</button>
<button class="btn-link" data-section="section2">Section2</button>
<!-- 
<button class="btn-link" onclick="yourFn(event,'section1')">Section1</button>
<button class="btn-link" onclick="yourFn(event,'section2')">Section2</button>
 -->
```
The function name refers to your javascript function and the string you pass through that function is related to the ID of the content.

If you want to have a DEFAULT TAB CONTENT showing add an ID attribute to that tab: id="default-tab";

The tab or section content is contained into a div container that is hidden by default. When the user clicks on a button it will open the tab content that "matches" this button.
```HTML
<div class="tab-content" id="section1">
	<h2>title</h2>
	<p>lorem ipsum</p>
  	<span onclick="closeTab(event)">x</span>
</div>
<div class="tab-content" id="section2">
	<h2>title</h2>
	<p>lorem ipsum</p>
	<span onclick="closeTab(event)">x</span>
</div>
```
```CSS
.tab button.active {
	background-color: #ccc;
}
.tab-content {
	display: none; 
	animation: fade-in 1s
}
@keyframes {from {opacity: 0} to {opacity: 1}}
```
If you use the onclick attribute, the eventHandler is already added. You only have to define the function. This goes against the SOC of course.

There are two things to do: show the correct tab-content, and add the active class to the corresponding button. Plus, first, make sure that the active class is removed from all links AND to have all content reset to display: none;
```Javascript
function toggleTab(event, section){
	const tabLinks   = document.querySelectorAll('.btn-link');
	const tabContent = document.querySelectorAll('.tab-content')
	for(let i = 0; i < tabLinks.length; i++){
		tabLinks[i].classList.remove('active');
	}
	for(let i = 0; i < tabContent.length; i++){
		tabLinks[i].style.display = 'none';
	}
	event.currentTarget.classList.add('active');
	document.querySelector('#{section}').style.display = 'block';
}
```
If you want to have a DEFAULT TAB CONTENT showing on page-load, add the following: 
This will trigger the code stored in the onclick attribute.
```Javascript
const defaultTab = document.querySelector('#default-tab');
defaultTab.click();
```
To CLOSE the tab-content
```Javascript
function closeTab(event) {
	event.parentElement.style.display = 'none';
}
```
Replicate the effect on hover by using the attribute onmouseover="yourFn()" or by changing the
the eventHandler from 'click' to 'mouseover'.