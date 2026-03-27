# Regular Expressions (Part Two)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to JavaScript Example


## What is the concept / What does it do? 

 Character Classes 
 - a character class lets you match any one character from a set of characters

 ```js
/[abc]/
 ```
 - This matches 'a', 'b', and 'c'

 Ranges 
 - use `-` to define a range 

 ```js
/[a-z]/ //lower case letters from a - z
/[A-Z]/ //upper case letters from A - Z
/[0-9]/ //digits from 0 - 9

/[a-z]/.test("Hello"); // true (matches 'e')
 ```

 You can combine ranges
 - /[a-zA-Z0-9]/

 Negated Character Classes 
 - use `^` inside `[]` to mean NOT these characters

 ```js
/[^abc]/ //matches anything except 'a', 'b', or 'c'
 ```

 Predefined Character Classes 

 1. \d --> Digit (0-9)
 2. \D --> not a digit
 3. \w --> word character [a-zA-Z0-9_]
 4. \W --> Not a word character 
 5. \s --> White space (space, tab, newline)
 6. \S --> Not white space 
 7. /. special case --> matches any character except newline (unless using 's' flag)

 You can combine character classes 

 ```js
/[^\d]/.test('9'); // false
 ```

Character classes become powerful when combined with quantifiers 

```js
/[0-9]+/ // one or more digits
/[a-z]{3}/ //  exactly 3 lowercase letters
```

Pay attention to where you place characters, as the position can change its meaning (in specific cases) 

```js
/[a-z]/ //'-' defines a range
/[-abc]/ //'-' is used as a literal 
/[a\-z]/ //'-' is used as a literal 
```

Inside [] --> ^ means negation 
Outside [] --> ^ means start of the string 

$ --> used to signify the end of the string 


/^...$/ --> match the entire string from beginning to end  



## Other things I learned:

- N / A


## Questions I have: (March 27, 2026)

- Didn't end up with a lot of notes today as I had other responsibilities to handle. 
- I want to maintain daily studying, but I don't want it to be to the detriment of the rest of the responsibilities I have. 


## Resources

- [**Mozilla Docs: Regular Expressions: Character Classes**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)


## Link to Example JS File

- N / A