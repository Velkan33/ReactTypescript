import React, { ReactNode } from "react";

export default function Propiedades(props: {
 porDefecto: string;
 cadena: string;
 numero: number;
 booleano: boolean;
 arreglo: (number | string)[];
 objeto: string;
 funcion: (arg: number) => number;
 elementoReact: ReactNode;
 componenteReact: ReactNode;
}) {
 return (
  <div>
   <h2>{props.porDefecto}</h2>
   <ul>
    <li>{props.cadena}</li>
    <li>{props.numero}</li>
    <li>{props.booleano ? "Verdadero" : "Falso"}</li>
    <li>{props.arreglo.join(", ")}</li>
    <li>{props.objeto}</li>
    <li>{[1, 2, 3].map(props.funcion).join(", ")}</li>
    <li>{props.elementoReact}</li>
    <li>{props.componenteReact}</li>
   </ul>
  </div>
 );
}

Propiedades.defaultProps = { porDefecto: "Las Props" };
