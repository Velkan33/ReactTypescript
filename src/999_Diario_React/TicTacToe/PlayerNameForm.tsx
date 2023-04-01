import React from 'react';
import { useMyDispatch, useMyState } from './ReducerContext';

export default function PlayerNameForm() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 if (state === null || dispatch === null)
  return <p>Ocurrio un error en el dispatch o el state</p>;

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.matches('#player1')) {
   dispatch({ type: 'Player1Name', name: e.target.value });
  }
  if (e.target.matches('#player2')) {
   dispatch({ type: 'Player2Name', name: e.target.value });
  }
 };
 const styles =
  'text-white text-xl mt-1 mb-1 bg-transparent border rounded px-3 py-1 placeholder:text-white animate-pulse';
 const stylesPlayer1 = state.player1Name ? `${styles} animate-none` : styles;
 const stylesPlayer2 = state.player2Name ? `${styles} animate-none` : styles;

 return (
  <form>
   <input
    className={stylesPlayer1}
    type="text"
    id="player1"
    value={state.player1Name}
    onChange={handleChange}
    placeholder="Player 1 name"
    autoComplete="off"
   />
   <br />

   <input
    className={stylesPlayer2}
    type="text"
    id="player2"
    value={state.player2Name}
    onChange={handleChange}
    placeholder="Player 2 name"
    autoComplete="off"
   />
  </form>
 );
}
