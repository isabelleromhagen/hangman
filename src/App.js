import React, { Component } from 'react';
import './App.css';
import hanger from './images/hanger.jpg';
import getWord from './words.js';


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      className: 'unused',
      pageLoad : true,
      buttonState : null
    }
    this.buttons = [];
    
    this.output = {};

    this.clickedButtons = [];
    this.newWord = "";

    this.handleOnClick = this.handleOnClick.bind(this);
    this.initiateButtonView = this.initiateButtonView.bind(this);
    this.generateButton = this.generateButton.bind(this);
    this.handleReset = this.handleReset.bind(this);
  };
 

generateButtonObject(id, letter){
  let buttonObj = {
    key: id,
    value: letter
  };
  
  return(
    buttonObj
  );
}

generateButton(buttonObj) {

  var isButtonClicked = false;
    if (this.clickedButtons){
      isButtonClicked = this.clickedButtons.some(x => x == buttonObj.key.toString());
    }

  let buttonClassName = "unused";
  if(isButtonClicked){
    buttonClassName = "usedButton";
    return(
      <button className = {buttonClassName} 
          key={buttonObj.key} value={buttonObj.value}> {buttonObj.value} </button>
    );
  }
  
  return(
    <button className = {buttonClassName} 
        key={buttonObj.key} value={buttonObj.value} 
        onClick={() => this.handleOnClick(buttonObj.key)} > {buttonObj.value} </button>
  );
}


createButtons() {
  let alphabet = "abcdefghijklmnopqrstuvwxyzåäö";
  let buttons = [];

  for (let i = 0; i < alphabet.length; i++){
    let buttonObj = this.generateButtonObject(i, alphabet[i]);
        
    buttons[i] = this.generateButton(buttonObj);
  }
  return buttons;
}

handleOnClick = e => {
  
  this.clickedButtons.push(e);
  let changedButtons = this.createButtons();
  
  this.setState({   
    buttonState : changedButtons
  });

}

handleReset () {
  this.clickedButtons = [];
  this.newWord = getWord();
  this.setState({
    buttonState: null
  });
}


generateDashes() {
  let dashes = '';
  console.log('Dashes based on: ' + this.newWord);
  for (let i = 0; i < this.newWord.length; i++) {
    dashes = dashes + '_ ';
  }
  console.log(dashes);
  return dashes;
}

initiateButtonView(){
  
  let buttonView = null;
  if(this.state.buttonState){
    buttonView = this.state.buttonState;
  }
  else{
    buttonView = this.createButtons();
    this.newWord = getWord();
    console.log('word obtained: ' + this.newWord);
    this.dashes = this.generateDashes();
  }

  //let dashes = str.replace(\D, "_ ");


  /*let dashes(){
    console.log();
    for (let i = 0; this.newWord.length; i++) {
        dashes += '_ '
    }
  
    console.log(dashes);
  }*/

  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>Spelet går ut på att lista ut ordet. Gissa en bokstav i 
          taget tills hela ordet kommit fram eller gubben hängts.</p>
      <img src={hanger} alt='gallows'/>
      <h1>{this.dashes}</h1>
      <p>Antal gissningar: 0</p>
      <div className="buttonContainer">
          {buttonView.map(Element=>(
           <div>
            {Element}
           </div>
          ))}
      </div>
      <button onClick={() => this.handleReset()}> Återställ</button>
    </div>
  );
}



render() {
     
     return this.initiateButtonView();
  }

}


export default App;


//= alphabet.split("").map((letter) => (this.GenerateButton));  
// {gamestate}

/*  {this.buttons.map(button=>(
              <ButtonComponent
              key={button.key}
              id={button.id}
              value={button.value}
              unused={true}
              style={'#bdbdbd'}
              onClick={this.handleonclick}/>
            ))}*/

            /*componentWillMount(){
  this.buttons = this.createButtons();  
}*/

//{this.buttons}