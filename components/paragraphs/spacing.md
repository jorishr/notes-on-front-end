# Spacing
- Spacing between paragraphs
- Paragraph leading: spacing between lines
## Spacing between paragraphs
Creating space between paragraphs, blocks and lines gives a more profesional look and feel to the text. This 'art' is work for designers but understanding the basics is important.

- Horizontal spacing
Use padding only on the LEFT and RIGHT side of paragraphs, reserve the top and bottom for vertical spacing between the paragraph with the MARGIN property. 

On smaller screens reduce the padding to about half.

- Vertical spacing between paragraphs
There are two generally accepted solutions: either use a first-line indent or a margin between the paragraphs. Never both.

Be consistent! If you use margin-bottom, do so on the entire page, don't switch between margin-bottom and margin-top.
```SCSS
p {
 	&__paragraphClass {
 		text-indent: 1em;
  		margin-bottom: 0;
 	}
    //or
 	&__paragraphClass {
 		text-indent: 0;
 		margin-bottom: 1.5rem;
 	}
}
p:first-of-type {
 	text-indent: 0;
}
```
When using text-indent property note that the first paragraph after a title does NOT need indenting!

- IMPORTANT: Paragraphs at the bottom of a container div
If you have a paragraph or other element on the bottom of a containing element it's bottom-margin will push outside the container because it has nothing to push against. 

You can mend this by giving the container a padding-bottom of just 1px. Now the bottom element in the container will push it's margin against the padding.

## Leading: line height
LINE HEIGHT is the space between lines of the same paragraph. This is also called the "LEADING" of the paragraph, that can be in/decreased. You can use 1, 1.25, or 1.5 OR a percentage based on the font-size: thus 20px font and 150% line-height corresponds to 30px.

When line-height = height the text line will take up the entire available space.

Recommendations: 
1. always be on the side of too much rather than not enough spacing
2. be cosistent with padding and margins throughout the page