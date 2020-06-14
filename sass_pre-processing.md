# SASS
- About SASS
- Install and setup + GULP
- Files and folder structure
- Variabels and operators
- Mixins 
- Inheritance (Placeholder classes)
- Functions

## About SASS
[Official Documentation](https://sass-lang.com/guide)

SASS is a CSS pre-processor. The code you write using the sass syntax is compiled back to normal css through the use of a compiler. 

NOTE1: SCSS is considered the evolved version of SASS. The practical difference is the syntax, SASS does not require the ; and {}, for example. But it is easier to use the SCSS notation as it is closer to regular CSS.

NOTE2: Post-processing refers to what you do with the development-ready CSS: add auto-prefixers, minification, compresion. But PostCSS has changed that to certain extend: pre/post has merged because by using PostCSS you can write SCSS in regular .css files that are compiled to regular CSS during the development process.

# Instal and setup in NodeJS
Sass can be installed as a global NPM package.
```
npm install sass		// as global package
npm install node-sass	
```	
To compile .scss files into one main.scss you need the NODE-SASS package. This is the engine that performs the compilation in NodeJS environment.
```
sass --watch path/<workfile>.scss path/master.css 
```
To automate the process use a task-runner like GULP or WEBPACK. Gulp requires the GULP-SASS package as a dev-dependency. See GULP docs for detailled instructions.

## File and folder structure
You have to seperate the main SCSS WORKING FILE and the CSS OUTPUT FILE. The main SCSS WORKING FILE will only have @import 'module'; statements. 

All actual CSS is written in modules: '_module-name.scss'. Through the taskrunner you compile everything into one CSS OUTPUT FILE that is kept into a temp/styles folder.

When you build the production code this file is minified and gets a revision string number attached to it, and is moved to the proper dist/assets/styles/styles.css path.

## Variables and operators
- SASS variables can be used to store color codes and other css properties that are tedious to type: 
```SCSS
$mainBlue: rgba(22, 44, 66, .7);
```
- Math operators can be used for width calculations for fluid layout based on px width. For example, you take a pixel value and convert it into a percentage based on a set width (960px).
```SCSS
.container {
 	  width: 100%;
}

article[role="main"] {
	float: left;
	width: 600px / 960px * 100%;
}

aside[role="complementary"] {
	float: right;
	width: 300px / 960px * 100%;
}
```
## Mixins
Mixins group a number of CSS declarations in a FUNCTION that you can reuse. You can define breakpoints for responsive design, add browser prefixes.

This is a two step process: the mixin definition and the application in the css selector styles.

- A. Mixin definition
There are two main uses for mixins: media queries and font-styles and other variables.Example of a media query mixin:
```SCSS
@mixin <name> {
	@media (min-width: 800px){
		@content
	}
}
```
Example of font mixins and variables that store the FONT-FAMILIES into a variable with a shorter name.
```SCSS
$six-caps: 'Six Caps', sans-serif;
$merriweather: 'Merriweather', serif;
```
Define the font-families as BASE and ALT variable and set the font-sizes you will use in REM. It is also advisable to store the main colors of your project.
```SCSS
$ff-base: $merriweather;
$ff-alt: $six-caps;

$fs-base: 1rem;
$fs-h1: 3.75rem;
$fs-h2: 2.875rem;
$fs-h3: 2.25rem;
$fs-xl: 6rem;
```
Variables can also be defined together using $vars: ();

Note the syntax change with comma seperated properties.
```SCSS
$vars: (
	black: #252525,
	yellow: #e9d20f
);
```
The mixin function will extend into the class the base font-family, the font-size, the font-weight and the color. This function allows some parameters to be changed. 

Thus .class { @include font-base } without paramaterss will set the font-family to $merriweather, and the font-weight to 300. The font-size and color will not be set, as no default values are specified.

If on the other hand you use .class { @include font-base(font-size: $fs-h3, color: $yellow)} than those variables will also set the font-size and font-color. 
```SCSS
@mixin font-base(
	$font-size: $fs-base, 
	$font-weight: 300, 
	$color: $black
	) {
		color: $color;
		font: {
			family: $ff-base;
			size: $font-size;
			weight: $font-weight;
		}
	} 
```
- B. Mixin use in SCSS modules

The selector you want to use a mixin function for needs to have the '@include mixin-name' statement.

In the example we define a media-query with min-width: 800px and the name atMedium. This means that the styles we will declare will only kick in from 800px width screens onwards.
```SCSS
.class {
	@include atMedium { };
}

.class {
	font-size: 16px;
	...
	@include atMedium {
		font-size: 20px;
	}
}
```
## Extend / inheritance
A placeholder class is defined first and later only activated when it is extended to a specific class.
```SCSS
%placeholder {
	border: 1px solid #ccc;
	padding: 10px;
	color: #333;
}

.buttonA {
	@extend %placeholder;
}

.buttonB {
	@extend %placeholder;
	border-color: green;
}
```
## Functions
A good reason to use functions would be in the process of generating fallback options for your CSS VARIABLES.

First you define the variables as SASS VARIABLES, then auto-generate CSS VARIABLES with a css function.

Since the SASS VARIABLES will be turned into regular css automatically by the pre-processing, those will be the fallback options, while modern browsers will use the CSS VARIABLES.
```SCSS
$vars: (
	blck: #252525,
 	yllw: #e9d20f
);

:root {
	@each $property, $value in $vars {
		--#{$property]: #[$value];
	}
}
```
Note that you have to use interpelation syntax to make sass read the actual names of the properties and their values when generating the css variables.

To impliment this when writing the properties for elements you use a mixin called VAR that automatically write the fallback property AND the variable notation.
```SCSS
@mixin var($property, $variable){
	#{$property}: map-get($vars, $variable);
	#{$property}: var(--#{$variable});
}
```
Thus, the first line will turn out as the property: value; and the second line will generate the property: var(--variable);

Example:
To setup the color property for the heading h1 you use:
```SCSS
h1 {
	font-size: 2rem;
	@include var(color, blck);
}
```
This will compile to regular css as:
```CSS
h1 {
	font-size: 2rem;
	color: #252525;
	color: --var(blk);
}
```
### Built-in functions 
There are SASS built-in functions to lighten or darken colors. This is usefull when you need minor adjustments to a base color:
```CSS
background-color: lighten(grey, 5%);
background-color: darken(grey, 5%);
```