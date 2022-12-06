import React from 'react';

interface BoardRowProps {
  row: string;
  cellValues: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BoardRow: React.FC<BoardRowProps> = ({ row, cellValues, onChange }) => {
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const borderStyle =
    parseInt(row) % 3 === 1 && parseInt(row) > 1
      ? 'border-t-4 border-t-slate-100'
      : '';

  const getValueOfCell = (id: string, element: number) => {
    let index = (parseInt(id) - 1) * 9 + element - 1;
    return cellValues[index];
  };

  const tdclsName = (index: number) =>
    index % 3 === 1 && index > 1
      ? 'w-4 h-4 p-1 bg-red-200'
      : 'w-4 h-4 p-1 bg-red-200';

  return (
    <tr className={borderStyle} key={row}>
      {cols.map((element: number) => {
        const tdclsName =
          element % 3 === 1 && element > 1
            ? 'border-2 border-slate-50 border-l-4 border-l-slate-200'
            : 'border-2 border-slate-50';

        return (
          <td className={tdclsName} key={row + element}>
            <input
              value={getValueOfCell(row, element)}
              className="bg-white w-6 h-6 text-center"
              onChange={onChange}
            />
          </td>
        );
      })}
    </tr>
  );
};

export default BoardRow;
