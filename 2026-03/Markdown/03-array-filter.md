# Array `filter()` Method: 

1. What is the concept
2. thisArg Explained
3. Other things I learned
4. Questions I have
5. Resources
6. Link to JavaScript Example


## What is the concept / What does it do? 

The `filter()` method creates a `shallow copy` of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. In other words: 
- filter() iterates through a given array, checking each element against a given condition
- If the element passes the condition test, then it gets saved to the new array
- This also means that all elements of the array must be checked, however, it skips empty slots within sparse arrays


**Example 1**

```js
const words = ['spray', 'elit', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);

console.log(result);
//Expected Output: Array ['exuberant', 'destruction', 'present'];

```

Similar to other array methods, filter can take two parameters: `filter(callbackFn, thisArg)`
- callbackFn: the function that decides which items stay in the array
- thisArg: what you want 'this' to mean inside the function 


**Return Value**
- A `shallow copy` of the given array is returned, containing just the elements that pass the test.
- If no elements pass, an empty array is returned


## `thisArg` Explained:

Normally, inside JavaScript, the word `this` inside a function depends on how the function is called. `thisArg` lets you manually choose what `this` should be inside your callbackFn. 

```js
const checker = {
    min: 10,
    isBig(number) {
        return number > this.min;
    }
};

const numbers = [5, 12, 8, 20];
const result = numbers.filter(checker.isBig, checker);

console.log(result);
// Expected Result: [12, 20]
```
**Explanation**
- `checker.isBig` points to the function within the object `checker`
- by using `checker` as the thisArg, you allow for `this` within `isBig` to point to the checker object, ensuring that `this.min` has the correct value. 
- `thisArg` answers the question: when my callback runs, what object should `this` point to


## Other things I learned:

1. What a `shallow copy` is: (overgeneralized - need to research further)
    - It's a copy of an object that shares the same properties as the original. 
    - If a change is made to either the object or the original, it may also cause the other one to be changed as well 


## Questions I have: (March 4, 2026)

1. What are the limitations of a `shallow copy`. 
    - Are there certain properties that will update in both if one is changed, or are all properties capable of being changed in both?
    - What is the purpose of it? 
2. What is a generic array?  


## Resources

[**Mozilla Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## Link to Example JS File

[**filter() method example**](../Code/03-array-filter.js)