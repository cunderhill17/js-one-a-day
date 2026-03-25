# JavaScript Challenge: Calculator

1. Premise of the Challenge
2. What concepts did it reinforce? 
3. Challenges faced
4. Resources
5. Link to Code Files


## Premise of the Challenge 

The purpose of the challenge was to create a basic functional calculator that allows you to perform specific operations 
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Modulo


## What concepts did it reinforce:

1. It finally cemented how important regex are, though I still have some practice to do before learning to write the patterns on my own 
2. It made me think about how many unusual ways there are to break something when you take into consideration that how someone else uses an application may not necessarily be the way you intended it to be used. 



## Were there any challenges I faced? (March 22, 2026)

I got the basic functions of the calculator figured out pretty quickly

1. Adding the numbers / operators to the viewport
2. Separating the different parts of the 'viewport string' into an array based on number or operator 
3. Setting up a switch statement to test for which operator I was using and then performing that operation 
4. Appending the result to the viewport
5. clearing the viewport in case the user made a mistake 

However, there were some 'test cases' that I didn't take into account at first / had trouble figuring out 

1. How to handle multiple operations in the same equation (eg. 8 + 5 * 2) / Order of Operations (BEDMAS)
    - this one was the most difficult out of all the cases, though I was fortunate that I didn't have to take exponents into consideration as they weren't a part of my application 
    - In order to solve this problem, I needed to figure out a way to loop through the entire array in order to handle an 'unlimited' number of numbers / operations rather than simply hard coding the expression for a 3 part equation (number operator number)
    - More importantly though, I had to isolate the operations that needed to be completed first, while still keeping division by zero in mind. 

Solution: 

- I ended up using a for loop to iterate through the array of objects, checking first whether the object contained a number or operator. 
- If it was an operator then I checked whether it was one of the first 3 that needed to be completed (/, *, %)
- If it was one of the first three operators, it would select the number on either side of the operator in order to perform that part of the equation. 
- It would then replace the operator and the two numbers used with the result of the calculation, repeating these steps until it gets to the end of the array 
- It would then complete a second pass of the array in order to perform the other operations (if there are any).


2. Division by 0 (8 / 0)
    - this one was pretty straight forward once I realised it was a problem. As you just needed to add an if statement to the specific section with the division operator to check if the second value was a zero, and if it was then you made the result 'undefined'

3. Multiple operators in a row (6+-9)
    - Again, the problem for this one was less about finding the solution, and more about realising it was a problem in the first place, as I never considered the possibility of trying to use two operations in a row 
    - This one came down to checking whether the previous character was an 'operator' and if it was, then it replaced the previous operator with the new one that the user selected. 

4. Multiple decimal points in a number (6.5.1 + 7)
    - I had originally thought I had this one figured out, as I had written a rule to compare the number of decimals to operators which I thought would determine if you were putting more than one decimal in the same number. However, it broke if you added no decimals in the first number and then added two decimals in the second number 
    - The solution came down to isolating the current number and checking how many decimals are being used. If you split the current string into parts (each separated by the operator), then you can always select the most recent number by searching through the array of strings using the length property -1. 



## Resources

- N / A


## Links to Coding Files

- [**Code Files: HTML**](../../Examples/Calculator/index.html)
- [**Code Files: CSS**](../../Examples/Calculator/main.css)
- [**Code Files: JS**](../../Examples/Calculator/main.js)


