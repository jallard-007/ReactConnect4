import React, { useState } from 'react';
import CPU from './CPU';
import CheckForWin from './CheckForWin';

const PLAYER_ID = 1;
const COMP_ID = 2;
const BOARD_DEFAULT = () => {
  return [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
};

const GameBoard = () => {
  const [board, setBoard] = useState(BOARD_DEFAULT);

  function clearBoard() {
    setBoard(BOARD_DEFAULT);
  }

  function handleClick(columnNum) {
    if (CheckForWin(board, COMP_ID) || CheckForWin(board, PLAYER_ID)) {
      clearBoard();
      return;
    }
    const newBoard = addToken(board, columnNum, PLAYER_ID);
    if (newBoard === false) {
      alert('column is full');
      return;
    }
    setBoard(newBoard);
    if (CheckForWin(board, PLAYER_ID)) {
      return;
    }
    let compColumn = CPU(board);
    setBoard(addToken(board, compColumn, COMP_ID));
    if (CheckForWin(board, COMP_ID)) {
      return;
    }
  }

  function addToken(board, columnNum, playerID) {
    let newBoard = [...board];
    for (let i = newBoard[columnNum].length - 1; i >= 0; i--) {
      if (newBoard[columnNum][i] === 0) {
        newBoard[columnNum][i] = playerID;
        return newBoard;
      }
    }
    return false;
  }

  const Coin = (slot) => {
    let defaultClass = 'coin';
    if (slot.value === 1) {
      defaultClass += ' coinPlayer';
    } else if (slot.value === 2) {
      defaultClass += ' coinComp';
    }
    return <div className={defaultClass}></div>;
  };

  const Column = (props) => {
    return (
      <div className='column' columnNum={props.columnNum} onClick={() => handleClick(props.columnNum)}>
        <Coin value={props.column[0]} />
        <Coin value={props.column[1]} />
        <Coin value={props.column[2]} />
        <Coin value={props.column[3]} />
        <Coin value={props.column[4]} />
        <Coin value={props.column[5]} />
      </div>
    );
  };

  return (
    <div id='gameBoard'>
      <Column columnNum='0' column={board[0]} />
      <Column columnNum='1' column={board[1]} />
      <Column columnNum='2' column={board[2]} />
      <Column columnNum='3' column={board[3]} />
      <Column columnNum='4' column={board[4]} />
      <Column columnNum='5' column={board[5]} />
      <Column columnNum='6' column={board[6]} />
    </div>
  );
};

export default GameBoard;
