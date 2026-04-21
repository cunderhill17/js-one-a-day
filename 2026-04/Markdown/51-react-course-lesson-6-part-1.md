# React Course: Lesson 6: Calling REST Services (Part 1)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

A `REST Service` (Representational State Transfer) is a way for systems to communicate over the web using simple, standard HTTP methods

A REST Service exposes resources (things like users, orders, photos, etc) through URLs, and you interact with them using standard web actions like: 
- `GET` --> retrieve data 
- `POST` --> create new data 
- `PUT/PATCH` --> update existing data
- `DELETE` --> remove data 

Key Characteristics
- Stateless 
    - each request is independent. The server doesn't 'remember' previous requests 
- Uses standard HTTP
    - REST relies on the same protocol your browser uses, making it widely compatible 
- Resource-based 
    - everything is treated as a 'resource' identified by a URL 
- Usually returns JSON 
    - most modern REST API's return JSON because it's lightweight and easy to use 

Endpoints (URL) represent resources

REST Services return a HTTP response code to indicate the outcome 
- HTTP Response Code 
    - 200 --> OK
    - 201 --> Resource created successfully 
    - 204 --> No content returned 
    - 400 --> Bad Request (request malformed)
    - 404 --> Resource not found
    - 405 --> HTTP method not allowed
    - 500 --> Server error 

In a React Application 
- the UI is implemented as React elements
- the data is typically provided by REST Services 

When you call a REST Service from a client, it might take a while for the REST service to return 
- You shouldn't call a REST Service from the main thread
- It needs to be an asynchronous call 
    - via the standard JS function `fetch()`
    - `fetch()` calls a REST service on another thread 

`fetch()` returns a `Promise` Object immediately
- initially the Promise Object is empty
- When the REST Service has finished, the `Promise` object will hold the HTTP response from the web service 

One way to access the result in a Promise Object 

```js
function someFunction() {
    const promise = window.fetch(someURL);

    promise.then(response => {
        //code that's invoked when REST Service has finished 
        //the response variable will hold the HTTP response message
    })
}
```

Here's an alternate (cleaner) approach: 

```js
async function someFunction() {
    const response = await window.fetch(someURL);
}
```
- `window.fetch(URL)` returns a Promise Object 
- `await` --> don't go any further until the promise has been resolved 
    - can only be used in an `async` function & is only used with Promises 



## Other things I learned:

- N / A


## Questions I have: (April 21, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A