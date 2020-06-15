# Semantic elements in HTML5
- about semantics
- outline
- articles and sections
- nav, header, footer
- aside
- div's
- other semantic elements

## About semantic elements
Semantics is the study of meaning of words, so semantic elements usually are tags that contain info about the meaning of the content. Div or span doesn't say any-thing about what's inside and search engines or other developers had to rely on the class/ID to make sense of it.

The new HTML 5 semantic elements are very clear about what they hold inside.
```HTML
<section></section> <article></article>
<header></header> <footer></footer>
<nav></nav> <aside></aside>
```    
Dated IE zal die elementen weergeven als display: inline. Ze zullen dus rechts van andere elementen komen en niet zoals in andere browsers als display:block. You can provide a fallback in CSS:
```CSS
section, article, aside, footer, header, nav {
  display: block;
}
```    
The legacy tags are remnints of the time their was no CSS and little consideration for search engine optimazation. You had to do basic formatting such as italic in html. With semantic Html
you give meaning to the tag so that search engines and screen reader can better understand your page and basic formatting tags such as strong or em are only used if those properties are structural elements on a page.

## HTML Outline
The outline is defined by headings h1-h6 and is important for search engines and screen-readers.

## Articles and sections
Articles are like mini webpages that should make perfect sense outside the context of your page. So, search engines or other apps can lift them out. 

Think of section elements as an explicit way to define the sections in a document's outline. This basically means that each section could have its own set of h1 through h6 headings that are independent of the rest of the page. 
    
Each section should contain at least one heading. Otherwise it will add an “untitled section” to your document outline.

It is recommended to only use section as a more descriptive div wrapper for the implicitly defined sections of your page. Don’t use it for self-contained content (that’s what the article is for).
    
### NAV, HEADER, FOOTER 
- the nav element is useful for pretty much any group of links
- the header is used for wrapping a website’s name/logo and main navigation. 

Also, it serves as "introductory content" of .e.g. an article. For instance, the title, author, and publication date of our article is a pretty good candidate for another header element.

Similar thing for the footer element at the bottom of the page or at the bottom of an article. Copyright notices, footer navigation, and author bios at the end of blog posts.
```HTML
<body>
  <header>
    <h1>page title</h1>
    <nav><ul></ul></nav>
    <img src="logo">
  </header>
  <main>
    <article>
      <header>
        <h1>Semantic HTML</h1>
        <p>By Troy McClure. Published January 3rd</p>
      </header>
      <p>This is an example web page explaining HTML5 semantic markup.</p>
      <footer>         
          <p>This fake article was written by somebody at InternetingIsHard.com,
            which is a pretty decent place to learn how to become a web developer. This
            footer is only for the containing <code>&lt;article&gt;</code> element.
          </p>
      </footer>        
    </article>
    <article></article>
    <article></article>
    <article></article>
  </main>
  <footer>       
    <p>&copy; 2017 InternetingIsHard.com</p>
  </footer>
</body>
```

### Aside
Als sidebar op de pagina of als extra bij een article: een ad, extra grafiek, highlights. Alles wat gerelateerd is maar duidelijk verschillend van het artikel.
   
## DIV's
Je kan klasses geven aan semantische elementen maar als het gaat om puur layout, bijvoorbeeld het centreren van de pagina, dan hou je het best bij div's. Zeker als je werkt met flexbox.

## Other semantic elements 
- time

This element makes the date machine-readable. Datetime="year-month-day tijd+-timezone(GMT+/-)">
```HTML
<time datetime='2017-1-3'>January 3rd</time>
<time datetime="2018-12-12 16:00+0100">12 december 2018, 4 uur Europese tijd</time>
```
- address

This element defines contact information for the author of the article or web page in question. The address element should NOT be used for arbitrary physical addresses.
```HTML
<article>
  <footer>
    <p>This fake article was written by somebody at InternetingIsHard.com, which
      is a pretty decent place to learn how to become a web developer. This footer
      is only for the containing <code>&lt;article&gt;</code> element.</p>
    <address>
      Please contact <a href='mailto:troymcclure@example.com'>Troy
      McClure</a> for questions about this article.
    </address>
  </footer>
</article>
```
- figure and figcaption
Bij afbeeldingen kan je nu de afbeelding én de legende (caption) ervan in een figure tag stoppen. `<figcaption></figcaption>` is een extra beschrijving van de figuur, gelijkaardig aan het alt attribuut voor SEO.
```HTML
<figure>
	<img src="#">
	<figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
<figure>
    <img src='semantic-elements.png'
         alt='Diagram showing <article>, <section>, and <nav> elements'/>
    <figcaption>New HTML5 semantic elements</figcaption>
</figure>
```
- abbreviation

De abbreviation element voor afkortingen van namen, bijv. WHO in combinatie met title attribuut:
```HTML
<p><abbr title="World Health Organization">WHO</abbr>&nbsp;is de overkoepelende
organizatie voor...
</p>
```
- no script tag 
As the first element inside your body tag put the noscript element if you are planning on using JS on the site, and especially React. It gives the user crucial feedback why the app is not working partially or entirely.
```HTML
<noscript>You need to enable JavaScript to run this app.</noscript>
```