import { useState } from "react";
import "./App.css";
import Propiedades from "./components/Propiedades";
import Componente from "./components/ComponenteClass";

function App() {
 const [count, setCount] = useState(0);

 return (
  <div className="App">
   <h1>Compontes</h1>
   <ul>
    <li>
     Tipos de datos permitidos por las
     props:str,bool,arr,obj,func,RElements,RComponents
    </li>
    <li>
     Se inicializan y luego se usan. En componentes this.props, en Funcionales
     solo props.xxx
    </li>
    <li>
     Uso de DefaultProps \ component.defaultProps = obj(porDefecto:'Las Props')
    </li>
    <li>Uso de PropTypes \ component.propTypes = obj(propName:PropTypes.string.isRequired)</li>
   </ul>
   <hr />
   <Propiedades
    cadena="esto es una cadena"
    numero={18}
    booleano={true}
    arreglo={["a", "rr", "e", "g", "l", "o"]}
    objeto={`{ objeto: "object" }`}
    elementoReact=<em>Esto es un elemento de React</em>
    funcion={(value: number) => value * value}
    componenteReact=<Componente msg={"Soy un componente React pasado como prop" } />
   />
   <a href="https://jonmircha.com/react#propiedades">Link Jon</a>
  </div>
 );
}

export default App;
