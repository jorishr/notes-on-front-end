# Box-shadow
Table of contents
- [Box-shadow](#box-shadow)
  - [About box-shadows](#about-box-shadows)
  - [Syntax](#syntax)
  - [Lifting elements up](#lifting-elements-up)
  - [Inset: pushing elements down into the background](#inset-pushing-elements-down-into-the-background)
  - [Fake element borders](#fake-element-borders)
  - [Filter: drop-shadow](#filter-drop-shadow)

## About box-shadows
Adding a box-shadow to cards or other block elements gives depth to your page.

It is best used with an OFFSET on the RIGHT and BOTTOM. A subtle offset on the bottom makes it less pronounced at the top and darker at the bottom.

The default value is the color property of the element. Recommended is the use of a subtle grey or a color that is close the color of the element you create a shadow for.

The threshold is at about 30 or 35% of OPACITY for the same color. Above it, the contrast stands out too much. About 25% is good for solid black.

For colored dropshadows, stick to the main color and go to a lighter HUE, again at about 30 or 35% of the original.

## Syntax 
```
box-shadow: 
	<h-offset> <v-offset> <blur> <spread> <color>;
```
The BLUR is the blur-radius, thus 20px means it takes 20px to go from color solid to faded-out completely.

If you don't add a blur value, you get a solid shadow.

The SPREAD is the value from where the blur STARTS. Thus instead of immediately on the content it will start at 20px for example. 

If you make the spread a NEGATIVE value you can create very subtle shadows as they start 'inside' the element, thereby hiding the starting point of the blur.

## Lifting elements up
To lift an element UP you can increase the BLUR effect to 60px for example. If you also take down the opacity the effect is amplified even more.

When animating elements that SCALE UP or DOWN you can also add a bigger/smaller box-shadow to create the effect of the element coming towards the user. 

The BLUR should TRIPLE in size.

When working OVERLAPPING elements, differentiate the BLUR to make sure the layers are clearly visible.

## Inset: pushing elements down into the background
To create a shadow inside the element you add the keyword INSET (and use negative offset values).

Here too: the stronger the blur, the more pronounced the effect.

## Fake element borders
You can create a solid border through the box-shadow property by using only spread and no blur.

A negative value for the spread reduces the length of the shadow. A good rule of thumb is to use half of the offset.
```CSS
div {
	box-shadow: 0 -20px 15px -10px rgba(255, 255, 0, 0.3) inset;
	box-shadow: 5px 5px 25px 0 rgba(0,0,0, .25);
}
```
See [box-shadows](https://codepen.io/jorishr/pen/YzzaGvd) on my Codpen.

Basically you create multiple shadows that partially overlap. With `box-sizing: border-box;` or `inset` to avoid the element size expansion.

Another options is to use the OUTLINE property. Especially with wide OUTLINES in black but transparent can generate a nice effect.

## Filter: drop-shadow
Imagine for example a star figure path inside an svg with transparent or white background.

On a svg image the box-shadow will apply to the 'box' of the image, not necesarily the element inside the svg. Eventhough the svg may have a transparent background.

Filter can overcome this issue:
```CSS
.filter-shadow {
	filter: drop-shadow(.75em .75em .5em)
}