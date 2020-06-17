# CSS3 Multi-columns
Dit is nieuw in CSS3 en is een eenvoudige manier om kolommen te maken in een containing div. Ideaal voor een newspaper style layout.

The HTML markup is een container div met class.

In CSS geef je het aantal kolommen aan met `column-count` en `column-gap` voor de marges tussen de kolommen.
```CSS
.three-column {
    padding: 1em;
    column-count: 3;
    column-gap: 1em;
   
    column-rule-style: solid;
    column-rule-color: rgb(43,43,43);
}
p.span-all {column-span: all}
```
Via media queries kan je gaan van 1 column layout in mobile naar 3 column layout on desktop.

The lijn die de columns scheidt kan je aanpassen met de `column-rule` eigenschappen.

If you want an element to span multiple columns use the column-span property.