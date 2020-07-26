import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './App.css';
import GameDeck from "../../component/GameDeck/GameDeck";
import Counter from "../../component/Counter/Counter";
import ResetButton from "../../component/ResetButton/ResetButton";

function App() {
  const [cell, setCell] = useState({
      cells: [],
    });

  const [counter, setCounter] = useState([]);
  const [ringFound, setRingFound] = useState(false);

  const generateCells = () => {
      const cells = [];
      for(let i = 0; i < 36; i++) {
          cells.push({hasRing: false, id: nanoid(), clicked: false});
      }
      const randomCell = Math.floor(Math.random() * cells.length);
      cells[randomCell].hasRing = !cells[randomCell].hasRing;
      setCell({cells});
  }

    const onCellClick = id => {
        const index = cell.cells.findIndex(c => c.id === id);
        const cells = [...cell.cells];
        cells[index].clicked = true;
        const counter = cells.filter(item => item.clicked);
        setCounter(counter);
        setCell({cells});
        if(cells[index].hasRing === true) {
            setRingFound(!ringFound);
        }
    }

  const resetGame = () => {
      generateCells()
      setCounter([]);
      const ringFound = false;
      setRingFound(ringFound);
  }

  if(cell.cells.length === 0) {
      generateCells();
  }

  return (
    <div className="App">
      <GameDeck
          cells={cell.cells}
          onCellClick={onCellClick}
          endGame={ringFound}
      />
      <Counter counter={counter.length} ringFound={ringFound}/>
      <ResetButton resetGame={resetGame}/>
    </div>
  );
}

export default App;
