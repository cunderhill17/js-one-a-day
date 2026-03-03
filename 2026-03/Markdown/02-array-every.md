# Arrry `every()` Method: 

1. What is the concept?
2. Other things I learned
3. Things I don't understand
4. Resources
5. Link to JS File Example

## What is the concept / What does it do? 

`every()` iterates through an array and checks whether every value passes a specified condition
- It returns false if it finds an element in the array that doesn't satisfy the provided testing function
- Otherwise, it returns true
- If it finds an element that doesn't satisfy the testing function, it stops iterating and returns false immediately

**Example 1**

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13]; 

console.log(array1.every(isBelowThreshold));
```

- The expected output is: True (every value in the array is under 40)

Parameters: every(callbackFn, thisArg)

- callbackFn
    - a function to execute for each element in the array. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise
- thisArg (optional)
    - a value to use as `this` when executing `callbackFn`


`callbackFn` is only involved for array indexes that have assigned values. It is not invoked for empty slots in `sparse arrays`.
- arrays can contain `empty slots`, which are not the same as slots filled with the value `undefined`
- in array iteration methods, empty slots are skipped


**Example 2**

```js
function isBigEnough (element, index, array) {
    return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough); // False

[12, 54, 18, 130, 44].every(isBigEnough); // True
```

## Other things I learned:

1. Arrays can hold empty slots through different methods such as (but not limited to): 
    - Making the length of the array longer than the number of elements that the array currently holds
    - Deleting an element for a given index
    - Adding an element to the array at an index that skips over the next available index
2. Functions can be saved within variables
3. Gained a better understanding of how to post blocks of code in markdown using the backticks

## Things I don't understand: (March 3, 2026)

- How the 'thisArg' works (Will work on researching this at a later date)


## Resources

[**Mozilla Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


## Link to Example JS File

[**every() method example**](../Code/02-array-every.js)