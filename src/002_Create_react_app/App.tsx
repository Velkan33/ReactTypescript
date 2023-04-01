import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
 return (
  <div className="App bg-sky-900 text-white h-screen flex flex-col items-center justify-center gap-8 ">
   <p className="text-2xl w-5/6 text-center">
    En esta leccion Jon explica como instalar y usar Create React App. En este
    curso usaremos Vite por lo que el proceso es distinto
   </p>
   <a
    href="https://jonmircha.com/react#create-react-app"
    className="text-sky-400 text-xl"
   >
    <img src={reactLogo} className="w-12" alt="react-logo" />
   </a>
   <a
    href="https://jonmircha.com/react#create-react-app"
    className="text-sky-400 text-xl"
   >
    Articulo Create React App
   </a>
   <a href="https://vitejs.dev/guide/" className="text-purple-600 text-xl">
    <img src={viteLogo} className="w-12" alt="vite-logo" />
   </a>
   <a href="https://vitejs.dev/guide/" className="text-purple-600 text-xl">
    Articulo Create Vite
   </a>
  </div>
 );
}

export default App;
