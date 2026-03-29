/* ---VARIABLES--- */

const searchBar = document.querySelector('#searchBar');
const searchCon = document.querySelector('#characterSearch');
const resultsCon = document.querySelector('#searchResults');

let characters = [];




/* ---FUNCTIONS--- */

function updateResultsCon(e) {
    // console.log('Function is triggering');

    const id = e.target.id;
    resultsCon.innerHTML = '';

    let pName = document.createElement('p');
    let pGender = document.createElement('p');
    let pHair = document.createElement('p');
    
    pName.textContent = `${characters[id].name}`;
    pGender.textContent = `${characters[id].gender}`;
    pHair.textContent = `${characters[id].hair_color}`;

    let characterDiv = document.createElement('div');
    characterDiv.id = 'characterProfile';

    characterDiv.appendChild(pName);
    characterDiv.appendChild(pGender);
    characterDiv.appendChild(pHair);

    resultsCon.appendChild(characterDiv);

    searchCon.innerHTML = '';
    searchBar.value = '';

}

async function retrieveCharacter() {
    const input = searchBar.value;

    const url = `https://swapi.dev/api/people/?search=${input}`;

    try {
        const response = await fetch(url);
        if (!response.ok) { 
            throw new Error(`Response status: ${response.status}`);
        }

        const results = await response.json(); //right now this gives back an object, with the data we want being under 'results', with the data being formatted in an array 

        characters = results.results; //This accesses the results array within the object and saves just that information to characters

        searchCon.innerHTML = '';

        for(let i = 0; i < characters.length; i++) {
            let p = document.createElement('p')
            p.classList.add('character');
            p.id = `${i}`;
            p.textContent = `${characters[i].name}`;

            searchCon.appendChild(p);
        }

        const allCharacters = document.querySelectorAll('.character');
        allCharacters.forEach(character => {
            character.addEventListener('click', updateResultsCon);
        })

    } catch(err) {
        console.error(err.message);
    }
}


/* ---EVENT LISTENERS--- */

searchBar.addEventListener('input', retrieveCharacter);