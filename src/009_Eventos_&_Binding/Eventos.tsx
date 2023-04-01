import React from "react";

interface MyProps {}
interface MyState {
 contador: number;
}
export default class Eventos extends React.Component<MyProps, MyState> {
 state: MyState = { contador: 0 };
 constructor(props: MyProps) {
  super(props);
  this.handleAdd = this.handleAdd.bind(this);
  this.handleSub = this.handleSub.bind(this);
 }
 //SECTION - Eventos sumar y restar
 handleAdd() {
  this.setState((state) => ({ contador: state.contador + 1 }));
 }
 handleSub() {
  this.setState((state) => ({ contador: state.contador - 1 }));
 }

 render() {
  let h1 = " text-4xl";
  let text = " text-xl";
  let list = " list-disc my-2 list-inside";
  let h2 = " text-3xl";
  return (
   <div>
    <h1 className={h1}>Eventos en Componentes de Clase</h1>
    <ul className={list + text}>
     <li>
      Los eventos se llaman similar a javascript pero con CaMeLcAsE ejemplo{" "}
      <i>onClick</i>
     </li>
     <li>
      Los metodos tinen que bindearse con la clase, dentro del constructor.
      Ejemplo: this.method = this.method.bind(this)
     </li>
     <li></li>
    </ul>
    <a
     className="text-red-500 text-3xl"
     href="https://jonmircha.com/react#eventos"
     target="_blank"
     rel="noopener"
    >
     Link
    </a>
    <hr />
    {/*STUB - Botones para sumar y restar al counter */}
    <h2 className={h2}>Contador usando evento de Click</h2>{" "}
    <button
     onClick={this.handleSub}
     className="text-2xl p-4 m-4 bg-cyan-200 active:bg-cyan-300 text-black rounded-2xl shadow-inner border inline-block"
    >
     <b>Sub</b>
    </button>
    <button
     onClick={this.handleAdd}
     className="text-2xl p-4 m-4 bg-cyan-200 active:bg-cyan-300 text-black rounded-2xl shadow-inner border inline-block"
    >
     <b>Add</b>
    </button>
    <h2 className={h2}>{this.state.contador}</h2>
   </div>
  );
 }
}
