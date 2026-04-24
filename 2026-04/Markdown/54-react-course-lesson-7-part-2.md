# React Course: Lesson 7: Memoization (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

Memoization of components that receive properties

The first time a component is rendered: 
- React renders the components as usual 
- React caches the virtual DOM (for later reuse)
- React also remembers the properties that were passed in 

On the next render, React comparies the properties
- if all the properties are the same as the previous render, Reach uses the cached content 
- if any property is different, React does a full re-render

Note:: `React.memo()` doesn't keep a cache of multiple 'versions' of a component for different props 
- it only `memoizes` the most recent render for a given component instance 

React does a `shallow comparison` of the components current properties vs. previous properties 
- if all the properties are equal, React uses the cached virtual DOM

A shallow comparison means checking wether the two values are equal by comparing their top level references or primitive values only, without looking inside nested structures 
- For Primitives (number, string, boolean) : compare by value 
- For objects, arrays, functions : compare by reference 
    - i.e are they the same object in memory 

{a: 1} === {a: 1} --> False 
- even though they look the same, they're different objects in memory --> shallow comparison fails 

```js
const obj = {a: 1}
obj === obj //True
```
- same reference --> shallow comparison passes 

You can pass a comparison function into `React.memo()`
- the function receives the previous and next properties
- if the function returns true, cached content will be true

```js
function someCompFunc(prevProps, nextProps) {
    //...code to return true or false
}

const MemoizedComponent = React.memo(SomeComponent, someCompFunc)
```

Reasons for defining a custom comparison function 
- to compare only a subset of the properties 
- to do deep property comparisons (eg. nested objects)
- to use some global state in the comparisons 

Note:: It's not a good idea to depend on global variables. It makes your component `too coupled`

`Too Coupled`
- too dependent on specific details of other parts of the system, instead of being independent and reusable 

Why coupling is a problem? 
- harder to reuse components elsewhere 
- small changes cause unexpected breakage 
- makes refractoring painful 
- increases mental overhead ('What does this depend on?')



## Other things I learned:

- N / A


## Questions I have: (April 24, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A