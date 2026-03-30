# Debouncing

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Debouncing in JavaScript is a technique used to limit how often a function runs, especially when it's triggered repeatedly in a short period of time (like typing, scrolling, or resizing)
- delays execution until a pause in activity

How it works: A `debounce` function: 
1. starts a timer when called
2. If called again before the timer finishes, then the timer is reset
3. Only executes the function after the delay passes without interuption 

```js
function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
```

**Explanation**

1. declares a function named `debounce`
2. It takes two parameters: 
    - `fn` --> the function you want to delay/control 
    - `delay` --> time in milliseconds to wait before calling `fn`
3. declares a variable to store the ID of a time 
    - the variable persists across calls to the returned function (closure)
4. `return function(...args) {`
    - returns a new function (debounced version)
    - ...args collects all the arguments passed into it, into an array
5. clearTimeout(timeoutId);
    - cancels any previously scheduled timer
    - if no timer exists, this does nothing 
    - this ensures earlier schedule calls to `fn` won't run 
6. `timeoutId = setTimeout(() => {`
    - starts a new timer
    - stores its ID in `timeoutId` so it can be cancelled later
    - the callback inside `setTimeout` will run after `delay` ms
7. `fn.apply(this, args);`
    - calls the original function, `fn`
    - apply does two things: 
        - passes the correct `this` context from the returned function
        - passes the collected arguments (args) to `fn`
8. `}, delay);`
    - specifies how long to wait before executing the callback 


### Examples using the above debounce function

**Example: Search Input**

```js
function search(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 300);

document.querySelector('#search').addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});
```
- user types quickly, function keeps resetting
- function only runs after 300 ms of no typing 

**Example: Window Resize**

```js
function handleResize() {
    console.log("Resized:", window.innerWidth);
}

window.addEventListener('resize', debounce(handleResize, 200));
```

- without debounce --> fires dozens of times per second
- with debounce --> fires only after resizing stops 

**Example: Button Spam Protection**

```js
function handleClick() {
    console.log("Button Clicked");
}

const safeClick = debounce(handleClick, 1000);
button.addEventListener("click", safeClick);
```

- Prevents rapid repeated clicks from triggering multiple actions



## Other things I learned:

- N / A


## Questions I have: (March 30, 2026)

N / A 


## Resources

- [**Mozilla Docs: Debouncing**](https://developer.mozilla.org/en-US/docs/Glossary/Debounce)
    - Mozilla included a link to CSS tricks which includes more information to read through 
    - [**CSS Tricks: Debouncing & Throttling**](https://css-tricks.com/debouncing-throttling-explained-examples/)
- I didn't see the CSS tricks link when I first looked at Mozilla's entry, so I had ChatGPT provide me with a couple examples for my notes


## Link to Example JS File

- N / A