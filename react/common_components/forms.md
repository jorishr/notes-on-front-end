# Forms in React
Table of contents
- [Forms in React](#forms-in-react)
  - [Form submit](#form-submit)
  - [Textarea](#textarea)
  - [Select](#select)

In HTML form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components and only updated through the `setState()` method. It is advisable to make the React state be the single source of truth. Thus, the React component that renders a form should also control what happens in that form on subsequent user input. This is called a controlled component.

With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input.

## Form submit
When the input element is part as a form there should NOT be a `onClick={handler}` on the submit button. Instead use the `onSubmit={handler}` on the FORM element.


## Textarea
In React a textarea behaves as an input element with a value attribute. Not the text you may write between the opening and closing tags. Thus:
`<textarea value={...}/>`

## Select
One of the option elements inside the select tags can have a SELECTED attribute. In React, however, there is a value attribute controlled by the STATE on the SELECT tag.
```js
<form onSubmit={this.handleSubmit}>
  <label>
    Pick your favorite flavor:
    <select value={this.state.value} onChange={this.handleChange}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </label>
  <input type="submit" value="Submit" />
</form>
```