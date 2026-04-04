# JavaScript Challenge: Chrome Extension: Day 2

1. Premise of the Challenge
2. What concepts did it reinforce? 
3. Challenges faced
4. Resources
5. Link to Code Files


## Premise of the Challenge 

Continues from Day 1 of the Chrome Extension challenge. I had gotten all of the initial features working: 
1. Can create, edit, and delete notes 
2. The notes are saved to local storage 
3. I can view the extension through developer mode in chrome extensions. 

For Day 2, I want to focus on cleaning up the code and making it ready to submit for review. 

1. Need to look into using chrome storage instead of local storage
2. Need to fix the code so that it doesn't wipe/redo all notes everytime one is added or deleted 
3. I also wouldn't mind creating an icon for the extension (but that'll come at the end)



## What concepts did it reinforce:

1. Implemented chrome storage for the first time. 
2. I edited the manifest.json file to include permissions for storage
3. I updated the structure so that the entire `notesList` isn't continuously being reloaded everytime a note is added or deleted
4. I also updates the structure of each note so that it now holds an `id` key and a `value` key so that all ids will be unique as they are made using `Date.now()`



## Were there any challenges I faced? (April 4, 2026)
1. The documentation for the chrome storage wasn't as easy to understand as I would have liked it to have been 

This is the example they provided for retrieving data

```js
chrome.storage.StorageArea.get(
  keys?: string | string[] | object,
): Promise<object>
```

And this is what I ended up using 

```js
async function getNotes() {
  const result = await chrome.storage.local.get(["notes"]);
  notesList = result.notes || [];
}
```

It took a bit of googling to understand what was going on and end up at the result I got. Not entirely sure why it had to be so confusing to begin with? 



## Resources

- [**Creating A Chrome Extension**](https://developer.chrome.com/docs/extensions/get-started)
- [**Chrome Storage**](https://developer.chrome.com/docs/extensions/reference/api/storage)

## Links to Coding Files

- [**Code Files: HTML**](../Code/33-challenge-8-chrome-extension/notes-on-the-go/popup/popup.html)
- [**Code Files: CSS**](../Code/33-challenge-8-chrome-extension/notes-on-the-go/popup/popup.css)
- [**Code Files: JS**](../Code/33-challenge-8-chrome-extension/notes-on-the-go/popup/popup.js)


