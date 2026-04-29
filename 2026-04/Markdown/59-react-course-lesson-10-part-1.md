# React Course: Lesson 10: User Input Techniques (Part 1) 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

- React apps need to be able to access elements on the web page
    - e.g. to get/set the value of input fields 

There are several ways to do this: 
- Accessing the DOM tree directly 
- Using an uncontrolled component 
- Using a controlled component (will be covered in the next note)

Accessing elements in the DOM tree directly 
- the most basic approach 
- ...but not necessarily the best 

How it works: 
- assign an `ID` to an element 
- access the element programmatically via its `ID`
    - `document.getElementById('elementId')`

Note:: `setProducts([...products, newProduct]);`
- adding an item into an existing array 
- `...` is a spread operator, that allows it to represent all items in the array without writing them out individually 
- 'Append into my collection, the new product object'

Note:: remember to reset inputs so that user has a 'blank canvas' to work with. They don't reset automatically like when a form is submitted as the page isn't refreshed. 

Accessing elements in an uncontrolled component
- React-specific approach 
- usually better than accessing the DOM tree directly 

How it works: 
- store a reference to an element in React memory 
- access the element programmatically via that reference 
- uncontrolled components make use of `useRef()` (hook)
    - standard hook for persisting state in React memory 

`useRef()` is quite similar to `useState()`

When you modify the stored value: 
- useState() triggers a re-render 
- useRef() doesn't trigger a re-render

```tsx
let ref1 = React.useRef<number>(0);
```
- `<number>` --> TypeScript generic type 

The object has a `current` property, which you can use to access it's current value 
- `ref1.current`

Note:: Only access the ref's value in an **event handler** or **effect**. Don't try to access a ref's value during rendering. 

You can use `useRef()` to store a reference to an element in the DOM tree

```tsx
let elemRef = React.useRef<HTMLInputElement>(null);

<input type='text' ref={elemRef} />
```

You can then access the element via the ref's current propery 

```tsx
function onSomeEvent() {
    const domElem = elemRef.current; 
    console.log(domElem!.value);
}
```

Note:: When you put `!` after a value, you're telling TypeScript "I know this isn't null or undefined, trust me"


## Other things I learned:

- N / A


## Questions I have: (April 29, 2026)

- Not a question, but I think I may need to come back to the last few lessons after I learn TypeScript. I'm not sure which parts coming from React and which is coming from TypeScript and I'd like to be able to keep the syntax for each of them separate. 


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A