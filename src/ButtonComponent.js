import React, {Component} from 'react';
import './App.css';

const buttonStyles = {
    /*unusedButton: {
        fontFamily: 'Coming Soon',
        color: "white",
        backgroundColor: "#ffc107",
        boxShadow: "0px 5px #ff9800",
        border: "none",
        borderRadius: "20%",
        height: "35px",
        width: "35px",
        fontSize: "large",
        margin: "2px"
        
      },
      
      usedButton: {
        backgroundColor: "#bdbdbd",
        boxShadow: "0px, 5px #6e6e6e"
      }*/

      button: buttonColor =>({
            backgroundColor: buttonColor,
            fontFamily: 'Coming Soon',
            color: "white",
            boxShadow: "0px 5px #ff9800",
            border: "none",
            borderRadius: "20%",
            height: "35px",
            width: "35px",
            fontSize: "large",
            margin: "2px"
      })
};


class ButtonComponent extends Component {
  
    /*constructor(props) {
        super(props);

        this.state = {
            buttons: [this.createButtons()]}

    }*/

/*createButtons() {
    return "abcdefghijklmnopqrstuvwxyzåäö".split("").map(letter => (
        <button className = "button" 
        key={letter} id={letter} value={letter} used={letter.used} 
         > {letter} </button>
    ));
}*/

/*handleonclick = value => {
    console.log('got here');
    for(let button of this.state.buttons) {
        console.log('in for');
        if(button.value === value) {
            console.log('in if');
            button.used = !button.used;
            console.log(button + ' got clicked!');
            break;
        }
    }
    //this.setState({buttons : buttons});

};*/

render() {
   
   // let gamestat = this.createButtons();
    let gamestat = this.state;
    return(
        <div style={buttonStyles}>
           
            {gamestat}
        </div>
        );
    }
}

export default ButtonComponent;

//style={buttonStyles.button(this.props.used ? "#bdbdbd" : "#ffc107")}
//onClick={()=>this.props.handleonclick(this.props.id)}