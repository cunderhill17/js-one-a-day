# First React App

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

My plan for today's JavaScript learning, is to create my first React app. 

1. install React 
2. Figure out how to include an external style sheet 
3. Display a button in the UI 
4. Add an event handler to the button in order to increase a counter
5. Add styling to the button

The overall structure is very simple, but it will allow me to see various parts at a very basic level to ensure that I understand how it works. 

### Steps that I took: 

1. I ran this command in the terminal within my project folder: `npm create vite@latest .`
2. I selected React as the framework and JavaScript as the variant 
3. I then selected `yes` to install with npm 
4. Once everything was finished, I copied the local server URL to view the project in my browser: `http://localhost:5173/`


The project included a very basic HTML file called `index.html` with the following code: 

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>first-react-app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Note:: there seem to be two CSS files that were created with the initial project setup
- App.css
- index.css 

However, they don't seem to be linked directly to the HTML file, `index.html`

Upon further investigation, it looks like `App.css` is being imported into `App.jsx` and `index.css` is being imported into `main.jsx`

The file hierarchy seems to be
- App.css --> imported into App.jsx
- App (component from App.jsx) & index.css --> imported into main.jsx
- The main.jsx file is included in the index.html file 
    - It then renders the `<App/>` component in the DOM so it can be viewed by the UI

This appears to be the code that makes everything viewable in the UI

```jsx
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <App />
        </StrictMode>,
    )
```

Questions:: 
1. The default setup uses `getElementById` to select the element in the DOM, but would it be better to use `querySelector`? 
2. what does `createRoot()` do? 
3. What is `<StrictMode>`?


### Remove Default Content 

The next step I'm going to take is removing all the default content so that I can attempt to add my own in. 

1. Got rid of all styling in the App.css and index.css files (however, I kept the files themselves to add my own styling to)
2. Got rid of all of the code within the function `App()` which provided the content for the default template application

At this point, all you could see was a blank page in the browser.

I then looked at my notes I'd taken for `React Basics` to reference how to set up a component. This is what I had so far: 

```jsx
import { useState } from 'react'
import './App.css'


function MyButton() {
    const [count, setCount] = useState(0);

    return (
        <button className='firstBtn'>Click Me!</button>
    );
}


function App() {
    return (
        <div>
            <h1>This is my first app!</h1>
            <MyButton/>
        </div>
    );
}

export default App
```

It displayed properly in the browser, but I still needed to add in functionality so that the counter increased when clicking the button, and the updated count displayed in the browser. 

I ended up changing the way the functions were structured. I moved the count to `App()` so that both `MyButton()` and `App()` could have access to it. Then I added a function for what would happen when the button was clicked, passing the function into the button component. 

```js
import { useState } from 'react'
import './App.css'


function MyButton({ onClick }) {

    return (
        <button className='firstBtn' onClick={onClick}>Click Me!</button>
    );

}

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>This is my first app!</h1>
            <MyButton onClick={handleClick} />

            <div>
                {count}
            </div>
        </div>
    );
}

export default App
```


## Other things I learned:

To stop running the project: 
- press `CTRL + C`
- to start the project again, run the command: `npm run dev` in the terminal within the project folder 
    - then view the project in the browser using: `http://localhost:5173/`


## Questions I have: (April 11, 2026)

- Why are CSS files included/imported this way instead of being linked to the HTML file? 


## Resources

- [**React: Quick Start**](https://react.dev/learn#updating-the-screen)
- [**My Notes: React Basics**](40-react-basics.md)


## Link to Example JS File

- [**First React App Example**](https://github.com/cunderhill17/first-react-app)