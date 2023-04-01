import React, { DOMElement, MouseEventHandler } from "react";
import { Classes } from "../assets/Classes";
import { ContenidoLesson } from "./ContenidoLesson";

interface RelojProps {
 classes: { h2: string };
 hora: string;
}
class Reloj extends React.Component<RelojProps, {}> {
 //SECTION - ComponentWillUnmount ira aqui porque es el componente que se va a desmontar
 componentWillUnmount(): void {
  console.log(3, "El componente se va a desmontar");
 }

 render(): React.ReactNode {
  return <h2 className={this.props.classes.h2}>{this.props.hora}</h2>;
 }
}

type MouseEvent = MouseEventHandler<HTMLButtonElement>;
interface CiDeVida {
 timeInterval: NodeJS.Timer;
 state: { date: string; startVisibility: boolean };
 handleStartTime: MouseEvent;
 handleStopTime: MouseEvent;
 render: () => React.ReactNode;
}

interface MyProps {}
interface MyState {
 date: string;
 startVisibility: boolean;
}

export class CicloDeVida
 extends React.Component<MyProps, MyState>
 implements CiDeVida
{
 timeInterval = setInterval(() => {});
 /**NOTE State */
 state = { date: "", startVisibility: false };
 /**NOTE Constructor */
 constructor(props: MyProps) {
  super(props);
  console.log(0, "El componente se inicializa, aun NO esta en el DOM");
 }

 //NOTE - Iniciar Reloj
 handleStartTime: MouseEvent = (): void => {
  this.setState({ date: new Date().toLocaleTimeString() });
  this.setState({ startVisibility: true });
  this.timeInterval = setInterval(() => {
   this.setState({ date: new Date().toLocaleTimeString() });
  }, 1000);
 };
 //NOTE - Detener Reloj
 handleStopTime: MouseEvent = (): void => {
  this.setState({ startVisibility: false });
  clearInterval(this.timeInterval);
 };
 //SECTION - ComponentDidMount
 componentDidMount(): void {
  console.log(1, "El componente ya se encuentra en el DOM");
 }

 //SECTION - ComponentDidUpdate
 componentDidUpdate(): void {
  console.log(2, "El componente se ha acualizado");
 }

 /**NOTE Render */
 render(): React.ReactNode {
  let classes = Classes();
  return (
   <>
    {/**ANCHOR - Contenido de la lesson */}
    <ContenidoLesson />

    {/**SECTION - Logic Part */}

    {this.state.startVisibility && (
     <Reloj classes={classes} hora={this.state.date} />
    )}
    <button
     onClick={this.handleStartTime}
     disabled={this.state.startVisibility}
     className={classes.button}
    >
     start
    </button>
    <button onClick={this.handleStopTime} className={classes.button}>
     stop
    </button>
   </>
  );
 }
}
