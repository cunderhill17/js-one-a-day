function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        get() {
            return count;
        }
    };
}

// counter is the object returned by createCounter().
// The methods keep access to 'count' through a closure.
const counter = createCounter();

console.log(counter.get());

//used to increment the counter
counter.increment();
counter.increment(); 

//used to get the current value of the variable 'count'
console.log(counter.get());

//used to decrease the counter
counter.decrement();

console.log(counter.get());