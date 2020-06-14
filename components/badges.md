# Badges
Badges can be added to titles, links and buttons. You can create them with
PSEUDO ELEMENTS ::before and ::after in CSS or rely on a span element.

Bootstrap also offers a BADGE CLASS to be used inside a span.
    
## 1. Pseudo elements
Add pseudo element to the CSS of a title, link or button with the CONTENT
property set to '' or for example 'NEW' as a BADGE.

You can adjust background, height and width and position with position:absolute and position relative on the containing element. You can use JS to toggle this class based on certain conditions.
```CSS
.title::after {
    content: 'NEW';
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
```
## 2. Bootstrap badges 
Bootstrap badges scale automatically with the heading it belongs to.

Colors can follow the standard bootstrap color scheme: danger, warning, success, etc. .badge .badge-warning
```HTML
<h1>Example heading <span class="badge badge-secondary">New</span></h1>
```