const initialGrades = [80, 90, 98, 71, 87, 65];

//multiples each number in the array by 0.10
const myFunction = n => { 
   return n = n * 0.10;
};

//Number(num.toFixed(2)) -> includes only 2 decimal places and Number() ensure that it remains a number instead of becoming a string
const gradePoints = initialGrades.map(myFunction).map(num => Number(num.toFixed(2)));

console.log(`Allocated Grade Points: ${gradePoints}`);