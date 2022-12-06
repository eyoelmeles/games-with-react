import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const COLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function App() {
  const [turn, setTurn] = useState<'black' | 'white'>('black');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  function handleHover(index: number) {
    setHoverIndex(index);
  }

  function handleLogic(index: number) {
    alert(index);
    // TODO for the game logic
  }

  return (
    <div className="App">
      <h2>Connect 4</h2>
      <p>Turns: {turn}</p>
      <div className="cols">
        {COLS.map((col, index: number) => (
          <div
            key={col.toString()}
            className={`column ${index === hoverIndex ? 'col-hover' : ''}`}
            onMouseOver={() => handleHover(index)}
            onClick={() => handleLogic(index + 1)}
          >
            {ROWS.map((row) => (
              <p
                key={`${row.toString() + col}`}
                className="cels"
                id={`${row.toString() + col}`}
              ></p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
