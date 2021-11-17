function AddToken(board, columnNum, playerID) {
  let newBoard = [...board];
  for (let i = newBoard[columnNum].length - 1; i >= 0; i--) {
    if (newBoard[columnNum][i] === 0) {
      newBoard[columnNum][i] = playerID;
      return newBoard;
    }
  }
  return false;
}

export default AddToken;
