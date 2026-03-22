# JavaScript Challenge: Task Manager 

1. Premise of the Challenge
2. What concepts did it reinforce? 
3. Challenges faced
4. Resources
5. Link to Code Files


## Premise of the Challenge 

The purpose of the challenge is to build a mini application that uses JavaScript classes to create a task manager. Features will include: 
- The ability to create, update, and delete tasks 
- Able to view them in the UI (browser)
- Mark them as completed and have them automatically append to a different list (based on status)


## What concepts did it reinforce:

1. I had kind of a breakthrew moment where I felt like I better understood Time Complexity (albeit, at a very small scale)
- When I was creating the functions to display the tasks in the UI, I realized that I was re-rendering all of the tasks each time one of them was moved from the non-completed list to the completed-list. I started to think about how it would be more efficient to find a way to simply move that one item to the other list rather then having to redo everything each time. 
2. I used the splice() method for the first time without having to look it up
3. Classes
- I used two different classes in the exercise, TaskList and Task (separating functionality based on whether it effects a single task or the entire list of tasks)
4. Loops (for) and Conditional statements
5. Event Listeners (Submit, Click, Change)



## Were there any challenges I faced? (March 22, 2026)

There weren't any major challenges during this exercise. I think most of the errors I came across were caused because I'm not yet used to how certain things are written such as how all datasets are strings. 


## Resources

The idea of a `task manager` didn't come from a specific website. It was more of a generic idea based on a school assignment where we had to design the static layout for a `notes app`. When I started learning about classes, I began wondering about the difficulty in taking a static application and making the content dynamic which lead me to this mini exercise. 


## Links to Coding Files

- [**Code Files: HTML**](../Code/21-challenge-3-task-manager/index.html)
- [**Code Files: CSS**](../Code/21-challenge-3-task-manager/main.css)
- [**Code Files: JS**](../Code/21-challenge-3-task-manager/main.js)


