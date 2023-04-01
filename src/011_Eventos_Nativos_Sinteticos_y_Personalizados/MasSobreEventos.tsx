import React from "react";
import { Button } from "./Button";

interface MyProps {}

interface MyState {}

//NOTE - Creo la interfaz del evento y su type.
interface SyntheticEvent {
 nativeEvent: Event;
 target: EventTarget;
}
export class MasSobreEventos extends React.Component<MyProps, MyState> {
 //SECTION - Para pasar un parametro a un evento necesito modificar la llamada al evento
 handleClick = (e: SyntheticEvent, param: string): void => {
  console.log(e);
  console.log(e.nativeEvent);
  console.log(e.target);
  console.log(e.nativeEvent.target);
  console.log(param);
 };
 render(): React.ReactNode {
  let h1 = " text-4xl mt-8";
  let text = " text-xl";
  let list = " list-disc my-2 list-inside";
  let h2 = " text-3xl";
  let button = " text-xl bg-slate-700 py-2 px-6 m-2";
  return (
   <>
    <h1 className={h1}>Mas Sobre Eventos</h1>
    <ul className={text + list}>
     <li>
      Los eventos en React se llaman <i>Synthetic Events</i> y estos no son mas
      que un envoltorio o capa superior de los eventos <i>Nativos</i>
     </li>
     <li>
      Los eventos nativos se pueden encontrar dentro de los{" "}
      <i>Synthetic Events</i> bajo la key <i>nativeEvent</i>
     </li>
     <li>
      Para pasar un parametro a traves de un evento usamos una arrow function
      dentro del evento: Arrow function con evento como parametro y que llame al
      metodo pasandole el evento y el contenido que queramos pasar
     </li>
     <li>
      Un evento Personalizado es un metodo que se pasa por un parametro para
      luego ser usado por el otro componente como evento
     </li>
    </ul>
    <a
     className="text-purple-500 text-3xl block my-4"
     href="https://reactjs.org/docs/events.html#gatsby-focus-wrapper"
     target="_blank"
     rel="noopener"
    >
     Link
    </a>
    <hr />
    {/* //SECTION Para pasar un parametro a traves de un evento usamos una arrow
    //function dentro del evento, y que esta arrow function llame al metodo
    //pasando el parametro */}
    <button
     onClick={(e) => {
      this.handleClick(e, "Soy un texto pasado como parametro del evento");
     }}
     className={button}
    >
     Saludar
    </button>
    {/* //!SECTION - Evento Personalizado: Evento pasado a traves de una prop ..crear una prop que se la pasamos al componente que luego asignaremos a la etiqueta JSX dentro del componente externo */}
    <Button
     myOnClick={(e: SyntheticEvent) =>
      this.handleClick(e, "Hola soy un evento desde el boton externo")
     }
    />
   </>
  );
 }
}
