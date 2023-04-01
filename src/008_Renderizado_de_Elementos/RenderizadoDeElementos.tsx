import React from "react";
import ElementoLista from "./ElementoLista";
//NOTE Jon crea un componente extra aqui dentro pero yo lo hare externo,sera una lista de la data en helpers/data.json

interface MyProps {}
interface MyState {
 seasons: [string, string, string, string];
}

export default class RenderizadoDeElementos extends React.Component<
 MyProps,
 MyState
> {
 state: MyState = {
  seasons: ["Primavera", "Verano", "Otogno", "Invierno"],
 };
 constructor(props: MyProps) {
  super(props);
 }

 render() {
  let h1 = " text-4xl";
  let text = " text-xl";
  let list = " list-disc my-2 list-inside";
  let h2 = " text-2xl";
  return (
   <div>
    <h1 className={h1}>Renderizado de Elementos</h1>
    <ul className={list + text}>
     <li></li>
     <li></li>
     <li></li>
    </ul>
    <a
     className="text-red-500 text-3xl"
     href="https://jonmircha.com/react#renderizado-de-elementos"
     target="_blank"
     rel="noopener"
    >
     Link
    </a>
    <hr />
    <h2 className={h2}>
     Renderizado del array <i>Seasons</i> dentro del
     <b>
      <i>State</i>
     </b>
    </h2>
    {/**STUB - Aqui esta el Renderizado de los elementos del State */}
    <ul className={list + text}>
     {this.state.seasons.map((season) => (
      <li key={season}>{season}</li>
     ))}
    </ul>
    {/**STUB - Aqui esta el renderizado desde ElementoLista.tsx */}
    <div>
     <h2 className={h2}>
      Renderizado desde un <em>.json</em> externo desde un <em>componente</em>
      externo
     </h2>
     <ElementoLista />
    </div>
   </div>
  );
 }
}
