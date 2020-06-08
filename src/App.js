import React, { Component } from 'react';
import './App.css';
import gallows0 from './images/gallows0.jpg';
import gallows1 from './images/gallows1.jpg';
import gallows2 from './images/gallows2.jpg';
import gallows3 from './images/gallows3.jpg';
import gallows4 from './images/gallows4.jpg';
import gallows5 from './images/gallows5.jpg';
import gallows6 from './images/gallows6.jpg';
import getWord from './words.js';
import Button from './components/Button';


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: new Set(),
      newWord: getWord(),
      currentImageNumber:0,
      gameLost: false
     
    }

    this.buttons = [];
    this.output = {};
    this.clickedButtons = [];
    this.newWord = "";
    this.guesses = 6;
    this.imageSource = 0;
    this.message = "Spelet pågår";

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.images = this.loadImages();
  };

  loadImages(){
    let imageList = [gallows0,gallows1,gallows2, gallows3, gallows4, gallows5, gallows6];

    return imageList;
  }

createButtons() {
  let alphabet = "abcdefghijklmnopqrstuvwxyzåäö".split("");

  return alphabet.map((letter) => (
    <Button 
    isClicked={this.handleOnClick} key={letter} letter={letter} value={letter}
    isDisabled={this.state.isDisabled.has(letter)}/>
  ));
}

handleOnClick(e) {
  let letterValue = e.target.innerText;

  if(!this.state.gameLost) {    
    this.checkIfLetterExists(letterValue);
    this.setState((state) => ({   
      isDisabled: state.isDisabled.add(letterValue),
      newWord: this.newWord,
    })); 
  }


}

checkIfLetterExists (letter) {
  if(this.newWord.includes(letter)) {
      let letterIndex = this.newWord.indexOf(letter);
      console.log('index: ', letterIndex);
      this.dashes[letterIndex] = letter;

      if(!this.dashes.includes('_ ')){
        this.message = "Grattis, du vann! :)"
      }

  } else {
    this.guesses--
    let imgNumber = this.state.currentImageNumber + 1;
    let isLost = false;

    if(this.guesses === 0) {
      isLost = true;      
      this.guesses = 0;
      this.message = `Du förlorade :( Ordet var: ${this.newWord}`;
    }
    if(imgNumber > 6) {
        imgNumber = 6;
    }        
    this.setState({
      currentImageNumber: imgNumber,
      gameLost: isLost
    });

  }
}

handleReset () {
  console.log('resetting');
  this.guesses = 6
  this.message = "Gissa ordet"
  this.newWord = getWord();
  console.log('new word obtained: ' + this.newWord);
  this.dashes = this.generateDashes();
  this.setState((state) => ({
    isDisabled: new Set(),
    newWord: getWord(),
    guesses: 6,
    currentImageNumber: 0,
    gameLost: false
  }));
}


  generateDashes() {
  let word = this.newWord.split("");
  return word.map((letter) => "_ ");
}


initiateButtonView(){
  
  let buttonView = null;
  if(this.state.buttonState){
    buttonView = this.state.buttonState;
  }
  else{
    buttonView = this.createButtons();
    if(this.newWord < 1) {
      this.newWord = getWord();
      console.log('word obtained: ' + this.newWord);
      this.dashes = this.generateDashes();
    }
  }
  

  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>Spelet går ut på att lista ut ordet. Gissa en bokstav i 
          taget tills hela ordet kommit fram eller gubben hängts.</p>
      <img src={this.images[this.state.currentImageNumber]} alt="gallows"/>
      <h1>{this.dashes}</h1>
      <p>Antal gissningar: {this.guesses}</p>
      <p>{this.message}</p>
      <div className="buttonContainer">
          {buttonView.map(Element=>(
           <div>
            {Element}
           </div>
          ))}
      </div>
      <button className="resetButton" onClick={() => this.handleReset()}> Återställ</button>
    </div>
  );
}


render() {
     
     return this.initiateButtonView();
  }

}

export default App;
