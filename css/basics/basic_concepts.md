Table of contents
- [Cascade](#cascade)
- [Specificity Rules](#specificity-rules)
- [Declarative language](#declarative-language)
- [Inline and internal CSS](#inline-and-internal-css)
- [External CSS Sheets](#external-css-sheets)
- [Inheritance](#inheritance)
## Cascade
CSS is een algoritme dat tot taak heeft de verschillende CSS of stijl verklaringen uit te kiezen die kunnen komen van: a) user agent (browser), b) auteur van de pagina, c) de eindgebruiker, in cascading order.

## Specificity Rules
Als de oorsprong is uitgeklaard kan het zijn dat eenzelfde element wordt onderworpen aan meerdere selectors. In dat geval gelden de regels van het  "specificity" algoritme. Specificity komt NA het cascading algoritme.

## Declarative language  
CSS is a declarative language: unlike Javascript or Python it does not have to use each line of code to render. It parses every declaration and what is not understood gets ignored.

NOOT: alle browsers hebben al een default styling die telkens anders is. Om die tijdens het ontwerpen te resetten kan je een CSS Reset style sheet  downloaden en gebruiken.

## Inline and internal CSS
Style attributen kan je in elke html line gebruiken maar dit is niet   praktisch. Bijvoobeeld: `<h1 style="border: 1px">Titel</h1>`
  
Inline styles hebben de hoogste prioriteit en altijd voorrang op externe CSS sheets. Je kan ook een style tag in de header van een html zetten.

## External CSS Sheets  
Gebruik in de HTML header een link tag die verwijst naar een apart CSS bestand met atributen rel (relation=stylesheet, type="text/CSS" en href.
```HTML
<link rel="stylesheet" type="text/CSS" href="bestandnaam en path">
```
## Inheritance
Probeer nested CSS te minimalizeren of te vermijden (descendant selectors), dit 
is belastend voor de selector engine. 

Maak gebruik van inheritance: de eigenschappen die een element erft van het moederelement.

Bijvoorbeeld: het stijlen van een div. De eigenschappen die je geeft aan de
div, background, color, etc. zullen ook van toepassing zijn op de elementen binnenin je div, tenzij je nog specifieker aangeeft dat die elementen anders moeten zijn.
```HTML
<html>
<head>
    <title>Titel hier</title>
  	<style type="text/CSS">
  		li {
	  		color: red;
		  	border: 1px solid;
		  }
    </style>
```