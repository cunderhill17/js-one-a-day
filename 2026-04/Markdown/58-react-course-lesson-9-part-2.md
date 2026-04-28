# React Course: Lesson 9: Introduction to Routing (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

The entirety of this session was spent on the lab for Lesson 9 

Lab 9: 
- Create a new React application using Vite. In the application you'll implement a wizard-style UI that enables the user to step through a series of pages. 
- You'll use React routing and hyperlinks to move from one page to the next 

**Steps:** 
1. Using Vite, create a new React application 
2. Add the dependencies for the react router to `package.json`, then run `npm install`
    - `"react-router-dom": "^7.6.2"`
    - `"@types/react-router-dom": "^5.3.3",`
3. Modify the `<App>` component so it supports routing

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home.tsx';
import French from './French.tsx';
import German from './German.tsx';
import Italian from './Italian';


function App() {
  const router = createBrowserRouter([
    {path: '/', element:<Home/>},
    {path: '/French', element:<French/>},
    {path: '/German', element:<German/>},
    {path: '/Italian', element:<Italian/>},
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
```

4. Add files for each of the components 
    - Home, French, German, Italian
    - Copy the data from the starter files into the newly created `tsx` files 

```tsx
import { Link } from 'react-router-dom';

export default function French() {
  return (
    <>
      <h1>French test</h1>
      <Link to="/German">To German test ▶️</Link>
    </>
  )
}
```

5. Define the necessary routes for the current components
    - modify the css so it looks nicer 
6. Copy the provided JSON files into the applications `src` directory 
7. Import the correct JSON files into the corresponding tsx files 

```tsx
import words from './FrenchWords.json';
```

8. Implement logic to let the user guess words 
    - select an English word at random 
    - ask the user to guess the word in the corresponding language 
    - check the users input and increment correct guesses and total guesses as appropriate 
    - display the number of correct / total guesses 

```tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import words from './FrenchWords.json';

export default function French() {
    let [correctGuesses, setCorrectGuesses] = useState(0);
    let [totalGuesses, setTotalGuesses] = useState(0);
    let [english, setEnglish] = useState('');
    let [translated, setTranslated] = useState('');
    let [inputValue, setInputValue] = useState('');
    let [availableWords, setAvailableWords] = useState(words);

    function selectWordPair() {
        let index = Math.floor(Math.random() * availableWords.length);
        let [englishWord, translatedWord] = availableWords[index].split(':');

        setAvailableWords(prev => prev.filter((_,i) => i != index));

        return {englishWord, translatedWord}
    }

    function checkAnswer() {
        if ((availableWords.length === 0) && (totalGuesses === words.length-1)) {
            setInputValue("");
            return
        } else {
            if (inputValue.trim().toLowerCase() === translated.toLowerCase()) {
                setCorrectGuesses(prev => prev + 1);
                setTotalGuesses(prev => prev + 1);
            } else {
                setTotalGuesses(prev => prev + 1);
            }
        }

        setInputValue("");
    }

    useEffect(() => {
        if (availableWords.length > 0) {
            const { englishWord, translatedWord } = selectWordPair();
            setEnglish(englishWord);
            setTranslated(translatedWord);
        } else {
            setEnglish('No Words Left');
            setTranslated('No Words Left');
        }
    }, [totalGuesses])


    return (
        <>
            <h1>French test</h1>

            <div className='englishWordCon'>
                <p>{english}</p>
            </div>

            <div className='userGuess'>
                <input 
                    type="text" 
                    placeholder='What is it in French?' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={checkAnswer}>Submit</button>
            </div>


            <div className='guessCount'>
                <p>Correct Guesses: {correctGuesses} Out Of {totalGuesses}</p>
            </div>

            <p className='centerLink'>
                <Link to="/german">To German test ▶️</Link>
            </p>
        </>
    )
}
```


## Other things I learned:

- N / A


## Questions I have: (April 28, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/tree/master/ReactDev/Student/09-RoutingIntro)

## Link to Example JS File

- N / A