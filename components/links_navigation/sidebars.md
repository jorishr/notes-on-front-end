# Sidebars
## Scrollable sidebars
- Remember the scroll position across page loads.

1. store the scroll position in local storage upon 'beforeunload'
2. on page load: check local localstorage, if value, adjust scroll height sidebar

Note that the scrollTop value is a decimal number. To convert it to an integer use parseInt with radix 10.
```Javascript
const sidebar = document.querySelector('.sidebar')
let top       = localStorage.getItem('sidebar-scroll')
if(top != null){
	sidebar.scrollTop = parseInt(top, 10)
}

window.addEventListerner('beforeunload', () => {
	localStorage.setItem('sidebar-scroll', sidebar.scrollTop);
})
```