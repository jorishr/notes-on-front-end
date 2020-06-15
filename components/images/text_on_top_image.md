# Text on top of an image
The markup consist of a container div set to position: relative; with inside an image element and another container div for the text. 

The text container gets assigned a position absolute from the top and thus gets displayed over the image.
```HTML
<div class="container">
    <img src="" alt="" class="container__img">
    <div class="container__text">
        <h1></h1>
        <h2></h2>
        <p></p>
        <button></button>
    </div>
</div>    
```
```SCSS
.container {
    position: relative;
    
    &__text {
        position: absolute;
        top: 50%;
    }    
    &__photo {
        display: block;
    }
}
```
The other option is to use the background-image property but this can become problematic in a responsive design. An image inside a div container gives more flexibility and less headaches.
```HTML
<div class="container"></div>
```
```CSS
.container { background-image: url(link); }
```
## Hover animation for text on top of an image
- Opacity: When text is positioned on top an image you usually use some OPACITY for better readability. That opacity can be increased or reduced when hovering.

- moving borders on top of image
When hovering over the image, the border lines scale up on top, right, bottom and left and cross each other in the corners.

See [moving borders on image :hover](https://codepen.io/jorishr/pen/JjjLejP) on my Codepen for a working example.

The markup consists of container div with cards. Each card is a div itself and inside each card there is an image and another div for the card__text.

It is on the .card div that we add the pseudo elements.

Both pseudo elements get set to position absolute and start at equal spacing from the four side. If you give it a background-color it will fill the center of the image and only leave 1.25em border space for the image to see.

The ::before element will create the bottom and top border lines. The ::after element will create the left/right border lines.

On hover both get transitioned in from scale 0 to 1.

Scale(0,1) to scale(1.05,1) for ::before and scale(1,0) to scale(1,1.05) 
for ::after.
```SCSS
.card {

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 1.25em;
        bottom: 1.25em;
        left: 1.25em;
        right: 1.25em;
        transition: transform ease-out 250ms;
    }

    &::before {
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        transform: scale(0,1);
    }

    &::after {
        border-left: 1px solid white;
        border-right: 1px solid white;
        transform: scale(1,0);
    }
      
    &:hover::before {
        transform: scale(1.05, 1);
    }
      
    &:hover::after {
        transform: scale(1, 1.05);
    }
}
```