# CSS Wrappers and Bootstrap containers
- use cases
- wrapper properties
- big images and wrappers
- wrapper inside wrappers
- Bootstrap container

## Use cases
Starting on mobile you'll see that text on different sections of the page will push against the borders of the window. The solution is to apply indiviual padding to each element or each section. 

But this is example is good example of a re-usable feature, thus create a seperate MODULE for it. 

IMPORTANT!
In HTML seperate the page-section div and the wrapper div. The page-section div will be the root group that relates to other page-sections and determines for example the background color. 

The WRAPPER div HOLDS THE CONTENT ELEMENTS of a page-section that need padding and centering, for example.

## Wrapper properties
- Padding

Padding left/right and use box-sizing: border-box. This way you set a max-width for the wrapper and push the elements inside.

- Max-width

Avoid stretching on big monitors with a max-width: 1200px;	

NOTE: you may still want to set max-width on paragraphs because of readability requirements.
	
- Margins

The wrapper should be centered on the page.

margin-left/right:auto

## Wrapper modifier classes
A.	Vertical spacing between page-sections

You can create a modifier class wrapper--bottomMargin for this purpose.
```SCSS
	&--bottomMargin {
		margin-bottom: 3.875rem;
	}	
```
NOTE1: use REM.

NOTE2: use less/more margin-bottom on mobile screens by adding a MEDIA-QUERY!

- B. Big images

Images that take up a lot of width but don't fill the screen entirely receive their padding from the main wrapper on that page section. This will include a max-width. 

You can add an additional wrapper--modifier class to specifiy a custom max-width that corresponds to the WIDTH OF THE IMAGE to avoid further stretching. Do so by putting the image tage in a seperate image container div!

This means you will have two wrappers: one on the main container div of the page-section and one wrapper on the containter div of the image. Avoid duplicate padding by adjusting CSS, see next section.
	
## Wrapper inside wrapper
The above example of an image that has a wrapper inside a wrapper may produce duplication of padding.

To off-set this effect you can put another .wrapper {} statement in the existing wrapper CSS class.

The code below compiles to: .wrapper .wrappper {} and cancels out the padding only when CSS finds a .wrapper class inside an existing .wrapper in the HTML.
```SCSS
.wrapper {
	padding: ;
	max-width: ;
	margin: ;
	&--modifier
	&__child
	
	.wrapper { padding: 0; } 	
} 
```
##	Bootstrap containers
Bootstrap container are a simple version of a wrapper. Especially the fixed-responsive .container which set a max-width property depending on the bootstrap media-queries.

Containers are the most basic layout element in Bootstrap and are required when using the default grid system. 

- Responsive fixid-width 

The max-width of the container changes at each breakpoint. Thus .container is a basic responsive container that is especially usefull for 4K monitors to limit the page content within reasonable boundaries. This .container class also CENTERS the content on a page.

- Fluid
The class .container-fluid is een container over de ganse breedte van de viewport, zonder padding. Ideal voor page sections. Container-fluid kent geen max-width zoals de fixed responsive container. 

For 4K screen you can NEST a .container-fluid inside a .container.