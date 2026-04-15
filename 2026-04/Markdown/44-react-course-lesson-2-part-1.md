# React Course: Lesson 2: Creating Class Based Components (Part 1)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 
(I didn't end up getting as far in the course as I wanted to today. Other life commitments took priority. Sometimes that happens, and we just have to accept it.)

The need for components 
- it's unrealistic to include all code needed for a user interface within a single element 

A more modular approach is to divide and conquer 
- partition the UI into a bunch of components 
- each component is responsible for one part of the UI
    - each component is relatively small and focused 
    - easier to develop 
    - easier to test 
    - potentially reusable 

There are two ways to develop components in React 
- via classes and inheritance
- via functional components 

React has a class named `React.Component`
- has common capabilities needed by all components 
- E.g. a `render()` function to render the component's UI 

To define a class based component 
- define a class that inherits from React.Component
- override `render()` to render the components UI 

```js
class ProductsList extends React.Component {
    render() {
        return React.createElement('p', null, 'Products Data List');
    }
}
```

To create a class based component instance
- Call React.createElement()
- Pass the class type (not an HTML tag) as the first parameter

```js
React.createElement(ProductsList);
```

It's common place to define a top level component that creates the overall UI for the webpage 

```js
class App extends React.Component {
    render() {
        return React.createElement('div', null, 
            React.createElement('h1', null, 'Catalog'),
            React.createElement(ProductsList)
        );
    }
}
```

Create and render the top level component as follows: 

```js
const app = React.createElement(App);
const root = createRoot(document.getElementById('root'));
root.render(app);
```



## Other things I learned:

- N / A

## Questions I have: (April 14, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A