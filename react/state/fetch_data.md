# Fetching data in function components
`useState` is a hook used to maintain local states in function components. `useEffect` is used to execute functions after a component gets rendered to “perform side effects”. `useEffect` can be limited to cases where a selected set of values change. These values are referred to as "dependencies". `useEffects` does the job of `componentDidMount`, `componentDidUpdate`, `componentWillUpdate` combined.

The `useEffect` will make a network request on component render. When that fetch resolves, it will set the response from the server to the local state using the `setState` function. This, in turn, will cause the component to render so as to update the DOM with the data.
```js
function App() {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch("/api/data").then(
            res => setState(res.data)
        )
    }, [])
    return (
        <>
            {state.map( d => <div>{d}</div>)}        
        </>
    )
}
```
The dependencies are set as an array. The array will contain variables to check against if they have changed since the last render. If any of them change, `useEffect` will run, if not `useEffect` will not run. An empty array means that `useEffect` will run just once, on first component render (mount).

## Fetching data from a query
Fetch new data only when the input query changes from a search bar. Fetch based on query string.
```js
function App (){
    const [state, setState] = useState([]);
    const [query, setQuery] = useState('');
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        //fetch(`/api/data?${query}`).then(res => setState(res.data)).catch(err => setHasError(true))
        try {
            setLoading(true);
            const res = await fetch(`/api/data?${query}`);
            setLoading(false);
            setState(res.data);
        } catch(err) {
            setHasError(true);
            setLoading(false);
        }
    }, [query])

    function handleQuery(event){
        event.preventDefault();
        setQuery(event.target.value);
    }
    return (
        <>
            {loading ? <div>Loading...</div>
                : hasError ? <div>Oops! An error occured.</div>
                    : state.map(el, i => <div key={i}>{el}</div>) 
            }
            <input type="text" onEnter={handleQuery}>
        <>
    )
}
```

## Error handling
The error handling has two parts:
- Add a key-value pair to the state object that indicates the presence of an error. You can also add the error itself to the state object. Or better, use a seperate state variable for this purpose.
- Conditionally render the error in jsx
## Loading icon
Loading is similar to error handling. Use another state variable to track whether loading is in progress. Loading should be set to start when the fetch method is iniatated. It should be ended once we have received meaningful data.

Next, add another conditionally rendering step to the jsx.

## UseFetch custom hook module
The above code can be abstracted into a module that fetches data from an API endpoint and returns an array of state values that can be used for conditional rendering.

There is a state for tracking the response from the fetch method, a state for error handling and a state for tracking the loading in progress.

The `useEffect` has a dependency which is the URL. This means that the fetch request will only be executed when the url changes, in case of a search query only the query string, part of the url, will have changed
```js
function useFetch(url, options){
    const [response, setResponse] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        try {
            setLoading(true);
            const res = await fetch(url, options);
            setLoading(false);
            setResponse(res);
        } catch (err){
            setHasError(true);
            setLoading(false);
        }
    }, [url])
    return [response, loading, hasError];
}
```
To use this custom hook module in a component that now looks much more simple:
```js
import useFetch from './useFetch';
const App = () => {
    const [query, setQuery] = useState();
    const [loading, hasError, response] = useFetch(`api/data?${query}`);
    //const options: {};
    //const [loading, hasError, response] = useFetch(`api/data?${query}`, options);
    function handleQuery(event){
        event.preventDefault();
        setQuery(event.target.value);
    }
    return (
        <>
            {loading ? <div>Loading...</div>
                : hasError ? <div>Oops! An error occured.</div>
                    : state.map(el, i => <div key={i}>{el}</div>) 
            }
            <input type="text" onEnter={handleQuery}>
        <>
    )
}
```