# POSTCSS
PostCSS can be configured as a JavaScript and CSS bundler, similar to how webpack works. It allows you to split up your CSS code into modules and compiles it all into a single .css file. It also allows support for scss features such as nesting, imports and variables. 

Another feature of POSTCSS is POLYFILLS. Polyfills are JS backups for features that the browser does not support, as the js builts the css feature for the browser.

PostCSS can be used to handle all pre- and post-processing of your CSS code. Or features can be used seperately in combination with a pre-processor like SASS.

## Setup with Gulp
```
npm install gulp-postcss
npm install postcss-simple-vars postcss-nested postcss-import postcss-mixins --save-dev
```
Adds support for:
- autoprefixing
- variables
- nesting
- imports

Configure in Gulp using pipes and adding each package to the postcss array. IMPORTANT: The order in the array matters!
```JS
.pipe(postcss([cssImport, mixins, cssVars, cssNested, autoprefixer]))
```
## Imports, mixins, variable, nesting
All PostCSS extensions add functionality for CSS.

Packages such as Normalize and jQuery are dependecies installed via NodeJS. Postcss will find them when you simple import normalize.css in the styles.css. Without the cssImport you have to specificy the path manually.