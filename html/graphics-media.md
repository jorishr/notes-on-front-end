# Graphics and multimedia
There are two main graphics elements in html: svg and canvas. For SVG see seperate doc.

## Canvas
Canvas is an empty container that allows you to create 2D/3D graphics for, for example, games.
To manipulate the content use the id in JS.
```HTML
<canvas width="200px" height="100px" 
        style="border: 1px solid red;"
        id="canvas1">
</canvas>
```

## Multimedia    
Originally browsers only supported text. Later came colors, fonts and images. With HTML5 a wide variety of audio and video is supported by default. 
- Video: MP4, WebM, and Ogg 
- Audio: MP3, WAV, and Ogg
```HTML
<video  width="320" height="240" 
        controls autoplay autobuffer muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag. 
</video>
```
Je kan meerdere formaten meegeven waaruit de browser kan kiezen en voorzie een fallback text voor het geval er iets mis gaat of de browser geen ondersteuning biedt.

Controls: play, volume pause
    
Zonder width en height gaat de pagina flikkeren.

Je kan met Javascript een button toevoegen "afspelen/pauze" met innerHTLM.
```HTML
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```