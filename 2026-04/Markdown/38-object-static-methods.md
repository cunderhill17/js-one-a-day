# Objects: Static Methods

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

In JavaScript, the global `Object` provides predefined utility methods for working with objects. 
- They're often called like: 
    - Object.keys(obj);
    - Object.values(obj);
    - Object.entries(obj);

These are technically static methods on the `Object` constructor, but in practice people just call them 'built in object methods' 

### **Most Common Object Methods**

**1. Object.keys()**
- returns an array of property names (keys)

```js
const user = {name: "Alex", age: 25};
Object.keys(user); //["name", "age"]
```

**2. Object.values()**
- returns an array of values 

```js
Object.values(user); //["Alex", 25]
```

**3. Object.entries()**
- returns an array of key-value pairs 

```js
Object.entries(user);
//[["name", "Alex"], ["age", 25]]
```

This is good for looping through objects

```js
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}
```

**4. Object.assign()** 
- copies properties from one object to another 
- modifies target in place and returns it

```js
const target = {a: 1};
const source = {b: 2};

Object.assign(target, source);
//{a: 1, b: 2}
```

**5. Object.freeze()**
- prevents changes to an object 

```js
const obj = {name: "Alex"};
Object.freeze(obj);

obj.name = "Bob"; //won't work 
```

**6. Object.seal()**
- prevents adding / removing properties, but allows modifying existing ones 

```js
const obj = {name: "Alex"};
Object.seal(obj);

obj.name = "Bob"; //allowed
obj.age = 30;  //not allowed 
```

**7. Object.hasOwn()**
- checks if a property exists directly on the object 

```js
const user = {name: "Alex"};
Object.hasOwn(user, "name"); //true
```

**Why these exist:** 
- JavaScript objects are flexible and dynamic, so these methods help you: 
    - inspect objects (keys, values, entries)
    - copy / merge (assign)
    - control mutability (freeze, seal)
    - validate structure (hasOwn)

**Important Distinction**
- There are two kinds of object related methods 

1. Static (on Object)
- Object.keys(obj);

2. Instance Methods (on the object itself)
- obj.toString();
- obj.hasOwnProperty("name");

**Mental Model**
- Object.* --> tools for working with objects 
- obj.* --> things the object can do itself 

### Important Gotchas to pay attention to 

**1. Only `own` properties are included** 
- methods like 
    - Object.keys()
    - Object.values()
    - Object.entries()
- ignore properties from the prototype chain 

```js
const parent = {inherited: true};
const obj = Object.create(parent);
obj.own = true;

Object.keys(obj);
//["own"] --> NOT ["own", "inherited"]
```

**2. Only `enumerable` properties show up** 
- non-enumerable properties are skipped 

```js
const obj = {};

Object.defineProperty(obj, "hidden", {
    value: 42,
    enumerable: false
});

Object.keys(obj);
// [] --> "hidden" is missing
```

- To get everything, use: 
    - `Object.getOwnPropertyNames(obj);`

**3. Object.assign() is a shallow copy** 
- There are two categories of values in JavaScript 
    1. Primitive Values (copied by value)
        - these include values such as strings and numbers 
    2. Objects (copied by reference)
        - these include objects, arrays, and functions 
- When an object is copied by reference, the variable doesn't contian the object itself, it contains a reference (pointer) to where the object lives in memory 

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

**4. Property overwriting order in Object.assign()**
- later sources overwrite earlier ones 

```js
Object.assign({}, {a: 1}, {a: 2});
//{a: 2}
```

**5. Object.freeze() is shallow**

```js
const obj = {
    nested: {x: 1}
}

Object.freeze(obj);

obj.nested.x = 2; //still allowed
```

Only the top level is frozen 




## Other things I learned:

- N / A


## Questions I have: (April 8, 2026)

- N / A


## Resources

- [**Mozilla Docs: Object**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


## Link to Example JS File

- N / A