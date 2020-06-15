# Mobile navigation menu
When visibly extended on mobile it takes up about 60% of the width of the screen and 100vh. 

The exit symbol X can be an svg or empty html element that can be coded as part of the ul element as the first list-item or as seperate div
```HTML
<ul class="hide-mobile show-desktop" id="nav-menu">
      <li class="exit-btn hide-desktop" id="exit-menu">
            <img src="images/exit-menu.svg" alt="exit menu">
      </li>
      <li><a href="#">home</a></li>
      <li><a href="#">services</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">contact</a></li>
</ul>
```
Set the cursor to pointer when :hover over exit symbol.

## Example
For a working example see the TRAVEL SITE project. The markup and styling is as follows: 

The HTML setup contain a header element with a .site-header class. Child elements of the header are: __logo, __menuIcon, __menuContent.

The __menuIcon holds just one empty div container which represents the middle-bar 
of the hamburger with class __menuIcon__middleBar.

The __menuContent holds a button and the main nav element.

- CSS Styling

The default setup for the .site-header as a whole is position: absolute; at the
top: 0; and width: 100%;. 

Through a MEDIA QUERY the .site-header becomes a STICKY HEADER from MEDIUM
screens onwards.

The __menuContent has an OPACITY of zero and a Z-INDEX of -10 and is thus
invisible untill the MEDIA QUERY changes this from MEDIUM screens onwards.

The __menuIcon has a POSITIVE Z-INDEX and is thus VISIBLE untill the media 
query makes it DISPLAY:NONE from medium screens onwards.

EXTRA: The scaling property transition for __menuContent creates a fadeIn 
effect by going from 1.2 to 1.0.

- building the hamburger

The icon div container holds only the div with the .middleBar class, which is little box with a very narrow height and background-color.

Add pseudo elements ::before and ::after that have empty content: '' but equal width and height as the .middlebar. Use absolute positioning to bring them in line.

- icon and menu toggle with Javascript

JS and JQUERY is used to toggle classes to the above mentioned elements. Add an event listener to the .menuIcon and on click we perform three actions:
* toggle modifier class --visible on .menuContent which sets the opacity and z-index to 1 and thus the menuContent becomes visible.
* toggle modifier class --expand on the .site-header which changes the background-color slightly.
* toggle modifier class --close on the .menuIcon and this rotates the pseudo element bars of the hamburger menu and hide the .middleBar to form an X.    

## Bootstrap mobile menu
The bootstrap setup require four components inside a button element:
- class .navbar-toggler
- data-toggle attribute
- data-target attribute: the #ID of content that has to appear/dissappear
- span element that holds the class that represents the icon itself.
    
The link with the collapsable content is made through the #ID attribute on that div.
    
Note that bootstrap code contains ARIA attributes. Those serve screen readers and disability enhancements.
    
The hamburger icon is part of the bigger navbar setup with a nav element that expands from medium screens onwards. Inside you may have an optional .container div, followed by the hamburger button, the brand-logo and the div with the collapsable content with classes .collapse and .navbar-collapse plus the #id that links to the hamburger icon.

```HTML
nav .navbar navbar-expand-md
            div .container
                  button .navbar-toggler data-target data-toggle
                  div .collapse #id
                  content collapsed below medium and toggled by the hamburger icon

<button     class="navbar-toggler" type="button" 
            data-toggle="collapse" 
            data-target="#linksNavbar"> 
            <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="linksNavbar">
      COLLAPSABLE CONTENT HERE
</div>
```