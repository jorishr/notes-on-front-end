# Fonts and font-families
Table of contents
- [Fonts and font-families](#fonts-and-font-families)
	- [About fonts](#about-fonts)
		- [Font-support](#font-support)
		- [Font-families](#font-families)
	- [Text properties](#text-properties)
	- [Webfonts and local fonts](#webfonts-and-local-fonts)
		- [Locally hosted](#locally-hosted)
	- [How to choose a font](#how-to-choose-a-font)
	- [Measuring font-size](#measuring-font-size)

Reference: [Practical typography](https://practicaltypography.com/)

## About fonts
### Font-support
Niet alle fonts worden zomaar door alle systemen en browsers ondersteund. Gebruik daarom meerdere font-family's die elkaar benaderen, bijvoorbeeld: Times New Roman, Times, serif. Vooral oudere systemen kunnen dan kiezen voor wat het best gelijkt op wat je wilde hebben.

BELANGRIJK: Informeer je over de gebruiksvoorwaarden van speciale web fonts.

### Font-families
De font-family bepaal je in de base style css file van je project.

De verschillende weight en style combinaties maken telkens tot 1 face van de font-family. Het ontwerp van een website maakt meestal gebruik van verschillende font-faces uit dezelfde family. Zoniet probeert de browser dat te faken met synthesis: `font-synthesis: none;`, werkt enkel in firefox.

Voorbeeld: 
```
font-family: Times Arial;

font-weight: bold; 
font-weight: 300; (light) 
font-weight: 400; (normal) 
font-weight: 700; (bold)

font-style: italic;
// use a font-size between 14px and 20px for the body element.
```
## Text properties
```
text-decoration: underline;
// only use with hover states. 
text-decoration: none; 

font-spacing: 2px;  
// -> space between characters      

text-align: left/right/center/justified;    
// avoid <justified> as the variable font-spacing that is used to fill up the available space will vary widely between browsers 
```
## Webfonts and local fonts
Google Fonts is a quick and easy solution, but professional sites should typically use locally hosted web fonts.

Web Open Font Format (WOFF) is de nieuwe standaard voor fonts. 

Voor legacy browsers kan je soms te maken hebben met svg, ttf of eot formaten en op websites vind je soms de syntax `@font-face {}` terug.

De meeste beslissingen komen van een designer. Maar je moet overweg kunnen met al deze concepten om ze kunnen toe te passen in de code, begrijpen waarom.

### Locally hosted
- add font-family files to local dir: normal, italic and bold
- add link in css sheet
- in CSS:
```CSS
@font-face {
    font-family:"label";
	src: url('normal-file');
	font-style: normal;
	font-weight: 300;
}
@font-face {
    font-family:"label";
	src: url('italic-file');
	font-style: italic;
	font-weight: 300;
}
@font-face {
    font-family:"label";
	src: url('bold-file');
	font-style: bold;
	font-weight: 700;
}
```
NOTE: dankzij het "label" laat je de browser weten dat de @font-face types gerelateerd zijn.

Vervolgens kan je in de CSS font-style: gewoon werken met italic en bold, en moet je niet specifiek font-weight opgeven.

## How to choose a font
Fastest way: use Fontpair.co website or experiment at fontjoy.com

Start with the most popular on Google Fonts. Pick one that has lots of different weights. Because a weight that works in the title may not work on the paragraph.

The sans-serif fonts are a good way to start.

Add an accent font that stands out. The more contrast with the base font, the better.

A classic is the combination of sans-serif with a sans font. Use it for titles/subtitles or things that have to stand out.

## Measuring font-size
- use page ruler extension for chrome
- measure from the heighest point of the capital letter to the lowest point of a g or y.