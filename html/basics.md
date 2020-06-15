# HTML Basics
- HTML5 page structure
- HTML element hierarchy
- Block elements and inline elements 

## HTML5 page structure
The root element is the html element. Inside of the html element, we have a minumum of two elements called head and body.

A web page’s head contains all of its metadata like the page title, CSS stylesheets, and other things that are required to render the page but you don’t necessarily want the user to see.

The bulk of our HTML markup will live in the body element, which represents the visible content of the page.
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>HTML basics</title>
</head>
```
A character set is like a digital alphabet for your browser. It’s different from the language of your document in that it only affects how the letters themselves are rendered, not the language of the content.

Most modern browser can handle special characters but not all. Therefore we include this meta tag.
```HTML
<body>
	<h1 id="top-pagina">Goudster uit Halen</h1>
	<p>Dit is mijn eerste tekts</p>
	<h2>Echt oud Belgisch bier!</h2>
  	<p>Dit is mijn tweede tekst</p>
```
Headings are the primary way you mark up different sections of your content. They define the outline of your web page as both humans and search engines see it, which makes selecting relevant headings essential for a high-quality web page.

Whenever you surround a piece of text with HTML tags, you’re adding new meaning to that text. h1, p, ul, etc.

HTML 5 brings semantic elements that better convey meaning. 
```HTML
<body>
	<header>
		<nav></nav>
	</header>
	<main>
		<section>
			<article>  <!-- niet alleen voor artikels, kan ook voor secties -->
				<header>
					<h1>titel</h1>
					<h2>subtitle</h2>
				</header>
				<div class="content"></div>
				<footer>-authored by X, date</footer>
			</article>
		</section>
		<aside>For not-primary content</aside>
	</main>
	<footer></footer>
</body>
```
## HTML Hierarchy 
By nesting elements you create a hierarchy with ancestors, parents, children and siblings. For example, the article element is the ancestor, the div is the parant of children h1 and p. Those two are siblings.
```HTML
<article>
	<div class="container">
		<h1>Dit is een titel.</h1>
		<p>Dit is een paragraaf zonder tekst</p>
	</div>
</article>
```

## Block elements and inline elements 
Block-level elements are also called flow content as they are always drawn on a new line. 
Examples: `<h1></h1>, <p></p>, <div class=""></div><article class=""></article>`
	
The other major type of content is in-line or phrasing content. In-line elements can affect sections of text anywhere WITHIN a line. Examples of inline: `<img src="" alt="">, <em></em>, <strong></strong>, <span></span>`

Both inline elements `<strong></strong` and `<em></em>` are structural elements, not presentational. You should only use them if the emphasis or boldness is a structural part of the text/page. If it is a representational element that may change, then use CSS.

Empty HTML elements should be used only if they convey meaning as structural elements, don't use them for aestethics. For aestethics you can use borders, padding and margins in CSS.
`<hr>` horizontal rule, a thematic break. Example: postscript after a letter.
`<br>` hard line break. Example: signatures, poems, lyrics