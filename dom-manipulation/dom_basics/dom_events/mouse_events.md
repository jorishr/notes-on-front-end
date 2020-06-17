# Mouse Events
Click and doubleclick are complex events that consist of a sequence of mousedown/mouseup events that are already preconfigured.

Click-related events always have the WHICH property, which allows to get the exact mouse button.
```
event.which = 1;		//-> left button
event.which = 2;		//-> middle button
event.which = 3;		//-> right button
```
## Modifiers
Be careful with modifiers if your code is going to run on a pc/mac or mobile devices without keyboards.
```javascript
button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Hooray!');
    }
}
```
## Coordinates
All mouse events have coordinates in two flavours:
- window-relative: clientX and clientY.
- document-relative: pageX and pageY.