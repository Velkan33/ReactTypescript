import React from 'react';
import { useMyDispatch, useMyState } from './ReducerContext';
import useGameOver from './useGameOver';

export default function RestartBackButton() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 const { gameOver } = useGameOver(state);
 if (state === null || dispatch === null)
  return <p>Ocurrio un error en el dispatch o el state</p>;
 const handleRestart = () => {
  dispatch({ type: 'Reset' });
 };

 const markedSpaces = Object.values(state.spaces).filter(
  (space) => space !== ''
 );
 const turn = markedSpaces.length;
 const stateToSave = JSON.stringify(state.spaces);
 localStorage.setItem(`turn${turn}`, stateToSave);

 const handleBack = () => {
  const turnToBack = turn - 1;
  const stateToBack = localStorage.getItem(`turn${turnToBack}`);
  if (stateToBack === null) return;
  const spacesToBack = JSON.parse(stateToBack);
  dispatch({ type: 'Back', spaces: spacesToBack });
 };

 const styles =
  'border p-3 text-xl mr-1 rounded-lg shadow-lg shadow-black/25 hover:shadow-none transition-shadow duration-300';
 const restartStyle = `${styles} animate-bounce`;

 return (
  <>
   <button
    className={gameOver ? restartStyle : styles}
    type="button"
    onClick={handleRestart}
   >
    Restart Game
   </button>
   <button className={styles} type="button" onClick={handleBack}>
    Back One Move
   </button>
  </>
 );
}
