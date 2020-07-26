import React from 'react';
import './ResetButton.css';

const ResetButton = props => {
    return (
        <button className='reset-button' onClick={props.resetGame}>Новая игра</button>
    );
};

export default ResetButton;