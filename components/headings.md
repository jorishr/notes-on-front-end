# Headings
- basic styling
- heading with solid bars left and right
- heading with background image clip

## Basic styling
Headlines or headings such as h2 and h3 elements are going to be recurring features and therefore deserve a seperate CSS MODULE.

You can create a general headline class that is applied to all h2 and h3 elements that sets a BASE font, font-weight and color.
```CSS
.headline {
	font: ;
	font-weight: ;
	color: ;
}
```
Note that h2 and h3 are important semantic HTML indicators but through CSS the differences in styling can be erased to have a uniform look.

Modifiers can be used to make customize color, weight and centering and padding/margins.

Recommended also is to set letter spacing and use uppercase.

Use the display: inline-block; to better control the dimensions. This way you can add a dark background-color, for example, to sit behind a white text.

```SCSS
.headline {
	letter-spacing: .08em;
	/*letter-spacing: .1em;*/
	text-transform: uppercase;
	display: inline-block;
	&--color1 {}
	&--centered { text-align: center; }
	&--smallFont {}
	&--narrow { max-width: ; }
	&--bottomMarginS {}
	&--bottomMarginL {}
}
```
## Title with solid color sidebars
See [Codepen](https://codepen.io/jorishr/pen/JQgrwy) for working example.

Two bars fill the space of the tittle element left and right with a solid colored bar.

Basically you create a colored pseudo element that sits in the background over the full width of the containing element (z-index -2). A second pseudo element is white and sits on top that but positioned behind the text only (z-index -1). 

Create a title element h1 and add a class, set to inline-block and position relative.

The inline-block prevents the title from taking up all the space left and right that would overlap with the pseudo elements we will create.

Both bars have properties in common. Note that on some browsers you'll have to set height to 101% if not displayed properly.
```CSS
.title {
	position: relative;
	display: inline-block;
}
*, *::before, *::after { box-sizing: border-box }
.title::before, .title::after {
	content: '';
 	display: block;
 	background-color: grey;
 	height: 100%;
 	position: absolute;
 	top: 0;
}
```
Each bar now gets styled individually. The before bar is the one that takes up all the width in the background. Note that the heading .title will be centered on the page. This means that the pseudo elements only start at the point where the heading starts and this will created horizontal scrolling. 

The answer is position absolute from 50% of the starting point of the heading, thus dead in the middle, and pull it back 50% to start at the beginning of the container or page.
```CSS
.title::before {
	width: 100vw;
	left: 50%;
	transform: translate(-50%);
	z-index: -2;
}
```
The ::after bar element sits on top of the ::before element and is white. To position it directly behind the heading text use negative position absolute left and right. It will thus sit just outside the heading element to allow for spacing.
```CSS
.title::after {
	height: 100%;
	z-index: -1;
	background-color: white;
	left: -.2em;
	right: -.2em;
}
```

##	Title with background image clip
See [Codepen](https://codepen.io/jorishr/pen/pMjXjV) for working example.

To use an image as background inside the title letters you need to use a big bold font. 
```CSS
h1 {
	font-size: 15vw;
	text-transform: uppercase;
	background-image: url(https://unsplash.it/801);
	background-size: cover;
	background-clip: text;
	color: transparent;
}