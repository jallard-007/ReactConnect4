import './styles/Main.css';
import './styles/GameBoard.css';
import React from 'react';
import GameBoard from './GameBoard';

function App() {
  return (
    <div className='App'>
      <h1>ConnectFour</h1>
      <GameBoard />
    </div>
  );
}

export default App;
