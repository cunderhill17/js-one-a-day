# Constructors: Object.prototype.constructor

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`Object.prototype` has a hidden property called `constructor` which points back to the `Object` function itself. 

Considering the following: 

```js
const obj = {} // roughly translate to::

const obj = new Object(); // Internally:: obj -> Object.prototype -> null 

// Object.prototype.constructor === Object

obj.constructor === Object // true
```

- creates a new 'object' with every Object having the 'prototype' property
    - with `Object.prototype` having the constructor property, meaning that when you create a new object, it also inherits the constructor property 

```js
function Person(name) {
    this.name = name;
}
```

When the function is defined, JavaScript automatically gives it a prototype. 

```js
Person.prototype = {
    constructor: Person
}

const p = new Person('Alex');

//Roughly Equivalent to 
/*
    const p = {};
    p._proto_ = Person.prototype; //link to Prototype
    Person.call(p, 'Alex'); //runs constructor 
*/
```

When you call:: `new Something()`
- creates a new empty {}
- sets it Prototype
- runs the function with `this = that object`
- returns that object

The Exception:: If your constructor returns and object explicitly, that replaces the default one

**Example**

```js
function Person(name) {
    this.name = name;
    return {fake: true};
}

const p = new Person('Alex');
```

In the above example, p.name isn't defined, while p.fake results in 'true'


Full Steps: 
1. `new` creates a new object
2. The constructor is called (function) and initalizes the object using `this`
3. This object is then held inside a variable which has access to the properties through dot notation (.)

The variable itself (such as `p` in the above example) doesn't have a `constructor` property on it, but instead, inherits a constructor from its prototype chain. 
- if you modify the instance: 
    - p.constructor = 'something else'
- you aren't changing the constructor on Person.prototype. 


Use the constructor for instance-specific data such as: name, age, etc. (Essentially, what would be held in variables)

**Example**

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
```

Use the prototype for shared methods

**Example**

```js
Person.prototype.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`);
}
```

- Methods exist once on the Prototype
- All instances can use it rhgouh the prototype chain 
- saves memory because you're not creating a new function for every instance 

Another way to assign methods to the prototype is as follows: 

```js
    Object.assign(Person.prototype, {
        sayHi() {
            console.log(`Hi, my name is ${this.name}`);
        },
        sayBye() {
            console.log(`${this.name} says bye!`);
        }
    });
```

- Preserves the existing constructor property while adding multiple methods at once. 



## Other things I learned:

I think I started to understand what JavaScript classes are used for as I read over `Object.prototype.constructor`, but I'm going to reserve my thoughts on that until I get to actual Classes and learning about how they're used. 


## Questions I have: (March 17, 2026)

1. I understand how `prototype` is being used, but I'm still not entirely certain what it is exactly. I think that's what I'll focus on tomorrow. 

## Resources

- [**Mozilla Docs: Constructors**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)


## Link to Example JS File

- N / A
