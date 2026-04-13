# React Course: Lesson 1: Getting started with React (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

Today is Day 2 of my React Course, which includes a mini lab. 

Creating a hierarchy of React elements
- `createElement()` can take a variadic list of child elements, so you can create a hierarchy of elements 

```js
const ul = React.createElement('ul', null,
    React.createElement('li', null, 'Item 1'),
    React.createElement('li', null, 'Item 2'),
    React.createElement('li', null, 'Item 3')
);
```

To render a hierarchy of React elements, you just render the root element in the tree 

```js
const root = createRoot(document.getElementById('root'));
root.render(ul);
```

Note:: each `createElement()` can also contain 1 or more createElement()'s which is what creates the tree structure 

- Div
    - h1
    - ul 
        - li
        - li
        - li
        - li
    - h1
    - ul
        - li
        - li 
        - li 

Creating a data-driven user interface 
- create an array to hold your data 

```js
const products = [
    'computer', 
    'television', 
    'cell phone'
];
```
- convert each array item into its own element 

You can use `map()` to map array items to React elements

```js
someArray.map((arrayItem, index) => React.createElement(
    htmlElement, htmlProperties, htmlContent
));
```

`map()` takes a lambda parameter 

- The lambda receives two arguments (array item, index)
- It then creates and returns a React element 

Mapping the products array into a <li> collection 

```js
const prodList = React.createElement(
    'ul',
    null, 
    products.map((p,i) => React.createElement('li', {key: i}, p))
);
```

Note:: `key` is a React attribute used to keep track of the different elements when there's more than one of the same kind, so they are treated as 'unique'


### Lab 1: 
- create a simple React application that displays information about books and films in a library 
- The base code is provided on GitHub (link below)

**Format:** 

My Library 

Books
- book 1
- book 2
- book 3

Films 
- film 1
- film 2
- film 3

**Steps:** 
1. Import React libraries 
2. create div 'root' element where content will eventually be rendered \
3. set up the main element that will be rendered as well as the `createRoot` section 
4. Add the headings to the main element 
5. Map the Books and Films arrays to React elements 
    - then add them to the main element that will be rendered 
6. Add in a title attribute fro the list items for the tooltip 


### Challenges I had: 

1. The first time I did step 5, I forgot that books and films got their information from classes, and therefore are accessed through dot notation 
    - I originally had `book` and `film` instead of `book.title` and `film.title`
2. I forgot the '()' when calling the class method `toString` in order to make the tool tip. 
    - I originally had `book.toString` and `film.toString` instead of `book.toString()` and `film.toString()`

These are both things I absolutely know how to do, but I think it's easy to make simple mistakes when you're over confident about something. It's important to always review code for even the simple mistakes that people can often overlook. 

```js
    const booksList = React.createElement('ul', null, 
        books.map((book, i) => React.createElement('li', {key: i, title: book.toString()}, book.title))
    );

    const filmsList = React.createElement('ul', null, 
        films.map((film, i) => React.createElement('li', {key: i, title: film.toString()}, film.name))
    );
```


## Other things I learned:

- Lambda Function 
    - is a quick one line function you write without formally defining it (arrow function?)
    - the parameter is the value you pass into it

## Questions I have: (April 13, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/tree/master/ReactDev/Student/01-GettingStarted)

## Link to Example JS File

- [**React Course: React Foundations**](../Code/43-react-course-lab-1/index.html)