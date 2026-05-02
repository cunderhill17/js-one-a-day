# React Course: Lesson 11: Routing Techniques (Part 1) 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

Most React applications make use of routing 
- Define multiple components in the application 
- Define a route table that maps components to paths 

When a user visits a path defined in the route table
- React router instantiates and renders the component mapped to that path 

Important points to note in the code: 
- `package.json`
    - specifies the dependencies for React router 

### Routing Techniques 

Parameterized Routes 
- routes that include a parameter 

Nested Routes (tomorrow's note)
- Routes defined inside other routes that render their components within a parent layout, allowing shared UI and hierarchical navigation 

Loading Data for a Route (tomorrow's note)
- you can fetch or prepare the data a routes component needs before or during rendering, often using route-specific loader functions so the UI has the necessary data as soon as it appears. 

### Parameterized Routes

- `/product/:id`

How this would look: 

```jsx
{path: '/products', element: <Products />},
{path: '/product/:id', element: <Product />}
```

The colon `:` indicates a parameter, and `id` is the name of the parameter 

In React Router, the `useParams()` hook returns an object of key-value pairs, representing the dynamic URL parameters (like :id) from the current route, so your component can read values directly from the URL. 

```jsx
import { useParams } from 'react-router-dom';
```

Within the component 
- `const {id} = useParams()`
    - 'id' is destructured

Note:: You would want to ensure that you have proper error handling, such as if a user forgets to include an id, or they include an id that doesn't exist 

```jsx
const {id} = useParams()

if(!id) {
    return (
        <div>
            <h1>Product id not specified<h1/>
        </div>
    )
}

const prod = Catalog.getProductItemById(id);

if(!prod) {
    return (
        <div>
            <h1>Product {id} not found </h1>
        </div>
    )
}
```

You can navigate to a route programmatically
- To do this, use the `useNavigate()` hook 

```jsx
import { useNavigate } from 'react-router-dom'
//... Other necessary code

function SomeComponent() {
    const navigate = useNavigate()
    navigate(somePath) //Should be placed in an event handler, otherwise it would automatically run 
    //... Other necessary code
}
```

```jsx
<input type="text" placeholder="Enter local URL" onKeyUp={(e: any) => {
    if(e.key === 'Enter') {
        navigate(e.target.value);
    }
}}>
```
- `e.target` --> textbox (input)
- `value` --> value in the textbox (input value)




## Other things I learned:

- N / A


## Questions I have: (May 2, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A