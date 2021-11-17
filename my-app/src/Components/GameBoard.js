import React from 'react';
import Column from './Column';

export const GameBoard = (props) => {
  return (
    <div id='gameBoard'>
      <Column columnNum={0} board={props.board} SetBoard={props.SetBoard} />
      <Column columnNum={1} board={props.board} SetBoard={props.SetBoard} />
      <Column columnNum={2} board={props.board} SetBoard={props.SetBoard} />
      <Column columnNum={3} board={props.board} SetBoard={props.SetBoard} />
      <Column columnNum={4} board={props.board} SetBoard={props.SetBoard} />
      <Column columnNum={5} board={props.board} SetBoard={props.SetBoard} />
      <Column columnNum={6} board={props.board} SetBoard={props.SetBoard} />
    </div>
  );
};
