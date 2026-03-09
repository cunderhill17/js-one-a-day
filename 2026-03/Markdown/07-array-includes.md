# Array `includes()` Method: 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`includes()` determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
- When used on sparse arrays, the `includes()` method treats empty slots as though they have the value `undefined`

**Example 1**

```js
const num = [1, 2, 3];
console.log(num.includes(2));
//Expected Output: true

const pets = ['cat', 'dog', 'rabbit'];
console.log(pets.includes('at'));
//Expected Output: false
```

**Parameters:** includes(searchElement, fromIndex)

searchElement
- The value to search for

fromIndex
- Negative index counts back from the end of the array
    - if fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for `searchElement`. If the computed index is less than or equal to 0, the entire array will be searched
- if fromIndex is ommitted, 0 is used, causing the entire array to be searched 
- if fromIndex is greater than the length of the array, the array isn't searched and false is returned

**Example 2**

```js
//array length is 3
//fromIndex is -100
//Computed index is 3 + (-100) = -97

const arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('a', -2); //false
```

You can search for `undefined` in a sparse array and get true 

```js
console.log([1 , , 3].includes(undefined));
//Expected Output: true
```


## Other things I learned:

N/A


## Questions I have: (March 8, 2026)

1. What is `same-value-zero equality` ?


## Resources

- [**Mozilla Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)


## Link to Example JS File

[**includes() method example**](../Code/07-array-includes.js)

