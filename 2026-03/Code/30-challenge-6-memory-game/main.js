/* ---VARIABLES--- */
const systemContainer = document.querySelector('#systemCon');
const userContainer = document.querySelector('#userChoices');
const resultsContainer = document.querySelector('#resultsCon');
const userColors = document.querySelectorAll('.userColor');

//Button Variables
const submitBtn = document.querySelector('#submit');
const startBtn = document.querySelector('#startGame');
const restartBtn = document.querySelector('#restartGame');
const levelBtn = document.querySelector('#nextLevel');

const colorArray = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

let userColorArray = [];
let systemColorArray = [];
let level = 0; 
let clearDivsTimeout;


/* ---FUNCTIONS--- */

function addUserChoice(e) {
    if (userColorArray.length < 5) {
        let color = e.target.dataset.color;
        userColorArray.push(`${color}`);

        const newDiv = document.createElement('div')
        newDiv.classList.add('color');
        newDiv.classList.add(`${color}`);

        userContainer.appendChild(newDiv);
    }

    if (userColorArray.length === 5) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
    }
}

//randomly adds colors from the color array to the system color array for a total of 5 colors
function generateSystemArray() {
    for (let i = 0; i < 5; i++) {
        let colorIndex = Math.floor(Math.random() * colorArray.length);

        systemColorArray.push(colorArray[colorIndex]);
    }
}

//adds color cards from the system color array to the system container
function addSystemColors() {
    let delay = 10000;

    if (level > 0 && level < 10) {
        delay = 10000 - (1000 * level);
    }

    systemColorArray.forEach(color => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('color');
        newDiv.classList.add(`${color}`);

        systemContainer.appendChild(newDiv);
    })

    // Cancel previous timeout if it exists
    if (clearDivsTimeout) {
        clearTimeout(clearDivsTimeout);
    }

    // Start new timeout
    clearDivsTimeout = setTimeout(() => {
        systemContainer.innerHTML = '';
        clearDivsTimeout = null; // reset
    }, delay);
}

//compares the user array with the system array to see if the user got the colors correct
function compareArrays() {
    let result = true;    

    for (let i = 0; i < 5; i++) {
        if (userColorArray[i] !== systemColorArray[i]) {
            result = false;
        } 

        if (result === false) {
            break;
        }
    }

    let newP = document.createElement('p');

    if (result === true) {
        newP.textContent = 'Congrats! Continue to next level';
        resultsContainer.appendChild(newP);

        levelBtn.disabled = false;
        levelBtn.classList.remove('disabled');
    } else {
        newP.textContent = 'Better Luck Next Time! Click "Restart Game" to play again';
        resultsContainer.appendChild(newP);
    }
}

function playNextLevel() {
    level++;

    userColorArray = [];
    systemColorArray = [];
    systemContainer.innerHTML = '';
    userContainer.innerHTML = '';
    resultsContainer.innerHTML = '';

    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
    levelBtn.disabled = true;
    levelBtn.classList.add('disabled');

    generateSystemArray();
    addSystemColors();
}


//function that initalizes the game when the player wants to start
function initializeGame() {
    generateSystemArray();
    addSystemColors();

    userColors.forEach(color => color.addEventListener('click', addUserChoice));

    userColors.forEach(color => {
        color.dataset.disabled = 'false';

        if (color.dataset.disabled === 'false') {
            color.classList.remove('disabled');
        }
    })

    startBtn.disabled = true;
    startBtn.classList.add('disabled');
}

//function that resets the entire game
function restartGame() {
    userColorArray = [];
    systemColorArray = [];
    systemContainer.innerHTML = '';
    userContainer.innerHTML = '';
    resultsContainer.innerHTML = '';

    initialState();

    startBtn.disabled = false;
    startBtn.classList.remove('disabled');
}


function initialState() {
    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
    levelBtn.disabled = true;
    levelBtn.classList.add('disabled');

    userColors.forEach(color => {
        if (color.dataset.disabled === 'true') {
            color.classList.add('disabled');
        } else {
            color.dataset.disabled = 'true';
            color.classList.add('disabled');
            color.removeEventListener('click', addUserChoice);
        }
    });

}


/* ---EVENT LISTENERS--- */

submitBtn.addEventListener('click', compareArrays);
startBtn.addEventListener('click', initializeGame);
restartBtn.addEventListener('click', restartGame);
levelBtn.addEventListener('click', playNextLevel);



//sets up initial state for the game
initialState();
