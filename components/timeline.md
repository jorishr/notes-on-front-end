# Responsive timeline

## HTML / CSS
- One container with a .timeline class.
- Use a pseudo-element to create the actual vertical line. Set the vertical line to position: absolute; left: 50%; or left:10px; on mobile. Add a max-width: 1200px; the .timeline container.

Create two container types: .container.left and .container.right with a width: 50%;. and position: relative; left: 0 or left: 50%;

Use a pseudo-element to create the circles on the timeline.

Inside you use another .container.content for the actual cards.

To the content container you can add arrows that point towards the timeline with another pseudo-element.

On mobile set the .container.right and .container.left to width:100%; and reposition the pseudo elements. Set the .container.right to left: 0;

## Example
See [Goudster Tijdlijn](https://goudster.be/ons-verhaal) for working example.

## Scroll animation
See scroll animation docs for lazy.loading and smoothscrolling.