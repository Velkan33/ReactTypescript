import React from "react";
import { Child } from "./Child";

interface MyProps {}
interface MyState {}

export class ComunicacionComponentes extends React.Component<MyProps, MyState> {
 state = { contador: 0 };
 incrementarContador = (): void => {
  this.setState({ contador: this.state.contador + 1 });
 };
 render(): React.ReactNode {
  let h1 = " text-4xl mt-8";
  let text = " text-xl";
  let list = " list-disc my-2 list-inside";
  let h2 = " text-3xl";
  let button = " text-xl bg-slate-700 py-2 px-6 m-2";
  let link = h2 + " text-purple-500 my-2 block";
  return (
   <>
    <h1 className={h1}>Comunicacion entre Componentes</h1>
    <ul className={text + list}>
     <li>
      Para pasar mensajes de Componentes Padres a Hijos lo hacemos mediante
      Props
     </li>
     <li>
      Para que el hijo modifique al padre seria mediante una funcion del padre,
      ejecutada por el hijo, y esta modifique al padre. ( En el ejemlo de abajo
      se ve como el botton de una clase externa cambia el <em>State</em> de la
      clase Padre )
     </li>
     <li>
      Para comunicarse entre HTML elements existe el <i>createPortal</i> el cual
      toma lo que le pasemos al componente y lo envia al otro elemento del html
      directamente. ( return ReactDOM.createPortal(this.props.children,
      HTMLElement) ) donde el componente que envia el contenido <i>renderiza</i>{" "}
      con el contenido a pasar dentro, al componente que retorna el Portal
     </li>
     <li>
      Redux y Contest son las mejores opciones ya que se tratan de manejar un
      estado global al que se accede individualmente desde cualquier componente
     </li>
     <a
      href="https://jonmircha.com/react#comunicaci%C3%B3n-entre-componentes"
      className={link}
     >
      Link
     </a>
     <hr />
     <Child
      incrementarContador={this.incrementarContador}
      buttonStyle={button}
      h2Style={h2}
     />
     <h1>{this.state.contador}</h1>
    </ul>
   </>
  );
 }
}
