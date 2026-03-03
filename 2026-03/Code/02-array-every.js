const myArray = [5, 7, , 25, 9, 61]; //note the empty slot between 7 and 25

const myfunction = (currentElement) => currentElement > 4; //checks to see if the current element is greater than four

console.log(myArray.every(myfunction)); //Expected Output: True

