# Iframes
- Iframes can be used to insert other websites or video in a page.
- Iframes can be styled using CSS.
- Video examples:
```HTML
<iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/rngj6EaLeBA"
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
<iframe width="420" 
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```
- website inside iframe example, button link that opens a link inside iframe:
```HTML 
<iframe width="560" height="315" 
        style="border:none;"
        src="http://www.goudster.be"
        name="myIframe">
</iframe>
<a href="https://www.sporza.be" target="myIframe">Deze link opent sporza.be in een het iframe</a>
```