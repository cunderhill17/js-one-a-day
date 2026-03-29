# JavaScript Challenge: Functional Search Bar 

1. Premise of the Challenge
2. What concepts did it reinforce? 
3. Challenges faced
4. Resources
5. Link to Code Files


## Premise of the Challenge 

1. Create a mini application that allows the user to enter data into a search bar and it will provide a list of results based on the users input 
2. The data should pull from either a JSON file or an established API 

**How it ended up working:**

1. I created an application where the user can enter names into a search bar, and it will fetch results from the Star Wars API (SWAPI)
2. The results matching the string in the search bar, are listed below, updating as the string changes
3. When the user clicks on one of the 'results', it lists a few of the characters details in the results section (clearing the search bar / search results at the same time)

## What concepts did it reinforce:

- for loop (looped through all of the results fetched from the API to add an event listener to each of them)
- fetch() api 
    - gave me experience setting part of the URL parameter as a variable 

    ```js
    const input = searchBar.value;

    const url = `https://swapi.dev/api/people/?search=${input}`;
    ```
    - I was also able to get more experience working with the results of an API, as at first, I thought the characters would just be stored in the first 'layer' of the object, but actually, they had a property called 'results' which I saved to another variable in order to interact with the characters in the object
- Event Listeners ('click', 'input')
- creating HTML elements with JS



## Were there any challenges I faced? (March 29, 2026)

**Things I looked up**

1. What event listener is triggered when typing in a search box (JavaScript)?
    - I originally had 'change', but noticed it didn't do anything.
    - when I looked it up on google, I got the answer that the most reliable 'event' is the input event 
2. I retrieved the url format for the Star Wars API from their website that shows their documentation 
3. Referenced the example I did using the fetch api as I still don't have the format memorized 
    - [**JavaScript Example JS File**](../Code/15-challenge-1-house-data/main.js)


**Future Improvements to Make**

I put my JavaScript code into ChatGPT once I was finished to ask what future improvements could be made. I didn't add the suggestions to this program as I want to researching the topics that were mentioned before adding them to future exercises

1. Debouncing input events
    - Reduce API calls when typing
2. Event delegation
    - Avoid adding listeners repeatedly
3. Using data-* attributes instead of IDs
    - Cleaner mapping between DOM and data


## Resources

- [**SWAPI Documentation**](https://swapi.dev/documentation)


## Links to Coding Files

- [**Code Files: HTML**](../Code/28-challenge-5-search-bar/index.html)
- [**Code Files: CSS**](../Code/28-challenge-5-search-bar/main.css)
- [**Code Files: JS**](../Code/28-challenge-5-search-bar/main.js)


