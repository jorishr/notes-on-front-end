# Footers
- Server Side Rendered footers
- Footer text
- Sticky footers
- Auto update copyright year

## SSR
When working with EXPRESS or other server-side rendering options you will create a seperate module like _header.html and _footer.html. Take that into account when writing your styles as you may forget about the footer/header when styling the main content section of the page.

## Footer text
You can set the opacity to 60-70-80% to visually understate the text. A good example is a dark background with a lighter color for the text, set at an opacity of 60%. 

## Auto update copyright year
```HTML
<p>Copyright &copy; 2019
	<script>new Date().getFullYear()>2019 && document.write("-"+new Date().getFullYear());
	</script>
</p>
```
## Sticky footers
The purpose of a sticky footer is to have it stick to the bottom of the browser window, even when there is not enough content to fill the available space. 

This cannot be done with position absolute because when the content grows, the footer should drop further down towards the end of the page, not the browser window.

There are three options: flexbx and grid, calc or wrapper with negative bottom margin.

- A. Flexbox / Grid

The flexbox solution logic has two components: the body is made to be a flex container with a min-height of 100vh and flex-direction: column. This assures that the site body will take up all the available space on the viewport. 

NOTE: for mobile screens best avoid 100vh as it can interfere with the mobile bar menu. The alternative is to use min-height: 100%; but then you have to define the height of the HTML element as well, as the percentage needs a reference point.

OPTION1

The site-content is than wrapped into a div or wrapper div set to flex-grow: 1; (or flex: 1) to let it expand over all the available space.

The footer below it is thus pushed down to to bottom of the body container.

OPTION 2

Alternatively, give the footer a margin-top of AUTO, as this works in FLEXBOX in all directions. The margin-top: auto also works on CSS grid.
```HTML
<body>
	<header></header>
	<main class="site-content"></main>
	<footer></footer>
</body>
```
OPTION1
```CSS
html { height: 100%; }
body {
	display: flex;
	min-height: 100%; 
	flex-direction: column;
}
footer { margin-top: auto }
```
OPTION2
```CSS
html { height: 100%; }
body {
	display: flex;
	min-height: 100%; 
	flex-direction: column;
}
.site-content { flex: 1	}
```
- B. CALC()

Use the calc() function to let the browser calculate where the bottom of the page is. 

First you set a height for the footer. 

Use a wrapper container for the site content. Set the min-height property to the viewport height minus the height of the footer and minus the height of possible margins you may have set on the content wrapper div. 

In the example below we assume the content wrapper has a margin of 20px.
```CSS
.content { min-height: calc(100vh - 70px); }
.footer { height: 50px; }
```
- C. Wrapper with negative bottom margin

This solution requires adding an empty div to your html markup and thus not recommended.

You wrap the main content of the site into a wrapper div and add an empty child div on the bottom of that wrapper. 

The wrapper itself gets a negative bottom margin equal to the height of the footer to avoid the footer overlapping with any other content on at the bottom of the wrapper.