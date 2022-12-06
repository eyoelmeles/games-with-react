import { FC } from 'react';
import Button from './button';

interface ControlsProp {
  onSolve: () => void;
  onStop: () => void;
  onNewGame?: () => void;
}

const Controls: FC<ControlsProp> = ({ onStop, onSolve, onNewGame }) => {
  return (
    <div className="flex flex-col items-start gap-2 my-2">
      <h2 className="text-xl">Controls</h2>
      <div className="flex col gap-2">
        <Button variant="primary" onClick={onSolve} name="Solve" />
        <Button variant="error" onClick={onStop} name="Stop" />
        <Button variant="error" onClick={onNewGame} name="New Game" />
      </div>
    </div>
  );
};

export default Controls;
