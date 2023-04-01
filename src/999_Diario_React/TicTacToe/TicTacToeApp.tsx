import React from 'react';
import MyProvider from './ReducerContext';
import Board from './Board';
import Header from './Header';
import PlayerNameForm from './PlayerNameForm';
import RestartBackButton from './RestartBackButton';

export default function TicTacToeApp() {
 /** Memory mode: inputs invisible;
time mode: less than 2 seconds to tick
time memory mode: less than 2 seconds and invisible inputs */
 return (
  <MyProvider>
   <div className="min-h-screen">
    <div className="grid place-items-center gap-4">
     <Board />
     <Header />
     <PlayerNameForm />
     <RestartBackButton />
    </div>
   </div>
  </MyProvider>
 );
}
