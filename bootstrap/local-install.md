# Bootstrap local install (manual)
Copy the necessary files to static folder and add the correct paths. All files (css/js) in one folder or seperate scripts/scss and one folder for vendor: jquery and popper.js

## FONTAWESOME LOCAL INSTALL
- install as a DEV dependency in NPM
- Copy webfonts folder to where the final static files will live
- import into sass: main files + styles from nodemodules folder or make a copy to style modules folder
- set a custom variable for the webfonts path $fa-font-path: "../webfonts" in the _variables.scss

[Fontawesome + SASS Guide](https://fontawesome.com/how-to-use/on-the-web/using-with/sass)

## Normalize / CSS Reset
You can use normalize/cssReset stylesheets and import them directely into the styles.scss.This means that your compiled version in the temp/styles/styles.css will be cluttered with it.

## Customizing Bootstrap themes
When customizing a bootstrap theme, download the source code. You can use sass to change the respective variables in the variables file rather than manually overriding the default values with custom css.

When making any changes to the Sass variables or maps, you'll need to save your changes and recompile. 

Doing so will output a brand new set of predefined grid classes for column widths, offsets, and ordering. Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid values in px (not rem, em, or %).