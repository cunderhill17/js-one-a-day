const myArray = [6, '6', 12, '55', 'Four'];

//Number.isFinite can be used to check if an element is a number and if the number doesn't belong to positive infinity, negative infinity, or NaN
const numbers = myArray.filter(Number.isFinite);

console.log(numbers);
//returns [6, 12] - the rest are strings, not numbers