# Objects

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

The `Object` type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. 
- Objects can be created using the `Object()` constructor or the object initializer / literal syntax 

**Creating Objects**

```js
const obj = {a: 'foo', b: 42, c: {}};
```

```js
const person = {
    isHuman: false,
    printIntroduction() {
        console.log(`My name is ${this.name}`);
    }
};

const me = Object.create(person);
```

You can also invoke a construction function with the `new` operator 

```js
const myCar = new Car('Eagle', 'Talen TSi', 1993);
```

`Car` would be a function predefined elsewhere on the page 

Nearly all objects in JavaScript are instances of `Object`
- A typical object inherits properties (including methods) from `Object.prototype`, although these properties may be shadowed 
- the only objects that don't inherit from Object.prototype are those with `null` prototype or are descended from other null prototype objects 

Changes to the `Object.prototype` object are seen by all objects through prototype chaining, unless the properties and methods subject to change are overridden further along the prototype chain

Avoid calling Object.prototype methods directly from the instance
- some methods on Object.prototype can be overridden so calling them directly can give misleading results 

Instead of: 

```js
obj.hasOwnProperty("key");
```

Do this instead: 

```js
Object.prototype.hasOwnProperty.call(obj, "key");
```

This guarantees that you're calling the original built in method, not a modified version. 

Modern JavaScript utilities are static 
- instead of relying on instance methods, modern JS prefers static methods on `Object`

```js
Object.hasOwn(obj, "key");
```

Static methods are preferred because they are: 
- safer (can't be overridden)
- more reliable (work on all objects)
- easier to reason about 

### Static Methods 

An example of a static method is: `Object.assign()`

The `Object.assign()` static method copies all `enumerable` `own properties` from one or more source objects to a target object. It returns the modified target object. 
- Enumerable --> only properties that are visible in loops like `for...in` or `Object.keys()`
- Own Properties --> only properties directly on the object, not inherited ones

The modified target object that is returned is a `shallow copy`

There are two categories of values in JavaScript 
1. Primitive Values (copied by value)
    - these include values such as strings and numbers 
2. Objects (copied by reference)
    - these include objects, arrays, and functions 

When an object is copied by reference, the variable doesn't contian the object itself, it contains a reference (pointer) to where the object lives in memory 

```js
const original = {
    name: "Alice",
    address: {city: "Toronto"}
};
```

What's actually stored: 
- original.name --> "Alice"
- original.address --> (reference)
    - the reference points to {city: "Toronto"}

A type error is thrown in one of the following cases: 
1. the target parameter is null or undefined
2. Assignment of a property on the target object fails 

Object.assign() needs a real object to copy into 
- null and undefined are not objects 
- JavaScript can't attach properties to them 

Non-Writable Property: Example

```js
const target = {};

Object.defineProperty(target, "a", {
    value: 1,
    writable: false
});

Object.assign(target, {a: 2}); //TypeError
```

- Property `a` exists
- But it's not writable 
- Object.assign() tries to overwrite it, fails, and an error is thrown





## Other things I learned:

- N / A


## Questions I have: (April 7, 2026)

- N / A


## Resources

- [**Mozilla Docs: Object**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [**Mozilla Docs: Object.assign()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)


## Link to Example JS File

- N / A