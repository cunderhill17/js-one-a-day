# React Course: Lesson 6: Calling REST Services (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

It's common for a React application to call a REST Service only once, to load data initially 
- You can achieve this via a React effect that is invoked only once, after the first render 

General Idea: 

```jsx
function SomeComponent() {
    React.useEffect(() => {
        async function fetchData() {
            //code to fetch data
        }

        fetchData()
    }, []);

    return (
        //UI based on the data
    )
}
```

Whenever you call a REST Service, there is the possibility of it failing, so it's a good idea to use a try/catch block 

A `try/catch` block is a statement used to handle runtime errors (exceptions) without crashing the entire program
- it allows you to 'try' a block of code and 'catch' any errors that occur to handle them gracefully 

A try/catch block only catches `thrown errors`, such as:
- Network failures 
- CORS issues (in some cases)
- Exceptions in your code 

`fetch()` does NOT throw on `HTTP Errors` like 404 or 500
- however, you can use an if statement to manually throw an error in these cases 
    - 200-299 --> response.ok === true 
    - 400-599 --> response.ok === false 

```js
if(!response.ok) {
    throw Error(response.statusText);
}
```

### Lab 6
- Modify the 'library' web page from the previous lab so that it gets its data from a REST Service rather than using hard coded data defined in the React application itself 

**Steps**
- run the server and get the URL address for the REST service (code provided by React Course instructor on GitHub)
- use `useEffect` to request data from the REST Service using `fetch()`, should only run once 
- convert the raw data into instances of class objects 
- store the information in state

**Problems That Occured**
- I was using syntax that was meant for JSX inside a normal JS expression when providing the URL 

I did this at first: 

```js
window.fetch({dataUrl}/films)
```

When I should have done this: 

```js
window.fetch(`${dataUrl}/films`)
```

- I initially thought that classes were no longer necessary so I had deleted them from the start code, however, part way through the instructions, I noticed that they were still required. This taught me to always read through the instructions (or watch in this case) before starting the steps so I'm not completing steps with only half the information. 
- I also forgot to add the conditional to check for HTTP errors which I only noticed when watching the runthrough of the instructors final solution 



## Other things I learned:

- N / A


## Questions I have: (April 22, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/blob/master/ReactDev/Student/06-CallingRestServices/index.html)

## Link to Example JS File

- [**React Course: Lab 5: HTML**](../Code/52-react-course-lab-6/index.html)
- [**React Course: Lab 5: CSS**](../Code/52-react-course-lab-6/main.css)