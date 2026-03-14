# Async / Await

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

The `async function` declaration creates a binding of a new async function a given name 
- the `await` keyword is permitted within the function body, enabling asynchronous, promise-based behaviour to be written in a cleaner style and avoiding the need to explicitly configure promise chains 

```js
async function name(parameters go here) {
    //statements
}
```

- name:: the functions name 
- param (option):: the name of a formal parameter for the function 
- statements:: the statements comprising the body of the function. The `await` mechanism may be used 

An async function declaration creates an AsyncFunction object
- Every time an async function is called, it returns a new `Promise`
- the promise is resolved with the value returned by the async function, or rejected because of an error thrown during the functions execution.
- async functions always return a `Promise`, however Promises can exist without async functions 

Note:: `await` can only be used inside of `async` functions
- some modern environments (like ES modules in browsers and Node.js 14+) allow top-level await

Async functions can contain zero or more `await` expressions. 
- await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected 
- use of `async` and `await` enables the use of ordinary `try/catch` blocks around asynchronous code 

An async function without `await` will run `synchronously` (each line inside the code block running one after the other without waiting for anything)

However, outside of the function, it is still treated asynchronously as it always returns a promise which needs to be resolved. 



## Other things I learned:

### Promises

In order to get the value of a promise it must first be resolved
- A promise can be in 3 states 
    - Pending:: the operation is still running 
    - Fulfilled (resolved):: the operation finished successfully and produced a value 
    - Rejected:: the operation failed and produced an error 

If you try and read the `Promise` directly, you get the `Promise object`, not the value 

**example**

```js
const value = promise;
console.log(value);
//Output: Promise {<pending>}
```

A promise is like a sealed envelope that will contain a result later
- `.then()` --> opens the envelope when it arrives
- `await` --> wait until the envelope arrives and open it 

**example**

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 1000);
});

//Getting the resolved value with .then()

promise.then(value => {
    console.log(value); //42
});

//Getting the value with await

async function example() {
    const value = await promise;
    console.log(value); //42
}
```

When you create a promise, JavaScript automatically calls your executor function and passes two function into it. 
1. A function to fulfill the promise
2. A function to reject the promise 

You can name them however you'd like, as JavaScript assigns them based on position, not name. 

If you create the promise yourself, you must handle the way it's resolved / rejected. However, in the case of predefined methods such as `fetch()` that create a promise, the logic is handled internally by the browser. 



## Questions I have: (March 14, 2026)

1. Aside from the syntax (the way it's written), I'm still not sure what the difference between `then()` and `await` is. 
    - when would you want to use one vs the other? 

## Resources

- [**Mozilla Docs: Async Function**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)


## Link to Example JS File

- N/A


