function CheckForWin(board, ID) {
  for (let column = 0; column < board.length; column++) {
    for (let row = board[column].length - 1; row >= 0; row--) {
      if (board[column][row] !== ID) {
        continue;
      }
      if (column < 4 && CheckForHorizontalWin(board, column, row, ID)) {
        return true;
      }
      if (row < 3 && CheckForVerticalWin(board, column, row, ID)) {
        return true;
      }
      if (column > 2 && row < 3 && CheckForDiagonalWinLowerRighttoUpperLeft(board, column, row, ID)) {
        return true;
      }
      if (column < 4 && row < 3 && CheckForDiagonalWinUpperRightToLowerLeft(board, column, row, ID)) {
        return true;
      }
    }
  }
  return false;
}

function CheckForHorizontalWin(board, column, row, ID) {
  if (board[column + 1][row] === ID && board[column + 2][row] === ID && board[column + 3][row] === ID) {
    return true;
  }
  return false;
}

function CheckForVerticalWin(board, column, row, ID) {
  if (board[column][row + 1] === ID && board[column][row + 2] === ID && board[column][row + 3] === ID) {
    return true;
  }
  return false;
}

function CheckForDiagonalWinLowerRighttoUpperLeft(board, column, row, ID) {
  if (board[column - 1][row + 1] === ID && board[column - 2][row + 2] === ID && board[column - 3][row + 3] === ID) {
    return true;
  }
  return false;
}

function CheckForDiagonalWinUpperRightToLowerLeft(board, column, row, ID) {
  if (board[column + 1][row + 1] === ID && board[column + 2][row + 2] === ID && board[column + 3][row + 3] === ID) {
    return true;
  }
  return false;
}

export default CheckForWin;
