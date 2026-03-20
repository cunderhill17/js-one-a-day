# Classes (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Public fields are writable, enumerable, and configurable properties defined on each instance or class constructor
- defined directly inside a class without special keywords like `#`
- if the field is non-static it belongs to each instance 
- if the field is static, it belong to the class itself (constructor)
- you can change the value after its created 
- The property shows up when you loop over or list properties (enumerable)
- you can modify or delete the property definition later (configurable)

**Example**

```js
class Person {
    name = "Alice"; //Public non-static field 
}
```
- It's a property, not a variable, so it's not declared with `let` or `const`
- the property `name = "Alice"` can be thought of like a key/value pair 

```js
class Person {
    static species = "Human"; //Static field
}

Person.species; // acessed on the class, rather than an instance of a class
```

### Private Elements 

- class features that are only accessible inside the class that defines them 

They include: 
- Private fields
- Private methods 
- Private accessors (get/set)
- They are all declared using the `#` prefix

**Example**

```js
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
```

#balance isn't accessible from outside the class 

```js
    const acc = new BankAccount();
    acc.#balance; // SyntaxError
```

They aren't enumerable, configurable, and they aren't accessible via bracket notation 
- acc['#balance'] // undefined

They can only be accessed by code inside the class body such as the getter 

```js
get balance() {
    return this.#balance;
}
```

Private DOES NOT equal protected 
- Private fields are not inherited, and aren't visible to subclasses 

```js
class Parent {
    #secret = 42; 
}

class Child extends Parent {
    reveal() {
        return this.#secret //SyntaxError 
    }
}
```

Private fields --> hidden storage only the class knows about 
- you must declare private fields before using them 

All private identifiers must be unique
- you can't reuse the same name for different things
- mixing types isn't allowed 

```js
class Example {
    #x = 1;
    #x = 2; //SyntaxError
}

class ExampleTwo {
    #x = 1;

    #x() { //this resutls in a SyntaxError
        //code goes here
    }
}
```

The namespace between static and instance elements is shared (for private elements)

Even though `instance` (instace of class) and `static` (class) elements live in different places, Private names don't care, they still overlap. 
- the one exception is that you're allowed to reuse the same private name if it forms getter/setter pair 

**Example**

```js
class Example {
    get #x() {
        return this.#x;
    }

    set #x(value) {
        this.#x = value;
    }
}
```

You could however have the following: 
1. x (instance public) --> exists on each object you create
2. static x (class public) --> exists on the class itself 
3. #x (instance private) --> exists in a hidden internal slot, only accessible from class methods

`this` in instance methods refers to the object instance
- access instance fields with `this.field`
- access private fields with `this.#field`

Static fields live on the class itself 
- access via the class name --> `Example.x`
- Or via `this.constructor.x` if you want dynamic subclass-safe access 

`this` in static methods refer to the class itself 
- so `this.x` in a static method will access the static field 
- you cannot access instance fields (non-static) inside a static method

**Example**

```js
class Example {
    x = 10;
    static y = 20;

    static showFields() {
        console.log(this.y); //works, static field
        console.log(this.x); //undefined, x is not on the class
    }
}

Example.showFields();
```



## Other things I learned:

**Namespace**
- In JavaScript a `namespace` is a way to organize code and avoid naming conflicts by grouping variables, functions, or objects under a single name
    - JS has a global scope, so if you define too many variables or functions globally, they can overwrite eachother 

JavaScript doesn't have a built in `namespace` keyword, but you can simulate it using objects 

```js
const MyApp = {
    name: 'Demo App',
    greet: function() {
        console.log("Hello, from MyApp!");
    }
};

MyApp.greet();
```

`MyApp` acts as a `namespace`. Everything inside it is grouped together. 

Today, namespaces are often replaced by ES modules. Modules naturally create their own scope so you don't pollute the global namespace. 


## Questions I have: (March 20, 2026)

I'm not exactly sure what the following line refers to: 
- Or via `this.constructor.x` if you want dynamic subclass-safe access 

## Resources

- [**Mozilla Docs: Classes**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


## Link to Example JS File

- N / A