# The virtual DOM
Table of contents
- [The virtual DOM](#the-virtual-dom)
  - [Declarative changes](#declarative-changes)
  - [Synthetic events](#synthetic-events)
  - [Refs](#refs)

The virtual DOM is a data structure stored by React that tracks changes from one render state to the next. If a change is detected (through the `setState()`method), the actual browser DOM is updated. This process is called RECONCILIATION.

## Declarative changes
You declare the changes you want to see through `setState()` and don't have to worry about the actual changes that happen in the DOM. That reconcilation process is entirely handled by React.

## Synthetic events
All browsers events are supported as React offers a unified API accross all browsers.

## Refs
Refs are direct references to DOM elements. This goes against the React setup whereby all elements are updated indirectly through the `setState()` and the reconciliation process via the Virtual Dom. Most of the time, there will be better solution available. Some use cases: manage focus state, text selection, media playback or integration with third party libraries (D3). 