# Fetch API 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

The `Fetch API` provides an interface for fetching resources (including across the network). It's a more powerful and flexible replacement for XMLHttpRequest. 
- uses `Request` and `Response` objects (among other things involved with network requests) as well as related concepts such as CORS and the HTTP origin header semantics

For making a request and fetching a resource use the `fetch()` method. It is a global method available in both `Window` and `WorkerGlobalScope` 

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a `Promise` that resolves to the `Response` to that request, as soon as the server responds with headers - even if the server response is an HTTP error status. 

**Example**

```js
async function getData() {
    const url = "http://example.org/products.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch(error) {
        console.error(error.message);
    }
}
```

**Explanation**

1. declared a string containing the URL and then called fetch(), passing the URL with no extra options
2. The response status is checked as the fetch() method only rejects the Promise on network-level errors. It doesn't reject for HTTP errors like 404
3. If an error isn't thrown, we fetch the response body content as `JSON` by calling the `json()` method of the `Response`

Note: 
- like fetch(), json() is asynchronous, as are all the other methods to access the response body content


### Making A Request

To make a request, call fetch(), passing in: 

1. A definition of the resource to fetch. This can be any one of: 
    - a string containing the URL
    - an object, such as an instance of `URL` which has a `stringifier` that produces a string containing the URL
    - a Request instance 
2. Optionally, an object containing options to configure the request

By default, fetch() makes a GET request but you can use the `method` option to use a different request method. 

**Example**

```js
const response = await fetch("https://example.org/post", {
    method: "POST",
    //...
});
```

If the `mode` option is set to 'no-cors', then method must be one of `GET`, `POST`, or `HEAD`. 

Request Body
- when a client sends a request to a server, it can include some data along with that request
- the request body is the actual data being sent 

**Analogy: Sending A Package**
- Address on the box --> where the request goes (URL)
- Instructions on the label --> request method (GET, POST, etc)
- Items inside the box --> request body

You cannot include a body with `GET` requests, but it is useful for requests that sent content to the server such as `POST` or `PUT` request. 


## Other things I learned:

CORS
- cross-origin resource sharing
- The Same-Origin Policy blocks reading responses from other origins.
- CORS is the mechanism that allows servers to opt-in to cross-origin access.

HTTP `origin` Header
- is a request header that indicates the scheme, hostname, and port of the resource that initiated the request. It is a key component of web security, primarily used in the context of the `same-origin policy` and `cross-origin resource sharing (CORS)`.

Window
- The window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window 

Workers
- workers usually refers to web workers, a browser feature that lets you run JavaScript in a separate background thread. 
- this prevents heavy computations from blocking the main thread, which is responsible for rendering the UI and handling user interactions
- doesn't have access to the DOM

## Questions I have: (March 12, 2026)

1. What exactly is a header? 
2. How exactly does CORS work? 
3. Not sure I understand `workers`


## Resources

- [**Mozilla Docs: Fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [**Mozilla Docs: Using the Fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)


## Link to Example JS File

- N/A


