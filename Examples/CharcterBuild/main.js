/* ---VARIABLES--- */




/* ---CLASSES--- */

//each new 'character' will access to a list of traits and a random magic ability
class Character {
    constructor(name, age, personality) {
        this._name = name;
        this._age = age;
        this._personality = personality;
        this._traits = new Traits();
        this._magic = MagicAbility.addMagicAbility();
    }

    async initializeCharacterTraits() {
        await this._traits.initializeTraits();
    }

    updateCharacterTrait(query, id) {
        this._traits.updateTrait(query, id);
    }

    viewCharacterTrait(id) {
        let strength = this._traits.getCharacterTrait(id);

        return strength.strength;
    }

    get magic() {
        return this._magic.name;
    }
}











//builds the trait list that each character has access to, and gives the ability to update it
class Traits {

    constructor() {
        this.traitsList = {
                1: {name: 'strength', value: null, id: 1},
                2: {name: 'weakness', value: null, id: 2},
                3: {name: 'embarassing secret', value: null, id: 3},
                4: {name: 'dream', value: null, id: 4}
        }
    }

    async initializeTraits() {
       await this.setStrengthTrait(1);    
    }

    async setStrengthTrait(id) {

        try {
            const url = 'JSON/strengths.json';
            const response = await fetch(url);
            const strengths = await response.json();

            let num = Math.floor(Math.random() * strengths.length);

            this.traitsList[id].value = strengths[num];
        } catch(err) {
            console.error(err.message);
        }
        
    }

    updateTrait(query, id) {
        this.traitsList[id].value = query;
    }

    getCharacterTrait(id) {
        return this.traitsList[id].value;
    }
}







//generates a random magic ability for each new character
class MagicAbility {
    static magicAbility = {
        1: {name: 'Water Magic', description: 'description of magic', id: 1},
        2: {name: 'Fire Magic', description: 'description of magic', id: 2},
        3: {name: 'Earth Magic', description: 'description of magic', id: 3},
        4: {name: 'Blood Magic', description: 'description of magic', id: 4},
    }

    static addMagicAbility() {
        //min & max values are hardcoded for now, will potentially use variables later
        let num = Math.floor(Math.random() * (4 - 1 + 1) + 1); 

        return this.magicAbility[num];
    }
}



/* ---FUNCTIONS--- */





/* ---EVENT LISTENERS--- */






/* ---TESTING--- */
const jessie = new Character('Jessie', 25, 'Stubborn');
jessie.initializeCharacterTraits().then(() => {
    console.log(jessie.viewCharacterTrait(1)); // now it will have a value
    console.log(jessie.magic);
});
