# HTML Entities and Symbols
- HTML entities
- Quotation marks in HTML
- Arrows
- Symbols
- Keyboard input element
- Code in HTML
- Variables in HTML
- Code output in HTML
   
Since we’re now using a UTF-8 character set, we should be able to insert any character directly into the HTML document. This makes entities primarily useful as reserved characters or for convenience when authoring straight HTML.
```HTML
<h4>HTML Entitites</h4>
<p>
    &copy;  copyright   <br>
    &reg;   registered  <br>
    &euro;  EURO        <br>
    &amp;   ampersand   <br>
    &trade; registered trademark    <br> 
    &nbsp;  non blank space <br>
</p>
```
## Quotations marks
```HTML
<p><strong>Quotations and arrows</strong><br>
    &quot;&nbsp;&quot; <br>
    &ldquo; (open double), &rdquo; (close double) <br>
    &lsquo; (open single), &rsquo; (close single) <br>
    &ndash; (dash) &mdash; (long dash) 
</p>
```
In css with a pseudo element you can add ::before and ::after using content: open-quote; and content: close-quote;

## Arrows
```HTML
&larr; <!-- left arrow -->
&rarr; <!-- right arrow -->
&uarr; <!-- up arrow -->
&darr; <!-- down arrow -->
```

## Symbols
Er zijn ook een heleboel SYMBOLEN die je eventueel als icoontjes kan gebruiken. Zie W3C voor de referentielijst maar je gebruik de decimale voorzetsel &# of het hexadecimale &#x.
```HTML
<p>
    <strong>Symbols</strong><br>
    &#9855;     <!-- disability -->     
    &#x2670;    <!-- cross -->
    &#9728;     <!-- sun -->
    &#9729;     <!-- cloud -->
    &#x25BE;    <!-- down -->
</p>
```
## Keyboard input element `<kdb></kdb>` 
```HTML
<p>
    <strong>Keyboard input elements that trigger the Monospace font of the browser.</strong>
</p>
<p>Om Windows opnieuw op te starten druk: <kbd>Ctrl+Alt+Del</kbd><br>
Om iets te bewaren druk: <kbd>Ctrl+s</kbd><br></p>
```

## Code in HTML
```HTML
<p>
    Om code te tonen: &lt;a href="#top-pagina">Naar de top&gt;<br>
    &lt;<code>x + y = z</code>&gt; &nbsp;voor computercode gebruik:&lt;code&gt;<br>
</p>
```

## Variables in HTMLs
```HTML
<p>
    Om te werken met variabelen gebruik: &lt;var&gt;
    Einstein wrote: <var>E</var>=<var>mc</var><sup>2</sup><br>
</p>
```
## Code output in HTML
```HTML
<p>
    &lt;samp&gt;gebruik je voor output van computercode, bijvoorbeeld:
    <samp>Error!</samp>
</p>