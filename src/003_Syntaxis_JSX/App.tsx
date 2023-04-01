import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
 const [count, setCount] = useState(0);

 return (
  <div className="App">
   <h1>Jon explain JSX basic syntax</h1>
   <ul>
    <li>Diferencias Principales</li>
    <li>Estructurar un componente</li>
    <li>Como se traduce en Babel a JS</li>
    <li>Operador ternario en JSX</li>
    <li>Funcion Map para crear elementos li</li>
   </ul>
   <a href="https://jonmircha.com/react#jsx">Link a la pagina JonMircha</a>
  </div>
 );
}

export default App;
