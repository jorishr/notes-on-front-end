# General good practices for front-end code
- HTML tags:

Closing the EMPTY html elements with "/>" is not required but makes it is better readable for XML readers. 

- code line length: try to avoid code lines longer than 80 characters
- filenames: always use lower case file-names
- quotations:

Always use CURLY quotation marks double or single:

Double:     &ldquo;(open) and &rdquo; (close)

Single:     &lsquo; and &rsquo;

- style guidelines for smaller screens:
    * reduce padding and margins (30%-50%)
    * reduce font-size (20%)
    * reduce button size (10%)
    * start applying the desktop layout CSS from atMedium onwards.

- troubleshooting css scrolling bars:

If you have a horizontal scroll bar you can use the border property but that affects the markup of the document. Use outline property instead.
```CSS
{ border: 1px solid red; }
{ outline: 2px solid red; }
```