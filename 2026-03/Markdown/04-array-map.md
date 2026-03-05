# Array `map()` Method: 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`map()` creates a new array consisting of values that were the result of a provided function (callbackFn) being called on each element
- callbackFn is only called for array indexes that have a value
- It isn't invoked for empty slots in sparse arrays

```js

const array = [1, 4, 9, 16];

//pass a function to the map
const mapped = array.map((x) => x * 2);

console.log(mapped);
//Expected output: [2, 8, 18, 32]

```

**Parameters**: map(callbackFn, thisArg)

callbackFn
- a function to execute for each element in the array. It's return value is added as a single element in the new array

thisArg
- a value to use as `this` when executing callbackFn

With the purpose of map() being transformation, it is bad practice to call map() if you don't plan to use the new array it creates

**Example**

```js

const numbers = [1, 2, 3];

numbers.map(n => {
    console.log(n);
})

```

The purpose of the above code is to iterate through the array, printing each number in the console. However, this would be better served by using a `forEach` loop, as using map() takes up unnessessary memory and you're not using map() for it's intended purpose. 

Copying methods (informal term) such as map() are best used with pure functions
- please see below for additional information

## Other things I learned:

1. Copying methods are array methods that don't modify the original array such as map(), filter(), slice(), concat(), etc. 
2. A 'pure' function has two properties: 
    - same input -> same output
    - No side effects (it doesn't change outside variables, objects, or state)

**Example: Pure Function**

```js
const double = n => n * 2;
```

**Example: Impure Function**

```js
let total = 0;
const addToTotal = n => {
    total += n; //modifies external state
};
```

- methods that return new arrays are indended for pure transformations, not for functions that modify external state or cause side effects. 

3. Generic array methods are designed to work with any array like object, not just actual JavaScript arrays
    - so methods like map(), filter(), forEach(), etc. don't strictly require a real array. They just require something that looks like an array - it needs to have indexed elements and a length property
    - An example would be: A Nodelist from `document.querySelectorAll()`
4. You can tell if something is an array by using: `Array.isArray(value)`

## Questions I have: (March 5, 2026)

I feel better about this topic after having already looked at 3 similar concepts with some(), every(), and filter(), so there weren't any specific questions I have. 


## Resources

[**Mozilla Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)


## Link to Example JS File

[**map() method example**](../Code/04-array-map.js)
