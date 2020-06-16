# CSS File Architecture
Each scss/css file should be small and have a specific purpose. Therefore you create MODULES inside a dedicated folder with _partial (S)CSS files for each module.

The main.scss file tracks all the files that have to be IMPORTED and compiled into the main.css file.

The order of the @import statements in the main.scss matters for compiling sass correctly:

1. start with a style RESET
2. _variables
3. _global

Variables may be used in global and thus have to be defined first.

_generic-containers better come towards to top as well, so you always have the option to override futher down the css.

## Global styles
Some rules should apply to all elements or all tags of specific type. You store them in a partial _global.scss in the BASE styles folder (*, html, body, headings, anchors, images).

You may also consider a _typography.scss for fonts.

## Layout
Similarly create layout related modules: _page-section.scss

## Variables
Variables can be used to store recurring properties that are hard to type or remember, a color code for example. Variables are stored in a seperate _partial.scss in the BASE styles folder.

## Components
Styles for recurring components should also be stored in seperate modules: _cards.scss, _btns.scss

## Bootstrap, Fontawesome and other libraries
If you want to use a local install of bootstrap and fontawesome you can import them into the main.scss file and compile them along with the rest of your code.

See docs for more instructions.