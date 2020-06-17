# Keyboard events
Table of contents
- [Keyboard events](#keyboard-events)
  - [Input field keystrokes](#input-field-keystrokes)
  - [Event object](#event-object)
  - [Other text related events](#other-text-related-events)
    - [Change](#change)
    - [Input](#input)
    - [Cut/copy/paste](#cutcopypaste)
      - [Example: prevent copying of text](#example-prevent-copying-of-text)
  
Keyboard events should be used when we want to handle keyboard actions.

The keydown events happens when a key is pressed down, and keyup when a key is released.

## Input field keystrokes
If we want to track any input into an `<input>` field, then keyboard events are not enough. There's another event named input to track changes of an `<input>` field, by any means. And it may be a better choice for such a task. 

## Event object
The `event.key` property of the event object allows you to get the character that is typed, while the `event.code` property allows you to get the physical key code.
```
KEY		EVENT.KEY		EVENT.CODE
Z		z (lowercase)	KeyZ
Shift+Z	Z (uppercase)	KeyZ

Do we want to handle layout-dependant keys? Then event.key is the way to go.

Or we want a hotkey to work even after a language switch? Then event.code may be better.
```
## Other text related events
### Change	
A value was changed. For text input fields the trigger is loss of focus.

### Input	
For text inputs on every change. Unlike change, this one triggers immediately.

### Cut/copy/paste	
A Cut/copy/paste action was detected. These actions can be prevented. The `event.clipboardData` property gives read/write access to the clipboard.

#### Example: prevent copying of text
```HTML
<div oncopy="alert('Copying forbidden!');return false">
  Dear user,
  The copying is forbidden for you.
  If you know JS or HTML, then you can get everything from the page source though.
</div>
```