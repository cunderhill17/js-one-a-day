# React Basics

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

React apps are made out of components. A component is a piece of the UI that has it's own logic and appearance. 
- a component can be made as small as a button or as large as an entire page
- React components are JavaScript functions that return markup

```jsx
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
```

Now that you've declared `MyButton`, you can nest it into another component

```jsx
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}
```

React component names must always start with a capital letter, while HTML tags must be lower case.

The `export default` keywords specify the main component in the file. 

The markup syntax is called `JSX`
- it is stricter than HTML
- you have to close tags like `<br/>`
- your component can't return multiple JSX tags. You have to wrap them in a shared parent, like a <div></div>, or an empty <>...</> wrapper. 

```jsx
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello There!</p>
        </>
    );
}
```

Adding Styles 
- In React, you specify a CSS class with `className`. It works the same way as the HTML class attribute. 
- `<img className="avatar"/>`
- then you write the CSS rules for it in a separate CSS file

```css
.avatar {
    border-radius: 50%;
}
```

You can `escape into JavaScript` from JSX attributes, but you have to use curly braces instead of quotes
- switch from writing plain text into running JavaScript code 

Curly Braces --> evaluate JavaScript 
- `src = {user.imageUrl}`
- this means: 
    - look at the variable `user.imageUrl` in JavaScript 
    - take its value 
    - pass that value into the src attribute
- instead of a fixed string, it's using dynamic data 

You can use the style attribute when your styles depend on JavaScript variables 

```jsx
<img
    className="avatar"
    style = {{
        width: user.imageSize,
        height: user.imageSize
    }}
/>
```

- `style={{}}` is not a special syntax, but a regular {} object inside the style={} JSX curly braces 

### Conditionals 
- in React, there is no special syntax for writing conditons. You'll use the same techniques as you use when writing regular JavaScript. 

**Example: using an if statement to conditionally include JSX**

```jsx
let content;
if(isLoggedIn) {
    content = <AdminPanel/>;
} else {
    content = <LoginForm/>;
}

return (
    <div>
        {content}
    </div>
);
```

### Rendering Lists
- you will rely on JavaScript features like `for` loop and the array `map()` function to render lists of components

**Array of Products**
```jsx
const products = [
    {title: "Cabbage", id: 1},
    {title: "Apples", id: 2},
    {title: "Garlic", id: 3},
];
```

Inside your component, use the map() function to transform an array of products into an array of `<li>` items 

```jsx
const listItems = products.map(product => 
    <li key={product.id}>
        {product.title}
    </li>
);

return (
    <ul>{listItems}</ul>
);
```

Notice how everything `<li>` has a key attribute. For each item in a list, you should pass a string or number that uniquely identifies that item among its siblings. 
- usually a key should be coming from your data, such as a database id

### Responding to Events
- You can respond to events by declaring event handler functions inside your components 

```js
function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}
```

Updating the Screen
- often you'll want your component to 'remember' some information and display it 
- to do this, add state to your component 

First, import `useState` from React
- `import {useState} from 'react';`
- Now you can declare a state variable inside your component 

```jsx
function MyButton() {
    const [count, setCount] = useState(0);
    //...
}
```

You'll get two things from `useState`, the current state (count) and the function that lets you update it (setCount)
- you can give them any names, but the convention is to write: `[something, setSomething]`

The first time the button is displayed, `count` will be 0 because 0 was passed to useState()
- when you want to change state, call setCount() and pass the new value to it 

```jsx
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
```

React will call your component function again, this time the count will be 1, then 2, and so on. 

If you render the same component multiple times, each will get its own state and will be updated independently of each other. 




## Other things I learned:

- The React documentation mentioned another site that I want to look at as it seemed to have a lot of information regarding JavaScript: 
    - [**JavaScript Info**](https://javascript.info/)


## Questions I have: (April 10, 2026)

- N / A


## Resources

- [**React: Quick Start**](https://react.dev/learn#updating-the-screen)


## Link to Example JS File

- N / A