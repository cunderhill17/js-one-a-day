# Array `find()` Method: 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`find()` returns the first element in an array that passes the conditional statement in the callbackFn. 
- if no elements pass the testing condition then it returns undefined 
- function is invoked for all elements, including empty slots in sparse arrays. 
- Empty slots behave the same as `undefined` 


**Example 1**

```js
const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);

console.log(found);
//Expected Output: 12
```

**Parameters:** find(callbackFn, thisArg)

callbackFn
- a function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise
- takes 3 arguments: element, index, array

thisArg
- a value to use as `this` when executing callbackFn


**Example 2**

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];

const firstThrough = numbers
    .filter((num) => num > 0)
    .find((num, idx, arr) => {
        if (idx > 0 && num >= arr[idx-1]) return false;
        if (idx < arr.length -1 && num >= arr[idx+1]) return false;
        return true
    });

console.log(firstThrough);
//Expected Result: 1
```

**Explanation**

- the first thing it does is filter the array to only contain numbers that are greater than 0, then it runs two conditional statements. 
- The first `if` statement checks if the element has an index greater than 0 as well as if it's greater than the element to the left of it, if both of those prove true, then return false
- the second `if` statement checks if the elements index is less than the length of the array -1 (therefore checking if it has a neighbor to its right). If it does, then it checks if it's value is greater than its neighbour. If it passes both conditions, return false
- if the element fails both conditional statements, return true. 


The `find()` property reads the length property of `this` and then accesses each element whose key is a nonnegative integer less than the length. 
- In other words, it checks that the array / array-like figure has a length value, and then goes through each element whose key has a positive / whole number 

**Example 3**

```js
const arrayLike = {
    length: 3,
    "-1": 0.1,
    0: 2,
    1: 7.3,
    2: 4,
};

console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
//Expected Result: 7.3
```

`!Number.isInteger()`
- checks if the element is a number of type integer inverting the result because of the logical NOT operator (!)

## Other things I learned:

1. Gaining a better understanding of how to call array methods on array-like figures using the format: `Array.prototype.[method-name].call()`
2. I'm working through understanding how each part of an example works, rather than focusing solely on the method I'm attempting to learn
    - Such as breaking down the `if statements` in example 2, or understanding the logical NOT operator 


## Questions I have: (March 6, 2026)

Not necessarily a question, but something I'd like to work on. I want to try connecting each concept to a real world example, so that concepts become less theoretical and more second nature when I'm trying to solve a problem. 

## Resources

[**Mozilla Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)


## Link to Example JS File

[**find() method example**](../Code/05-array-find.js)