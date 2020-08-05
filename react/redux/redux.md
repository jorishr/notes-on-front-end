# Redux
## About
Redux is a state management library. It can be used without React. Redux models the application state as a single Javascript object. Thus there is just one object that holds the entire state data of the application (or the data you put into it).

## Setup
```
npm install --save redux
```
## Actions, reducer and store
Assuming you have a Redux store set up, an action needs to be dispatched to update the state via the function defined in the reducer. The reducer takes the old state and the dispatched action and handles the state updates that are defined. The new state is returned. By defining state change listeners on the store, any store change (new state), can be set to trigger UI changes.

An ACTION is a plain JS object that represents a (user) action. The object must contain a key called 'type', which is a string value. Other additional keys like 'id' may be added.
```js
{
    type: "LOGOUT_USER"
}
{
    type: "DELETE",
    id: "POST_ID"
}
```
The REDUCER decides what new state to return, given the old state and the current action. Example: the reducer takes in the current state and the action as parameters, if the action type is logout the state object is updated with the login property set to false. If the action cannot be handled by the reducer, the old state is returned.
```js
// Note that the reducer functions are expected to be pure functions and therefore do not directly modify the existing state. You return copies with the spread operator or the use of Object.assign()
function rootReducer(state = {}, action){
    switch (action.type){
        case "LOGOUT_USER" : 
            return {...state, login: false}
        case "LOGIN_USER" : 
            return {...state, login: true}
        default : 
            return state;
    }
}
// in practice the rootReducer will be a combination of various reducer functions that each handle a part of the app functionality
import { combineReducers } from 'redux';
import currentUser from './currentUser';
import messages from './messages';

const rootReducer = combineReducers({
  currentUser,
  messages,
});

export default rootReducer;

const messages = (state = [], action) => {
  switch(action.type) {
    case "LOAD_MESSAGES":
      return [...action.messages];
    case "ADD_MESSAGE":
      return [action.message, ...state];
    default:
      return state;
  }
};

export default messages;
//note that the state can be an array, an object or even a string, any js value is accepted
```
The STORE is the big Javascript object that represents the state of the entire app. To create the store you pass the rootReducer function as a parameter.
To change the state of the app you need to dispatch an action. The reducer will then handle the state change based on the old state and the current action.

To get the current state at any given time, use `store.getState();`.
```js
const store = Redux.createStore(rootReducer);
store.dispatch({
    type: "LOGIN_USER"
})

let currentState = store.getState();
```
The `store.dispatch` function is synchronous. Thus once the action is dispatched the app execution will not continue untill the reducer has handled the changes. That way we can rest assured that the currentState after the dispatch is the updated state. 

This contrast with the `setState()` function in React which is asynchronous.

You can also add a listener to see when the state has been changed by using a callback function and `store.listen`.
```js
const changeCallback = () => {
    console.log('State has been changed', store.getState())
}
store.listen(changeCallback);
const unsubscribe = store.listen(changeCallback);
unsubscribe();
//store.listen returns a function that can be used to unsubscribe or end the listening for state changes
```