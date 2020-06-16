# Text Animations
Table of contents
- [Text Animations](#text-animations)
  - [Slide-in](#slide-in)
  - [Fade-in](#fade-in)
  - [Text reveal on :hover](#text-reveal-on-hover)
  - [Splitting JS library](#splitting-js-library)

## Slide-in
Have a hero text slide into view from the top.
```CSS
p {
  margin-top: -100px;
  opacity: 0;
  animation: slide-in 1s, .5s forwards
}
@keyframes slide-in: 100% { 
  margin-top: 0; 
  opacity; 1;
} 
```
## Fade-in
```CSS
p {
	opacity: 0;
  animation: fade-in 1s, .5s forwards

}
@keyframes fade-in: 100% { opacity: 1; } 
```
## Text reveal on :hover
See my Codepen:
- [text reveal on hover](https://codepen.io/jorishr/pen/VwwXzNg)
- [slanted text reveal](https://codepen.io/jorishr/pen/wvvyrjr)

The animation works by making the opacity of the actual text element go from 0 to 1. On the container class you use a ::pseudo element to overlay the text/title and schrink/expand. To create the desired effect from left to right switch the position absolute left:0 to left: 100%; and extend and reduce the width.

The alternative approach is to use transform: translateX();

## Splitting JS library
Splitting is a JavaScript microlibrary with a collection of small built-in plugins designed to split (section off) an element in a variety of ways, such as words, characters, child nodes, and more!

The Splitting library does not handle any animation, but it gives you the elements and tools needed to create animations & transitions with JavaScript animation libraries or only CSS! 

Most plugins utilize a series of spans populated with CSS variables and data attributes that empower you to build all kinds of animations, transitions and interactions.

Reference: [Video by Garry Simon](https://www.youtube.com/watch?v=ySrbvSf0xiA)