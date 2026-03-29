# Regular Expressions (Part Three)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

**Groups and Backreferences**

A capturing group lets you extract part of a match 

```js
const str = "John Smith";
const regex = /(\w+)\s(\w+)/;

const match = str.match(regex);
console.log(match)
```

When you put parentheses in a regex: (\w+), you're telling the engine two things: 
1. Treat this part as a unit 
2. remember what matched here

A backreference means, match the exact same text that was captured earlier 

/(\w+)\s\1/
- applied to "hello hello" 

1. (\w+)
    - matches "hello"
    - stored as group 1
2. \s
    - matches space
3. \1
    - matches whatever group 1 matched 
    - must match "hello" in this instance 

Why Groups Exist: 

1. Extract Data 

```js
const match = "2026-03-08".match(/(\d{4})-(\d{2})-(\d{2})/);
```

You get: 
- year
- month 
- day 

2. Reuse matched text
- /(\w+)\s\1/ 
    - detect duplication (could potentially be used in password confirmation)

3. Apply repetition or structure 
- (ab)+

matches: 
- "ab"
- "abab" 
- "ababab" 
- etc. 

Non Capturing Groups 

(?:ab)+ 
- same matching behavior as (ab)+ but it doesn't store anything 
- This matters because unnecessary capturing wastes memory and shifts group numbering

Named Groups (readability upgrade)
- instead of: /(\d{4})-(\d{2})-(\d{2})/

You can write: 
- /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

Now you can access: 
- match.groups.year (month, day)

Parentheses are used to capture a group "()"
- they do two things at once 
    - group part of the pattern 
    - capture what matched inside 

Matches are stored like an array, but with additional properties

It may look like: 

[
    "John Smith", //full match
    "John",  //group 1
    "Smith"   //group 2
]

But it also has extras: 
- match.index --> where match starts 
- match.input --> original string 
- match.groups --> named groups (if any)


**Example: Extracting Part of a Date**
 
 ```js
const str = "2026-03-28";
const match = str.match(/(\d{4})-(\d{2})-(\d{2})/);

console.log(match);
//["2026-03-28", "2026", "03", "28"]
 ```

 **Example: Extract User Info**

 ```js
const str = "John (25)";
const match = str.match(/(?<name>\w+)\s\((?<age>\d+)\)/);
console.log(match.groups); 
// {name: "John", age: "25"}
 ```

 **Example: detect duplicate words**

 ```js
const str = "This is is a test";
const result = str.match(/\b(\w+)\s+\1\b/);
console.log(result);
// ["is is", "is"]
 ```

 use case --> catching typing mistakes in text editors or validation tools 

 **Example: Reformat Names**

 ```js
const str = "Doe, John";
const result = str.replace(/(\w+),\s(\w+)/, "$2 $1");
console.log(result);
// "John Doe"
 ```

 Use Case: transforming data formats (CSV cleanup, imports, etc.)



## Other things I learned:

- N / A


## Questions I have: (March 28, 2026)

N / A 


## Resources

- [**Mozilla Docs: Regular Expressions: Groups and Backreferences**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)


## Link to Example JS File

- N / A