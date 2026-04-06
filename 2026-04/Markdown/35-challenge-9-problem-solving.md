# Problem Solving

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Today I'm going to focus on attempting to solve a leet code problem: Below is the instructions found on their site, with the link at the bottom of the page

- Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
- You may assume the array is the output of JSON.parse.


**Examples Provided:**

Example 1:

- Input: nums = [null, {}, 3]
- Output: 3
- Explanation: Calling nums.last() should return the last element: 3.

Example 2:

- Input: nums = []
- Output: -1
- Explanation: Because there are no elements, return -1.


**What I need to accomplished:** 

1. add a method to the Array.prototype called `last` that will get applied to all arrays 
2. When the method is used on an array, it should return the last element in the array
3. If it's called on an empty array it should return a -1

My original idea was working where it either returned -1 or the last element in the array, however, it required you to pass the array in the function, which I don't believe was supposed to be part of the function. 

```js
let num = [];
let fruit = ['apple', 'banana', 'cherry'];
let subjects = ['math', 'science', 6];

Array.prototype.last = (arr) => {
    if (arr.length === 0) {
        return -1;
    }

    let index = arr.length -1;

    return arr[index];
}

console.log(num.last(num)); //output: -1
```

**Idea:** 

What if I don't use an arrow function? How would that change things? 

It seems that by using a regular `function()`, I was able to use the `this` keyword which directly references the array that the method was being called on.

```js
let num = [];
let fruit = ['apple', 'banana', 'cherry'];
let subjects = ['math', 'science', 6];

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }

    let index = this.length -1;

    return this[index];
}

console.log(subjects.last());
```



## Other things I learned:

- Reinforced the difference between traditional functions and arrow functions in how they handle `this`.
- Practiced adding a method to `Array.prototype`, giving all arrays access to the method.


## Questions I have: (April 5, 2026)

- N / A

## Resources

- [**Array Prototype Last**](https://leetcode.com/problems/array-prototype-last/description/)


## Link to Example JS File

- [**Code Files: JS**](../Code/35-challenge-9-problem-solving.js)