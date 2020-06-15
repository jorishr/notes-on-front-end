# Anchor tags and links  
## In-page anchor links
You can add anchor at any point on the page and add an id or class that can be referenced through another anchor tag.
```HTML
<a id="top"></a>
<a href="#top">To the top</a>

<div class="section" id="begin"></div>
<a href="#begin">Back to the beginning of the section</a>
```
The id and href are attributes that are part of the opening tag. The content, usually text or an icon, is placed between the opening and closing tags

The HREF attribute is the hyperlink reference that converts the anchor into a link.

## External links    
To refer to (internal or external) files from inside of a HTML file, the Internet uses “uniform resource locators” (URLs). You can use anchor tags for links or turn other HTML elements into a link by wrapping them into an anchor tag with the href attribute.

There are ABSOLUTE, RELATIVE, and ROOT-RELATIVE links. 
- absolute paths

Absolute links are the most detailed way you can refer to a web resource. A full url includes protocol, domain and path. 

Reserve absolute links only for directing users to a different website and do so with the target attribute set to _blank to open a new tab.
```HTML
<hr>
<h4>Links</h4>
<a href="https://www.google.com/gmail>" target="_blank">Google Mail</a>
<a href="www.google.com" title="Google" target="_blank">link naar Google</a>
<a href="www.google.com" title="Google" target="_blank"><img src="img.jpg"></a>
<hr>
```          
- relative paths  

Relative links point to another file or page on your website from the vantage point of the current file or page you’re editing. It is assumed that the protocol or scheme and 
domain are the same, so you only specify the path.
```HTML
<a href="other.html">file in the same folder</a>
<a href="folder/other.html">file in another folder at the same level</a>
<a href="folder/another-folder/other.html>">same but two folders deep</a>
<a href="../other.html">file in a folder directly above the folder of the current file</a>
<a href="../../other.html">two levels up</a>

- root-relative linksS

The example above illustrates that relative linking can get confusing very fast. Therefore, especially on big sites you can use root-relative links. In EXPRESS apps for example there is a 'public' folder that is considered root for static files (css, sas, images). Using '/' means starting in that root folder.
```HTML
<a href="/images.html">starting with a slash refers to root dir </a>
<a href="/images/temp/img.jpg">img in a subfolder</a>