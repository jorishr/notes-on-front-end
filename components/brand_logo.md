# BRAND LOGO
- HTML markup and CSS styling
- Bootstrap

##	HTML/CSS
The example below is taken from  the 'Travel Site' project. It features a div (. site-header__logo) with inside two child elements:
- svg element that scales easily, 
- another div (__logo__seoText) with text that holds a title and a paragraph.

The parent div is set to position: absolute, top: 0 to make it stick to the top. And pulled into position with left: 50% and transform: translate -50%

Note that the svg requires the <use href=""></use> element inside. And the color in CSS is set through the fill: <color>; property.

When using simple text as brand name best use UPPERCASE, either in HTML or through CSS.

### SEO Content
Create a div that contains SEO text (title/description) and use the CSS text-ident property or font-size: 0; to make it invisible.
```CSS
.__logo__seotext {
	text-indent: -9999px; 
	font-size: 0;
}
```	 
The SVG image should be set to a max-width and max-height to avoid scaling too far beyond the .site-header.

### Scale logo div on mobile
The .site-header__logo div is scaled back on mobile to 80%. The transform origin 50-50 starts from the exact center point of the div, which we don't want. To have it stick to the top, the scaling down is only done on the X-axis.

transform: scale(.8) 
transform-origin: 50% 0% (50-50 is default). 

This way the logo will continue to stick to the top.

## Bootstrap
The .navbar-brand class can be added to all elements but recommended is the a-tag.
```HTML
<nav class="navbar navbar-light bg-light">
	<a class="navbar-brand" href="#">Navbar</a>
</nav>
```
Adding images is going to require custom css anyway, whereby the img is wrapped into the a-tag. 
```HTML
<nav class="navbar navbar-light bg-light">
	<a class="navbar-brand" href="#">
		<img src="" class="d-inline-block align-top" alt="">
	Bootstrap
	</a>	
</nav>
```
Note the .d-inline-block class for the image, as it is inline by default.