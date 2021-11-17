let gameHistory = [];
let gameHistoryRemoved = [];
export function GetGameMovesNumber() {
  return gameHistory.length;
}
export function GetRemovedMovesNumber() {
  return gameHistoryRemoved.length;
}
export function SetGameMove(move) {
  gameHistory.push(move);
}
export function GetGameMoveGoingBack() {
  const move = gameHistory.pop();
  SetRemovedMoves(move);
  return move;
}
export function GetRemovedMoves() {
  const move = gameHistoryRemoved.pop();
  SetGameMove(move);
  return move;
}
function SetRemovedMoves(move) {
  gameHistoryRemoved.push(move);
}
export function NewGame() {
  gameHistory = [];
  gameHistoryRemoved = [];
}
