# Object Prototypes

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Prototypes are the mechanism by which JavaScript objects inherit features form one another 

Every object in JavaScript has a built in property which is called it's `Prototype`. 
- the prototype itself is an object, so the prototype will have it's own prototype, making what's called a prototype chain. 

When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on, until either the property is found or the end of the chain is reached. 

To find the prototype of an object you can use `Object.getPrototypeOf(nameOfObject)`

Think of a prototype like a 'template' or a 'parent object'

```js
const animal = {
    eats: true
};

const dog = Object.create(animal);
console.log(dog.eats); //true
```

- dog doesn't have `eats`, but its prototype is `animal`, so JavaScript checks `animal` and finds `eats`
- This is similar to how classes can extend other classes 

Prototype Chain 
- dog --> animal --> Object.prototype --> null 

`prototype` is the object that another object can inherit properties and methods from. 

**Prototypes Allow:** 
- code reuse (shared methods)
- efficient memory use
- object oriented behavior without tradiitonal classes 


### Shadowing Properties
- redefining properties that have already been inherited in the prototype chain 
- it redefines what that property means for that specific object, but it doesn't delete the prototype property 

**Example**

```js
const animal = {eats: true};
const dog = Object.create(animal);

console.log(dog.eats); //true

dog.eats = false; //shadowing
console.log(dog.eats); //false
console.log(animal.eats); // true
```

### Setting a Prototype
- There are various ways of setting an objects prototype in JavaScript, below are two of them: `Object.create()` and `constructors`

The `Object.create()` method creates a new objects and allows you to specify an object that will be used as the new objects prototype


**Example**

```js
const personPrototype = {
    greet() {
        console.log('Hello!');
    }
}

const carl = Object.create(personPrototype);
carl.greet(); //Hello!
```

In the above example, the prototype becomes object itself: `personPrototype`


Using a constructor 
- In JavaScript, all functions have a property named `prototype`
- when a function is called as a constructor, the property called `prototype` is assigned to the newly created object 

**Example**

```js
function Person(name) {
    this.name = name;
}

const alice = new Person('Alice');
```

The prototype of `alice` --> `Person.prototype`
- the prototype is the `.prototype` property of the constructor function, not the function itself. 



## Other things I learned:

Note:: This isn't something 'extra' I learned, but I do think I understand `prototypes` better than I did yesterday which answers the 'question' I posed in my previous note. I think what helped is looking at the similiaries between prototypes and classes, as they both allow objects to inherit methods and properties, it's just the way they go about it that's different. 


## Questions I have: (March 18, 2026)

N / A


## Resources

- [**Mozilla Docs: Prototypes**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)


## Link to Example JS File

- N / A
