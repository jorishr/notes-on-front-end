# Route props
- [Route props](#route-props)
  - [URL paramaters](#url-paramaters)
  - [withRouter](#withrouter)
  - [Route component render vs component](#route-component-render-vs-component)

All components that are rendered by a route component, thus inside a route ``<Route path="/" component={comp}/>` gets three props: 
- match contains the info about how the url matches the route component (url params)
- location, where we are now, similar to `window.location`
- history, similar to the history object which allows us to explicitely change the url
## URL paramaters
```js
//the match.params contains the info about how the url matches the route component
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Homepage = () => (<div>HOMEPAGE</div>);
const Name = ({match}) => (
  <div>Hello, {match.params.name}</div>
);
const SwitchDemo = () => (
  <Switch>
    <Route path="/:name" component={Name}/>
    <Route path="/" component={Homepage}/>
  </Switch>
);
```
The router props, by default are only available inside components that are rendered by a Route component. As in the example above. To have those route props available in other components that are not explicitely rendered by a route, we can use withRouter.
## withRouter
Simply wrap the component in a withRouter function. The withRouter function returns a new component that takes in the route props as arguments. The example below adds a go home button that changes the url.
```js
import { withRouter, Switch, Route } from 'react-router-dom';

const SwitchDemo = ({history}) => (
  <div>
    <Switch>
      <Route path="/:name" component={Name}/>
      <Route path="/" component={Homepage}/>
    </Switch>
    <button onClick={() => history.push('/')}>
      Go Home
    </button>
  </div>
);
export default withRouter(SwitchDemo);
```
## Route component render vs component
The route component can either have the attribute `render:{props => (<component/>)` or the attribute `component:{componentOne}` to conditionally render a component. When using component syntax you cannot pass on additional props that are not route props.

The render syntax however uses stateless function that does allow you to pass in other props (`teachers:{teachers}`) along side the route props `{...props}` match, location and history.
```js
import {Route} from 'react-router-dom';
const teachers = ['Tim', 'Colt', 'Matt', 'Elie'];

const Teachers = ({teachers}) => (
  <ul>
    {teachers.map((teacher, index) => (
      <li key={index}>{teacher}</li>
     ))}
  </ul>
);

const App = () => (
  <Route path="/teachers" render={props => (
    <Teachers {...props} teachers={teachers} />
  )}/>
);
```