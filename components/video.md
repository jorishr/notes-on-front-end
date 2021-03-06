# Video elements
## Video as background on hero section
- A. HTML markup

The html is basic. Important: most browsers now require autoplaying videos to be muted with the muted attribute.

To use a video as background you don't need controls, use the loop attribute.
```HTML
<video class="video-bg" autoplay loop muted>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag. 
</video>
```
You create a hero .div and inside you have the video element and maybe a .h1 text element. The text element is centered with flexbox.

- B. CSS Styling 

Extra features: overlay with background-color or background-gradient.

The positioning of the video in the center is done with position: absolute; left: 50%; top: 50%; and transform: translate(-50%, -50%).

Important! Hide the possible overflow on from the video on the .hero element. Plus, to make sure the entire hero is covered you set a min-width and min-height to the video.

It is advisable to give the hero a fixed min-height as well, for example, 50vh.

To create the background effect set the video to z-index: -1; and make the background of the hero (partially) transparent. Or you can work with a background-image: linear-gradient.
```CSS
.hero {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	min-height: 50vh;
	background-color: rgba(0, 0, 0, .5);
	background-image: linear-gradient(90deg, 
		rgba(255, 0, 0, .5),
		rgba(0, 0, 255, .5));
}

.video-bg {
	position: absolute; 
	z-index: -1;
	left: 50%; 
	top: 50%; 
	transform: translate(-50%, -50%);
	min-width: 100%;
	min-height: 100%;
}
```