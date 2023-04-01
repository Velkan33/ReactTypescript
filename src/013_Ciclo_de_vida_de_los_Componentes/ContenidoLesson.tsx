import { Classes } from "../assets/Classes";

export const ContenidoLesson = (): JSX.Element => {
 let classes = Classes();
 return (
  <>
   {" "}
   <h1 className={classes.h1}>Ciclo de Vida</h1>
   <ul className={classes.list + classes.text}>
    <li>
     Las fases de los ciclos de vida de los componentes son{" "}
     <b>
      <i>Montaje, Actualizacion y Desmontaje</i>
     </b>
    </li>
    <li>
     <b>
      <i>Montaje</i>
     </b>{" "}
     se caracteriza por{" "}
     <b>
      <i>componentDidMount()</i>
     </b>{" "}
     el cual se invoca inmediatamente luego de que un componente se ha insertado
     en el arbol del DOM
    </li>
    <li>
     <b>
      <i>Actualizacion</i>
     </b>{" "}
     se caracteriza por{" "}
     <b>
      <i>componentDidUpdate()</i>
     </b>{" "}
     el cual se invoca inmediatamente luego de que un componente se ha
     actualizado
    </li>
    <li>
     <b>
      <i>Desmontaje</i>
     </b>{" "}
     se caracteriza por{" "}
     <b>
      <i>componentWillUnmount()</i>
     </b>{" "}
     el cual se invoca inmediatamente cuando un componente se va a desmontar
    </li>
    <li>
     <b>
      <i>componentDidMount</i>
     </b>
     : Util para ejecutar peticiones asincronas a <i>APIs</i>, bases de datos,
     etc.
    </li>
    <li>
     <b>
      <i>componentDidUpdate</i>
     </b>
     : Igualmente util para ejecutar peticiones externas.
    </li>{" "}
    <li>
     <b>
      <i>componentWillUnmount</i>
     </b>
     : Se ejecuta antes de destruir el componente por lo que es util para tareas
     de limpieza
    </li>
   </ul>
   <a
    className={classes.link}
    href="https://jonmircha.com/react#ciclo-de-vida"
    rel="noopener"
    target="_blank"
   >
    Link
   </a>
   <hr />
  </>
 );
};
