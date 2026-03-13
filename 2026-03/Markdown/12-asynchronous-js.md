# Asynchronous JavaScript 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs. 

**Consider The Following**

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}`;
console.log(greeting);
```

1. Declares a string called `name`
2. Declares another string called `greeting` that uses `name`
3. Outputs the greeting to the console

For this code, the browser waits for the line to finish its work before going onto the next line. Lines execute one after another, waiting for the previous line to finish. 
- that makes this a synchronous program 

A thread is a sequence of instructions that a program follows, when a program consists of a single thread, it can only do one thing at a time, so if it's waiting for a long-running synchronous call to return, it can't do anything else. 

Asynchronous Programming 
- some work is 'scheduled' to run later
- the program continues executing while it waits 

Event handlers are a type of asynchronous programming 
- they run in response to future events 
- The Program: 
    - registers the handler
    - continues executing other code
    - calls the `event` later when it occurs

Event driven asynchronous programming allows programs to: 
- stay responsive (especially in GUIs) 
- handle many events concurrently 
- avoid blocking the main thread 

**Callbacks**
- an event handler is a particular type of callback 
- a callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time 

**Example**

```js
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye");
}

greet("Alice", sayGoodbye);
```

1. `sayGoodbye` is passed into `greet`
2. `greet` decides when to run it
3. so `sayGoodbye` is the callback 

When a function is passed to an 'event handler', the function is the callback 

Before modern features like `Promises` and `async/await`, JavaScript handled async work mainly with callbacks

However, when many async steps were needed this created deeply nested functions which were a problem when it came to debugging. 

**Example**

```js
getUser(function (user){
    getPosts(user, function(posts){
        getComments(posts, function(comments){
            console.log(comments);
        });
    });
});
```

In modern asynchronous programming, `Promises` are used. 

The `Promise` object represents the eventual completion or failure of an asynchronous operation and its resulting value. 
- at the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation 
- You can attach handlers to the promise object and these handlers will be executed when the operation has succeeded or failed. 


**Example**

```js
const fetchPromise = fetch(URL);
console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`Received Response: ${response.status}`);
});

console.log("Started Request...");
```

**Explanation**

1. The fetch() API is being called and assigning the return value to the `fetchPromise` variable
2. Immediately after, the `fetchPromise` variable is logged in the console. 
3. The output should show a value of `Promise { <pending> }` meaning that the fetch operation is still going on 
4. The `then()` method (associated with JavaScript Promises) is used to register a function that will run after the asynchronous operation finishes successfully (if it finishes successfully)
    - A `Response` object is passed in, which contains the servers response 
5. The final line logs a message to the console that the request has been started

Note:: The `Response` object contains the response metadata and a stream for the body, not the final parsed data itself. In order to view the actual data, you can use a method such as `response.json()` to parse the data. However, this also returns a `Promise` as reading the data takes time. 


**Example**

```js
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

Note:: the first `then()` method receives the `Response` object and the second `then()` receives the parsed JSON, however, they don't need to be named 'response' and 'data', as those are just variable names.  


## Other things I learned:

N / A


## Questions I have: (March 13, 2026)

1. I'm wondering if there's a specific way to structure asynchronous functions if the results of one function need to be used in multiple other functions, without having to use nested functions. (Like is there a 'best practice' way to structure your JavaScript file(s) so that all functions flow in a structured and organized manner)

## Resources

- [**Mozilla Docs: Asynchronous JavaScript**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing)
- [**Mozilla Docs: Using Promises**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises)


## Link to Example JS File

- N/A


