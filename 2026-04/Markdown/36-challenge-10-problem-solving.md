# Problem Solving

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Today I'm going to focus on attempting to solve a leet code problem: Below is the instructions found on their site, with the link at the bottom of the page

- Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
- There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.


### Provided Examples: 

**Example 1:**

- Input: func = () => checkIfInstanceOf(new Date(), Date)
- Output: true
- Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

**Example 2:**

- Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
- Output: true
- Explanation:
    - class Animal {};
    - class Dog extends Animal {};
    - checkIfInstanceOf(new Dog(), Animal); // true
    - Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

**Example 3:**

- Input: func = () => checkIfInstanceOf(Date, Date)
- Output: false
- Explanation: A date constructor cannot logically be an instance of itself.

**Example 4:**

- Input: func = () => checkIfInstanceOf(5, Number)
- Output: true
- Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".


### My Thought Process 

1. I need to write a function that accepts a value
2. The function needs to check if the value is an instance of a class or superclass 
    - this leads me to believe that the function should accept 2 values: the `value` I'm checking, and the `class` or `superclass` I'm checking against 
3. In the instructions it mentions that there are no constraints on the type of data that can be passed, which I'm thinking means that you need to test for edge cases, the data passed won't always be a class or object 
4. In their examples, they use something called, `checkIfInstanceOf()` <-- should probably determine if this is a predefined function, or simply what they're callinig their function 
    - Using Google, I was able to determine that it is a predefined JavaScript function 
    - `Purpose: It validates if an object is an instance of a specific constructor or class, often traversing the prototype chain.`

Follow Up: 
- It looks like `checkIfInstanceOf()` is a custom utility function, so it may not actually be predefined. 
- This makes more sense in the context of the question. 

While I was looking up whether `checkIfInstanceOf()` was a predefined function, google led me to Mozilla, which showed me the `instanceof` operator, and I came up with the following solution: 

```js
let newDate = new Date();

function checkIfInstanceOf(myValue, myClass ) {
    return myValue instanceof myClass;
}

console.log(checkIfInstanceOf(newDate, Date));
```

I feel like I'm missing something. 

Taking a closer look at the Mozilla's entry for `instanceof`, it looks like the operator will throw an error if the constructor isn't an object. So the missing piece right now is that I'm not handling edge cases, for if the values aren't `correct`

My second attempt uses the prototype chain, but still isn't handling edge cases. I feel like I'm stuck and my research is only getting me so far. 

```js
let myDate = new Date();

class Animal {}

class Dog extends Animal {}

let myPet = new Dog();

function myFunction(value, object) {
    let myPrototype = object.prototype.isPrototypeOf(value);

    return myPrototype;
}

console.log(myFunction(5, Number)); //currently returns false, but needs to return true
```

### Third Attempt 

```js
let myDate = new Date();

class Animal {}

class Dog extends Animal {}

let myPet = new Dog();

function myFunction(value, object) {
    
    if ((value === null || value === undefined || object === null || object === undefined)) {
        return false;
    } else if ((object.prototype.isPrototypeOf(value)) || (value.__proto__ === object.prototype)){
        return true;
    } else { 
        return false
    }
}

console.log(myFunction(myPet, Animal));
```

When I ran my solution through AI, I was told that using `__proto__` isn't best practice and could lead to weird edge cases. The better practice was to wrap the value in a Object. This resulted in the following final solution: 

```js
let myDate = new Date();

class Animal {

}

class Dog extends Animal {

}

let myPet = new Dog();

function myFunction(value, object) {
    
    //check if either the value or object are undefined or null 
    if ((value === null || value === undefined || object === null || object === undefined)) {
        return false;
    } 

    //handle cases where object isn't a function 
    if (typeof object !== 'function') {
        return false;
    }

    //wrap the value in an object in case it is a primitive type
    let myValue = Object(value);
    
    //check if the value is located anywhere in the prototype chain 
    if (object.prototype.isPrototypeOf(myValue)){
        return true;
    } else { 
        return false
    }
}

console.log(myFunction('hello', Number)); 
```


## Other things I learned:

1. More hands on experience working with prototypes (honestly, this was a bit frustrating)


## Questions I have: (April 6, 2026)

- I still haven't managed to include the edge case where the user submits something like: 
    - `console.log(myFunction(myPet, Animal.prototype));` , but this it what I've managed for now with my current skill level  

## Resources

- [**Check if Object is Instance of Class**](https://leetcode.com/problems/check-if-object-instance-of-class/description/)
- [**Mozilla: instanceof**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
- [**Mozilla: Object Prototypes**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [**Mozilla: Object.prototype.isPrototypeOf()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)


## Link to Example JS File

- [**Code Files: JS**](../Code/36-challenge-10-problem-solving.js)