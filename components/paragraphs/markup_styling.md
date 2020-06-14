# Paragraph styling
- A.  Markup patterns
Follow BEM: a paragraph is always an ELEMENT part of a BLOCK (block__paragraph).

Look for a pattern in the paragraphs on the site you are building or in the sections of your page. You can define a base style for paragraphs and use modifiers classes when needed.

SERVER-SIDE GENERATED PARAGRAPHS
When working with groups of paragraphs that may change over time it is not practical to assign BEM classes to each individual paragraph because we don't know when and how many will be created. 

The solution is to create a GENERIC PARAGRAPH CONTAINER for which you set css rules that apply to the paragraphs and possiblly a-tags or span elements that will be created by the server.
```SCSS
.container > p { }

.container { 
	p {} 
	p a {} 
	p span {} 
}
```
Note about SASS imports
If you create this generic container classes make sure to import them towards the top your main sass file. This way the generic styles become the default and your custom sass later on can override the properties when that is required.

Check in Chrome Dev Tools which styles get applied.
 
## In-Text elements (p > span)
Certain parts WITHIN paragraphs sentences need specific styling. Here too it is best to follow the BEM methodology by adding a span element and giving it a class as a subelement of a block. 	
```SCSS
{
 	&__spanClass {
		font-size: 2.0em; 
		font-weight: bold; 
		font-style: italic;
	} 
}	
```