import React from "react";
import { useState } from "react";
import "../assets/output.css";
//NOTE - Create Two Interfaces|Types to define State and Props
interface MyState {
 contador: number;
 nombre: string;
}
interface MyProps {}
//NOTE - asign two interfaces to <props,state>
export default class Estado extends React.Component<MyProps, MyState> {
 state: MyState = { contador: 0, nombre: "Kevin" };
 constructor(props: {}) {
  super(props);
  this.increment = this.increment.bind(this);
  this.handleChangeName = this.handleChangeName.bind(this);
  setInterval(() => {
   this.increment();
  }, 1000);
 }

 increment() {
  this.setState((state) => ({ contador: state.contador + 1 }));
 }
 handleChangeName() {
  this.setState({ nombre: "Velkan" });
 }

 render() {
  let h1 = " text-7xl text-center";
  let link = " text-3xl text-purple-400";
  let text = " text-2xl";
  let ul = " list-disc";

  //NOTE Ejecutara una funcion en caso de cumplirse una condicion
  if (this.state.contador >= 3) {
   this.handleChangeName();
  }

  return (
   <div>
    <h1 className={h1}>State</h1>
    <ul className={ul + text}>
     <li>setState() se usa para actualizar el estado</li>
     <li>Los componentes funcionales previamente no tenian estados</li>
     <li>
      A partir de los HOCs la version 16.8 de React se puede agnadir mediante
      *useState*
     </li>
     <li></li>
    </ul>
    <a
     href="https://jonmircha.com/react#estado"
     className={link}
     target="_blank"
     rel="noopener"
    >
     Link
    </a>
    <hr />
    <h2 className="text-2xl text-center">Llamando Propiedades de Estado</h2>
    <p className="text-center">
     El contador de {this.state.nombre}: {this.state.contador}
    </p>
    <EstadoAHijo contadorHijo={this.state.contador} />
   </div>
  );
 }
}

//STUB - Simulo un componente funcional externo para no crear otro archivo
interface Prop {
 contadorHijo: number;
}
function EstadoAHijo(props: Prop) {
 return (
  <div className="text-center">
   <h1>El contador del componente funcional: {props.contadorHijo}</h1>
  </div>
 );
}
