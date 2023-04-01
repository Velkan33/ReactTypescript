import React, { FC } from "react";
import { useState } from "react";
import "./App.css";
import ComponenteFuncional from "./Components/ComponenteFuncional";
import Componente from "./Components/ComponenteClass";

function App() {
 let url = "https://jonmircha.com/react#componentes";

 return (
  <div className="App">
   <h1>Compontes</h1>
   <ul>
    <li>Componentes de Clase</li>
    <li>Componentes Funcionales</li>
    <li>TSX:Como declarar los types de las Props y State</li>
    <li>Usando React Dev Tools ver componentes montados</li>
   </ul>
   <hr />
   <Componente msg="Hola soy un Componente desde una prop" />
   <ComponenteFuncional msg="Hola soy un Componente Funcional desde una prop" />
   <a href="https://jonmircha.com/react#componentes">Link Jon</a>
  </div>
 );
}

export default App;
