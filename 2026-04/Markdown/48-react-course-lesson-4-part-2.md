# React Course: Lesson 4: Using JSX (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

Passing Properties to a component via JSX 
- instead of passing in an object of properties, you can pass in XML attributes

```js
const e = <Person name="Crystal" nat="Canadian" />
```
- Points to the `Person` component and passes in the attributes `name` and `nat`

You can pass computed properties to a component 
- i.e you can set a property to the result of a JS expression 
- to do this, enclose the JS expression in {}

```js
const fn = "Crystal";
const ln = "Underhill";

const e = <Person name={fn + ' '  + ln} />
```

### Additional JSX Techniques 

You can't define a JSX fragment containing adjacent sibling elements

```js
const uiBad = (
    <h1>Greetings!</h1>
    <div>This won't work</div>
);
```

You can use a React empty tag <> to wrap adjacent sibling elements 

```js
const uiGood = (
    <>
        <h1>Greetings!</h1>
        <div>This will work</div>
    </>
);
```
- You can only have a single top level element 

In JSX you can't use the `class` attribute to apply a CSS class to an element 

```js
const uiBad = <div class="emphasis">Won't work</div>
```

You must use the `className` attribute instead 

```js
const uiGood = <div className="emphasis">Will Work</div>
```

In JSX, you can't use the `for` attribute to attach a label to an input field 
- instead, you must use the `htmlFor` attribute 

```js
<label htmlFor="name-field">Please enter your name</label>
<input id="name-field" />
```

Passing an object to a component 
- instead of passing in all the individual properties you can use the spread operator 

**instead of this**

```js
<SomeComponent 
    name={obj.name}
    age={obj.age}
    nat={obj.nat}
/>
```

**You can do this**

```js
<SomeComponent {...obj} />
```

### Lab 4
- Simplify the `library` web page from the previous lab so that it uses JSX syntax rather than calling `React.createElement()` everywhere 



## Other things I learned:

- N / A


## Questions I have: (April 18, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/blob/master/ReactDev/Student/04-JSX/index.html)

## Link to Example JS File

- [**React Course: Lab 4: HTML**](../Code/48-react-course-lab-4/index.html)
- [**React Course: Lab 4: CSS**](../Code/48-react-course-lab-4/main.css)