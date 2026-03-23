/* ---TEST CASES--- */

/*
    Currently 3 / 6 Tests Pass

    1. how to handle multiple operations in the same equation (eg. 8 + 5 * 2)
    2. How to handle negative numbers (-5 * 7)
    3. Division by 0 (8 / 0) --> PASS (under the condition of a single operator)
    4. Multiple operators in a row (6+-9) --> 
    5. Order of operations (BEDMAS)
    6. Multiple decimal points in a number (6.5.1 + 7) --> PASS 
*/


/* ---VARIABLES--- */

const nums = document.querySelectorAll('.numButton');
const operators = document.querySelectorAll('.operatorButton');
const equalsBtn = document.querySelector('#equalsButton');
const clearBtn = document.querySelector('#clearViewport');
const viewport = document.querySelector('#viewportContent');

const operations = {
    "+": (a,b) => a+b,
    "-": (a,b) => a-b,
    "*": (a,b) => a*b,
    "/": (a,b) => b === 0 ? 'undefined' : a/b,
    "%": (a,b) => a%b,
};


/* ---FUNCTIONS--- */

//Adds a number to the viewport
function insertNum() {
    const value = this.dataset.value;
    let totalDecimals = 0;
    let totalOperators = 0;

    //checks that there aren't more decimal places than there are operators 
    if(value === '.') {
        for(let i = 0; i < viewport.textContent.length; i++) {
            if(viewport.textContent[i] === '.') {
                totalDecimals++;
            }
            if((viewport.textContent[i] === '/') || (viewport.textContent[i] === '*') || (viewport.textContent[i] === '%') || (viewport.textContent[i] === '-') || (viewport.textContent[i] === '+')) {
                totalOperators++;
            }
        }

        if(totalDecimals > totalOperators) {
            return;
        }
    }


    viewport.textContent += `${value}`;
}


//Adds an operator to the viewport
function insertOperator() {
    const value = this.dataset.value;

    let lastChar = viewport.textContent[viewport.textContent.length - 1];

    if ((lastChar === '/') || (lastChar === '*') || (lastChar === '%') || (lastChar === '-') || (lastChar === '+')) {
        let newString = viewport.textContent.slice(0, -1); 

        viewport.textContent = `${newString} ${value}`;
    } else {
        viewport.textContent += `${value}`;
    }

    
}

//Clears viewport of all text - numbers and operators
function clearViewport() {
    viewport.textContent = '';
}

//Finds the total of two numbers and an operator
function findTotal() {
    const totalArray = viewport.textContent.split(/([+\-*/%])/);
    const arr = [];

    console.log(arr);

    totalArray.forEach(item => {
        itemValue = isNumeric(item);

        if(itemValue) {
            arr.push({value: Number(item), type: "Number"});
        } else {
            arr.push({value: item, type: "operator"});
        }
    });

    let result = operations[arr[1].value](arr[0].value, arr[2].value);

    viewport.textContent = `${result}`;
}

function isNumeric(str) {
    return !isNaN(Number(str));
}




/* ---EVENT LISTENERS--- */

nums.forEach(num => num.addEventListener('click', insertNum));
operators.forEach(operator => operator.addEventListener('click', insertOperator));
clearBtn.addEventListener('click', clearViewport);
equalsBtn.addEventListener('click', findTotal);