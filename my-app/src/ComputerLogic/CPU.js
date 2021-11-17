import CheckForWin from '../CheckForWin';

function CPU(board) {
  let valueOfColumns = [0, 0, 0, 0, 0, 0, 0];
  for (let column = board.length - 1; column >= 0; column--) {
    if (ColumnIsFull(board[column])) {
      valueOfColumns[column] = -100;
    } else if (IsWinHere(board, column, 2)) {
      valueOfColumns[column] = 100;
    } else if (IsWinHere(board, column, 1)) {
      valueOfColumns[column] = 99;
    }
  }
  valueOfColumns = AssignRandomValues(valueOfColumns);
  return FindBestColumn(valueOfColumns);
}

function AssignRandomValues(columnOptions) {
  for (let column = 0; column <= 6; column++) {
    if (columnOptions[column] === 0) {
      columnOptions[column] = Math.floor(Math.random() * 10);
    }
  }
  return columnOptions;
}

function FindBestColumn(columnOptions) {
  let bestColumnTest = 0;
  for (let column = 1; column <= 6; column++) {
    if (columnOptions[column] > columnOptions[bestColumnTest]) {
      bestColumnTest = column;
    }
  }
  return bestColumnTest;
}

function ColumnIsFull(column) {
  if (column[0] === 0) {
    return false;
  }
  return true;
}

function IsWinHere(board, column, ID) {
  for (let row = 5; row >= 0; row--) {
    if (board[column][row] !== 0) {
      continue;
    }
    board[column][row] = ID;
    if (CheckForWin(board, ID)) {
      board[column][row] = 0;
      return true;
    }
    board[column][row] = 0;
    return false;
  }
}
export default CPU;
