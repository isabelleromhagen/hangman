import React, { Component } from 'react';
import './App.css';
import hanger from './images/hanger.jpg';
//import ButtonComponent from './ButtonComponent';
//import { render } from 'react-dom';


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      //unused: true,
      bgColor: 'green',
      className: 'unused',
      pageLoad : true,
      buttonState : null
    }
    this.buttons = [];
    
    this.output = {};

    this.clickedButtons = [];

    this.handleOnClick = this.handleOnClick.bind(this);
    this.initiateButtonView = this.initiateButtonView.bind(this);
    this.generateButton = this.generateButton.bind(this);
  };
 

generateButtonObject(id, letter){
  let buttonObj = {
    key: id,
    value: letter
    //unused: this.state.unused
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
  
  console.log('got here, id to look for: ' + e + ' unused:  color: ' + this.state.bgColor);
  this.setState({   
    buttonState : changedButtons
  });

}

initiateButtonView(){
  
  let buttonView = null;
  if(this.state.buttonState){
    buttonView = this.state.buttonState;
  }
  else{
    buttonView = this.createButtons();
  }

  


  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>Spelet går ut på att lista ut ordet. Gissa en bokstav i 
          taget tills hela ordet kommit fram eller gubben hängts.</p>
      <img src={hanger} alt='gallows'/>
      <h1>_ _ _ _ _ _</h1>
      <p>Antal gissningar: 0</p>
      <div className="buttonContainer">
          {buttonView.map(Element=>(
           <div>
            {Element}
           </div>
          ))}
      </div>
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