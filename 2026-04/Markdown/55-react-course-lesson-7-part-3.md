# React Course: Lesson 7: Memoization (Part 3)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

The notes for this section are alot shorter as most of this session was spent on the lab for lesson 7. 

Memoizing a particular piece of content 

```js
const cachedContent = React.memo(someContent, [dependencies])
```
- if any dependency changes, React will regenerate the content from scratch 

```js
const initialRender = React.memo(
    () => <div>Initial Render: {new Date().toString()}</div>, []
)
```

Note:: the dependency array is empty, so there's nothing that can change. This means there's nothing to inhibit caching 

Lab 7: 
- Modify the 'library' web page from the previous lab. Add some chunks of content that can be memoized by React, to avoid having to regenerate the same content each time components are rendered 

Steps: 
1. Update headings to include count
2. Add a footer that shows the 'date' the page was generated 
3. Memoize the 'individual content' (headings) 
4. Memoize the full component (footer)


## Other things I learned:

- N / A


## Questions I have: (April 25, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/blob/master/ReactDev/Student/07-Memoization/index.html)

## Link to Example JS File

- [**React Course: Lab 5: HTML**](../Code/55-react-course-lab-7/index.html)
- [**React Course: Lab 5: CSS**](../Code/55-react-course-lab-7/main.css)