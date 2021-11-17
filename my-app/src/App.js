import './styles/Main.css';
import './styles/GameBoard.css';
import React from 'react';
import ResetButton from './Components/ResetButton';
import BackForButton from './Components/BackForwardButton';
import DifficultySelector from './Components/DifficultySelector';
import { BOARD_DEFAULT, DIFFICULTY_DEFAULT } from './Defaults';
import { GameBoard } from './Components/GameBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: BOARD_DEFAULT,
      difficulty: DIFFICULTY_DEFAULT
    };
    this.SetStateDifficulty = this.SetStateDifficulty.bind(this);
    this.SetStateBoard = this.SetStateBoard.bind(this);
  }

  SetStateBoard(newBoard) {
    this.setState({ board: newBoard, difficulty: this.state.difficulty });
  }
  SetStateDifficulty(newDifficulty) {
    this.setState({ board: this.state.board, difficulty: newDifficulty });
  }
  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='text-center'>ConnectFour</h1>
        </div>
        <ResetButton SetBoard={this.SetStateBoard} />
        <BackForButton board={this.state.board} SetBoard={this.SetStateBoard} />
        <DifficultySelector />
        <GameBoard board={this.state.board} SetBoard={this.SetStateBoard} />
      </div>
    );
  }
}

export default App;
