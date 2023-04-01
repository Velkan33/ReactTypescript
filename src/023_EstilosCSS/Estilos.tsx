import React from "react";
import { Classes } from "../assets/Classes";
import moduleStyles from "./Estilos.module.css";
// import "./Estilos.scss";//NOTE - No descomento esto porque junto con vite da error

export default function Estilos() {
 let classes = Classes();
 return (
  <>
   <h2 className={classes.h2}>
    Estilos <b>CSS</b> en React
   </h2>
   <ul className={classes.list}>
    <li>
     La primera forma de aplicar estilos es importar como un modulo la hoja de
     estilos con la estructura `import "./address.css"`
    </li>
    <li
     style={{
      color: "lightgreen",
      border: "1px solid lightgreen",
      borderRadius: ".5rem",
     }}
    >
     Estilos en linea
    </li>
    <li>Estilos en linea guardando el estilo en variables</li>
    <li>
     Agregando Normalize con <code>@import-normalize</code>
    </li>
    <li className={moduleStyles.pass}>
     Importando modulo, creamos css con estructura name.module.css e importamos
     dentro del archivo react y llamamos dentro de un className con la variable
     importada.nombreDeLaClaseUsada
    </li>
    <li className="bg-[#bf4080] hover:bg-[#bf408080] transition duration-500 ease-in-out p-2">
     Importando un archivo Sass y utilizando las classes del archivo normalmente
     en nuestros componentes
    </li>
   </ul>
  </>
 );
}
