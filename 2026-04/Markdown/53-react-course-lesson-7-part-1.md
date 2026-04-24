# React Course: Lesson 7: Memoization (Part 1)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

(I only got through a small chunk of the React Course content today as I had other responsibilities to focus on. I did, however, want to make sure that I continued building the habit by doing something in the course, even though it was only about 30 minutes.) 

Memoization is a render-optimization technique
- the ability to cache the virtual DOM 
- cache mechanism where your code generates some content, and if the content is going to be the same the next time, then there's no need to run all the code when the component is rendered the second time, third time, etc. 

Memoization is relevant if you have a `pure component`
- i.e a component that should always generate the same virtual DOM for a given set of input properties 

To memoize a component: 
- wrap it in a call to `React.memo()`

You can do it in either of the following ways: 

```js
function SomeComponent() {...}

const MemoizedComponent = React.memo( SomeComponent )
```

OR 

```js
const MemoizedComponent = React.memo(() => {...})
```

The first time a component is rendered 
- react executes the code in your component, to create the virtual DOM for the component 
- React renders the virtual DOM 
- React then caches the virtual DOM (for later reuse)

On Subsequent Renders 
- React doesn't execute the code in your component 
- Instead, React just renders the cached virtual DOM



## Other things I learned:

- N / A


## Questions I have: (April 21, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A