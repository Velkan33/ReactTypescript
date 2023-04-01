import React from 'react';

export default function MyIntro() {
 return (
  <div className="App flex flex-col items-center h-screen justify-center border bg-slate-800 text-gray-300 gap-16">
   <h2 className="text-2xl">
    En esta clase Jon hace un recuento del estado de React y nos habla de react
   </h2>
   <img src="./src/assets/react.svg" alt="react svg" className="h-16" />
   <a
    href="https://jonmircha.com/react"
    className="text-purple-600 hover:text-purple-800"
   >
    Pagina de Jon
   </a>
  </div>
 );
}
