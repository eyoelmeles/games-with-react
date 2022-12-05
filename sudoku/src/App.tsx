import Board from './components/board';
import Controls from './components/controls';
import SudokuHeader from './components/header';

function App() {
  function onStop() {}
  function onSolve() {}
  return (
    <div className="mx-16">
      <SudokuHeader />
      <Controls onStop={onStop} onSolve={onSolve} />
      <Board />
    </div>
  );
}

export default App;
