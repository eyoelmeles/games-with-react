import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
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
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <tr>
      {cols.map((col) => (
        <td key={`${row - col}`} className="cells">
          {col}
        </td>
      ))}
    </tr>
  );
};

export default App;
