# Legacy browser support: CSS overrides and support feature query
Think a moment about what the site would look like without CSS, or without modern features and make it resilient: How well does it fail?

For older browser that don't understand something you can use two declarations of the same property:
```
  height: 500px; for older browsers
  height: 100vh; 
```
Older browsers will use the first property and ignore the second one. The newer browsers will override the first declaration.

For experimental features you can use the @support {} feature query: the css 
declarations inside will only run if the browser supports them.