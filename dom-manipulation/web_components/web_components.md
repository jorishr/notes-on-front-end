# Web Components
The whole component idea is nothing new. It's used in many frameworks and elsewhere. The well known rule for developing complex software is: don't make complex software. Thus a UI is broken down into components like top-navigation, user-info, suggestions, submit form, etc. And each component may have subcomponents.

Usually a component is a separate visual entity that we can describe in terms of what it does and how it interacts with the page. 

## Creating a component
To create and render a component through Javascript every component needs:
- Its own JavaScript constructor class. 
- Its own DOM structure, managed solely by its class. Outside code doesn't access it (encapsulation principle).
- CSS styles applied to the component
- an API with event and class methods to interact with other components

This is a basically what REACT components do but Web components provide built-in browser capabilities for that, so we don't have to emulate them any more through libraries and frameworks.

## Examples
Examples of well-established web components are:
- Custom Elements to define a custom HTML element based on an existing one or a new and fully autonomous element.
- The Shadow DOM
- CSS Scoping for styles that only exist inside the shadow dom components