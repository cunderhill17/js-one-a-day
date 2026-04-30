# React Course: Lesson 10: User Input Techniques (Part 2)

1. What is the concept
2. Other things I learned
3. Questions I have
4. Resources
5. Link to React Example


## What is the concept / What does it do? 

Most of this session was spent on the lab for lesson 10. 

Accessing Elements in a controlled component
- React specific approach 
- an alternative to using uncontrolled components 

How it works: 
- store a value in React mutable state 
- Two way bind the value directly to an input field 

```jsx
let [price, setPrice] = useState('');
//...
<input type='number' value={price} onChange={e=> setPrice(e.target.value)} />
```

disadvantage --> rerenders on every keystroke. 
- however, in this way, the state variable for 'price' will always hold the latest value

### Lab 10 
- In this lab, you'll take the trilingo application from the previous lab and see how to use various user input techniques 

**Steps:** 
1. Refactor the 'trilingo app' so that the components don't duplicate code unnecessarily

(French.tsx)

```tsx
import words from './FrenchWords.json';
import LanguageTest from './LanguageTest';

export default function French() {
    return (
        <>
            <LanguageTest 
                words={[...words]}
                thisLingo='French'
                nextLabel='To German test ▶️'
                nextPath='/German'
            />
        </>
    )
}
```

(LanguageTest.tsx)

```tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LanguageTest({words, thisLingo, nextLabel, nextPath}: {words: string[], thisLingo: string, nextLabel: string, nextPath: string}) {
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
            <h1>{thisLingo}</h1>

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
                <Link to={nextPath}>{nextLabel}</Link>
            </p>
        </>
    )
}
```


2. Modify the application so that it uses uncontrolled / controlled components, rather than accessing the DOM tree directly. 

- In the previous lab, I had already wrote the code using `controlled components`, so for this lab I just needed to add `uncontrolled components`

These were the spots I change in the above code: 

```tsx
let elemRef = useRef<HTMLInputElement>(null);

//.... Other code goes here

function checkAnswer() {
    let domElem = elemRef.current;

    if ((availableWords.length === 0) && (totalGuesses === words.length-1)) {
        elemRef.current!.value = '';
        return
    } else {
        if (domElem!.value.trim().toLowerCase() === translated.toLowerCase()) {
            setCorrectGuesses(prev => prev + 1);
            setTotalGuesses(prev => prev + 1);
        } else {
            setTotalGuesses(prev => prev + 1);
        }
    }

    elemRef.current!.value = '';
}

//... Other code goes here

<div className='userGuess'>
    <input 
        type="text" 
        placeholder='What is it in French?' 
        ref={elemRef}
    />
    <button onClick={checkAnswer}>Submit</button>
</div>

```

## Other things I learned:

- N / A


## Questions I have: (April 30, 2026)

- N / A


## Resources

- [**React Course: React Foundations**](https://www.linkedin.com/learning/react-foundations-by-pearson/creating-a-more-ambitious-user-interface-31639769?autoSkip=true&contextUrn=urn%3Ali%3AlearningCollection%3A7375705454292922368&resume=false&u=2219954)
    - the course was released March 10, 2026
- [**Lab Starter Code**](https://github.com/andyolsen/react-foundations/tree/master/ReactDev/Student/09-RoutingIntro)
    - I used the code I had left off with after lab 9

## Link to Example JS File

- N / A