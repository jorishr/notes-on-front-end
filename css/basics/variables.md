# CSS Variables

Reference: [Video series exploring CSS Variables by Kevin Powell](https://www.youtube.com/playlist?list=PL4-IK0AVhVjOT2KBB5TSbD77OmfHvtqUi)

Table of contents
- [CSS Variables](#css-variables)
	- [Declaring variables](#declaring-variables)
	- [Applying variables to elements](#applying-variables-to-elements)
	- [Modifiers](#modifiers)
	- [Media queries](#media-queries)
	- [CSS and SASS fallback options](#css-and-sass-fallback-options)
		- [The SASS function](#the-sass-function)
		- [The SASS Mixin](#the-sass-mixin)

## Declaring variables
Variables can be defined at the html element level as that is the root element of the page. But the `:root` pseudo class is higher specificity and it keeps custom variables seperate from other html element related properties.

The variables cascade if you put them in the root. If defined inside another class, for example, they have a local scope and can not be applied throughout other elements.

The biggest advantage of using custom css variables is that you can have all the CONTROLS about fonts, spacing and colors in one place: at the top of a larger document.
```CSS
:root {
  --clr-light: #fdffc4;
  --clr-dark: #00332a;

  --clr-primary: #dbffa2;
  --clr-secondary: #c3fcf2;
  --clr-accent: #ff7750;

  --foreground: var(--clr-dark);
  --background: var(--clr-light);

  --ff-title: "Playfair Display", serif;
  --ff-body: "Assistant", sans-serif;

  --sec-padding: 3em;
}
```
## Applying variables to elements
You can use it for colors but also for recurring padding patterns, like section-padding.

To apply the variables to an element property use the var() function value.
```CSS
.class { color: var(--clr-primary) }
```
## Modifiers
Imagine three cards that have a primary color as defined in the root. But there is also a MODIFIER CLASS that changes the variable to make that card standout:
```CSS	
.card--important { 
	--primary-clr: var(--accent-clr)}
```
With just one line of css you can change multiple elements to the `--accent-clr` which is also defined in the :root.

## Media queries
At the start of the media-query you redefine the `:root` variables you want to have adjusted, and that's it. You don't have to change individual properties.
```CSS
:root {
	--fs-s: .8rem;
	--fs-m: 1rem;
	--fs-l: 1.2rem;
}

h1 { font-size: var(--fs-l) }
h2 { font-size: var(--fs-m) }
p  { font-size: var(--fs-s) }

@media min-width(1200px) { 
	:root {
		--fs-s: 1rem;
		--fs-m: 1.2rem;
		--fs-l: 1.4rem;
	}
}
```
## CSS and SASS fallback options
Lack of browser support? Make use of the cascade. On the element properties add the fallback color or font-size BEFORE the use of the var().
```CSS
h1 {
	color: red;
	color: var(--primary-clr)
}
```
This obvisously not very efficient. A better way of working is to use a SASS FUNCTION and MIXIN.

### The SASS function
First you define the variables as SASS VARIABLES, then auto generate CSS VARIABLES with a css function.

Since the SASS VARIABLES will be turned into regular css automatically by the pre-processing, those will be the fallback options, while modern browsers will use the CSS VARIABLES.
```SCSS
$vars: (
	blk: #252525,
 	yelw: #e9d20f
);

:root {
	@each $property, $value in $vars {
		--#{$property]: #[$value];
	}
}
```
Note that you have to use interpollation syntax to make sass read the actual names of the properties and their values when generating the css variables.

### The SASS Mixin
To impliment this when writing the properties for elements you use a mixin called VAR that automatically writes the fallback property AND the variable notation.
```SCSS
@mixin var($property, $variable){
	#{$property}: map-get($vars, $variable);
	#{$property}: var(--#{$variable});
}
```
Thus, the first line will turn out as the `property: value;` and the second line will generate the `property: var(--variable);`

Example: setup the color property for the heading h1.
```SCSS
h1 {
	font-size: 2rem;
	@include var(color, blk);
}
```
This will compile to regular css as:
```CSS
h1 {
	font-size: 2rem;
	color: #252525;
	color: --var(blk);
}