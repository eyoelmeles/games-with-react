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

  return (
    <div className="App">
      <h2>Connect 4</h2>
      <p>Turns: {turn}</p>
      <div className="cols">
        {COLS.map((col, index: number) => (
          <div
            className={`columns ${index === hoverIndex ? 'col-hover' : ''}`}
            onMouseOver={() => handleHover(index)}
          >
            {ROWS.map((row) => (
              <p className="rowss">{col}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface ColsProps {
  row: number;
}

// table column renders first

const Columns: React.FC<ColsProps> = ({ row }) => {
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const getCol = (col: number) => {
    // TODO Given a single cell column get all the column
  };
  return (
    <tr className="">
      {cols.map((col) => (
        <td key={`${row - col}`} className="cells">
          {col}
        </td>
      ))}
    </tr>
  );
};

export default App;
