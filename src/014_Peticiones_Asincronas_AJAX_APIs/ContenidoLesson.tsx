import { MyClasses } from "../assets/Classes";

interface MyProps {
 classes: MyClasses;
}

export function ContenidoLesson(props: MyProps): JSX.Element {
 let { classes } = props;
 return (
  <>
   <h1 className={classes.h1}>Peticiones Asincronas en Componentes de clase</h1>
   <ul className={classes.list + classes.text}>
    <li>
     Las Peticiones Asincronas se realizan dentro del evento{" "}
     <i>
      <b>contentDidMount</b>
     </i>
    </li>
    <li>
     Se usa por lo general{" "}
     <i>
      <b>fetch</b>
     </i>
    </li>
    <li>
     Se estructura la respuesta de la peticion en una variable a ser posible
    </li>
    <li>Se envia esa variable al state</li>
    <li>
     Se renderiza los datos del state en un componente pasandole los datos como
     props
    </li>
   </ul>
   <hr />
  </>
 );
}
