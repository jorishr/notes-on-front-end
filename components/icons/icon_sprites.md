# Icon sprites
- About
- Sprite file content
- Sprites in CSS
- Sprite automation
- References
## About sprites
When working with icons individually each icon has to be loaded by the browsers, time and time again. Icon sprites files can reduce that process to just one file load.

Sprites come from a computer graphics technique whereby you fetch an image once and display parts of it when necessary. For web pages this means you generate just one http-request for the combined graphic, which improves loading speed.

Most frequent use case: icons, flags, and collections of smaller images.

An SVG sprite sheet works like this: All of your icons are combined into one .svg file that is included in the page or referenced as external source. You call upon the reference of each icon using the syntax below while you can style the outer SVG element with CSS.
```HTML
<svg>
	<use href="pathSpriteName#my-icon"/>
</svg>
```

## Sprite file content
When using the symbol element inside an SVG an ID can be added that you can reference outside of that svg file. 

This what packages such as GULP SVG SPRITE do. They store the coordenates of each icon using the viewBox attribute and attach and ID to it. In your HTML the SVG is loaded once and the various parts of the image are displayed when you reference the ID.
```HTML
<svg xmlns="http://www.w3.org/2000/svg">
    <symbol viewBox="0 0 100 100" id="square_icon">
        <path d="M10 10H90V90H10Z"/>
    </symbol>
    <symbol viewBox="0 0 100 100" id="circle_icon">
        <circle cx="50" cy="50" r="40"/>
    </symbol>
</svg>
```

## Sprites in CSS
The source file is referenced with url() function, all elements with this class will have the entire png file as their background. But, you reference the position in the .png file: on x-as and y-axis for each element individually so only a copy of the correct coordinates is displayed.
```CSS
.flags-canada, .flags-mexico, .flags-usa {
	background-image: url('../images/flags.png');
	background-repeat: no-repeat;
}
.flags-canada {
	height: 128px;
	background-position: -5px -5px; 
}
```
The problem with this approach is that it becomes very tedious to write the css because you have to manually find each image position. You can automate this process by using a taskrunner such as webpack or gulp.


## Sprite task automation
See GULP docs for more details. The package we need is SVG SPRITE, see docs for full options list.
``` 	
npm install gulp-svg-sprite --save-dev	
```
Create an svg-sprite tasks in the gulpfile.js that generates an svg file: sprite-xxx.svg

In the svg-sprite package OPTIONS you set MODE to SYMBOL. This will make sure that you can reference the icons by using #symbol in the HTML without additional css.

In the example below we reference the #star icon.
```HTML
<h2 class="section-title">
		<svg class="section-title__icon">
		<use href="<path>/sprite.symbol.svg#star"></use>
		</svg>
		Our Features
</h2>
```

## References:
[Inline-svg-icon-sprites](https://www.tomhazledine.com/inline-svg-icon-sprites/)
[Icon-sprites-with-webpack](https://community.wia.io/d/6-generating-an-svg-sprite-sheet-with-webpack)