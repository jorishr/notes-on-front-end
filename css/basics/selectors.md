# CSS Selectors
- [CSS Selectors](#css-selectors)
	- [ID's and classes](#ids-and-classes)
		- [The ID selector](#the-id-selector)
		- [Class selector](#class-selector)
	- [Advanced selectors](#advanced-selectors)
	- [Pseudo class selectors](#pseudo-class-selectors)
	- [Attribute selectors](#attribute-selectors)
	- [Specificity examples](#specificity-examples)

## ID's and classes
### The ID selector
Een id of "hook" kan slechts 1 keer gebruikt worden per pagina. Het is een HTML attribuut `id=""` dat in CSS wordt geselecteerd met `#id {...}`.

### Class selector
Een class wordt gebruikt voor meerdere elementen met een of meerdere gedeelde stijlkenmerken. In HTML attribuut `class=""`, in CSS selecteer je `.<class>`

Het wordt veelal aangeraden om ID's te vermijden en alles een class te geven, maar wanneer frameworks zoals Bootstrap of backend JS frameworks als Express worden gebruik ga je toch ID's gebruiken om elementen te identificeren en te selecteren.

Je kan dan ook id en class attributen combineren en de kenmerken die gemeenschappelijk zijn via class definieren en aparte stijlen aangeven via een ID. 

De BEM conventie daarentegen steunt op classes, child classes and modifier classes. Wees dus pragmatisch.

## Advanced selectors
```CSS
h1, h2, strong {
	font-weigth: 900}	
/* 
group common properties at the beginning of each style sheet 
*/

div.class {}	
/* 
selecteert alleen de element met .class die ook een div zijn. Dus a.class wordt niet geselecteerd.
*/
h3 ~ p {}	
/* 
Siblings: selecteert alle p's in een parent container waarin ook een h3 zit
*/
h3 + p 	
/* 
Adjescent selector: selecteert alleen de p die net na een h3 komen
*/
div > p 
/* 
Child selector: selecteert alle p where the parent is a <div>
*/ 
```
## Pseudo class selectors
```CSS
p:first-letter {}	
/* select the first letter of every <p> */

p:first-line {}	
/* select the first line of every <p>*/

col:first-child {}

h3:hover {}

input:checked {} 
/* when input checkbox element is checked */

.btn:active {}

section:not(.first):nth-child(odd){}
/* 
selecteert alle oneven secties behalve de eerste.
*/

section:nth-child(odd) {}
section:nth-child(even) {}
/* alternation */

col:nth-child(2n+3){}
/*
(2n+3): elke tweede kolom, te beginnen vanaf de derde
(4n+1): elke vierde, te beginnen vanaf de eerste
*/
```
## Attribute selectors
```CSS
a[attribute='value']{} 
/* attribute selector: selecteert <a>'s met een bepaald atrribuut */
input[name="email"]{}
a[href="https://wwww.google.com"] 
a[target] 
a[tartget="_blank"]
/*
You can add regular expression to this syntax. For example, all links that contain the string:
*/
a[href*="google.com"]{}
p[name^="text"]{} 	
/* all strings that start with "text" */
p[name$="text"]{...} 	
/* all strings that end with "text" */
```
## Specificity examples
A directly targeted element has priority over INHERETED STYLES. 
```CSS
span {} 
/* 
includes all span elements, thus low specificity
*/
div span {} 
/* overrides the generic simple span */
div#test span {...} 
/* most specific */
```
In the example below the h1 inherits color from body but the directly targeted h1 overrides the inherited properties.
```
body id="parent" 
div#parent {color:red;}
h1 { color:green; }
```
Daarom zet bovenaan in je CSS document de algemene stijlen voor h1, p, a, etc. Die worden dan toegepast in alle secties van je pagina, tenzij je met een meer specifieke selector, een andere stijl aanbrengt.