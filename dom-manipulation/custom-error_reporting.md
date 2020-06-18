# Debugging DOM Manipulation code
Dom manipulation code can be difficult to debug. To get more meaningful feedback you can add custom error reporting to generate custom errors if something some key elements are missing, for example.

```Javascript
if(!ul) throw new Error('Could not find ul')
if(!btn) throw new Error('Could not find button')
if(!form) throw new Error('Could not find form')
```
This type of code must be at the bottom of the js file as the error generation may interfere with other code that does run correctly.