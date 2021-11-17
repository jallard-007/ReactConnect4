import { BOARD_DEFAULT } from './Defaults';
import { NewGame } from './StoreGameMoves';

function ClearBoard(SetBoard) {
  for (let y = 0; y < 7; y++) {
    for (let x = 0; x < 6; x++) {
      BOARD_DEFAULT[y][x] = 0;
    }
  }
  SetBoard(BOARD_DEFAULT);
  NewGame();
}

export default ClearBoard;
