import './styles/Main.css';
import './styles/GameBoard.css';
import React from 'react';
import GameBoard from './GameBoard';
import ResetButton from './ResetButton';
import DifficultySelector from './DifficultySelector';

const App = () => {
  let currDifficulty = "Easy"
  return (
    <div className='container'>
      <div className="page-header">
      <h1 className="text-center">ConnectFour</h1>
      </div>
        <ResetButton />
        <DifficultySelector difficulty={currDifficulty}/>
      <GameBoard />
    </div>
  );
}

export default App;
