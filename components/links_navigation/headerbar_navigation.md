# Site header and navigation
- The header section
- Navigation elements
- Navigation elements animation: example
- Sticky header
- Drop-down menu
- More code examples from my Codepen

# The header section
The header section will typically contain a logo or brand name and a nav element with the main navigation components.

Design considerations: lower the opacity or ajdust the font-weight of the navigation elements to contrast with the logo (visual hierarchy). Colored bar or plain background color? Check for even amount of white space around and between elements.

The navigation bar is part of the site-header but since it is a component block that may be re-used on other pages, it deserves it's own _partial.scss file and BEM block (primary-nav).

Group nav elements such as menu-link(nav) and buttons into a menu-container-div. This can easily be set to display: none for mobile.

The wrapper that is used on other sections of the site should also be applied here in a seperate div.

An example from the 'Travel Site' project:
```HTML
<header class="site-header">
    <div class="wrapper">
    	<div class="site-header__logo"></div>
		<!-- HamburgerMenu-->
		<div class="site-header__menuIcon"></div> 
		<!-- main nav menu-->
		<div class="site-header__menuContent">
			<nav class="primary-nav">
				<ul>
					<li class="nav-link"><a href="#">link1</a><li>
					<li class="nav-link"><a href="#">link2</a><li>
				</ul>
			</nav>
		</div>
	</div>
</header>	
```
The positioning of the main components can be done with floats. The logo floats left, the menuContent floats right. And the clearing can be done on the .site-header with a pseudo element ::after{content:''; display:table; clear:both;}

## Navigation elements
For the nav elements you use an unordered list (ul element) and list-items (li elements). Inside the list-items links are created with an a-tag.

Float the list-items and clear the float on the ul element with pseudo element.

Space the list-items horizontally using padding consistently: either left or right. If you need to avoid padding on the outer left or right element you can use the pseudo class :last-child or :first-child to set the padding back to zero.
```CSS
header {
	/* Sticky header */
	/* position: fixed; */
	position: absolute;
	top: 0;
	z-index: 10;
	/* adjust hero section padding-top to compensate for header content */
}
nav > ul {
	padding: 0;
	margin: 0;
}
nav > ul::after {
	content: '';
	clear: both;
	display: table;	
}

nav > ul > li {
	float: right;
	padding-right: 10px;
	list-style: none; 
	display: inline-block;
}
nav > ul > li:last-child {
	padding-right: 0;
}
nav > ul > li > a {
	display: inline-block; 
	/* display: block; */
	padding-top: 5px;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: .08em;
	/* letter-spacing: .1em;*/
}
```
The actual link tags inside each list item may need adjustments as well, for example, to correct the height of the a-tag. To bring those items to the correct height use padding-top. Other general properties should include display: block and text-decoration:none.

Also play around with background-color of a-tags to create better user experience. Especially the opacity in rgba(blue, .5) or transparency when not needed anymore.

## Navigation elements animation: hover bar on top expand example
Add a pseudo element to the a-tag that has width zero and is fixed to the top of the a-tag. When you :hover the width transitions to 100%, showing a constrast colored bar on top of the
hovered element.
```CSS
nav > ul > li > a::before {
	content:''; 
	display: block; 
	background-color: 'contrast';
	height:5px;
	width: 0; 
	position: absolute; 
	top: 0;
	transition: all	ease-in-out 250ms;
}
nav > ul > li > a:hover::before { width: 100%; }
```

## Sticky header
Absolute positioning can be usefull to overlap the HERO content. Set top:0; and z-index to bring to the front. You may have to adjust the hero-content with padding-top to correct for header-content.

The sticky header effect is achieved with position:fixed; top:0; and z-index set to a positive number.

## Drop-down menu
See [dropdown menu](https://codepen.io/jorishr/pen/GVggEV) and [large drop-down menu](https://codepen.io/jorishr/pen/pooKPRE) on my Codepen for a working example. 

The HTML markup is a ul element for the main menu and inside one of the li elements s you NEST another ul element.

The nested ul gets a class and it is set to display: none; by default.

When :hover over the parent li you define the style for the drop-down menu ul with display: flex and position: absolute; plus a background.

To avoid the parent li being hidden by the drop-down menu overlap you set a positive z-index.

## More code examples from my Codepen
- [responsive navbar with icons and hover effect](https://codepen.io/jorishr/pen/rXaaVw)
- [full width overlay menu](https://codepen.io/jorishr/pen/pooVzoR)
- [sticky header with top bar hover animation](https://codepen.io/jorishr/pen/LYYrvGZ)
- [off-canvas menu](https://codepen.io/jorishr/pen/GRRXbNb)
- [sidebar navigation with flexbox](https://codepen.io/jorishr/pen/voEENv)
- [dropdown menu](https://codepen.io/jorishr/pen/GVggEV)
- [large drop-down menu](https://codepen.io/jorishr/pen/pooKPRE)
- [toggleable tab header](https://codepen.io/jorishr/pen/RwweRqb)