/* ---VARIABLES--- */

const dataForm = document.querySelector('#uploadForm');
let csvFileData = {};
let validUsers = [];
let nonValidUsers = [];
let validUsersTable = document.querySelector('#validUsersTable');
let nonValidUsersTable = document.querySelector('#notValidUsersTable');



/* ---FUNCTIONS--- */

function formSubmission(e) {
    e.preventDefault(); //stops the page form reloading on form submission

    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0]; //'files' is a property that contains all section files, [0] selects the first file (like an array)

    if (!file) {
        alert('Please select a file first.');
        return;
    }

    const reader = new FileReader(); //FileReader() is a built in JavaScript object that lets you read the contents of the file uploaded

    reader.onload = function(e) { //reader.onload if an event handler than runs after FileReader has finished reading the file
        const text = e.target.result; //content of the file as text 
        csvFileData = parseCSV(text); //function to parse the text from the file and turn it into a JS Object
        console.log(csvFileData); //prints the object into the console

        User.validateUser(csvFileData);

        populateTables();

    };

    reader.readAsText(file);

}

//Takes the raw csv string and converts it into a JavaScript array of objects 
function parseCSV(text) {
    const lines = text.trim().split('\n'); //removes any white space at the start or end of the file, splits the string into an array of lines, breaking at each new line character
    const headers = lines[0].split(','); //extracts the headers (usually the first line) and splits them into an array of headers, eg. ['header', 'header', 'header']

    return lines.slice(1).map(line => { //lines.slice(1) takes all lines aside from the header, and map() creates a new array by transforming each line into an object
        const values = line.split(','); //breaks each CSV line into cell values eg. "Alice,25,Toronto" → ["Alice", "25", "Toronto"]
        const obj = {}; //creates an empty object

        headers.forEach((header, i) => { //loops through each header and pairs it with the corresponding value
            obj[header.trim()] = values[i]?.trim(); //uses the header value as the 'key'
        });

        return obj;
    });
}


//Function to populate the HTML tables on the UI
function populateTables() {

    validUsersTable.innerHTML = '';
    nonValidUsersTable.innerHTML = '';

    validUsers.forEach(user => {
        let newTR = document.createElement('tr');
        let emailTD = document.createElement('td');
        let nameTD = document.createElement('td');
        let roleTD = document.createElement('td');

        emailTD.innerText = `${user.email}`;
        nameTD.innerText = `${user.firstName} ${user.lastName}`;
        roleTD.innerText = `${user.role}`;

        newTR.appendChild(nameTD);
        newTR.appendChild(emailTD);
        newTR.appendChild(roleTD);

        validUsersTable.appendChild(newTR);
    });

    nonValidUsers.forEach(user => {
        let newTR = document.createElement('tr');
        let emailTD = document.createElement('td');
        let nameTD = document.createElement('td');
        let roleTD = document.createElement('td');

        emailTD.innerText = `${user.email}`;
        nameTD.innerText = `${user.firstName} ${user.lastName}`;
        roleTD.innerText = `${user.employeeRole}`;

        newTR.appendChild(nameTD);
        newTR.appendChild(emailTD);
        newTR.appendChild(roleTD);

        nonValidUsersTable.appendChild(newTR);
    })

}


/* ---CLASSES--- */
class User {
    constructor(firstName, lastName, email, role) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._role = role;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get email() {
        return this._email;
    }

    get role() {
        return this._role;
    }

    static validateUser(arr) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        arr.forEach(row => {
            let validEmail = false;
            //let validName = '';
            let validRole = false;

            if(emailRegex.test(row.email)) {
                validEmail = true;
            }

            let role = row.employeeRole ? row.employeeRole.trim().toLowerCase() : ''

            if( (role === 'admin') || (role === 'developer') || (role === 'vice president')) {
                validRole = true;
            }

            if(validEmail && validRole) {
                let user = new User(row.firstName, row.lastName, row.email, row.employeeRole)

                validUsers.push(user);
            } else {
                nonValidUsers.push(row);
            }

        })

    }
}



/* ---EVENT LISTENERS--- */


dataForm.addEventListener('submit', formSubmission);

