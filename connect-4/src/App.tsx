import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const COLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function App() {
  const [turn, setTurn] = useState<'black' | 'white'>('black');
  const [filled, setFilled] = useState<string[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {}, [filled]);

  function handleHover(index: number) {
    setHoverIndex(index);
  }
  function handleLogic(e: any, index: number) {
    // TODO for the game logic
    for (let i = ROWS.length; i >= 1; i--) {
      if (
        filled.includes(`${i},${e.target.attributes['data-col'].nodeValue}`)
      ) {
        continue;
      } else {
        filled.push(`${i},${e.target.attributes['data-col'].nodeValue}`);
        console.log('FILLED', filled);
        break;
      }
    }
    setTurn((prevTurn) => (prevTurn === 'black' ? 'white' : 'black'));
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
            onClick={(e) => handleLogic(e, index + 1)}
          >
            {ROWS.map((row) => (
              <p
                key={`${row.toString() + col}`}
                className={`cels ${
                  filled.includes(row + ',' + col)
                    ? turn === 'white'
                      ? 'filled-blue'
                      : 'filled-red'
                    : ''
                }`}
                data-col={col}
                data-row={row}
                data-filled={filled.includes(`${row},${col}}`)}
                id={`${row},${col}`}
              ></p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
