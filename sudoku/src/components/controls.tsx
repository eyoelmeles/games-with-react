import { FC } from "react";
import Button from "./button";

interface ControlsProp {
  onSolve: () => void;
  onStop: () => void;
}

const Controls: FC<ControlsProp> = ({ onStop, onSolve }) => {
  return (
    <div className="flex flex-col items-start gap-2 my-2">
      <h2 className="text-xl">Controls</h2>
      <div className="flex col gap-2">
        <Button variant="primary" onClick={onSolve} name="Solve" />
        <Button variant="error" onClick={onStop} name="Stop" />
      </div>
    </div>
  );
};

export default Controls;
