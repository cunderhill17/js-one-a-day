/* ---VARIABLES--- */

const newNoteForm = document.querySelector('#newNoteForm');
const newNoteInput = document.querySelector('#newNote');
const notesCon = document.querySelector('#noteCon');

let notesList = [];


const maxLength = 500;

/* ---FUNCTIONS--- */

//Adds a new note to the notesList array
function addNote(e) {
    e.preventDefault();

    //checks if the user has entered an 'empty value'
    if(newNoteInput.value.trim() === '') return;

    let userInput = newNoteInput.value;
    let trimmedInput = userInput.slice(0, maxLength); //keeps the note to a maximum length

    const myNote = {
        id: Date.now(), //gives a unique value to use as the ID
        value: trimmedInput
    };

    notesList.push(myNote);
    newNoteInput.value = '';

    //store notes in local storage 
    saveNotes(notesList);

    //uses the most recent note stored in the array
    appendNote(notesList.length - 1);
}




//Adds all notes when the extension first loads
function viewNotes() {
    notesCon.innerHTML = '';

    for(let i = 0; i < notesList.length; i++) {
        appendNote(i);
    }
}

//Creates the structure for a single note
function appendNote(i) {
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
    editBtn.dataset.id = `${notesList[i].id}`;
    editBtn.textContent = 'Edit';
    editBtn.dataset.status = 'false';

    deleteBtn.dataset.id = `${notesList[i].id}`;
    deleteBtn.textContent = 'Delete';

    newP.dataset.id = `${notesList[i].id}`;
    newP.textContent = notesList[i].value;

    //append elements to individualNote div
    newDiv.appendChild(newP);
    newDiv.appendChild(editBtn);
    newDiv.appendChild(deleteBtn);

    //append the note to the notes container
    notesCon.appendChild(newDiv);
}




//Deletes a note
function deleteNote(e, id) {
    const parentEl = e.target.parentElement;

    notesList = notesList.filter(note => note.id !== Number(id));

    // Update storage
    saveNotes(notesList);

    //remove the deleted element from the DOM
    parentEl.remove();
}




//Allows the user to edit a note
function editNote(e, id) {
    const noteId = Number(id);
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
            deleteNote(e, noteId);
            return;
        } else {
            trimmedInput = updatedContent.slice(0, maxLength);
        }

        e.target.dataset.status = 'false';
        e.target.textContent = 'Edit';

        newContent.contentEditable = false;

        const note = notesList.find(note => note.id === noteId);
        if (note) {
            note.value = trimmedInput;
        }

    }

    //Updates notes in local storage 
    saveNotes(notesList);
}

//retrieves notes when the extension first loads
async function getNotes() {
  const result = await chrome.storage.local.get(["notes"]);
  notesList = result.notes || [];
}

//used to save notes to chrome storage
async function saveNotes(notesList) {
  await chrome.storage.local.set({ notes: notesList });
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
        deleteNote(e, id);
    }
});




/* ---INITIALIZATION--- */
(async () => {
    await getNotes();
    viewNotes();
})();


