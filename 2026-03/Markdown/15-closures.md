# Closures

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
- gives a function access to its outer scope
- In JavaScript, closures are created everytime a function is created, at function creation time 

Analogy: Person with a backpack 
- the function is the person
- the variables are the items in the backpack 
- even after leaving the room where they got the items, the person still carries them around

Lexical Scoping: 
- a variables scope is determined by where it is written in the source code, not by how functions are called at run time

When a variable is used inside a function, the language looks for the variable in this order: 
1. Local Scope (inside the function / block)
2. Outer Scope (where the function was defined)
3. Global Scope

**Example**

```js
let x = 10;

function outer() {
    let x = 20; 
    function inner() {
        console.log(x);
    }
    inner();
}

outer(); //output:: 20
```

inner() looks for x in its lexical scope chain. It first checks inside inner, then inside outer, where it finds x = 20, so that value is used instead of the global x. 


Note:: Before ES6, JavaScript blocks with curly braces didn't create scope. 
- in ES6, JavaScript introduced `let` and `const` declarations, which, among other things like `temporal dead zones` allows you to create block scoped variables 


```js
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc(); //Output: Mozilla
```

**Explanation**
- A closure is created when displayName is returned along with the variables from its lexical environment (name). Even after makeFunc() finishes executing, displayName still has access to name.
    - this means that it will continue to have access to the variables declared within the same environment it was originally called in


```js
function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); //7
console.log(add10(2)); //12
```

**explanation**
- makeAdder(x) takes a single argument 'x' and returns a new function
    - the function it returns also takes a single argument - 'y' and returns the sum of 'x and y'
    - it creates functions that add a specific value to their argument 
    - function factory(?)
- `add5` and `add10` both form closures and share the same function body definition, but they store different lexical environments
    - add5 --> x = 5
    - add10 --> x = 10

This is similar to OOP as OOP bundles data and functions as well 

**Example**

```js
const counter = {
    count: 0,
    increment() {
        this.count++;
    }
};
```

In the example, `increment` doesn't require the funciton keyword as it's inside of an object. They are more commonly known as `methods`. 

You could also show the above example in the following way: 

```js
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
```

You gain access to `count` by assigning the returned function to `counter`, but the only way to interact with count is through the function


## Other things I learned:

`temporal dead zone`
- a variable declared with let, const, or class is said to be in a 'temporal dead zone' form the start of the block until code execution reaches the place where the variable is declared and initialized 
- while inside the `TDZ`, the variable has not been initialized with a value and any attempt to access it will result in a `ReferenceError`


## Questions I have: (March 16, 2026)

1. What is `data encapsulation`?
2. What is `global namespace`? 

## Resources

- [**Mozilla Docs: Closures**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)


## Link to Example JS File

- [**Closure Example**](../Code/15-closures.js)


