let myDate = new Date();

class Animal {

}

class Dog extends Animal {

}

let myPet = new Dog();

function myFunction(value, object) {
    
    if ((value === null || value === undefined || object === null || object === undefined)) {
        return false;
    } 

    if (typeof object !== 'function') {
        return false;
    }

    let myValue = Object(value);
    
    if (object.prototype.isPrototypeOf(myValue)){
        return true;
    } else { 
        return false
    }
}

console.log(myFunction(myPet, Animal)); 