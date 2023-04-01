import React from "react";
import Bootstrap from "./components/Bootstrap";
import Bulma from "./components/Bulma";
import { Classes } from "../assets/Classes";

export default function FrameworksCSS() {
 let classes = Classes();
 return (
  <>
   <h2 className={classes.h2}>Frameworks CSS con React</h2>
   <p className={classes.text}>
    Para usar Bootstrap o Bulma estos los podemos importar directamente en
    nuestro HTML y luego usarlos normalmente en nuestros componentes ya que
    funcionan con el nombre de clase que le demos a nuestros elementos
   </p>
   {/* <Bootstrap /> */}
   {/* <Bulma /> */}
  </>
 );
}
