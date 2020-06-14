# BEM Naming convention
- About
- Syntax and exmamples
- Exceptions to the rule
## About BEM and naming conventions
BEM: Block-Element-Modifier structure. 

The primary function of classes is to be a hook for CSS and JS, thus only useful to developers, not for search engines, that is what html semantics are for. 

By using BEM you avoid descendant selectors, type selectors and the cascade, you create a direct relation between the element and CSS for every element. The seperation between CSS and HTML becomes cristal clear. May be tedious at first, but much better for updates one year later when you don't remember what you did.

Extra advantage of BEM is it works well with SASS.
	
## BEM syntax and examples
- Use <__> for all child elements of a block. 
```HTML
<div class="box">
	<h2 class="box__title"></h2>
	<p class="box__text"></p> 
	<img class="box__image">
</div>
```
```SCSS
.box { 
	width: ;
	height: ;
	&__title { 
		font-size: 20px; 
		color: green;
	}
	&__text {}
	&__img {}
}
```
- Use <--> for modifiers classes. Modifiers classes make smaller changes to the default state of a block or element.
```HTML
<div class="btn btn--blue">
<div class="btn btn--red">
```
```SCSS
.btn {
	color: #fff;
	&--blue {
		color: blue;
	}
	&--red{
		color: red;
	}
}
```
- Single responsibility blocks: example of a block of code that creates columns
```SCSS
.block {
    &__element {}
}
```
- BEM and Javascript
Use seperate 'js-' classnames as hooks for JS code:
```HTML
<li class="menu__item js-menu__item">
```
###	BEM Exceptions
Paragraph p-tags are not always unique but rather generic and may be changed in the future or can be powered by a Content Management System. 

Use a generic-content-container module that can be re-used. This sets the default styling for all future paragraphs since we as a developer do not control the p's and the future classes that may or may not be applied to it.