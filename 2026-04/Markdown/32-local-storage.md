# Local Storage

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

Local storage is part of the browsers Web Storage API. It lets you store key-value pairs directly in the user's browser and the data: 
- persists even after page reloads or browser restarts
- is scoped to a specific origin (domain + protocol + port)
- is not sent to the server with requests (unlike cookies)

**Basic Usage**

Save Data 

```js
localStorage.setItem("username", "Alice");
```

Read Data

```js
const user = localStorage.getItem("username");
console.log(user); //"Alice"
```

Remove Data 

```js
localStorage.removeItem("username");
```

Clear Everything 

```js
localStorage.clear();
```

**Storing Objects**
- local storage only stores strings, so in order to store objects, you need to use JSON

```js
const user = {name: "Alice", age: 25};

//save
localStorage.setItem("user", JSON.stringify(user));

//retrieve
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); //"Alice"
```

**Limitations**
- storage limits --> 5-10 MB depending on the browser
- Synchronous API --> can block the main thread if overused 
- security --> accessible via JavaScript --> vulnerable to XSS attacks
    - don't store sensitive data (tokens, passwords)

Common Use Cases
- theme preferences (dark/light mode)
- saving form inputs
- caching API responses 
- remembering user settings 

**Example: Dark Mode Toggle**

```js
//load saved theme 
const theme = localStorage.getItem("theme");
if(theme === "dark") {
    document.body.classList.add("dark");
}

//toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}
```

When NOT to use local storage 
- avoid it when: 
    - you need secure storage 
    - you're storing large datasets
    - you need complex querying 


Because local storage only stores strings, you can't directly 'update' part of an object. You have to: get the object, parse it, modify it, save it back 

**Example: Add a new property to an object**

```js
//1. Get existing data 
const stored = localStorage.getItem("user");

//2. Parse (or initialize if null)
const user = stored ? JSON.parse(stored) : {};

//3. Modify it 
user.age = 30;

//4. Save it back 
localStorage.setItem("user", JSON.stringify(user));
```

**Example: Add items to an array inside an object**

```js
//Get existing object 
const stored = localStorage.getItem("cart");
const cart = stored ? JSON.parse(stored) : {items: []};

//Add new item 
cart.items.push({id: 1, name: "Laptop"});

//Save back 
localStorage.setItem("cart", JSON.stringify(cart));
```

**Important Gotchas**

1. Always handle null 
- if the key doesn't exist
    - `JSON.parse(null);` 
        - JSON.parse(null) returns null
        - accessing properties on it causes errors
- always guard it like this: 
    - `const data = stored ? JSON.parse(stored) : {};`

2. Avoid overwriting accidentally
- This will wipe previous data 
    - `localStorage.setItem("user", JSON.stringify({age: 30}));`
- if you want to add, you must merge with existing data 



## Other things I learned:

- N / A


## Questions I have: (April 2, 2026)

- I want to look more into XSS Attacks (and web security in general) as it sounds like an interesting topic 


## Resources

- [**Mozilla Docs: Local Storage**](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


## Link to Example JS File

- N / A