import React from "react";

const SudokuHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-bold text-green-400">Sudoku</h1>
      <p className="font-thin">Easy Mode</p>
    </div>
  );
};

export default SudokuHeader;
