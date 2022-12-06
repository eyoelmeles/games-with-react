import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const [turn, setTurn] = useState<"black" | "white">("black");

  return (
    <div className="App">
      <h2>Connect 4</h2>
      <p>Turns: {turn}</p>
      <table className="table">
        <tbody>
          {ROWS.map((row) => (
            <Columns key={row} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ColsProps {
  row: number;
}

const Columns: React.FC<ColsProps> = ({ row }) => {
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const getCol = (col: number) => {
    // TODO Given a single cell column get all the column
  };
  return (
    <tr className="col-hover">
      {cols.map((col) => (
        <td key={`${row - col}`} className="cells">
          {col}
        </td>
      ))}
    </tr>
  );
};

export default App;
