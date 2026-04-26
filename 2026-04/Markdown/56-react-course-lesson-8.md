# React Course: Lesson 8: Creating A Complete React Application 

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

In a professional setting, you would typically: 
- put each component in a separate file (modularity)
- Transpile JSX into pure JS at dev-time (not at run time)

You can use tools to help you do this, with a current popular tool being `Vite`
- creates a template React app, config, etc. 
- [**Vite Documentation**](https://vitejs.dev/)

install `Vite` as follows (requires Node.js 18 or above)
- `npm install -g vite@latest`

Also install a related package: `create-vite`
- `npm install -g create-vite@latest`

To verify correct installtion 
- `npm list -g`
    - list the node package manager packages which have been installed globally 

You can use `Vite` to create many different types of applications, including: 
- React, Angular, Vue, Svelte, etc. 

Steps: 
1. Open a command window 
2. Go into the directory you want to create the application in 
3. run the command: `npm create vite@latest`

It will then provide you with different options
1. Project name (provided by react course: 'demo-app')
2. Framework (provided by react course: React)
3. Variant (provided by react course: TypeScript)

Go into the newly created folder and install the packages for your application as follows: 
- cd demo-app 
- npm install 

When you run a React application, the first file that is going to be executed is `index.html`
- you have a `div` as the root element into which goes all the content that your React application generates
- it also includes a script file that imports the main.jsx file (or in the case of the React course demo --> main.tsx)
    - `tsx` is the TypeScript equivalent 

main.tsx is the 'entry' point for your code, you will hardly ever change it. 

You will always want to use `StrictMode` in your main file 

```jsx
<StrictMode>
    <App/>
</StrictMode>
```

`<StrictMode>` in React is a development only wrapper component that helps you find potential problems in your app. It doesn't render anything visible in the UI - it's purpose is to highlight unsafe or outdated practices and surface bugs earlier. 
- detects unsafe lifecycle methods 
- highlights unexpected side effects 
- warns about legacy features 
- checks for proper cleanup in effects 

To include a stylesheet, you import it into the file that will be using it.
- `import './index.css'`

Running the application in development mode
1. open a shell window 
2. go to the folder your app is in 
3. use the command --> `npm run dev`

When you run the application in development mode, the toolset does the following things: 
- transpiles TS code into JS
- Transpiles JSX/TSX files into JS
- Building the application in memory 
- Starts a dev server to host the application
    - by default the dev server is on `http://localhost:5173`

HMR stands for: **Hot Module Replacement**
- in tools like Vite, webpack, or frameworks built on React, HMR lets your app update parts of the code in the browser instantly, without a full page reload

Building and serving the application in production mode
- optimizes and minifies the code 

- `npm run build`
- This creates a 'dist' folder that contains a production build of your application 

You can now run the application on a production server 

E.g install the Node 'serve' server 
- `npm install -g serve`

Then serve the production build of the app as follows: 
- `serve -s dist -l 8000`
- `-s` --> location of app (i.e the 'dist' folder)
- `-l` --> port to listen on (default is 5000)


## Other things I learned:

- N / A


## Questions I have: (April 26, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026

## Link to Example JS File

- N / A