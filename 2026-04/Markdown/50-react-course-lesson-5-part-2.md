# React Course: Lesson 5: Hooks (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

`React.useEffect()`
- enables a component to register side-effect code to be executed after each re-render 

A side effect is any non-UI code that interacts with the outside world 
- starting a timer
- calling a REST API
- subscribing to a WebSocket
- etc.  

```jsx
function SomeComponent() {
    React.useEffect(() => {
        //...Side effect code
    })
}
```

You can register multiple effects for a component 
- Just call `React.useEffect()` several times 
- React invokes effects in the order registered 

Some effects might require cleanup work 
- stopping a timer 
- unsubscribing from a WebSocket 
- etc. 

Return a function (or lambda) from an effect 

```js
function SomeComponent() {
    React.useEffect(() => {
        //...Side effect code

        return () => {
            //...Cleanup code
        }
    })
}
```

Cleanup behavior is invoked prior to the next render operation 
- to 'undo' what was done by the effect itself 
- the cleanup behaviour is also invoked just before the component is unmounted 
    - i.e when the user navigates to a different component 


```jsx
React.useEffect(() => {
    let t1 = performance.now()
    console.log('Gallery Effect 2')

    return() => {
        let t2 = performance.now()
        console.log(`Gallery effect 2 cleanup, time interval ${(t2 - t1).toFixed(2)}ms.`)
    }
})
```

Defining effects with dependencies 
- `React.useEffect()` takes on an optional 2nd argument 
    - An array of dependencies (state variables)
    - Effect will only be invoked if a dependency has changed 

```jsx
function SomeComponent() {
    React.useEffect(() => {
        //...side effect code

        return() => {
            //...cleanup code
        }
    }, [dependency1, dependency2, ...])
}
```


### Lab 5
- Enhance the `library` web page from the previous lab. You'll add stateful behavior to the web application so that users can 'like' the web page (You'll hold the number of likes in a mutable state). You'll also add an effect to perform some work after each render. 

**Steps to Complete** 
1. Add 'useState' for like count
    - display like count 
    - button to reset like count 
2. page should display data in either tables or lists depending on a boolean value 
3. All of the main UI info to be rendered should be put into a Library component which will then be used within `<App />`
    - `<Library books={books} films={films} tabularFormat={true}>`


## Other things I learned:

- N / A


## Questions I have: (April 20, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/blob/master/ReactDev/Student/05-Hooks/index.html)

## Link to Example JS File

- [**React Course: Lab 5: HTML**](../Code/50-react-course-lab-5/index.html)
- [**React Course: Lab 5: CSS**](../Code/50-react-course-lab-5/main.css)