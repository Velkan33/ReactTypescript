import React, { useState, useEffect } from "react";

export default function RelojHooks() {
 const [hora, setHora] = useState(new Date().toLocaleTimeString());
 const [visible, setVisible] = useState(false);
 let numero: number = 0;
 //NOTE - Cuando hay un cambio en Visible se ejecutara el return(unmount) y luego se ejecutara la logica dentro del Callback dentro de useEffect.
 useEffect(() => {
  let interval: NodeJS.Timer = setInterval(() => {});

  if (visible) {
   interval = setInterval(() => {
    setHora(new Date().toLocaleTimeString());
    console.log(numero);
    console.log(hora);
   }, 1000);
   console.log("se fijo el intervalo");
  }
  return () => {
   console.log(numero);
   numero = 1;
   console.log("fase de desmontaje");
   clearInterval(interval);
   console.log("se limpio el intervalo");
  };
 }, [visible]);

 return (
  <>
   <h1>Reloj con Hooks</h1>
   {visible && <p>{hora}</p>}
   <button onClick={() => setVisible(true)}>Click to Start</button>
   <button onClick={() => setVisible(false)}>Click to Hide</button>
  </>
 );
}
