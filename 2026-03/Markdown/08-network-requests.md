# Network Requests

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

A `network request` is a communication process where a client (eg. browser or app) asks a server for information, data, or actions via protocols like HTTP/HTTPS. These requests, which include methods like GET, POST, PUT, or DELETE, allow websites to fetch content, submit forms, or update data without reloading the entire page. 

Many sites use JavaScript API's to request data from the server and update the page content without a page load
- the main modern API is the fetch API (though it's not the only one)
    - this enables JavaScript running in a page to make an HTTP request to a server to retrieve specific resources. 
    - Resources could include: JSON data, images, HTML, files, APIs
- When the server provides the resources, JavaScript can use the data to update the page, typically by using DOM manipulation APIs

With this model: 
- page updates are quicker, and you don't have to wait for the page to refresh
- less data is downloaded on each update, meaning less wasted bandwidth 

To speed things up even further, some sites also store assets and data on the users computer when first requested (caching), meaning that on subsequent visits they use the local versions instead of downloading fresh copies every time the page is loaded. 

The entry point to the fetch API is a global function called fetch(), that takes a URL as a parameter
- `fetch()` is an `asynchronous` API which returns a `promise`
    - because fetch() returns a promise, we pass a function into the `then()` method of the returned promise
    - the method is called when the HTTP request has received a response form the server
- calling `json()` on the response will returns a Promise that resolves to a JS object.

**Example**

```js
fetch(URL)
    .then((response) => {
        if(!response.ok) {
            throw new Error(`HTTP error : ${response.status}`);
        }
        return response.json();
    })
    .then((json) => initialize(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
```



## Other things I learned:

- This felt more like a basic overview. I learned just enough to know what I don't know and what I need to study next. 


## Questions I have: (March 9, 2026)

- I don't feel like I have a good enough grasp of the material to accurately phrase my questions about what I don't understand. I'm going to wait a few more days as I do more research before I try and articulate which parts I need more clarity on. 


## Resources

- [**Mozilla Docs**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)


## Link to Example JS File

- N/A


