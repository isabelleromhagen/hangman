import React from 'react';
import './Hangman';

const Button = ({value, isClicked, isDisabled}) => {
    return (
        <button onClick={isClicked} disabled={isDisabled}>{value}</button>
    );
};

export default Button;