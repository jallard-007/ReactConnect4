import CheckForWin from './CheckForWin';
import AddToken from './AddToken';
import CPU from './ComputerLogic/CPU';
import { COMP_ID, PLAYER_ID } from './Defaults';
import { SetGameMove } from './StoreGameMoves';

function GameLoop(board, columnNum, SetBoard) {
  let newBoard = [...board];
  if (CheckForWin(board, COMP_ID) || CheckForWin(board, PLAYER_ID)) {
    return;
  }
  newBoard = AddToken(board, columnNum, PLAYER_ID);
  if (newBoard === false) {
    alert('column is full');
    return;
  }
  SetGameMove([columnNum, PLAYER_ID]);
  if (CheckForWin(newBoard, PLAYER_ID)) {
    SetBoard(newBoard);
    return;
  }
  let compColumn = CPU(newBoard);
  newBoard = AddToken(newBoard, compColumn, COMP_ID);
  SetBoard(newBoard);
  SetGameMove([compColumn, COMP_ID]);
  if (CheckForWin(newBoard, COMP_ID)) {
    return;
  }
}

export default GameLoop;
