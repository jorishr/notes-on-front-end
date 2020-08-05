# React Redux
- [React Redux](#react-redux)
  - [React app setup with react-redux provider](#react-app-setup-with-react-redux-provider)
  - [Component setup with connect](#component-setup-with-connect)
  - [Folder structure](#folder-structure)

React-Redux is a library that facilitates the integration of Redux with React by exposing a Provider component and a connect function. It also handles setting up listeners and passing state to components.

`npm install --save react-redux`

## React app setup with react-redux provider
Import the provider from the library. The rootReducer is also stored in a seperate module. The store is than passed as a prop to the provider component that wraps around the main App component.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = Redux.createStore(rootReducer);

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Component setup with connect
The example: assume there is key 'name' inside the app state stored in the Redux store. The component is simply a bold display of that name. To pass that key into the component as a prop you need to map the state to a prop. You only return the piece of state that is relevant to the actual component. The state object will have hundreds of keys, but here we only need name. 

The last step is connect the redux-react state to the component. The connect function takes in the mapStateToProps as an argument and returns a function. To that function we pass in the BoldName component. 
```js
import React from 'react';
import { connect } from 'react-redux';

const BoldName = ({name}) => (
  <strong>{name}</strong>
);

const mapStateToProps = state => (
  { name: state.name }
);

export default 
  connect(mapStateToProps, null)(BoldName);
```
Instead of passing on part of the state from the redux store to a component we can also share a dispatched action and map it to the props of the component. For example, a delete action. The connect function connects the redux store the component and the mapDispatchToProps functions takes in the component props and the dispatch actions defined in the redux store whereby you return an object that contains the dispatched actions relevant for the current component, as a prop. Since we are dealing with an action, it is a function value that is then used in the onClick event handler of the component.
```js
import React from 'react';
import { connect } from 'react-redux';

const DelName = ({delName}) => (
  <button type="button"
    onClick={delName}>DELETE</button>
);

const mapDispatchToProps = (
  dispatch, ownProps
) => (
  { 
    delName: () => (dispatch({
      type: "DEL_NAME" 
    }))
   }
);

export default 
  connect(null, mapDispatchToProps)(DelName);
```
## Folder structure
The folder structure could look likes this:
```
| src
    | actions
    | components (presentational components, no state, 'dum')
    | container (container components, stateful component that deals with app data using higher order components with connect() or withRouter()
    | reducers
```