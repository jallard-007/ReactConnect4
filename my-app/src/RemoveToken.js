function RemoveToken(board, columnNum) {
  let newBoard = [...board];
  for (let i = 0; i < newBoard[columnNum].length; i++) {
    if (newBoard[columnNum][i] !== 0) {
      newBoard[columnNum][i] = 0;
      return newBoard;
    }
  }
  return false;
}

export default RemoveToken;
