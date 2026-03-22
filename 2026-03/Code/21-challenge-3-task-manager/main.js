/* ---VARIABLES--- */
const taskForm = document.querySelector('#addNewTask');
const newTask = document.querySelector('#newTask');
const unfinishedTasks = document.querySelector('#currentTaskContainer');
const finishedTasks = document.querySelector('#completedTaskContainer');
let allTasks = [];



/* ---FUNCTIONS--- */

function formSubmission(e) {
    e.preventDefault();

    newTaskList.addNewTask(newTask.value);
    //empties the input after the task has been created
    newTask.value = '';

    displayTasks();

}

//Display all tasks in the UI
function displayTasks() {
    allTasks = newTaskList.tasks;
    unfinishedTasks.innerHTML = '';
    finishedTasks.innerHTML = '';

    for(let i = 0; i < allTasks.length; i++) {
        const newArticle = document.createElement('article');
        const newCheckbox = document.createElement('input');
        const newHeading = document.createElement('h3');
        const newParagraph = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        newArticle.classList.add('task');
        newCheckbox.type = "checkbox";
        newCheckbox.classList.add('completionStatus');
        newCheckbox.dataset.id = `${i}`;

        if(allTasks[i]._completion) {
            newCheckbox.checked = true;
        }

        newHeading.innerText = `${allTasks[i]._name}`;
        newHeading.dataset.id = `${i}`;
        newParagraph.innerText = `${allTasks[i]._content}`;
        newParagraph.dataset.id = `${i}`;

        editButton.classList.add('editTask');
        editButton.innerText = "Edit";
        editButton.dataset.id = `${i}`;
        editButton.dataset.status = 'false';

        deleteButton.classList.add('deleteTask');
        deleteButton.innerText = "Delete";
        deleteButton.dataset.id = `${i}`;

        newArticle.appendChild(newCheckbox);
        newArticle.appendChild(newHeading);
        newArticle.appendChild(newParagraph);
        newArticle.appendChild(editButton);
        newArticle.appendChild(deleteButton);

        if(!allTasks[i]._completion) {
            unfinishedTasks.appendChild(newArticle);
        } else {
            finishedTasks.appendChild(newArticle);
        }
    }

    // allTasks.forEach(task => {});

    //Add event listener to the checkbox 
    const taskStatus = document.querySelectorAll('.completionStatus');
    taskStatus.forEach(completedTask => {
        completedTask.addEventListener('change', updateCompletionStatus);
    });

    //Add event listener to the delete button 
    const deleteButton = document.querySelectorAll('.deleteTask');
    deleteButton.forEach(task => {
        task.addEventListener('click', deleteTask);
    })

    const editButton = document.querySelectorAll('.editTask');
    editButton.forEach(task => {
        task.addEventListener('click', editTaskItem);
    })
}

//Update a tasks completion status
function updateCompletionStatus() {
    console.log('Status is being updated');

    const id = this.dataset.id;

    if(allTasks[id]._completion) {
        allTasks[id]._completion = false;
    } else {
        allTasks[id]._completion = true;
    }

    displayTasks();

}

//Delete a task 
function deleteTask() {
    const id = this.dataset.id;

    //need to delete it from the tasks array in the tasks class. 
    newTaskList.deleteTask(id);

    displayTasks();
}

//Update a task 
function editTaskItem() {
    const id = this.dataset.id;
    const newContent = document.querySelector(`p[data-id="${id}"]`);
    const newTitle = document.querySelector(`h3[data-id="${id}"]`);


    if (this.dataset.status !== 'true') {
        this.dataset.status = 'true';
        this.innerText = 'Save';

        newContent.contentEditable = true;
        newTitle.contentEditable = true;

    } else {
        this.dataset.status = 'false';
        this.innerText = 'Edit';

        newContent.contentEditable = false;
        newTitle.contentEditable = false;

        const updatedContent = newContent.textContent;
        const updatedTitle = newTitle.textContent;

        newTaskList.tasks[id].updateTask(updatedTitle, updatedContent);

        displayTasks();

    }
}


//Class used to manage all TASKS
class TaskList {
    count = 0;

    constructor() {
        this._tasks = [];
    }

    addNewTask(arr) {
        this.count++;
        this._tasks.push(new Task(arr, this.count));
    }

    deleteTask(task) {
        this._tasks.splice(task, 1);
    }

    get tasks() {
        return this._tasks;
    }
}

//Class used to manage individual task
class Task {
    constructor(content, id) {
        this._name = 'New Task';
        this._content = content;
        this._completion = false;
        this._id = id;
    }

    updateTask(name, content) {
        this._name = name;
        this._content = content;
    }
}




/* ---EVENT LISTENERS--- */

taskForm.addEventListener('submit', formSubmission);




/* ---INITIALIZATION--- */

//initialize new task list
const newTaskList = new TaskList();