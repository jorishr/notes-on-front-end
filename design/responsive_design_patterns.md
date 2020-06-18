# Responsive design
Table of contents
- [Responsive design](#responsive-design)
  - [Mobile first](#mobile-first)
  - [Design and development](#design-and-development)
  - [Responsive design patterns](#responsive-design-patterns)
    - [Column drop](#column-drop)
    - [LAYOUT SHIFTER](#layout-shifter)
    - [TINY TWEAKS](#tiny-tweaks)
    - [OFF-CANVAS](#off-canvas)
    - [Fluid vs Fixed-width](#fluid-vs-fixed-width)

## Mobile first
Responsive design refers to the idea that your website should display equally well in everything from widescreen monitors to mobile phones. It's an APPROACH to web design and development.

One of the issues with desktop design is the size of the images. A 400kb file is fine on desktop but a waste of dataplan mb on mobile where a 50kb file would do just fine. 

Thus, you begin with the mobile first approach to have super efficient code and you PROGRESSIVELY ENHANCE the site with new features when more screen space becomes available. The other way round would be GRACEFULL DEGRADATION, whereby you start from the desktop version and gradually remove features.

## Design and development
Designing with MOBILE FIRST means you prioritize key features and use cases for mobile users.

Development with MOBILE FIRST means minimizing data use, fast load times, minimal latency.

Start with mobile version in mind first. This is usually less complex, allows for re-using most of the code. 

Thus, you start with BASE STYLES for small devices and with media queries you override them or add more complex properties and features.

## Responsive design patterns
### Column drop
Stacked div's with 100% width on mobile. On bigger screens margins are added to fill the screen. Usually only one or two breaking points.

A four column design on wide desktop screen is gradually reduced to one column as the space becomes narrower.

### LAYOUT SHIFTER
Multiple breaking points and bigger position changes for the blocks.

### TINY TWEAKS 
Only tweaks to the layout such as text-size, image size, etc.

### OFF-CANVAS
Rather than stacking content vertically, this sample uses a `transform: translate(x, y)` declaration to hide the content divs off screen. Javascript is added to show div's upon clicking certain elements.

### Fluid vs Fixed-width
A fluid layout stretches the blocks out to fill the screen, usually on mobile or tablet viewports. You usually target a range of screen sizes using the min-width and max-width properties.

A fixed-width layout has the same width for content blocks regardless of the screen size. Think of a wrapper.