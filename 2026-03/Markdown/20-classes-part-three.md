# Classes (Part 3)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

### Constructor
- The constructor is a special method for creating and initializing an object created with a class 
- there can only be one special method with the name `constructor` in a class or a `SyntaxError` is thrown 

```js
class Rectangle {
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }
}
```

If your instances properties' values don't depend on the constructors arguments, you can define them as `class fields`

If you have a child class (subclass) that `extends` a parent class (superclass), the child can use `super` to call the parents constructor and reuse its set up logic. 


```js
class Animal {
    constructor(name) {
        this._name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); //calls Animal constructor
        this._breed = breed;
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog._name); //Buddy
console.log(myDog._breed); //Golden Retriever
```

Note:: you must call `super()` before using `this` in a subclass constructor 

### Using `super` with methods 
- when a child class overrides (redefines) a method from the parent, you can still call the parent's version using `super.methodName()`

**Example**

```js
class User {
    login() {
        console.log('User logged in');
    }
}

class Admin extends User {
    login() {
        super.login();
        console.log('Admin has extra permissions');
    }
}

const admin = new Admin;
admin.login();
```

- Admin overrides the login() method from User
- Inside Admin, `super.login()` calls the orginal method from User
- Then it adds it's own behavior 

### Static Block Initalization
- a static block is a special block inside a class that runs once when the class itself is made (not when instances are made)

```js
class MyClass {
    static {
        console.log('Class is being initialized');
    }
}
```

**More flexible initalization**

```js
class Config {
    static settings;

    static {
        const env = "dev";
        if (env === "dev") {
            this.settings = {debug: true};
        } else {
            this.settings = {debug: false};
        }
    }
}

console.log(Config.settings);
```

Static blocks are useful when initialization is dynamic or multi-step

You need a static block when: 
- you need logic, not just a value, for example: 
    - conditional assignment
    - reading from a file, environment variable, or API
    - combining multiple pieces of data
    - using try / catch for safety 

```js
class Database {
    static config;

    static {
        try {
            const env = process.env.NODE_ENV || "development";
            Database.config = {
                host: env === "production" ? "prod-db" : "localhost",
                port: 5432,
                user: "admin",
                password: env === "production" ? process.env.DB_PASSWORD : "secret"
            };
        } catch (err) {
            console.error("Failed to load config: ", err);
            Database.config = {};
        }
    }
}
```

Here, you can't just assign a value inline because you're doing: 
- conditional logic 
- reading environment variables 
- error handling 

Note:: In Node.js `process.env` is a special object that contains all the environemtn variables available to your process 



## Other things I learned:

N / A


## Questions I have: (March 21, 2026)

I think I understand what static block initialization is, but I can't really understand what use cases it would suit, or how to go about setting it up. Definitely a topic I want to look into more before claiming to understand it. 


## Resources

- [**Mozilla Docs: Classes**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


## Link to Example JS File

- N / A