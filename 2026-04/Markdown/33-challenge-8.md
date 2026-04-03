# JavaScript Challenge: Chrome Extension: Day 1

1. Premise of the Challenge
2. What concepts did it reinforce? 
3. Challenges faced
4. Resources
5. Link to Code Files


## Premise of the Challenge 

I've come across a few videos about people creating their own chrome extension. 
I want to see if I can create an extension where I use local storage to save notes of things I may think of as I'm looking at different websites 
- the purpose of it is so that I don't have to leave the tab or browser that I'm on while also still being able to keep an electronic record of my notes



## What concepts did it reinforce:

1. I was able to use local storage successfully for the first time (in order to store the list of notes)
2. Datasets which I used to set ID's for the different elements and a status for the edit button so the user would know whether they were in edit mode or note
3. `For Loop` to iterate through the array in order to display the notes in the notes container 
4. This was the first time I tried adding an event listener to a container rather than the items inside the container



## Were there any challenges I faced? (April 3, 2026)

1. I had no idea how to make a chrome extension going into this. 
    - the first step was to look up on google what steps were required

A quick google search told me that I required a `mainfest.json` file with a basic template being: 

```json
{
  "manifest_version": 3,
  "name": "My Extension",
  "version": "1.0",
  "description": "A basic Chrome extension.",
  "action": {
    "default_popup": "popup.html"
  }
}
```

I then changed the details to fit the needs of my project

2. Following the instructions in the `get started documentation` made it really simple to view the 'extension' in the browser so I could see what it would look like. 
- the next challenge came from actually designing what I wanted the extension to look like when used. 

3. Not necessarily a technical challenge, but having to reload the extension to view changes did catch me off guard sometimes as I'm used to viewing my code with live extension and my changes saving automatically. 


## Improvements to look into later 

- Use chrome.storage instead of localStorage
- Use unique IDs instead of array indexes
- Improve editing UX (enter to save, escape to cancel)


## Resources

Turns out there is a `get started` resource documentation for creating chrome extensions.  
- [**Creating A Chrome Extension**](https://developer.chrome.com/docs/extensions/get-started)

## Links to Coding Files

- [**Code Files: HTML**](../Code/33-challenge-8-chrome-extension/notes-on-the-go/popup/popup.html)
- [**Code Files: CSS**](../Code/33-challenge-8-chrome-extension/notes-on-the-go/popup/popup.css)
- [**Code Files: JS**](../Code/33-challenge-8-chrome-extension/notes-on-the-go/popup/popup.js)


