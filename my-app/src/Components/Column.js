import React from 'react';
import Coin from './Coin';
import GameLoop from '../GameLoop';

const Column = (props) => {
  return (
    <div className='column' onClick={() => GameLoop(props.board, props.columnNum, props.SetBoard)}>
      <Coin value={props.board[props.columnNum][0]} />
      <Coin value={props.board[props.columnNum][1]} />
      <Coin value={props.board[props.columnNum][2]} />
      <Coin value={props.board[props.columnNum][3]} />
      <Coin value={props.board[props.columnNum][4]} />
      <Coin value={props.board[props.columnNum][5]} />
    </div>
  );
};

export default Column;
