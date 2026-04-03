/* ---VARIABLES--- */

const newNoteForm = document.querySelector('#newNoteForm');
const newNoteInput = document.querySelector('#newNote');
const notesCon = document.querySelector('#noteCon');

let notesList = JSON.parse(localStorage.getItem("notes")) || [];

const maxLength = 500;

/* ---FUNCTIONS--- */

//Adds a new note to the notesList array
function addNote(e) {
    e.preventDefault();

    //checks if the user has entered an 'empty value'
    if(newNoteInput.value.trim() === '') return;

    let userInput = newNoteInput.value;
    let trimmedInput = userInput.slice(0, maxLength);

    notesList.push(trimmedInput);
    newNoteInput.value = '';

    //store notes in local storage 
    localStorage.setItem("notes", JSON.stringify(notesList));

    viewNotes();
}




//Adds the notes to the notes container so they can be viewed, edited, & deleted
function viewNotes() {
    notesCon.innerHTML = '';

    for(let i = 0; i < notesList.length; i++) {
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        //Add classes needed for styling
        newDiv.classList.add('individualNote');
        newP.classList.add('note');
        editBtn.classList.add('edit');
        deleteBtn.classList.add('delete');

        //Add a dataset 'id' & eventListener to both buttons for functionality later
        editBtn.dataset.id = `${i}`;
        //editBtn.addEventListener('click', editNote);
        editBtn.textContent = 'Edit';
        editBtn.dataset.status = 'false';

        deleteBtn.dataset.id = `${i}`;
        //deleteBtn.addEventListener('click', deleteNote);
        deleteBtn.textContent = 'Delete';

        newP.dataset.id = `${i}`;
        newP.textContent = notesList[i];

        //append elements to individualNote div
        newDiv.appendChild(newP);
        newDiv.appendChild(editBtn);
        newDiv.appendChild(deleteBtn);

        //append the note to the notes container
        notesCon.appendChild(newDiv);
    }
}




//Deletes a note
function deleteNote(id) {
    const noteId = id;
    notesList.splice(Number(noteId), 1);

    //Update notes in local storage 
    localStorage.setItem("notes", JSON.stringify(notesList));

    viewNotes();
}




//Allows the user to edit a note
function editNote(e, id) {
    const noteId = id;
    const newContent = e.target.parentElement.querySelector('.note');

    if (e.target.dataset.status !== 'true') {
        e.target.dataset.status = 'true';
        e.target.textContent = 'Save';

        newContent.contentEditable = true;
        newContent.focus();
    } else {
        let updatedContent = newContent.textContent;
        let trimmedInput = '';

        if (updatedContent.trim() === '') {
            deleteNote(noteId);
            return;
        } else {
            trimmedInput = updatedContent.slice(0, maxLength);
        }

        e.target.dataset.status = 'false';
        e.target.textContent = 'Edit';

        newContent.contentEditable = false;

        notesList[noteId] = trimmedInput;
    }

    //Updates notes in local storage 
    localStorage.setItem("notes", JSON.stringify(notesList));
}



/* ---EVENT LISTENERS--- */

newNoteForm.addEventListener('submit', addNote);

//Attaches a single event listener to the notes container, rather than a new event listener for every note
notesCon.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (e.target.classList.contains('edit')) {
        editNote(e, id);
    }

    if (e.target.classList.contains('delete')) {
        deleteNote(id);
    }
});


/* ---INITIALIZATION--- */
viewNotes();
