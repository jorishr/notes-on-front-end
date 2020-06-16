# Animation basics
Table of contents
- [Animation basics](#animation-basics)
  - [Changing state animation with pseudo classes](#changing-state-animation-with-pseudo-classes)
  - [Transform and transition](#transform-and-transition)
    - [Transform](#transform)
      - [Transform translate](#transform-translate)
      - [Transform scale](#transform-scale)
      - [Transfrom rotate](#transfrom-rotate)
    - [Transition](#transition)
  - [Keyframe animatie](#keyframe-animatie)

Animatie zijn belangrijk om de gebruikservaring te verbeteren. Bijv., het wijzen op fouten, niet correct ingevulde gegegevens, het succesvol uitvoeren van een betaling, vergroten van tekst, enz. Het geeft een dynamische en profesionele indruk.

## Changing state animation with pseudo classes
Animaties moeten getriggered of opgeroepen worden. Dit kan al bij het laden van de pagina maar gebeurt meestal bij specifieke actie bijv. scroll of een klik. 

Dergelijke 'triggers' zijn STATE CHANGES die in CSS worden vertegenwoordigd door pseudo klassen: `:hover, :focus, :active, :checked`.

Focus: Als je een element selecteert op de pagina wordt dat opgelicht of     actief, gebruik TAB-key.

Bijvoorbeeld, een tekstvak: eens de cursor erin zet dan krijgt het meteen een
rand. De meeste browsers doen dat al vanzelf maar je kan bijv. ook de    achtergrond wijzigen...Focus kan iets langer duren dan de "active state"

Active: "being activated by the user". Active bij een knop is wanneer je die ingedrukt houdt. Het is een meer "immediate state, in the moment".

Checked: Bijvoorbeeld wanneer checkboxes van een input element worden aangevinkt.

## Transform and transition
Transform laat je toe elementen te verplaatsen, draaien, schalen, en vervormen. Vervolgens kan die transformatie versnellen of vertragen met transitie. De meest voorkomende transform functies zijn translateX/Y, scale en rotate.

The transform translate() wordt enkel gebruikt bij een trigger, bijv. hover. Niet in de layout opmaak van de pagina.

### Transform
#### Transform translate
Met `transform: translate() | translateX() | translateY()` verplaats je het     element op de X en of Y as x aantal pixels.
```      
.class {
  transform: translate(10px, 10px);
} 
```
#### Transform scale
Vanaf het middelpunt van het element wordt het hele element, dus incl. borders, vergroot of verkleind met de factor die je instelt. Dit kan je op de X en Y as.

De transform-origin waarden kan je aanpassen zodat het herschalen of 
verschuiven niet begint in het midden van het element (50% 50% 0) maar   bijvoorbeeld in de linker bovenhoek.
```
div {
  transform: scale(x,y);
  transform: scaleX();
  transform: scaleY();
  transform-origin: left; 
  transform-origin: right; 
  transform-origin: center; 
  transform-origin: x, y, z; 
}   
```  
#### Transfrom rotate 
Een positieve waarde betekent draaien met de klok mee, een negatieve waarde   is draaien in tegenwijzerzin.
```
transform: rotate(deg); 
transfrom: rotateX(deg);
transfrom: rotateY(deg);
transfrom: rotateZ(deg);
```
### Transition  
De transition property geeft je controle over de timing, acceleratie en snelheid van animaties. 
  
Er zijn slechts 4 eigenschappen waarvoor je transities mag gebruiken: 
- opacity
- transform: translate();
- transform: scale();
- transform: rotate();

Transitiion heeft vier componenten:
- transition-property: bij welke animaties is de transitie van toepassing.
Dit kan zijn transform, opacity of all.
- transition-duration: hoelang duurt de transitie in seconden
- transition-timing-function: welk patroon moet de transitie volgen, bijv. acceleratie 90% in 0.2 sec en dan de resterende 10% in 0.1 sec.
- transition-delay: vertraging na hover of klik.

Shorthand code and combining various animations:
```      
transition: property duration timing-function delay,

transition: all 2s ease-in-out .2s;
  
transition: transform 3s ease-out .2s,
            opacity 2s ease-in .1s;
```
## Keyframe animatie
Transitions laten enkel single state changes toe. Je kan wel tegelijk de 
randen en achtergrond veranderen maar enkel van de ene status naar de andere.

Met Keyframe animaties kan je meerdere statuspunten combineren. Dus bijv. 
achtergrond van geel naar rood naar groen om te eindigen bij zwart.

Keyframes werken met intervallen. Op elk punt in dat interval kan je een actie
definiëren.
```
|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
```
Het waarom van Keyframes? "Loading Icons" zijn bijna altijd CSS animaties
gemaakt met keyframes.

Er zijn twee stappen:
- Eerst definieer je de animatie keyframe: wat gebeurt er op welk interval.
In dit voorbeeld is gekozen voor gelijke intervallen. Als je iets sneller 
wil laten gaan dan je kiezen voor bijv. 10%-15%-20% en dan 50%-60%-70%
- Geef aan op welk element de keyframe animatie van toepassing is. De `animation-fill-mode: forwards;` neemt eindstatus en laat die staan op het einde van de animatie 

In het tweede voorbeeld verandert de kleur van blauw naar zwart naar groen 
over 5s. Blijf je hoveren dan blijft de kleur groen, ipv terug te keren naar
de initiële kleur, blauw.
```
animation-direction: reverse | forward | alternate;
```
```
@keyframes example {
    0% {
      color: blue; /* initial state */
    }
    25% {
      color: red;
    }
    50% {
      transform: translateX(300px);
      color: green;
    }
    75% {}
    100% {} /* end state */
}

p { color: blue; }

@keyframes changecolor { 
  0% { color:black; } 
  100% { color:green; }
}

p:hover {
    animation-name: changecolor;
    animation-duration: 5s;
    animation-timing-function: linear;
    /* animation-timing-function: ease-in; */
    /* animation-timing-function: ease-in-out; */
    /* animation-fill-mode: forwards; */
    /* animation-fill-mode: backwards; */
}
``` 