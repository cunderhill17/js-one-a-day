# React Course: Lesson 5: Hooks (Part 1)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

In modern React development, functional components are preferred over class-based components 
- one of the reasons for this is `hooks`

Hooks are special functions defined in the React library 
- only work with functional components 
- like a `callback`
- provide helpful support functionality for your components 
- it's also possible to define your own custom hook functions 

`Hooks` always start with the prefix `use`
- React.useState
- React.useEffect
- React.useMemo
- React.useRef 
- etc. 

`React.useState()`
- manages state for a component 
- a way to remember data between renders (such as when setting up a counter)

`React.useEffect()` (will look at this in detail in part 2)
- registers component side effect code to run 
- always non visual 

The correct way for a component to retain state across multiple renders is via the `React.useState` hook 

`React.useState()` stores a value in React memory 
- React retains the value as long as the component is alive 
- The component can access / modify the value at any time 

(important to note that the value will be reset on page refreshes unless the value is being store in local storage or a db)

```jsx
function SomeComponent() {
    let [myState, setMyState] = React.useState(42) //42 is the value it's being initialized with
}
```

Call React.useState() and pass the initial state value 
- can be any value you'd like 
- initialization only occurs on the first render 
- returns an array which you typically destructure --> [myState, setMyState]
    - [0] --> refers to the value in React memory 
    - [1] --> refers to a function used to modify the value 

Accessing the current state value 

```js
function SomeComponent() {
    let [myState, setMyState] = React.useState(42);
    //...
    let someExpr = `The meaning of life is ${myState}`;
}
```

Modifying the current state value

```jsx
setMyState(myState + 1)
```

Note:: it's important you invoke the setter function
- this updates the state value in React memory 
- It also tells React to re-render the component 

You can initialize `useState` with more complicated date, such as objects 

```jsx
const [myState, setMyState] = React.useState({
    hitCount: 0,
    lastUpdated: new Date()
})
```


## Other things I learned:

- N / A


## Questions I have: (April 19, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A