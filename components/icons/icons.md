# Icons
- About icons
- Icons as images
- Icons as fonts
## About icons
How to deal with icons very much depends on which type of icons you are using. You have simple img icons as png's. There are icon fonts. A website like FONTELLO allows you to create your own custom web font. This is not particularly easy. 

On the other hand, using a pre-created icon font (font-awesome) is maybe not particularly efficient as loading it's library takes time and may give you too many unused icons. 

That's way it is popular to use IN-LINE SVG.

## Icons as images
Whether the icons is .png or .svg doesn't matter. You adjust the width and height as necessary and position it is as you would with any other html element.

You can put the image tag inside a heading tag as images are inline elements by default. 

If using SASS adjust the styling using a child class &__icon of the section-title class.

Since image icons are in-line elements they will appear on the same line as the title itself. On mobile screens this does not look good. Therefore set it to display: block; so that the icon get its own line. You can set a width and height, to create a type of box.

Line-height = height of the icon means the icon wil be centered inside its box.

The easy way for positioning image icons is position: relative; where you push them up or down as needed, and this has no effect on the neighboring heading or a-tag elements. 
```CSS
img { 	
	position: relative;
	top: 8px; 	/* pushes it down  */
	left: 5px 	/* pushed it right */
}
```

## Icon fonts
Font icons are font glyphs (pictogram). They're part of a web font and are thus defined in web font files and formats. Browsers consider it text. Thus you can control the size via font-size, color, shadows, rotation, etc., in CSS.

Positioning a font-icon can be frustrating as the icons are inserted via a pseudo element and it depends on line-height, vertical-align, letter-spacing, word-spacing, and how the icon itself was created (with spacing or not).

Fontawesome library comes with it's own classes, for example to create bigger icons: fa-2x fa-3x fa-4x.

### Adding font icon to heading or inline words
You work with an empty span element inside a heading and use a css pseudo element ::before to add the icon. The reference is made by the data-icon attribute. The content is set to the attr() function which links to the value of the attribute that is given to.
```HTML
<h1>
	<span id="stats-heading" data-icon="reference"></span>
	Stats
</h1>
```	
```CSS
#stats-heading::before {
	content: attr(data-icon);
	font-family: '<your icon font>';
} 
```
### Font icons as part of a link-tag
Icons can appear as stand-alone elements, for example when you want it to be a link, thus wrapped inside an a-tag (using an icon font):
```HTML
<a href="#rss">
  <span id="rss-link" data-icon="&#x25a8;"></span>
</a>
```
```CSS	
#rss-link::before {
	content: attr(data-icon);
	font-family: '<your icon font>';
}
```