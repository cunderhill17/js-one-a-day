// You are building a task manager. Each task has a title and a completed status.
// Write a function that takes an array of tasks and returns the index of the first task that is not completed and uses that to supply the given title. 
// If no such task exists, it should return -1.

const tasks = [
    { title: "Wash dishes", completed: true },
    { title: "Take out garbage", completed: true },
    { title: "Clean room", completed: false },
    { title: "Do laundry", completed: true }
];

function findNextTask(n) {
    if (n.completed === false) {
        return true;
    }

    return false;
}

const nextTask = tasks.findIndex(findNextTask);

if (nextTask === -1) {
    console.log('There are no tasks to be completed');
} else {
    console.log(`The next task to complete is: ${tasks[nextTask].title}`);
}
