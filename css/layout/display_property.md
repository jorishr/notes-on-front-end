# CSS Display property
## Block
Voor block elementen de default is `display: block;`. Een default block element wordt steeds gevolgd door een line break en neemt dus volledige horizontale ruimte in op de pagina of the containing div.

## Inline
Voor in-line elementen: span, a, img, canvas etc. The `display: in-line` betekent dat ze een kleine lijnhoogte krijgen toegevoegd onderaan die ruimte laat voor de letters in het alfabet die uitlopen zoals 'g'. 
	
Daarom gebruiken we voor een image gallery een image element met `display: block;` zodat ze netjes op elkaar kunnen aansluiten.

Als je een canvas element de hele hoogte van de pagina laat innemen krijg je een 1px tussen body en html. Ook dit los je op met `display:block` of via: ``	vertical-align: top;`. 

The default vertical-align value is baseline, which is why the element is being aligned to the bottom (resulting in a scrollbar).

## Block to in-line block
Maak je een block tot in-line dan worden je marges en padding gewijzigd om het blok op een lijn te krijgen. Maar die marges en padding blijven wel gerespecteerd, in tegenstelling tot `display: inline;`. 

Het kan soms nuttig zijn om block-level elementen zoals list-items op één lijn
te krijgen. Dit kan met FLOATS maar dan moet je CLEAREN op het niveau van de parent (ul). 

Met `display: inline-bloc` krijg je hetzelfde effect: block-level elementen
op één lijn maar zonder line-break. Dit is handig voor bijvoorbeeld horizontale menu's.

Vergeleken met `display: inline` kan je met inline-block wel een width and 	height instellen.

## Visibility
The `display: none;` betekent dat het element niet zichtbaar is en niet gerendered wordt. Er wordt dus geen ruimte voor voorzien op de pagina.
	
Je kan wel interageren met het element via de DOM en bijvoorbeeld JS gebruiken om een div blok dat verborgen is zichtbaar te maken na een klik event.

Een ander voorbeeld is de `<script>` tag. Die heeft default waarde `display:none;` en is dus niet zichtbaar op de pagina maar is wel deel van de DOM.

The `visbility: hidden;` daarentegen wordt wel gerendered en er wordt dus ruimte voor voorzien op de pagina. De ruimte die het normaal zou innemen wanneer het element zichtbaar zou zijn blijft dus gereserveerd.