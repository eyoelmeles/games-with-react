import { useState, useEffect } from 'react';
import Board from './components/board';
import Controls from './components/controls';
import GameInfo from './components/gameInfo';
import SudokuHeader from './components/header';
import NewGame from './NewGame';

function App() {
  const [cellValues, setcellValues] = useState(new Array(81).fill('5'));
  const [gameLevel, setGameLevel] = useState<string | undefined>('hard');
  const [countEmptyCell, setCountEmptyCell] = useState<number>(0);
  const [complexityLevel, setComplexityLevel] = useState<number>(0);
  const [complexityLog, seComplexityLog] = useState<number>(0);
  const newGame = new NewGame();
  function onStop() {}
  function onLoadNewGame() {
    let gameObj = newGame.getFirstValue();

    console.log('game obj', gameObj, 'game obj to string', gameObj?.toString());
    // filter by `;` and
  }
  function onFocus() {}
  function deleteGame() {}
  function getThisAsStr() {}
  function newGameHandler() {
    let gameObj = newGame.getFirstValue();

    console.log('game obj', gameObj, 'game obj to string', gameObj?.toString());
    setGameLevel(gameObj?.level);
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('e : ', e);
  }
  function onSolve() {}

  return (
    <div className="mx-16">
      <SudokuHeader />
      <Controls onStop={onStop} onSolve={onSolve} onNewGame={newGameHandler} />
      <Board cellValues={cellValues} onChange={onChange} />
      <div className="flex gap-6">
        <div>
          <GameInfo
            gameLevel={gameLevel}
            complexityLevel={complexityLevel}
            countEmptyCells={countEmptyCell}
            complexityLog={complexityLog}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>Analysis of the game: </div>
          <div>Number of Solved: </div>
          <div>Input Box: </div>
        </div>
      </div>
    </div>
  );
}

export default App;
