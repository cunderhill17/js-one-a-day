/* ---VARIABLES--- */
const taskForm = document.querySelector('#addNewTask');
const newTask = document.querySelector('#newTask');
const unfinishedTasks = document.querySelector('#currentTaskContainer');
const finishedTasks = document.querySelector('#completedTaskContainer');
const searchBar = document.querySelector('#searchBar');
const searchCon = document.querySelector('#searchCon');

/* ---FUNCTIONS--- */

//When a user adds a new item, it's added as a new task 
function formSubmission(e) {
    e.preventDefault();

    newTaskList.addNewTask(newTask.value);
    //empties the input after the task has been created
    newTask.value = '';

}



//This function focuses solely on the HTML format that will be inserted into the DOM
function createTaskFormat(i) {
        let newTask = newTaskList.tasks;


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
        newCheckbox.addEventListener('change', updateCompletionStatus);

        if(newTask[i]._completion) {
            newCheckbox.checked = true;
        }

        newHeading.innerText = `${newTask[i]._name}`;
        newHeading.dataset.id = `${i}`;
        newParagraph.innerText = `${newTask[i]._content}`;
        newParagraph.dataset.id = `${i}`;

        editButton.classList.add('editTask');
        editButton.innerText = "Edit";
        editButton.dataset.id = `${i}`;
        editButton.dataset.status = 'false';
        editButton.addEventListener('click', editTaskItem);

        deleteButton.classList.add('deleteTask');
        deleteButton.innerText = "Delete";
        deleteButton.dataset.id = `${i}`;
        deleteButton.addEventListener('click', deleteTask);

        newArticle.appendChild(newCheckbox);
        newArticle.appendChild(newHeading);
        newArticle.appendChild(newParagraph);
        newArticle.appendChild(editButton);
        newArticle.appendChild(deleteButton);

        return newArticle;
}







//Update a tasks completion status
function updateCompletionStatus() {

    const id = this.dataset.id;

    const completion = document.querySelector(`.completionStatus[data-id="${id}"]`);
    const article = completion.closest('article');

    let status;

    if(newTaskList._tasks[id]._completion) {
        status = false;
        newTaskList.tasks[id].updateCompletion(status);

        unfinishedTasks.appendChild(article);
    } else {
        status = true;
        newTaskList.tasks[id].updateCompletion(status);

        finishedTasks.appendChild(article);
    }

}






//Delete a task 
function deleteTask() {
    const id = this.dataset.id;

    //deleting it from the tasks array in the TaskList class
    newTaskList.deleteTask(id);

    //removing the HTML element(s) from the DOM
    const editButton = document.querySelector(`.editTask[data-id="${id}"]`);
    const article = editButton.closest('article');

    if(article) {
        article.remove();
    }

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

    }
}







function searchBarFilter(value) {

    const searchValue = value;
    searchCon.innerHTML = '';
    let filteredList;

    if (searchValue.trim() !== '') {
        filteredList = newTaskList.filterTasks(searchValue);

        filteredList.forEach(item => {
            let newP = document.createElement('p');
            newP.dataset.id = `${item._id}`;
            newP.textContent = `${item._content}`

            searchCon.appendChild(newP);
        });
    }

}







//Class used to manage all TASKS
class TaskList {
    count = 0;

    constructor() {
        this._tasks = {};
    }

    addNewTask(arr) {
        this.count++;
        const id = this.count;
        this._tasks[id] = new Task(arr, id);

        let newArticle = createTaskFormat(id);
        unfinishedTasks.appendChild(newArticle);
    }

    deleteTask(id) {
        delete this._tasks[id];
    }

    filterTasks(value) {
        let firstValue = value.toLowerCase();
        let filteredTasks = [];

        Object.entries(this._tasks).forEach(([key, task]) => {
            if (task._content.toLowerCase().includes(firstValue)) {
                filteredTasks.push(task);
            }
        })

        return filteredTasks;
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

    updateCompletion(status) {
        this._completion = status;
    }
}




//UTILITY FUNCTION 

function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}


/* ---EVENT LISTENERS--- */

taskForm.addEventListener('submit', formSubmission);

//Add an event listener to the 'search bar' in order to find a specific task 
//The debouncedSearch stops the function taking place until after a certain amount of time after activity has stopped
const debouncedSearch = debounce(searchBarFilter, 500);
searchBar.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});


/* ---INITIALIZATION--- */

//initialize new task list
const newTaskList = new TaskList();