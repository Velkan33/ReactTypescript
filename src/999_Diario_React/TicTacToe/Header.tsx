import React from 'react';
import { useMyDispatch, useMyState } from './ReducerContext';
import useGameOver from './useGameOver';

export default function Header() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 const { gameOver, winner } = useGameOver(state);
 if (state === null || dispatch === null)
  return <p>Ocurrio un error en el dispatch o el state</p>;

 const turno = state.turnPlayer1
  ? `${state.player1Name} 'X'`
  : `${state.player2Name} 'O'`;

 return (
  <>
   {!gameOver && (
    <h3 className="text-2xl">{`Es el turno del jugador: ${turno}`}</h3>
   )}
   {gameOver && winner === 'Empate' && (
    <h3 className="text-2xl">El juego ha terminado en empate</h3>
   )}
   {gameOver && winner !== 'Empate' && (winner === 'X' || winner === 'O') && (
    <h3 className="text-2xl">{`El ganador es el jugador: ${winner}`}</h3>
   )}
   {gameOver && winner !== 'Empate' && winner !== 'X' && winner !== 'O' && (
    <h3 className="text-2xl">{`El ganador es ${winner}`}</h3>
   )}
  </>
 );
}
