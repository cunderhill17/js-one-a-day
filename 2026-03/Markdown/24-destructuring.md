# Destructuring

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`Destructuring` is a JavaScript syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables 
- it can be used in locations that receive data (such as the left hand side of an assignment or anywhere that creates new identifier bindings)

### Destructuring Arrays 

**Without Destructuring:**

```js
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
```

**With Destructuring**

```js
const arr = [10, 20, 30];
const [a, b] = arr;

console.log(a); //10
console.log(b); //20
```

The variables 'a' and 'b' automatically get values based on position

### Destructuring Objects 

**Without Destructuring**

```js
const user = {name: 'Alex', age: 25};
const name = user.name;
const age = user.age;
```

**With Destructuring**

```js
const user = {name: 'Alex', age: 25};
const {name, age} = user;

console.log(name); //Alex
console.log(age); //25 
```

Here, the variables match the property names 

### Binding Pattern 

This is when you declare new variables using const, let, or var (avoid using var)

```js
const user = {name: 'Bob', age: 32};
const {name, age} = user;
```

Here, name and age are new variables being created. It's called a `binding pattern` because you're 'binding' values to new identifiers. 

### Assignment Pattern 

This is when the variables already exist and you're just `assigning` values to them 

```js
let name, age;

const user = {name: 'Suzy', age: 74};

({name, age} = user);
```

The parentheses are required
- without them, JavaScript thinks that {} is a block, not an object pattern, and the line would produce an error 


The same thing can be done with arrays, however, the parentheses aren't needed in that case. 

### Using Destructuring With Nested Properties 

```js
const obj = {a: 1, b: {c: 2}};

const {a} = obj; //'a' is a constant 

let {
    b: {c: d}
} = obj; //'d' is re-assignable 
```

Explanation: 
- Take property `a` from `obj` and assign it to a newly created variable called `a`
- Take the `b` property from `obj` and inside of `b` grab `c`. Then assign property `c` to a variable called `d`

Equivalent Code: 
- let d = obj.b.c; 

### 1. Loop Variables 

**Without Destructuring**

```js 
const users = [
    {name: 'Alex', age: 25},
    {name: 'Sam', age: 30}
]

for (const user of users) {
    console.log(user.name);
}
```

**With Destructuring**

```js
const users = [
    {name: 'Alex', age: 25},
    {name: 'Sam', age: 30}
]

for (const {name} of users) {
    console.log(name);
}
```

Instead of creating `user`, JavaScript directly creates `name`

### 2. Catch Error Variables 

- When an error is caught, JavaScript directly creates a variable for the error 

**Without Destructuring**

```js
try {
    throw {message: "Something went wrong", code: 500};
} catch (err) {
    console.log(err.message);
}
```

**With Destructuring**

```js
try {
    throw {message: "Something went wrong", code: 500};
} catch ({message, code}) {
    console.log(message);
    console.log(code);
}
```

### 3. Function Parameters 

```js
const user = {name: 'Alex', age: 25};

function greet({name}) {
    console.log(`Hello, ${name}`);
}

greet(user);
```

### Default Values 

- default values are used when the value being extracted is undefined 

```js
const [a = 1, b = 2] = [10];

console.log(a); //10 
console.log(b); // 2 (default value kicks in)
```

Note:: only `undefined` triggers the default 
- defaults aren't used for null, 0, false, or '',

Default expressions are lazy 
- they are only evaluated when needed 

```js
function getDefault() {
    console.log("Computed!");
    return 42;
}

const {a = getDefault()} = {a:10};
//Nothing is logged

const {b = getDefault()} = {};
// Logs "Computed!"
```

Defaults can depend on earlier variables 

```js
const [a = 1, b = a + 1] = [];
console.log(a); //1
console.log(b); //2
```


## Other things I learned:

- N / A


## Questions I have: (March 25, 2026)

Everything seemed pretty straight forward, but I do think I need to practice destructuring with nested values as that looks a bit more complicated 


## Resources

- [**Mozilla Docs: Destructuring**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)


## Link to Example JS File

- N / A