import React from 'react';
import './GameDeck.css';
import GameDeckCell from "../GameDeckCell/GameDeckCell";

const GameDeck = props => {
    let deckClasses = ['game-deck'];

    if(props.endGame) {
        deckClasses.push('end-game');
    }

    return (
        <div className={deckClasses.join(' ')}>
            {props.cells.map(item => <GameDeckCell
                key={item.id}
                clicked={item.clicked}
                ring={item.hasRing}
                onCellClick={() => props.onCellClick(item.id)}
            />)}
        </div>
    );
};

export default GameDeck;