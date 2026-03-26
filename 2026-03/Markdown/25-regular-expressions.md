# Regular Expressions

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

`Regular Expressions` are patterns used to match character combinations in strings 
- in JavaScript, regular expressions are also objects 
- these patterns are used with the `exec()` and `test()` methods of RegExp, and with the `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()`, and `split()` methods of strings. 

You construct a regular expression in one of two ways: 
1. Using a regular expression literal, which consists of a pattern enclosed between two slashes --> /.../ 
2. Calling the constructor function of the RegExp object 

**Regular Expression Literal** 

```js
const regex = /abc/;
```
- this creates a regex that matches the string 'abc'
- you can also add `flags` after the closing slash 

```js
const regex = /abc/i;
```
- 'i' --> case insensitive 

**RegExp Constructor** 
- You create a regex using the RegExp class like a function 

```js
const regex = new RegExp("abc");
```

With Flags 

```js
const regex = new RegExp("abc", "i");
```

The two methods do the same thing, but they're useful in different situations

Use `/.../` (literal) when: 
- your pattern is fixed (doesn't change)
- you want clearner, more readable code

Use `new RegExp()` when: 
- your pattern is dynamic (built from variables)

```js
const word = 'hello';
const regex = new RegExp(word);
```

With RegExp(), you must escape backslashes more carefully

```js
//Literal 
const regex1 = /\d+/;

//Constructor 
const regex2 = new RegExp("\\d+"); //double backslash
```

**Example**
- Search bar with filter 

```js
const items = ["Apple", "Banana", "Grapes", "Pineapple"];

function searchItems(query) {
    const regex = new RegExp(query, "i");

    return items.filter(item => regex.test(item));
}

searchItems('app');
//["Apple", "Pineapple"]
```

**Using Simple Patterns** 
- Simple patterns are constructed of characters for which you want to find a direct match 

**Using Special Characters**
- when the search for a match requires something more than a direct match, such as finding one or more b's, or finding whitespace, you can include special characters in the pattern

### Assertions 

- assertions are conditons about a match, not part of the match itself 
- they check --> "is this position valid for a match"

They say things like: 
- "start of a line" 
- "end of a word" 
- "edge between word and non word" 

```js
/^hello/ // matches 'hello' only at the start
/world$/ //matches 'world' only at the end 
/\bcat\b/ //matches 'cat' as a whole word, won't match 'scatter'
```

**Look Ahead: check what comes next**
- Look ahead says, 'match this only if something comes after it' 

```js
/hello(?= world)/ //Matches "hello" only if it's followed by " world"
```

**Negative Look Ahead**

```js
/hello(?! world)/ //Matches 'hello' only if NOT followed by ' world'
```

**Look Behind: check what comes before**
- look behind says 'match this only if something comes before it' 

```js
/(?<=\$)\d+/ //matches '100' in $100
```

- /.../ --> defines a regular expression in JavaScript 
- (?<= ...) -->  positive look behind 
- \$ -->  `$` escaped, $ used in the look behind 
- \d --> matches any number from 0 - 9
- `+` --> means one or more --> matches '5', '20', '6000', etc.   


For characters with dual purpose cases, escaping them flips their meaning 
- special --> literal when escaped 
- normal --> special when escaped 


## Other things I learned:

- N / A


## Questions I have: (March 26, 2026)

- Not a question, more of an observation, but I can't believe how much goes into these expressions. I've ran across a few instances where the expressions needed to be used, so I figured it was time I spent some real focus learning them, but I didn't realize how lengthy of a topic they were. 


## Resources

- [**Mozilla Docs: Regular Expressions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [**Mozilla Docs: Assertions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)


## Link to Example JS File

- N / A