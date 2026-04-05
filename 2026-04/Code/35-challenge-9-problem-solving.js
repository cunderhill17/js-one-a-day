let num = [];
let fruit = ['apple', 'banana', 'cherry'];
let subjects = ['math', 'science', 6];

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }

    let index = this.length -1;

    return this[index];
}

console.log(subjects.last());