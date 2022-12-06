import React, { FC } from 'react';

const GameInfo: FC<any> = ({
  gameLevel,
  complexityLeve,
  countEmptyCells,
  complexityLog,
}) => {
  const cName =
    gameLevel === 'hard'
      ? 'danger'
      : gameLevel === 'easy'
      ? 'success'
      : 'warning';
  return (
    <div>
      Game Leve: <span>{cName}</span>
    </div>
  );
};

export default GameInfo;
