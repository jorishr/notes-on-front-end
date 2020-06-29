# Lists
Example: map over an array of data and for each value in the array generate a list item. The method is stored in a variable and passed into the parent component which is the `<ul>`.
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
## List item keys
A list item key is a special string attribute you need to include when creating a lists of elements. Keys help React identify which items have changed, are added, or are removed. Each component requires a stable identity. Keys used within arrays should be unique among their siblings. However they don't need to be globally unique. A good rule of thumb is that elements inside the map() call need keys. When you don't have stable IDs for rendered items, you may use the item index in the array.
```js
const listItems = numbers.map((number) =>
    <li key={uuid()}>{number}</li>
);
//or
const listItems = numbers.map((number) =>
    <li key={index}>{number}</li>
);