import React from 'react';
import AddToken from '../AddToken';
import RemoveToken from '../RemoveToken';
import { GetGameMovesNumber, GetRemovedMovesNumber, GetGameMoveGoingBack, GetRemovedMoves } from '../StoreGameMoves';

function BackForButton(props) {
  function GoBack(SetBoard) {
    if (GetGameMovesNumber() > 0) {
      console.log('went back');
      let previousMove = GetGameMoveGoingBack();
      SetBoard(RemoveToken(props.board, previousMove[0]));
    }
  }
  function GoForward(SetBoard) {
    if (GetRemovedMovesNumber() > 0) {
      console.log('went forward');
      let removedMove = GetRemovedMoves();
      SetBoard(AddToken(props.board, removedMove[0], removedMove[1]));
    }
  }

  return (
    <div>
      <button className='btn btn-info' onClick={() => GoBack(props.SetBoard)}>
        GoBack
      </button>
      <button className='btn btn-info' onClick={() => GoForward(props.SetBoard)}>
        GoForward
      </button>
    </div>
  );
}

export default BackForButton;
