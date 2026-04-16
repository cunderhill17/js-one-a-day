# React Course: Lesson 3: Creating Functional Components 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

Creating Functional Components 
- you can define a component as a function, rather than as a class 
- Benefits of functional components 
    - simpler syntax than class components 
    - support modern features in the React library 

To define a functional component 
- define a function (name must start with a capital)
- in the function, create and return the components UI 

```js
function ProductsList() {
    return React.createElement('p', null, 'Product Data List');
}
```

To create a funtional component instance 
- call `React.createElement()`
- pass the function name as the first parameter 

```js
React.createElement(ProductsList)
```

It's common place to define a top level component that creates the overall UI for the webpage 

```js
function App() {
    return React.createElement('div', null, 
        React.createElement('h1', null, 'Catalog'),
        React.createElement(ProductsList)
    );
}
```
- Create and render the top level component as usual 

```js
const app = React.createElement(App);
const root = createRoot(document.getElementById('root'));
root.render(app);
```

Passing Properties to a Functional Component 
- a component can receive properties from its parent component 
    - properties are effectively parameters into a component 
    - properties help the component decide what to render 

a funtional component receives properties as a single parameter 
- the parameter is an object that contains all properties 

For example, `ItemsList` can access the `items` property as follows: 

```js
function ItemsList(props) {
    return React.createElement('ul', null, 
        props.items.map(
            (item, i) => React.createElement('li', {key: i}, item)
        )
    );
}
```

Destructuring: 
- destructuring is a language feature in ECMAScript 2015 
- extracts properties from an object into separate variables 

```js
let obj = {"fname": "Andy", "salary": 100.99, "team": "Swans"};
let {fname, team} = obj;
console.log(`Hi, ${fname}, your favourite team is ${team}`);
```

```js
React.createElement(SomeComponent, {"x": 10, "y": 20, "z": 30});
//SomeComponent can destructure its properties like this

function SomeComponent(props) {
    let {x,y,z} = props;
    //...
}

//Or it could do it like this
function SomeComponent({x,y,z}) {
    //...
}
```

### Lab 3
- Refactor the `library` web page from the previous lab so that it uses functional components instead of class-based components 

Steps: 
1. Switch each class component to a functional component 
2. Destructure props being passed to the functional components 

This was fairly straight forward and simple. The only thing the solution did differently is how they passed the `App` component to be rendered. 

This was what I did: 

```js
const app = React.createElement(App);
const root = createRoot(document.getElementById('root'));
root.render(app);
```

This was the courses solution: 

```js
const root = createRoot(document.getElementById('root'))
root.render(React.createElement(App))
```


## Other things I learned:

- N / A


## Questions I have: (April 16, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/blob/master/ReactDev/Student/03-FunctionalComponents/index.html)

## Link to Example JS File

- [**React Course: Lab 3: HTML**](../Code/46-react-course-lab-3/index.html)
- [**React Course: Lab 3: CSS**](../Code/46-react-course-lab-3/main.css)