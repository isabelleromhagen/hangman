import React, {useState} from 'react';
import getWord from '../words.js';
import Button from './Button';
import '../App.css';
import gallows0 from '../images/gallows0.jpg';
import gallows1 from '../images/gallows1.jpg';
import gallows2 from '../images/gallows2.jpg';
import gallows3 from '../images/gallows3.jpg';
import gallows4 from '../images/gallows4.jpg';
import gallows5 from '../images/gallows5.jpg';
import gallows6 from '../images/gallows6.jpg';

const Hangman = () => {

  const loadImages = () => {
    let imageList = [gallows0,gallows1,gallows2, gallows3, gallows4, gallows5, gallows6];

    return imageList;
  };

    const [inactiveButtons, setDisabled] = useState(new Set());
    const [newWord, setNewWord] = useState(getWord());
    const [currentImageNumber, setCurrentImage] = useState(0);
    const [images, setImages] = useState(loadImages());
    const [gameLost, setGameLost] = useState(false);
    const generateDashes = () => {
        let word = newWord.split("");
        return word.map((letter) => "_ ");
      }
    const [dashes, setDashes] = useState(generateDashes());
    const [message, setMessage] = useState("");
    const [guesses, setGuesses] = useState(6);
   
const checkDisabled = (letter) =>{
  if(inactiveButtons)
  {
    return inactiveButtons.has(letter);
  }
  return false;
    
} 

const createButtons = () => {
        const alphabet = "abcdefghijklmnopqrstuvwxyzåäö".split("");
      
        return alphabet.map((letter) => (
          <Button 
          isClicked={handleOnClick} key={letter} letter={letter} value={letter}
          isDisabled={checkDisabled(letter)}/>
        ));
      }

const handleOnClick = (e) => {
        let letterValue = e.target.innerText;
      
        if(!gameLost) {    
          checkIfLetterExists(letterValue);          
        }
      }

const checkIfLetterExists = (letter) => {

        let tempSet = inactiveButtons;
        tempSet.add(letter);
        setDisabled(tempSet);

        if(newWord.includes(letter)) {
            let letterIndex = newWord.indexOf(letter);
            console.log('index: ', letterIndex, ' in word ', newWord, ' dashes: ', dashes);
  
            let tempDashes = dashes;
            tempDashes[letterIndex] = letter;
            console.log('tempdashes: ', tempDashes);
            
      
            if(!tempDashes.includes('_ ')){
              setMessage("Grattis, du vann! :)");
            }

            setDashes(tempDashes);
      
        } else {
          setGuesses(guesses-1);
           let imgNumber = currentImageNumber + 1;
      
          if(guesses === 0) {
            setGameLost(true);      
            setGuesses(0);
            setMessage(`Du förlorade :( Ordet var: ${newWord}`);
          }
          if(imgNumber > 6) {
            imgNumber = 6;
          }        
       
        setCurrentImage(imgNumber);
      
        }
      }

const handleReset = () => {
        setGuesses(6);
        setMessage("");
        setNewWord(getWord());
        setDashes(generateDashes());
        setDisabled(new Set());
        setCurrentImage(0);
        setGameLost(false);
      }

    return (   
        <div>
            <h1>Hänga gubbe</h1>
            <p>Spelet går ut på att lista ut ordet. Gissa en bokstav i 
                taget tills hela ordet kommit fram eller gubben hängts.</p>
            <img src={images[currentImageNumber]} alt="gallows"/>
            <h1>{dashes}</h1>
            <p>Antal gissningar: {guesses}</p>
            <p>{message}</p>
            <div>{createButtons()}</div>
            <button className="resetButton" onClick={() => handleReset()}>Starta om</button>
        </div>
    )
}

export default Hangman;