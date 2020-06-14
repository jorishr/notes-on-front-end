# Paragraph (max-)width
Try to limit the paragraph to aproximately 80 characters for best readability.

Especially when using flexbox it is important to set a (max-)width for every paragraph, if not on larger screens the text will become unreadable long lines.

The exact width depends on the font-size but in general you can work with 66-80 charachters or about 500px. 

An easy calculation is 480px wich is 30rem on standard 16px font-size. 

Most monitors have a 1200px resolution thus a little less than halve is good for reading. 

# Guidelines 
- use EM not REM
EM represents the calculated font-size of an element, based on the font-size of the parent element. Thus if the font-size is set at 16px, 1em will represent 16px, 2em is 32px, 10em is 160px, etc. 

When using em the number of characters per line will always remain stable and you won't have to update padding or width manually each time you decide to make font-size changes. 

- DESKTOP: do not exceed 24-36em, with base font-size of 16px this corresponds with a paragraph width of 384-544px.

- MOBILE: do not exceed 17-18em. This is approx. 25 characters per line. Note that when setting to max-width: 100%; this will do the trick just as well.

Note that the viewport width for small mobile devices can be as narrow as 320px. If we set aside 20px for horizontal margins (10 + 10), the width of the text container will be 300px. 

The ideal font size for these devices therefore is 300/16 = 18.75px.

## Example
```SCSS 
p {
    &__textOnBigScreen {
 		width: 34em;
    	line-height: 1.25;
    	font-size: 20px;
    }
 	&__textOnSmallScreen {
    	width: 18em;
    	max-width: 100%;
		line-height: 1.25;
    	font-size: 18px;
    }
} 	
```