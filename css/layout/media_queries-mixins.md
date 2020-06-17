# Media queries
Table of contents
- [Media queries](#media-queries)
  - [Style guidelines for smaller screens](#style-guidelines-for-smaller-screens)
  - [Unusual screen sizes](#unusual-screen-sizes)
  - [Mixins for re-usable breakpoint code](#mixins-for-re-usable-breakpoint-code)
  - [Three column layouts on large/small screens](#three-column-layouts-on-largesmall-screens)
  - [Bootstrap breakpoints](#bootstrap-breakpoints)

Think of media queries as a way to conditionally apply CSS rules. They tell the browser that it should ignore or apply certain CSS rules or layouts to the same HTML depending on the user's device. 

The media query uses `min-width` and `max-width` properties that are called MEDIA FEATURES and they specify the device dimensions to target.
```CSS
/* base style applied untill 599px */
font-size: 2rem;    
@media all and (min-width: 600px){  
    font-size: 2.5rem;  
    /* applied from 600px and up */
}
@media only screen and (min-width:400px) and (max-width:960px) {}
```
The `only screen` and `all` refer to the type of device viewport the browser is displayed on. If not a screen, it may be a printed document for example.

Disable viewport zooming should be set in the head of the html doc. Mobile devices used to show desktop versions that were zoomable. With responsive design this is no longer needed and this zooming could cause a wrong version to show up.
```HTML
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
```
## Style guidelines for smaller screens
- reduce padding and margins (30%-50%)
- reduce font-size (20%)
- reduce button size (10%)
- start applying the desktop layout CSS from atMedium onwards.


## Unusual screen sizes
In general you can think of 6 breakpoints to work with: 320px, 480px, 760px, 960px, 1200px, and 1600px but more and more there are devices with custom resolutions, ipad uses 970px.

Solutions can be:
- use a WRAPPER with a set max-width for very big screens (1600px and above)
- apply a min-height for landscape viewing on mobile devices

## Mixins for re-usable breakpoint code
General base rules apply to the tiniest of screens. From then on you define breakpoints that are stored as mixins that can be easily re-used without typing there definition for each use in the style modules.
```CSS
@mixin atSmall {
    @media (min-width: 530px) {
        @content;
    }
}

@mixin atMedium {
    @media (min-width: 800px) {
        @content;
    }
}
@mixin atLarge {
    @media (min-width: 1200px) { 
        @content;
    }
}
```
Example:
```SCSS
&__title{
    font-size: 1.1rem; 
    // default, looks good on mobile
	@include atSmall {
        font-size: 1.8rem;	
        // from small onwards
	}
}
```
## Three column layouts on large/small screens
They look good on large screen and get stacked on small screens.

But problematic are the small columns on medium screens (tablets). If you have sections on your page that have this type of layout you can adjust the CSS of those sections to only switch to desktop version form atLarge onwards. 

Thus you get a stacked layout up untill the large breakpoint, only for this particular section of the site, the rest of the site keeps using atMedium.

## Bootstrap breakpoints
The bootstrap breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

Bootstrap primarily uses the following media query ranges or breakpoints in the source Sass files for our layout, grid system, and components.
```
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```