import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [filled, setFilled] = useState<string[]>([]);
  const [turn, setTurn] = useState<'x' | 'o' | null>(null);

  const handleClick = (e) => {
    filled.push(e.target.attributes['id'].nodeValue);
    setTurn((prevTurn) => (prevTurn === 'x' ? 'o' : 'x'));
  };

  return (
    <div className="App">
      <table className="table">
        <tbody>
          <tr>
            <td className="cells" id="11" onClick={handleClick}>
              {filled.includes('11') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
            <td className="cells" id="12" onClick={handleClick}>
              {filled.includes('12') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
            <td className="cells" id="13" onClick={handleClick}>
              {filled.includes('13') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
          </tr>
          <tr>
            <td className="cells" id="21" onClick={handleClick}>
              {filled.includes('21') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
            <td className="cells" id="22" onClick={handleClick}>
              {filled.includes('22') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
            <td className="cells" id="23" onClick={handleClick}>
              {filled.includes('23') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
          </tr>
          <tr>
            <td className="cells" id="31" onClick={handleClick}>
              {filled.includes('31') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
            <td className="cells" id="32" onClick={handleClick}>
              {filled.includes('32') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
            <td className="cells" id="33" onClick={handleClick}>
              {filled.includes('33') ? (turn === 'x' ? 'X' : 'O') : ''}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
