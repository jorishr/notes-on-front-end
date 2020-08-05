# React router
- [React router](#react-router)
  - [About](#about)
  - [Browser History API](#browser-history-api)
  - [BrowserRouter](#browserrouter)
  - [Switch and Route](#switch-and-route)
  - [Link](#link)

## About
The react router allows us to conditionally show different components based on the url. Thereby we can keep the 'feel' or appearance of a SPA while adding complex app functionaliy with many pages and routes. This is made possible by taking advantage of the capabilities offered by the browser history api.

## Browser History API
HTML5 introduced the history object that allows Javascript to access and manipulate the browser history. Some of the method are `history.back()` and `history.forward()` that works just as the back and forward buttons in the browser.

We can also manipulate the url address bar and change the local navigation history WITHOUT making GET requests and thus without refreshing the page.
```js
history.pushState({}, 'title', '/newpage');

window.location //-> 'newpage'
```
In a SPA we want to have the back button work, have internal links, etc., and this is done by the router-package that manipulates the history API for us. This is necessary because React renders the 'new page' entirely on the client side. Instead of receiving a server-side rendered page at '/newpage', the '/newpage' route render different components that are already present in the React code on the client side.

## BrowserRouter
The Router is imported from the package and wraps over the App but sits inside the Redux Provider.
`npm install --save react-router-dom`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
```

## Switch and Route
Conditionally render stateless functional components: either show homepage or about page. Based on the route, either the homepage or the about is rendered. The switch component is optional and makes the route if/else whereby only one route can be rendered.
```js
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

const Homepage = () => (<div>HOMEPAGE</div>);
const About = () => (<div>ABOUT</div>);

const SwitchDemo = () => (
  <Switch>
    <Route path="/about" component={About}/>
    <Route path="/" component={Homepage}/>
  </Switch>
);
```
## Link
The link component is basically an anchor tag. But instead of default link behavior React Router takes over and changes the history url. Below we have a page with two anchor tags. If 'home' is clicked the URL is changed to '/' and the corresponding component inside the SwitchDemo component is rendered.
```js
import React from 'react';
import { Link } from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const App = () => (
  <div>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <div style={{fontSize: '3em',
                 margin: '25px'}}>
        <SwitchDemo/>
    </div>
  </div>
);

//navigation links
import React from 'react';
import { NavLink } from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const s={color: "red"}; //active style
const App = () => (
  <div>
    <NavLink exact activeStyle={s} to="/">
     HOME
    </NavLink>
    <NavLink exact activeStyle={s} to="/about">
      ABOUT
    </NavLink>
    <div style={{fontSize: '3em',margin: '25px'}}>
      <SwitchDemo/>
    </div>
  </div>
);
```