import React from "react";

//SECTION - Empieza el componente
interface MyProps {}
interface MyState {
 session: boolean;
}

export default class RenderizadoCondicional extends React.Component<
 MyProps,
 MyState
> {
 constructor(props: MyProps) {
  super(props);
  this.state = {
   session: true,
  };
 }
 render() {
  let h2 = " text-4xl";
  let text = " text-xl";
  let list = " list-disc my-2";

  return (
   <div>
    <h2 className={h2}>Renderizado Condicional</h2>
    <ul className={text + list}>
     <li>
      El renderizado es cuando un valor del estado o las props cambian y obligan
      a la interfaz a repintarse
     </li>
     <li>
      El renderizado condicional se usa generalmente con el operador ternario
     </li>
     <li></li>
     <li></li>
    </ul>
    <a
     className="text-red-500 text-3xl"
     href="https://jonmircha.com/react#renderizado-condicional"
     target="_blank"
     rel="noopener"
    >
     Link
    </a>
    <hr />
    {this.state.session ? <Login /> : <Logout />}
   </div>
  );
 }
}

//NOTE - Creo componente funcional dentro del archivo por motivos de practicidad pero no es buena practica
//NOTE - De esta manera Vite no actualiza dinamicamente

function Login() {
 return (
  <div>
   <h3>El state.session es True so Login</h3>
  </div>
 );
}
function Logout() {
 return (
  <div>
   <h3>El state.session es False so Logout</h3>
  </div>
 );
}
