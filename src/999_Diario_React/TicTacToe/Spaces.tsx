import React from 'react';
import { useMyDispatch, useMyState } from './ReducerContext';
import useGameOver from './useGameOver';

export default function Spaces({ id }: { id: number }) {
 const state = useMyState();
 const dispatch = useMyDispatch();
 const { gameOver, WINNER_POSITION } = useGameOver(state);

 if (state === null || dispatch === null)
  return <p>Ocurrio un error en el dispatch o el state</p>;

 const myPosition = state.spaces[id];
 const { turnPlayer1 } = state;

 const handleClick = () => {
  if (myPosition !== '' || gameOver) return;
  if (turnPlayer1) {
   dispatch({ type: 'Player1Click', id });
  } else {
   dispatch({ type: 'Player2Click', id });
  }
 };

 let styles =
  'border w-[5rem] h-[5rem] disabled:opacity-40 text-6xl antialiased';
 if (WINNER_POSITION.includes(id)) {
  styles += ' bg-gradient-to-tr from-green-500 to-green-700';
 }
 return (
  <button
   type="button"
   onClick={handleClick}
   className={styles}
   disabled={gameOver && !WINNER_POSITION.includes(id)}
  >
   {myPosition}
  </button>
 );
}
