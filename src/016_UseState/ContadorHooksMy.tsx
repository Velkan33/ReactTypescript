import React, { useState } from "react";
import { Classes } from "../assets/Classes";

export function ContadorHooksMy() {
 const [contador, setContador] = useState<number>(0);

 const handleRest = () => setContador(contador - 1);
 const handleReset = () => setContador(0);
 const handleAdd = () => setContador(contador + 1);

 const classes = Classes();
 return (
  <>
   <h1 className={classes.h1}>My Contador</h1>
   <div>
    <button className={classes.button} onClick={handleRest}>
     -
    </button>
    <button className={classes.button} onClick={handleReset}>
     reset
    </button>
    <button className={classes.button} onClick={handleAdd}>
     +
    </button>
   </div>
   <h2 className={classes.h2}>{contador}</h2>
  </>
 );
}
