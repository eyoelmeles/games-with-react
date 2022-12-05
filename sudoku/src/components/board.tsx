import {} from 'react';
import BoardRow from './boardRow';

// boardRow

function Board() {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <table className="m-4">
        <tbody>
          {rows.map((element: number) => (
            <BoardRow key={element} row={element.toString()} cellValues={[1]} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Board;
