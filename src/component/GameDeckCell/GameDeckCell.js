import React from 'react';
import './GameDeckCell.css';
import GameRing from "../GameRing/GameRing";

const GameDeckCell = props => {
    let gameDeckCellClasses = ['game-deck-cell'];
    let containsRing = false;

    if(props.clicked) {
        gameDeckCellClasses.push('clicked');
    }

    if(props.ring) {
        containsRing = <GameRing />;
    }
    return (
        <button type='button' className={gameDeckCellClasses.join(' ')} onClick={props.onCellClick}>
            {containsRing}
        </button>
    );
};

export default GameDeckCell;