# React Course: Lesson 4: Using JSX (Part 1) 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

React supports a light weight syntax called `JSX`
- a combination of JavaScript and XML
- enables you to create React elements concisely via XML

```jsx
const banner = (<h1>Welcome</h1>);
```
- the `<h1>Welcome</h1>` is converted into React.createElement()

Browsers don't understand JSX syntax directly
- JSX must be transpiled into regular JavaScript (e.g., React.createElement calls)
- You can use the `Babel Transpiler` to do this 

1. Add a script tag to download the Babel transpiler 
2. Embed JSX code inside: `<script type="text/babel">`

```jsx
<script src="URL FOR BABEL"></script>
<script type="text/babel">
    //...Put JSX code here
</script>
```

JSX elements can contain: 
- text content 
- JavaScript expressions
- other nested elements (as deeply nested as you'd like)

```jsx
const productsList = (
    <ul>
        <li>Television</li>
        <li>Laptop</li>
        <li>Cell Phone</li>
    </ul>
);
```

You can use JSX in components 

```jsx
function ItemsList() {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                <li>Television</li>
                <li>Laptop</li>
                <li>Cell Phone</li>
            </ul>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<ItemsList/>);
```
- the tags need to have the same capitalization 
- every start tag needs to have an end tag (this could be with self-closing tags)

```js
<script data-type="module" type="text/babel">
```
- the `data-` prefix is a standard JavaScript technique to add custom attributes 
- enables us to effectively set the 'type' attribute twice, to "module" and "text/babel"
    - `module` allows it to import from other modules 
    - `text/babel` allows the script to be targeted by `Babel` and transpiled 

JSX elements can contain JS expressions 
- you must enclose JS expressions in {} braces 

```js
const data = ["apples", "oranges", "pears"];
const ui = <div>There are {data.length} fruits </div>;
```

JSX elements can create data-driven UI content 
- use {} to enclose JS code 
- write an expression to create data driven UI content 

```js
const fruits = ["apples", "oranges", "pears"];

const ui = (
    <div>
        {fruits.map((fruit, i) => <div>{i} : {fruit}</div>)}
    </div>
);
```


## Other things I learned:

- N / A


## Questions I have: (April 17, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A