# Page sections
Usually a webpage will have:
- a HEADER SECTION which includes advertising and a navbar, 
- the HERO SECTION which is the eyecatcher with a call to action or main stories,
- various other sections untill you get to the FOOTER SECTION.

These sections may have common css features that can be re-used from and stored in a MODULE (_page-section.scss).

Make sure that those sections are wrapped into a container div with a shared class in your html markup.

In css you define the base-styles for each section with, for example, padding.

Modifier classes can be added to make changes in media-queries or adding alternating background colors.

NOTE
For seperating page section it's often enough just to work with padding on every other section. But that will depend on the design.

## Example: alternating background colors for even and odd section
Exclude the first section which may be a hero with specific styles. Select the even and odd section with the pseudo class :nth-child()
```CSS
.section:not(.section1):nth-child(even){ background-color: red }
.section:not(.section1):nth-child(odd){ background: blue }
```
The result:
- section1 excluded
- section2 1 odd: blue
- section3 2 even: red
- section4 3 odd: blue
- section5 4 even: red