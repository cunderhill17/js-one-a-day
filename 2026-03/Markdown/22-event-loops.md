# Event Loop

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

The `event loop` is the mechanism that lets JavaScript handle asynchronous operations even though the language is single-threaded
- JavaScript runs in a single callstack but it uses the event loop to manage: 
    - Synchronous Code --> runs immediately 
    - Asynchronous Code --> deferred and handled later 


**The Main Components:** 
1. `Callstack`
    - the callstack is a list of functions currently being executed
2. `Web APIs / Node APIs`
    - Web and Node APIs are things the JavaScript engine hands off to the environment to deal with 
3. `Callback Queue` (Macrotask Queue)
    - Callback Queue is a queue of callbacks waiting to run after everything else is done 
4. `Microtask Queue`
    - A microtask queue holds tasks that must run immediately after the current synchronous code finishes, before any macrotasks
5. `Event loop` 
    - The event loop is the rule / system that decides what should run next: 
        - Wait until the callstack is empty
        - run all microtasks
        - run one callback (callback queue)
        - repeat forever 

**Example**

```js
console.log('start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

**Explanation**

1. run synchronous code 
    - 'start'
    - 'end'

2. What got scheduled? 
    - setTimeout -> callback queue
    - Promise.then -> microtask queue

3. Event loop kicks in
    - stack is empty -> check microtasks first 
        - runs --> 'Promise' 

4. Then callback queue
    - runs -> 'Timeout'


The callstack operates on a `last in, first out (LIFO)` basis. 
- everytime a function is called, it gets pushed onto the stack 
- when a function finishes executing, it is popped off the stack 
- only the function on the top of the stack is currently executing 

Error Handling:: if a function calls itself recursively without a base case, the stack can overflow (too many items pushed)
- a recursive function, is a function that calls itself 

```js
function countdown(n) {
    console.log(n);
    if (n>0) {
        countdown(n-1);
    }
}

countdown(3);
```

Note:: each call is pushed onto the stack until the base case is reached 

The base case is the condition that stops recursion (eg. n > 0). Without it, the function keeps calling itself endlessly. 
- similar to how you have a condition to stop a for loop, however, recursion is stack sensitive while loops are stack safe
    - recursion has a memory cost for each call 



## Other things I learned:

### setTimeout()
`setTimeout` doesn't guarentee it runs exactly after that time. It guarentees that it won't run before that time. 

**Example**

```js
setTimeout(() => {
    console.log('Hi');
}, 1000);
```

- wait at least 1000 ms, then put this callback in line to run when JavaScript is free

### Web APIs
A web API is a set of rules and end points that let one application interact with another using HTTP (the same protocol the browser uses)

It usually: 
- receives a request
- processes it
- sends back a response (often in JSON format)

They're not part of core JavaScript. Web API's are extra helpers built into the browser environment. They often work asynchronously. 

**Commonly Used Web APIs**
(I don't know all of these, I asked ChatGPT to give me a list in order to have a list to study from in the future)

1. Timers
- setTimeout()
- setInterval()
- clearTimeout() / clearInterval()

2. Networking
- fetch()
- XMLHttpRequest
- Websocket

3. DOM & Event APIs
- document.querySelector 
- addEventListener()
- removeEventListener()
- Event / CustomEvent 

4. Storage & Data APIs
- local storage / session storage 
- IndexedDB
- Cookies

5. UI & Interaction APIs
- alert(), prompt(), confirm()
- window.scrollTo(), window.scrollBy()
- Canvas API 
- Web Animations API

6. Multimedia API's
- Audio / Video elements
- MediaDevices.getUserMedia()
- Web Audio API

7. Geolocation and Device APIs
- navigator.geolocation
- DeviceOrientationEvent / DeviceMotionEvent
- Battery Status API 

8. Miscellaneous
- History API 
- Clipboard API
- Notification API
- Fetch and streams API
- Promise / Async Functions

## Questions I have: (March 23, 2026)

- N / A


## Resources

- N / A


## Link to Example JS File

- N / A