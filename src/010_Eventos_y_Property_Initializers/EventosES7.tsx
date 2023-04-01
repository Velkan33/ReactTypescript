import React from "react";

interface MyProps {
 ejemplo: string;
}
interface MyState {
 contador: number;
}
export default class EventosES7 extends React.Component<MyProps, MyState> {
 state: MyState = { contador: 0 };

 //SECTION - Eventos sumar y restar
 handleAdd = () => {
  this.setState((state) => ({ contador: state.contador + 1 }));
 };
 handleSub = () => {
  this.setState((state) => ({ contador: state.contador - 1 }));
 };

 render() {
  let h1 = " text-4xl mt-8";
  let text = " text-xl";
  let list = " list-disc my-2 list-inside";
  let h2 = " text-3xl";
  return (
   <div>
    <h1 className={h1}>Eventos en Componentes de Clase modelo ES7</h1>
    <ul className={list + text}>
     <li>No es necesario definir el constructor</li>
     <li>
      El <i>State</i> se declara sin el uso del <i>this</i>
     </li>
     <li>
      Para evitar el <i>bind</i> de los <i>Methods</i> estos se declaran con{" "}
      <i>Arrow Functions</i>
     </li>
     <li>
      Las <i>Props</i> se pasan de manera normal a pesar de no ser declaradas
      dentro del <i>constructor</i>. Ejemplo: {this.props.ejemplo}
     </li>
    </ul>
    <a
     className="text-purple-500 text-3xl block my-4"
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
     className="text-2xl p-2 m-4 bg-slate-600 active:bg-cyan-800 text-white rounded-md shadow-inner border inline-block"
    >
     <b>-</b>
    </button>
    <button
     onClick={this.handleAdd}
     className="text-2xl p-2 m-4 bg-slate-600 active:bg-cyan-800 text-white rounded-md shadow-inner border inline-block"
    >
     <b>+</b>
    </button>
    <h2 className={h2}>{this.state.contador}</h2>
   </div>
  );
 }
}
