import React from "react";
import { Classes } from "../assets/Classes";

export default function ReactBootstrapMaterialUi() {
 let classes = Classes();
 return (
  <>
   <h2 className={classes.h2}>React Bootstrap y Material Ui</h2>
   <p className={classes.text}>
    React Bootstrap se diferencia de Bootstrap normal, que en este nuevo
    Framework Bootstrap, usa componentes
   </p>
   <p>
    {" "}
    los cuales estan definidos en la libreria de bootstrap que invocariamos
    dentro del archivo antes de utilizar el Framework
   </p>
   <p className={classes.text}>
    Y las classes se pasan generalmente como props al mas puro estilo de
    styled.components
   </p>
  </>
 );
}
