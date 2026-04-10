# Memoization

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Memoization is a powerful optimization technique in JavaScript that helps you avoid repeating expensive computations by caching results 

It's based on a simple idea: 
- if you call a function with the same inputs, return the previously computed result intead of recalculating it 

**Basic Example: Without Memoization**

```js
function slowSquare(n) {
    console.log("Computing...");
    return n*n;
}

slowSquare(4); //Computing...
slowSquare(4); //Computing... (again - wasteful)
```

Even though the input is the same, the function recomputes everytime 

**Basic Example: With Memoization**

```js
function memoizedSquare() {
    const cache = {};

    return function(n) {
        if(cache[n] !== undefined) {
            console.log("From Cache");
            return cache[n];
        }

        console.log("Computing...");
        const result = n*n;
        cache[n] = result;
        return result;
    };
}

const square = memoizedSquare();

square(4); //Computing...
square(4); //From Cache
```

**How it works**
- A cache object stores previous results 
- before computing, the function checks: have I seen this input before? 
- If yes, return cached result 
- If no, compute, store, and return 

### Generic Memoization Function 

```js
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}
```

**Usage**

```js
function add(a,b) {
    return a + b; 
}

const memoizeAdd = memoize(add);

memoizeAdd(2,3); //computed
memoizeAdd(2,3); //cached
```

### When to use memoization

- function is pure (same input --> same output)
- computation is expensive 
- you expect repeated calls with the same inputs 


### When NOT to use memoization 

- inputs are always different 
- function has side effects 
- memory usage is a concern (cache can grow large)


**1. The function must be pure** 
    - a function is pure if: 
        - same input --> same output (always)
        - No side effects (no API calls, no DOM changes, no mutation outside)

Good Candidate: 

```js
function square(n) {
    return n*n;
}
```

Bad Candidate: 

```js
funtion getCurrentTime() {
    return Date.now();
}
```

- memoizing getCurrentTime() would return the same time stamp forever, which you wouldn't want 

Subtle Gotchas

```js
function getUser(id) {
    return fetch(`/api/user/${id}`);
}
```

- this looks pure (same input) but: 
    - data may change on the server
    - memoizing could give stale results 

Rule of thumb: 
- if the outside world can change the result, be cautious 

**2. The computation must be expensive**
- memoization has overhead
    - storing results 
    - looking up cache
    - serializing arguments (sometimes)
- it only helps if computation is costly enough 

Example: 

```js
function fib(n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
```

- this grows exponentially slow --> perfect for memoization 

But not everything needs it 

```js
function add(a, b) {
    return a + b;
}
```

- memoizing this is actually slower than just computing it

Rule of thumb: 
- if its already O(1) andd fast --> don't memoize 
- (time saved must outweigh cache overhead)


Real World Expensive Cases: 
- heavy calculations (eg. sorting large arrays)
- recursive algorithsm (fibonacci, tree traversal)
- data transformations (filtering, mapping large datasets)
- parsing / formatting (e.g JSON, dates)

**3. You expect reated calls with the same inputs**
- memoization only pays off if you reuse the same inputs multiple times 

Good Scenario 

```js
memoizedFib(40);
memoizedFib(40);
memoizedFib(40);
```

Bad Scenario

```js
memoizedFib(1);
memoizedFib(2);
memoizedFib(3);
memoizedFib(4);
```

Real World Analogy: 
- Think of memoization like a lookup table: 
    - if you keep asking the same question --> great 
    - if every question is new --> waste of memory 


## Other things I learned:

- N / A


## Questions I have: (April 9, 2026)

- When I have more time, I'd like to look into actual use cases for this. I understand the types of functions that memoization would be good for, but as I haven't had the need to use in an applicaiton yet, I still can't picture the actual use case that would pass all the criteria for memoization 


## Resources

- [**Geeks For Geeks: JavaScript Memoization**](https://www.geeksforgeeks.org/javascript/javascript-memoization/)
- [**Code Academy: JavaScript Memoization**](https://www.codecademy.com/resources/docs/javascript/memoization)


## Link to Example JS File

- N / A