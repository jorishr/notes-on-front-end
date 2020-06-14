# Worflow paragraphs
- using HTML / CSS
- using Bootstrap

## HTML / CSS
- Positioning
Paragraphs are block level elements by default. 

To horizontally CENTER them inside a container div you can use FLEXBOX or MARGINS left and right with margin: 0 auto;

- Padding and max-width
Set the PADDING left and right.

Define a max-width for wider screens and think about reducing the padding on smaller screens by using media-queries.

Also see guidelines for line-length.

- Bottom and top margins
Determine the margins between paragraphs. 

- Font properties and in-text elements
The font-family and font-size are usually inherited from parent elements or default styles.

The basic font-weight is usually aroun 300 and you can increase that for in-text elements like a-tag links or spans.

- Lead
Increase readability by increasing the leading by setting the line-height property to 1.25, 1.5 or 1.75.

- Finishing touches: play around with text-alignment: center | justified | left | right; and the first letter. 

## Bootstrap

All paragraphs have their margin-top removed and margin-bottom set to 1rem for easy spacing.

- text alignment
The classes text-'media'-'left|right|center|justified' can be used to have different alignments based on the type of screen.

Same thing for .text-lowercase, .text-uppercase, .text-capitalize.

- font weight
Classes for font-weight-bold|light|normal and font-italic.