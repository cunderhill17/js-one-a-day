/* ---VARIABLES--- */

const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

/* ---FUNCTIONS--- */

//Initializes the form data which can be used to filter the house options
function initializeForm() {
    let lgRoomCount = 0;
    let lgBathroomCount = 0;

    let streetOptions = [];
    let roomArray = [];
    let bathroomArray = [];

    //Loops through the houses array and first checks if the houses street is part of the streetOptions array, if it isn't then it adds to the street to the array
    //Then it checks the number of bedrooms and compares it to the variable lgRoomCount to get the highest number of bedrooms
    // It does the same with bathrooms
    houses.forEach(house => {
        let newStreet = streetOptions.includes(`${house.street}`);

        if (!newStreet) {
            streetOptions.push(`${house.street}`);
        }

        if (house.bedrooms > lgRoomCount) {
            lgRoomCount = house.bedrooms;
        }

        if (house.bathrooms > lgBathroomCount) {
            lgBathroomCount = house.bathrooms;
        }
    })

    //it populates the roomArray with numbers from 1 to the largest number of rooms saved in the variable lgRoomCount
    for(let i = 1; i < lgRoomCount+1; i++) {
        roomArray.push(`${i}`);
    }

    //populates the bathroomArray with the numbers from 1 to the largest number of bathrooms saved in the variable lgBathroomCount
    for(let i = 1; i < lgBathroomCount+1; i++) {
        bathroomArray.push(`${i}`);
    }

    //Loops through the streetOptions array and creates an <option> element with the array value, appending it to the <select> tag
    for(let i = 0; i < streetOptions.length; i++) {
        const newOption = document.createElement('option');

        newOption.innerText = `${streetOptions[i]}`;
        newOption.value = `${streetOptions[i]}`;

        streetSelect.appendChild(newOption);
    }

    //Loops through the roomArray and creates an <option> element with the array value, appending it to the <select> tag
    for(let i = 0; i < roomArray.length; i++) {
        const newOption = document.createElement('option');

        newOption.innerText = `${roomArray[i]}`;
        newOption.value = `${roomArray[i]}`;

        bedroomSelect.appendChild(newOption);
    }

    //Loops through the bathroomArray and creates an <option> element with the array value, appending it to the <select> tag
    for(let i = 0; i < bathroomArray.length; i++) {
        const newOption = document.createElement('option');

        newOption.innerText = `${bathroomArray[i]}`;
        newOption.value = `${bathroomArray[i]}`;

        bathroomSelect.appendChild(newOption);
    }

}

//function uses the form data to populate output according to the users selection criteria (filtering)
function renderHouses(e) {
  // Stop the form submitting
  e.preventDefault();
  output.innerHTML = '';

  //creates a new array with only the houses that match the users 'preferences'
  let filteredArray = houses.filter(house => {
    if(
        (house.street === streetSelect.value || streetSelect.value === "#") &&
        (Number(house.bedrooms) === Number(bedroomSelect.value) || bedroomSelect.value === "#") &&
        (Number(house.bathrooms) === Number(bathroomSelect.value) || bathroomSelect.value === "#")
    ) {
        return true;
    }
  });

  //Calculates the area for the filtered houses / creates & populates the elements for the output
  filteredArray.forEach(house => {
    let area = 0;

    //Calculates the total 'area' of each house in the filtered array
    Object.entries(house.room_sizes).forEach(([room, size]) => {
        const roomSize = house.room_sizes[room];

        area = area + roomSize;
    });

    let newArticle = document.createElement('article');
    let newList = document.createElement('ul');
    let newHouse = document.createElement('h2');
    let newBedrooms = document.createElement('li');
    let newBathrooms = document.createElement('li');
    let newPrice = document.createElement('li');
    let newArea = document.createElement('li');

    newHouse.innerText = `${house.house_number} ${house.street}`;
    newBedrooms.innerText = `🛏️ Bedrooms: ${house.bedrooms}`;
    newBathrooms.innerText = `🛀 Bathrooms: ${house.bathrooms}`;
    newArea.innerText = `Room area: ${area} m²`;
    newPrice.innerText = `Price: £${house.price}`;

    //append li elements to ul element
    newList.appendChild(newBedrooms);
    newList.appendChild(newBathrooms);
    newList.appendChild(newArea);
    newList.appendChild(newPrice);

    //append h2 and ul elements to Article
    newArticle.appendChild(newHouse);
    newArticle.appendChild(newList);

    //Append article (entire house data) to output area
    output.appendChild(newArticle);

  })

}


//function to retrieve house data using fetch()
async function fetchHouseData() {
    const url = "https://mdn.github.io/shared-assets/misc/houses.json"; //URL Where the data lives

    try {
        const response = await fetch(url); //fetch API that fetches the data, resolves to a response object (if await wasn't used, it would return as a 'Promise')
        if (!response.ok) { //Checks the status of the response as there are some errors that won't be cause by the try/catch block
            throw new Error(`Response status: ${response.status}`);
        }

        houses = await response.json(); //this parses the data returned. Again it uses await, as 'response.json()' would return a Promise

        initializeForm();
    } catch(error) {
        console.error(error.message);
    }
}


/* ---EVENT LISTENERS--- */

// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);



/* ---INITIAL FUNCTION CALLS--- */

// Call fetchHouseData() to initialize the app
fetchHouseData();