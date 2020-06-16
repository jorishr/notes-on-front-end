# Bootstrap utilities
- display
- text
 
## Display 
Change the value of the display property with responsive display utility classes. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size.

Display utility classes that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them.
```
.d-{breakpoint}-{value} for sm, md, lg, and xl.
```	
Example, only show up on medium screens and larger, means d-none by default and d-block from medium onwards.
```
class="d-none d-md-block"
```
## Text
Easily realign text to components with text alignment classes. The class .text-justify evenly spaces the text. The classes .text-left/right/center can be complimented with the breakpoints: .text-left .text-md-center .text-xl-right

Text will automatically wrap inside its containing element. If you want it to overflow use .text-nowrap 

Text transform: .text-uppercase/lowercase/capitalize

Text weight: .text-weight-bold/normal/light; .text-italic; .text-monospace