# JavaScript Challenge: Reworking Task Manager

1. Premise of the Challenge
2. What concepts did it reinforce? 
3. Challenges faced
4. Resources
5. Link to Code Files


## Premise of the Challenge 

I've reached the era of wanting to build, rather than just research each topic and include examples. Instead, I want to reinforce the concepts that I've been learning to make sure that I understand how they work. While I don't have a concrete idea of what I want to build, I'm thinking about including: 

- regular expressions (I'm having trouble applying these without looking up the patterns every time)
- fetch api & try/catch block error handling 
    - I'm not that familiar with various API's at the moment, so I'll create a JSON file and fetch the data from that 
- debouncing 
- local storage (this is a topic I haven't covered yet, but would be nice to research & include)


Today's Idea: 

1. I'm going to rebuild the task manager I made for day 21, this time adding in additional features 
    - the ability to filter tasks 
    - search for different tasks (debouncing & probably regular expressions) 
    - save tasks to local storage
2. It probably doesn't need an API for this though. I'll leave it off the list for now. 
3. In order to focus solely on the new features, I've copied over the code from my previous files 

I ended up setting up the search bar functionality, but after displaying the filtered results, I didn't get around to making those results usable in anyway. Unfortunately, I ran out of time for the day. I may come back to the application again in the future as I'd also really like to add local storage for it. 


## What concepts did it reinforce:

1. I got more experience working with classes
2. Looping through objects 
3. setting up a debounce function 
4. working with strings 
    - `trim()`, `toLowerCase()`
5. Reworking the code also got me to think more deeply about memory and how iterating through an entire array for a single item wastes time, especially in cases where the application could grow in the future 


## Were there any challenges I faced? (April 1, 2026)


1. Refractoring code is a lot harder than starting fresh. I'm looking over the choices I made in my original task manager design, and feel like I'm getting stuck because I didn't leave any leeway for optimization or added features 
2. Right now (before I've found a solution, if I find one), everytime a task is being added, it rerenders all tasks to the DOM instead of simply adding that single task. 
    - I changed it so that the TaskList class adds the new task to the DOM when one is created instead of leaving it to an outside function 
    - I also changed it so that when items are marked completed or deleted, it doesn't have to re-render all tasks. It only effects the task the user is targeting 
    - Instead of an array, it uses an object so that you can identify each task by a unique ID 
3. I think I may have been overzealous when making my list of improvements earlier, and don't think I'll be able to accomplish everything in a single day 
4. I looked up how to make a string all lowercase (`toLowerCase()`) 



## Resources

- I used a lot of the previous notes I've made (debouncing, includes(), classes) 
- I used google a few times when I was stuck, or when I knew something existed but wasn't sure about the exact syntax


## Links to Coding Files

- [**Code Files: HTML**](../Code/31-challenge-7-reworked-task-manager/index.html)
- [**Code Files: CSS**](../Code/31-challenge-7-reworked-task-manager/main.css)
- [**Code Files: JS**](../Code/31-challenge-7-reworked-task-manager/main.js)


