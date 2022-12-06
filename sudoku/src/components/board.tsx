import { FC } from 'react';
import BoardRow from './boardRow';

// boardRow
interface BoardProps {
  cellValues: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Board: FC<BoardProps> = ({ cellValues, onChange }) => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <table className="m-4">
        <tbody>
          {rows.map((element: number) => (
            <BoardRow
              key={element.toString()}
              row={element.toString()}
              cellValues={cellValues}
              onChange={onChange}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Board;
