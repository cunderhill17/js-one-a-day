# React Course: Lesson 9: Introduction to Routing 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

A `Single Page Application` (SPA) is a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with it - without reloading the entire page

React has excellent support for implementing SPAs
- define an `App` component that always remains resident
- define multiple sub-components, which can be swapped in and out of the `App` component 
    - each sub-component maps to a logical URL 
    - to display a different sub-component in the browser, simply navigate to the URL for that sub-component

To support routing in a React application, you need the following dependency in `package.json`

```json
"dependencies": {
    "react-router-dom": "^7.6.2",
}
```

If you're using TypeScript, you also need the following: 

```json
"devDependencies": {
    "@types/react-router-dom": "^5.3.3",
}
```

You define routes via `createBrowserRouter()`

```jsx
import { createBrowserRouter } from 'react-router-dom'

import Home from './Home';
import PageNotFound from './PageNotFound';

const router = createBrowserRouter([
    {path: '/', element:<Home/>},
    {path: '*', element:<PageNotFound/>}
])
```

`*` --> represents a 'catch all', if the user navigates to any 'page/URL' not defined, they are directed to the `PageNotFound` component

Use the router in your `App` component as follows: 

```jsx
import { RouterProvider } from 'react-router-dom'

export default function App() {
    return <RouterProvider router={router} />
}
```

In an SPA, you typically want to define a common layout 
- the common layout displays content that is always the same, regardless of the current route
    - e.g. headings, menus, adverts, etc. 

To define a common layout, define a component that renders the following: 
- common UI elements that are invariant 
- an `<Outlet>` element for route specific content 

```jsx
import { Outlet } from 'react-router-dom'

function AppLayout() {
    return (
        <>
            <MyMenu/>
            <Outlet/>
            <MyFooter/>
        </>
    )
}
```

You use the common layout component in the router table as follows: 

```jsx
import { createBrowserRouter } from 'react-router-dom'

import Home from './Home';
import PageNotFound from './PageNotFound';

const router = createBrowserRouter([
    {
        element: <AppLayout/>,

        children: [
            {path: '/', element:<Home/>},
            {path: '*', element:<PageNotFound/>}
        ]
    }
])
```


## Other things I learned:

- N / A


## Questions I have: (April 27, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A