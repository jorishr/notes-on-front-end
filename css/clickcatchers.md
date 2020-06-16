# Clickcatchers
Use case: an element pops into view and it goes away again when you click on the area that is not that element.

The simple approach is simply add an X to that element (a menu or sidebar, for example) to make it go away again.

The clickcatcher concept is different: Imagine a ul element with a menu or sidebar element that comes into view and takes up width: 100%.

The first child element is the actual menu or sidebar and is visible. It may come into view with an animation through transform: translate3d(). 

The second child element is a CLICKCATCHER which is transparent. This element occupies the rest of the screen but is invisible. To this element you add a JS Event Listener and on click you close the menu/sidebar.

Use flexbox to set the proportions between sidebar and clickcatcher. 