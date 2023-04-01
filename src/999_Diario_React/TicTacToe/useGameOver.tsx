import { useState } from 'react';
import { useMyState } from './ReducerContext';

interface State {
 player1Name: string;
 player2Name: string;
 turnPlayer1: boolean;
 spaces: {
  [uno: number]: string;
 };
}

function useGameFinishedWinnerPosition(): [boolean, number[]] {
 const state = useMyState();
 if (state === null) return [false, []];
 const SPACES = state.spaces;
 const condition1 =
  SPACES[0] === SPACES[1] && SPACES[1] === SPACES[2] && SPACES[0] !== '';
 const condition2 =
  SPACES[3] === SPACES[4] && SPACES[4] === SPACES[5] && SPACES[3] !== '';
 const condition3 =
  SPACES[6] === SPACES[7] && SPACES[7] === SPACES[8] && SPACES[6] !== '';
 const condition4 =
  SPACES[0] === SPACES[3] && SPACES[3] === SPACES[6] && SPACES[0] !== '';
 const condition5 =
  SPACES[1] === SPACES[4] && SPACES[4] === SPACES[7] && SPACES[1] !== '';
 const condition6 =
  SPACES[2] === SPACES[5] && SPACES[5] === SPACES[8] && SPACES[2] !== '';
 const condition7 =
  SPACES[0] === SPACES[4] && SPACES[4] === SPACES[8] && SPACES[0] !== '';
 const condition8 =
  SPACES[2] === SPACES[4] && SPACES[4] === SPACES[6] && SPACES[2] !== '';

 const gameFinished =
  condition1 ||
  condition2 ||
  condition3 ||
  condition4 ||
  condition5 ||
  condition6 ||
  condition7 ||
  condition8;
 const winnerPosition = () => {
  if (condition1) return [0, 1, 2];
  if (condition2) return [3, 4, 5];
  if (condition3) return [6, 7, 8];
  if (condition4) return [0, 3, 6];
  if (condition5) return [1, 4, 7];
  if (condition6) return [2, 5, 8];
  if (condition7) return [0, 4, 8];
  if (condition8) return [2, 4, 6];
  return [];
 };
 return [gameFinished, winnerPosition()];
}

export default function useGameOver(state: State | null) {
 const [gameOver, setGameOver] = useState(false);
 const [winner, setWinner] = useState('');
 const [GAME_FINISHED, WINNER_POSITION] = useGameFinishedWinnerPosition();

 if (state === null) return { gameOver, winner, WINNER_POSITION };

 const SPACES = { ...state.spaces };

 const selectNameOrSymbol = (position: string) => {
  if (position === 'X' && state.player1Name === '') {
   return 'X';
  }
  if (position === 'X' && state.player1Name !== '') {
   return state.player1Name;
  }
  if (position === 'O' && state.player2Name === '') {
   return 'O';
  }
  return state.player2Name;
 };

 const SPACES_ARRAY = Object.values(SPACES);
 const allSpacesEmpty: boolean =
  SPACES_ARRAY.filter((space) => space !== '').length === 0;
 const allSpacesFull: boolean =
  SPACES_ARRAY.filter((space) => space === '').length === 0;

 if (gameOver === false) {
  if (GAME_FINISHED) {
   setGameOver(true);
   setWinner(selectNameOrSymbol(SPACES[WINNER_POSITION[0]]));
  } else if (allSpacesFull) {
   setGameOver(true);
   setWinner('Empate');
  }
 } else if (gameOver === true && allSpacesEmpty) {
  setGameOver(false);
  setWinner('');
 } else if (!GAME_FINISHED && !allSpacesFull) {
  setGameOver(false);
  setWinner('');
 }
 return { gameOver, winner, WINNER_POSITION };
}
