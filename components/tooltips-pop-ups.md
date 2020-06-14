# Tooltips / pop-ups / snackbar
## Markup
The principle for tooltips and pop-ups is similar: hidden by default, animated-in. 

The CALL OUT is the other way around: visibile and fixed by default, for the user to click away with X (display: none) or follow link to cta. 

Tooltips are added as HTML div with a span text that has css visibility:hidden / display: none / opacity: 0. The opacity is added because then you can transition the style.

On hover or click the visbility is set to visible.
```
div.tooltip
	span.text

.text {visibility:hidden}
.tooltip:hover .text{visibility: visible}
```
- Tooltip inside text
If you want the tooltip inside a line of text then add the dots under the hoverable text set
```	
.tooltip {border-bottom: 1px dotted black}
```
## Positioning
Set the container to position: relative; and the text can be set with position: absolute;
```
position: absolute;
left: 105%; (on the right)| right:105% (on the left)
```
To position on top or bottom you can use bottom/top:100%