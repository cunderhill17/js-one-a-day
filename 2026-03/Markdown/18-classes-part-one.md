# Classes (Part 1)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`Classes` are a template for creating objects
- they encapsulate data with code to work on that data
    - Encapsulation --> bundling data and behavior together
- classes in JavaScript are built on prototypes but also have syntax and semantics that are unique to classes

Classes are `special functions` and just as you can define function expressions and function declarations, a class can also be defined in two ways: `a class expression` and `a class declaration`

**Declaration**

```js
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

**Expression**
- class is anonymous but assigned to a variable

```js
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

- the class has it's own name 

```js
const Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

Class declarations have the same `temporal dead zone` restrictions as `let` or `const` and behave as if they are not hoisted
- you cannot use a class before it is declared in the document flow
- it will come back with a `ReferenceError`

The body of a class is executed in `strict mode` even with out the `use strict` directive
- strict mode is a stricter version of JavaScript that: 
    - prevents certain mistakes
    - throws errors instead of silently failing
    - disallows some unsafe behaviors

A class element can be characterized by three aspects: 
1. kind --> Getter, setter, method, field
2. location --> static or instance 
3. visability --> public or private 

A class method is a function that belongs to a class and operates on its data (properties)

```js 
class Car {
    constructor(color) {
        this.color = color;
    }

    drive() {
        console.log('The car is driving');
    }
}
```

In the above example `drive()` is a class method
- it defines behavior that every Car object can use
- `instance methods` --> they work on ojects created from the class

In JS, there are also 'static methods' which belong to the class itself 

```js 
class Car {
    static info() {
        console.log("Cars have wheels");
    }
}

Car.info(); //called on the class, not an object
```

### Why use a static method? 

- doesn't depend on a specific objects data 
- is related to the class conceptually
- is more like a helper or utility function 

Static methods are best when they: 
- are closely related to the classes concept 
- don't need a specific instance 
- Often: 
    - create instances (factory methods)
    - validate data 
    - compare objects 

**Example**

```js
class User {
    constructor(email) {
        this.email = email;
    }

    static isValidEmail(email) {
        return email.includes('@');
    }
}

User.isValidEmail('test@example.com');
//validates email before user is created
```


### Getters and Setters 

- special methods for controlling how a property is read (getter) or changed (setter)
- they look like properties when you use them, but behave like functions behind the scenes

You can control access: 
- validate data
- transform values 
- prevent bad input 

**Example**

```js
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 2) {
            console.log('Name too short');
            return;
        }
        this._name = value;
    }
}
```

The convention is to use a capital letter in classes to differentiate between them and their instances / variable 

`._value` is used to differentiate between variable and the getter/setter so that an infinite loop doesn't occur. 


## Other things I learned:

N / A


## Questions I have: (March 19, 2026)

1. Not exactly sure what hoisted means?
2. Should probably look at `strict mode` in more detail 


## Resources

- [**Mozilla Docs: Classes**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


## Link to Example JS File

- [**Code Files: HTML**](../Code/18-challenge-2-data-import-validation/index.html)
- [**Code Files: CSS**](../Code/18-challenge-2-data-import-validation/main.css)
- [**Code Files: JS**](../Code/18-challenge-2-data-import-validation/main.js)