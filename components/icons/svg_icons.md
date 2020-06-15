# Inline SVG icons
Vendor libraries such as font-awesome that come with built-in styles are icon fonts. Browsers consider it text, so the icons are anti-aliased as such. This can lead to icons not being as sharp as you might expect.

There are big advantages to vector icons (SVG): resizable up and down without losing quality, extra sharp on retina displays, and small file size. SVG files are vector-based graphics in xml format and can be pasted directly into your html file. This, however, bloats your html file size and can make it slower to load. But it does save you an additional http request.

## How to use
- optimize SVG

The SVG that Adobe Illustrator gives you isn't particularly optimized. It has a DOCTYPE and generator notes that are junk. You can use the NODEJS package SVG OPTIMIZER or an online tool to trim the content down to the essential.

- HTML Markup

In the HTML you use an svg element and inside add a use element which renders nodes from within the SVG document, and duplicates or shows them where you put the tag.

In the css you set a max-width and height to avoid becoming super big on large screens.
```HTML
<svg class="site-header__logo__icon">
    <use href="src/images/icon.svg"/>
</svg>
```
```CSS
.site-header__logo__icon {
    max-width: 141px;
    max-height: 59px; 
}
```
## Example: social media icon markup
You can create an unordered list of icons and inside each list item you have an anchor with a span element that contains an svg element and another optional span for the icon name that may be hidden and only used for SEO puroposes.
```HTML
<ul>
    <li>
        <a href="facebook.com">
            <span>
                <svg>
                    <use href=""/>
                <svg>
                <span>Facebook</span>
            </span>
        </a>
    </li>
</ul>
```