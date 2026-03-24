/* ---VARIABLES--- */

const nums = document.querySelectorAll('.numButton');
const operators = document.querySelectorAll('.operatorButton');
const equalsBtn = document.querySelector('#equalsButton');
const clearBtn = document.querySelector('#clearViewport');
const viewport = document.querySelector('#viewportContent');


/* ---FUNCTIONS--- */

//Adds a number to the viewport
function insertNum() {
    const value = this.dataset.value;

    //Splits the viewport string into parts based on the various operators
    if (value === '.') {
        // Get the current number (everything after the last operator)
        let parts = viewport.textContent.split(/[+\-*/%]/);
        let currentNumber = parts[parts.length - 1];

        // If current number already has a decimal, stop
        if (currentNumber.includes('.')) {
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
    // const totalArray = viewport.textContent.split(/([+\-*/%])/);
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

    // First pass: *, /, %
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === 'operator' && ['*','/','%'].includes(arr[i].value)) {
            let left = arr[i-1].value;
            let right = arr[i+1].value;
            let res;
            switch(arr[i].value) {
                case '*': 
                    res = left * right; 
                    break;
                case '/': 
                    res = right === 0 ? 'undefined' : left / right; 

                    if(res === 'undefined') {
                        viewport.textContent = 'undefined';
                        return; // stop the function early
                    }

                    break;
                case '%': 
                    res = left % right; 
                    break;
            }
            arr.splice(i-1, 3, {value: res, type:'Number'});
            i--; // Step back to re-check at new index
        }
    }

    // Second pass: +, -
    let result = arr[0].value;
    for (let i = 1; i < arr.length; i += 2) {
        let operator = arr[i].value;
        let nextNumber = arr[i+1].value;
        if(operator === '+') result += nextNumber;
        if(operator === '-') result -= nextNumber;
    }

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