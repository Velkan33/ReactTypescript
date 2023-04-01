import { useState, useEffect } from "react";
import { Classes } from "../assets/Classes";

interface MyProps {
 text: string;
}

export default function ContadorHooks(props: MyProps): JSX.Element {
 const [contador, setContador] = useState<number>(0);

 let classes = Classes();

 const handleReduce = (): void => setContador(contador - 1);

 const handleReset = (): void => setContador(0);

 const handleAdd = (): void => setContador(contador + 1);

 return (
  <>
   <h1 className={classes.h1}>Soy un contador creado con Hooks</h1>
   <p>Texto de las props pasadas: {props.text}</p>
   <div>
    <button className={classes.button} onClick={handleReduce}>
     -
    </button>
    <button className={classes.button} onClick={handleReset}>
     reset
    </button>
    <button className={classes.button} onClick={handleAdd}>
     +
    </button>

    <h2 className={classes.h2 + " text-center mt-4"}>{contador}</h2>
   </div>
  </>
 );
}

ContadorHooks.defaultProps = { text: "Hola React, defaultProps" };
