# React Course: Lesson 2: Creating Class Based Components (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

Today is Day 4 of my React Course, which includes a mini lab. 

Passing properties into a class based component 
- define a single component named `ItemsList` for example
- then you can create multiple instances of 'ItemsList' and change what's rendered by passing different properties into each instance 

When you create and instance of a class component, the second argument is always the props object which contains properties and those properties get passed in as parameters into the component

```js
React.createElement(ItemsList, {items: products});
```

When you have a class component, it has a field called `this.props` which points to whatever you pass in as the second parameter
- `this.props.items` --> products
- points to a JavaScript object that contains all of the property names and values

Note:: 
- in React, a `prop` (short for property) is a way to pass data from one component to another - typically from a parent component to a child component

**Example:**
1. Array of Products
2. An items list class that returns an unordered list 
3. An app class that will eventually be rendered in the UI 

```js
const products = [
    'televison',
    'laptop',
    'mattress',
    'kitchen table'
];

class ItemsList extends React.Component {
    render() {
        return React.createElement(
            'ul',
            null,
            this.props.items.map((item, i) => React.createElement('li', {key: i}, item))
        );
    }
}

class App extends React.Component {
    render() {
        return React.createElement('div', null, 
            React.createElement('h1', null, 'Catalog'),
            React.createElement(ItemsList, {items: products}, null)
        );
    }
}
```

`App` creates an instance of `ItemsList` and passes the object `{items: products}` into `this.props`
- `this.props.items` accesses the value associated with the property named `items`
- `map()` stores the transformed values of each item after the function has been applied 
    - however, instead of storing it in a variable, it is returned and rendered directly 


### Lab 2
- Refactor the 'library' webpage from lab 1 so that is uses components to render portions of the web page 

**Steps**
1. Create an `ItemsList` component
2. Create the `App` component that will be the top level element that gets rendered 
3. Figure out how to properly display books and films 
    - this is just done by using the method `toString()`

```js
class ItemsList extends React.Component {
    render() {
        let tagName = this.props.ordered ? 'ol' : 'ul';

        return React.createElement(tagName, null,
            this.props.items.map((item, i) => React.createElement('li', {key: i}, item.toString()))
        );
    }
}


class App extends React.Component {
    render() {
        return React.createElement('div', null, 
            React.createElement('h1', null, 'My Library'),
            React.createElement('h2', null, 'Books'),
            React.createElement(ItemsList, {items: books, ordered: true}, null),
            React.createElement('h2', null, 'Films'),
            React.createElement(ItemsList, {items: films, ordered: false}, null)
        );
    }
}
```

I was able to figure out how to do the above steps myself, however, there was an optional portion in the lab to set up the data as tables and I wasn't able to complete this part without watching the solution video. 
- I got stuck on how the different values are referenced since the key names are different for books and films 

The solution for the tables part was fairly simple once I went through the provided solution: 

The format of the table was broken down into 4 separate components: 
1. Table
2. TableHead
3. TableBody 
4. TableRow 

The main component that is rendered is `Table` which contains instances of `TableHead` and `TableBody` which in turn contain instances of `TableRow`. Or more precisely: 

- TableRow 
    - TableHead
        - TableRow
    - TableBody
        - TableRow 

```js
class Table extends React.Component {
    render() {
        return (
            React.createElement("table", null,
                React.createElement(TableHead, {sampleObject: this.props.items[0]}),
                React.createElement(TableBody, {objects: this.props.items})
            )
        )
    } 
}
```
- `this.props.items[0]`
    - It assumes the array is non-empty
    - It uses the first object as a schema reference (to extract keys)
        - what it's going to be looking at are the `keys`, and regardless of what item it's looking at, the keys will remain the same 

It passes this value to `TableHead` and by using `Object.keys` is able to determine the name of the keys in the object passed, which becomes the Table Headings. 
- this way it doesn't matter that Books and Films have different `key` values as it's not explicitly using the `keys` by name, but instead saving them to another object which will be looped through 

```js
class TableHead extends React.Component {
    render() {
        return React.createElement("thead", null,
            React.createElement(TableRow, {data: Object.keys(this.props.sampleObject), head: true})
        )
    }
}

class TableRow extends React.Component {
    render() {
        const elem = this.props.head ? "th" : "td";
        return React.createElement("tr", null,
            this.props.data.map((d, i) => React.createElement(elem, {key: i}, d))
        )
    }
}
```

The same thing is done with the `values` of the items, but instead of a single item, it passes the entire object through as it's now looking at the values which will change for each item. 


## Other things I learned:

- N / A


## Questions I have: (April 15, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/blob/master/ReactDev/Student/02-ClassComponents/index.html)

## Link to Example JS File

- [**React Course: Lab 2**](../Code/45-react-course-lab-2/index.html)