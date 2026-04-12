# React Course: Lesson 1: Getting started with React (Part 1)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

In order to give structure to my learning `React`, I started a course on LinkedIn Learning called: `React Foundations by Pearson` (link below).
- I'll continue my notes journal by breaking the course down into sections that I complete each day. 
- With the course separated into lessons, I'll probably complete half a lesson each day (as I'm also writing notes, trying out examples, and compiling everything into my JS one-a-day journal)


What is React? 
- light weight library from Facebook
- gives you a logical way to construct your UI code 

React allows you to create apps for: 
- Web browsers 
- iOS / Android native devices (React Native)

Most browsers support an extension called: `React Developer Tools` 
- helps you understand the hierarchy of elements in your UI

React has a small number of libraries, and the two ways to incorporate them into your web app are: 
- download the libraries directly into your app at run time 
- pre-package the libraries into your app at dev-time 

```js
import React from "https://esm.sh/react"
import { createRoot } from "https://esm.sh/react-dom/client"
```
- capital letters usually signify classes while non-capitals are typically used for functions

You call the `React.createElement` function 
- creates an element object which represents something you want to display on your webpage
- you pass in 3 parameters 
    - the element you want to render (h1)
    - a JavaScript object that contains properties 
    - child content of the element 

```js
const obj = React.createElement(
    "h1", 
    {"id": "my-msg", "title": "This is my message"},
    "Hello React!"
)
```
- element to render 
- JavaScript object with properties that become attributes of the element 
- child content of the element 

This creates an object in memory. You then render that element into your web page. 

You call `createRoot` and pass it the element on your webpage where you want to display your code. 

```js
const root = createRoot(document.getElementById('root'))
```
- creates a 'wrapper' around the root element 

In the `root` element, you'll render the object you previously created 

```js
root.render(obj)
```

- A react web app has a single, top-level HTML element which React will use to render the UI
- You typically define it as a <div> like this: 
    - `<div id="root></div>`

`React` is a class that enables you to create element objects, whereas, `createRoot` is a function that creates a 'root' into which you render your React content. 

Each import currently specifies the CDN URL explicitly 
- CND --> content delivery network 

A better approach is to define a `script map`
- a script map defines aliases for actual URLs
- you define a script map once, at the start of your webpage
- the remainder of your webpage can then use the aliases

**Benefits of a Script Map**
- defines a centralized policy for CDN URLs
- makes it easier to maintain your code 

```js
<script type="importmap">
{
    "imports": {
        "react": "https://esm.sh/react",
        "react-dom/client": "https://esm.sh/react-dom/client"
    }
}
</script>

<script type="module">
    import React from "react"
    import { createRoot } from "react-dom/client"
</script>
```

### Understanding the Virtual DOM

Browsers maintain an in-memory tree of objects called the Document Object model (DOM)
- the DOM tree represents the contents of the webpage 

Traditionally, you wold use the DOM API to modify the contents of the webpage programmatically 
- create new elements
- append child elements 
- set attributes 
- etc. 

However, manipulating the DOM directly is tedious
- it's also quite slow 
- when you modify any content in the DOM, the browser re-renders a large portion of the DOM tree 

React introduces the concept of the virtual DOM
- a copy of the browsers real DOM 
- contains light weight copies of objects in the real DOM 

The purpose of the virtual DOM is optimization 
- as you change the content of the virtual DOM with React code, it can choose which particular elements to re-render in the real DOM 
- it doesn't have to re-render the whole DOM 
- React only re-renders nodes that have changed 

You can view the virtual DOM in a browser by using `React Developer Tools` in Chrome 
- open a React webpage in the browser 
- show the DevTools window 
- click the components tab 
- in the search window, click the settings cog 
- in the popup window, select the components tab 
- deselect the 'hide components where' option 


## Other things I learned:

- N / A


## Questions I have: (April 12, 2026)

I'm currently trying to understand the differences between the approach used in the course (which I'll call `plain React`) versus using Vite & JSX. 


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A