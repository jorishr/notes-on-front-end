# Conditional component rendering in React
Table of contents
- [Conditional component rendering in React](#conditional-component-rendering-in-react)

Conditional rendering in React works the same way conditions work in regular JavaScript.
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn't change.
```JS    
if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={this.handleLoginClick} />;
  }
```
In the example below you write `{<condition> && <element2render>}`. If the condition is true, the second part of && is evaluated.
```JS
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```
Another method for conditionally rendering elements inline is to use the JavaScript ternary operator:
```JS
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>);}
```