# Array `some()` method:

1. What is the concept?
2. Why does it matter? 
3. Other things I learned
4. Link to code example

## What is the concept / What does it do? 

`some()` checks if at least one element in an array passes a condition. 
- It returns true if ANY element passes
- It returns false if NONE pass
- It stops as soon as it finds one match 

**Example:**

const numbers = [3, 7, 12, 19];

const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); 

**Explanation**

`some()` iterates through the `numbers` array checking to see if any number is even. It does this by using `num modulo 2 (num % 2)` which returns the remainder after the number has been divided by 2. If the remainder is 0, then the value is even. It stops after 12 (because it's even), returning the value true and saving it in the variable `hasEven` which is then logged in the console. 

## Why does it matter? 

Consider methods or loops that have to iterate through an entire array regardless of whether a condition has been met. This could mean upwards of thousands of items, with the `time-complexity` being O(n) as it scales proportionately to input size. Whereas, with `some()`, the method exits its loop once its condition has been met, so while the worst case is still O(n) as the condition could fail, the best case is O(1), thereby reducing potential runtime significantly as it allows for early termination. 


## Other things I learned:

My JavaScript knowledge comes primarily from using it with HTML, so I wasn't aware that you could run `.js` files directly in the terminal. While preparing these notes and example, I learned that you can use Node.js to run a JavaScript file with the command:

```bash
node file-name.js
```

Keep in mind that you need to be in the same folder as the .js file in order to run the command. 

## Link to Example JS File

[**some() method example**](../Code/01-array-some.js)