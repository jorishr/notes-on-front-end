# Darkmode
Table of contents
- [Darkmode](#darkmode)
	- [CSS setup](#css-setup)
	- [Javascript logic](#javascript-logic)
	- [Darkmode.js library](#darkmodejs-library)
## CSS setup
Reference: [Tutorial](https://medium.com/@mwichary/dark-theme-in-a-day-3518dde2955a
)

The easiest way to keep things clear is to use CSS variables.

The `:root` color scheme is set up with css variables. The darkmode class is an adaptation of those variables. Next you use JS to toggle the class on and off and to manipulate local storage.
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
}
.darkmode {
  --clr-light: #fdffc4;
  --clr-dark: #00332a;
  --clr-primary: #202302;
  --clr-secondary: #00100d;
  --clr-accent: #ff7750;

  --foreground: var(--clr-light);
  --background: var(--clr-dark);
}
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--ff-body);
  font-size: 18px;
  line-height: 1.6;
}
```
## Javascript logic
```Javascript
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// check the local storage for existing settings on site load
let darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled'){ enableDarkMode() };
	
const enableDarkMode = () => {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkMode', null);
}
// add event listener
darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	// var defined above
	if (darkMode !== 'enabled'){
		enableDarkMode();
	} else { disableDarkMode(); }
});
```

## Darkmode.js library
Darkmode.js is an external library that does the same thing but can be applied to existing sites without having to pick the color schemes in detail.