# Array `findIndex()` Method: 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`findIndex()` returns the index of the first element in an array that satisfies the testing function. If no elements satisfy the condition, -1 is returned 
- invoked for every index in the array, not just those with assigned values. Empty slots in sparse arrays behave the same as undefined. 

**Example 1**

```js
const array = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element >13;
console.log(array.findIndex(isLargeNumber));

//Expected Output: 3
```


**Parameters:** findIndex(callbackFn, thisArg)

callbackFn
- a function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise
- takes 3 arguments: element, index, array

thisArg
- a value to use as `this` when executing callbackFn


**Example 2**
```js
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n % 2 === 0) {
        return n === 2;
    }
    for (let factor = 3; factor * factor <= n; factor += 2) {
        if(n % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); //-1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

You can search for `undefined` in a sparse array and get the index of an empty slot 

**Example 3**
```js
console.log([1, , 3].findIndex((x) => x === undefined));
//Expected output: 1
```

## Other things I learned:

1. A prime number is a natural number greater than 1, that has exactly two distinct factors: 1 and itself. 


## Questions I have: (March 7, 2026)

1. In what instances would it be necessary to find the index of an element?


## Resources

- [**Mozilla Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [**Prime Number**](https://en.wikipedia.org/wiki/Prime_number)


## Link to Example JS File

[**findIndex() method example**](../Code/06-array-findindex.js)

