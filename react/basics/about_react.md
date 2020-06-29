# React UI library
Tabele of contents
- [React UI library](#react-ui-library)
	- [About](#about)
		- [Components and state changes](#components-and-state-changes)
	- [Setup](#setup)
	- [Thinking react](#thinking-react)
		- [Component hierarchy](#component-hierarchy)
		- [Build the static version of the component with JSX](#build-the-static-version-of-the-component-with-jsx)
		- [Identifying state changes](#identifying-state-changes)
		- [Identify the state owner](#identify-the-state-owner)
		- [Inverse data flow input](#inverse-data-flow-input)
## About
The problem that Single Page Apps solve is that you can offer the user an native-like experience whereby all interactions happen within the same page. That does not mean the entire website should be build using SPA architecture, some routes or pages still better suited a static approach or basic server side rendering approach.

In React every item in the UI is a component. All components are combined and can interact with each other to create a smooth user experience in complex apps. This is especially useful for app's that handle a lot of data. When the data changes, many components in the UI may have to be updated and this can become a very tedious task with lot's of code if done through a basic server side rendering approach. React, however, will efficiently update and render just the right components when your data changes.

### Components and state changes
Each block on the page is a component whereby you broadly define what it should look like and what it's functionality should be. Then, you can fill up that component with whatever data that comes in or rendered it statically. Components are then nested to form part of a larger components to form a fully functioning UI.

React re-renders those components each time there is a state change, usually when new data comes in from the server. With normal AJAX code you need eventListeners and select each component you want updated. React manages this for us very efficiently as it does not re-render all components. Only the component that is affected by the state change and the child components inside of it. All other UI components remain unchanged.

## Setup
Create a new react app in the current folder automatically: `npx create-react-app`.

In the PUBLIC folder all the static files live, including the index.html. It has an emty body that is filled with JS scripts during the build process. The manifest.json is for SPA configuration with offline capabilities.

In the SRC folder we have the code we develop with. The index.js hooks up with html and renders the APP inside the DOM at the root element, which is the `<div id="root"></div>` inside the `<body>` element.

The App.js is the actual app code that gets rendered.

When you want to modify how React works, especially the Webpack configuration, then you can EJECT the app, which will expose all the config files. Other basic commands are: run the dev server, the build process and a test command.

VS Code offers some interesting plugins like `ES7 React snippets` that can  create new functional components with shortcut commands: `rfc`. 

## Thinking react
The process of building a scalable UI in React has the following components:
- component hierarchy
- static JSX
- identifying state changes
- identify state ownership
- data flow
  
### Component hierarchy
Break down the UI into small components with a SINGLE responsibility, based on the DATA MODEL. Make a schema of the component hierachy with parents and children.

### Build the static version of the component with JSX
This phase is a lot of typing and little thinking. You do pass in the props from parents to children but leave STATE out of it. State is reserved only for interactivity. In simpler examples, it's usually easier to go top-down while on larger projects, it's probably easier to go bottom-up and write tests as you build.

At the end of this step, you'll have a library of reusable components that render your data model. The main parent component will take in the data model as a PROP.

### Identifying state changes
To make your UI interactive, you need to be able to TRIGGER CHANGES to your underlying data model. React achieves this with state. Figure out which one of the changes is state. Ask three questions about each piece of data:
- Is the data passed in from a parent via props? If so, it probably isn't state.
- Does the data remain unchanged over time? If so, it probably isn't state.
- Can you compute it based on any other state or props in your component? If so, it isn't state.

For example: The original list of products is passed in as props, so that's not state. The search text and the checkbox seem to be state since they change over time and can't be computed from anything else. And finally, the filtered list of products isn't state because it can be computed by combining the original list of products with the search text.

### Identify the state owner
Identify which component mutates, or owns, the state. React has a one-directional data flow from parents to its children. Find the component highest up the chain, especially if various children are affect by state changes. Then set the initial state in the correct component and pass the state variable as a prop.

### Inverse data flow input
By default the data-flow in react is one-directional from parent to child, and thus the default input value that is displayed is taken from the state and all inputs are ignored (read-only).

When you add an onChange={} attribute however, we can specify handler functions that update the state in the component where it is owned or located and that state changes will trigger the update.