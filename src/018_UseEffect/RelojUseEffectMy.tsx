import React, { useEffect, useState } from "react";

export default function Reloj(): JSX.Element {
 let interval = setInterval(() => {});

 const [fecha, setFecha] = useState<string>();
 const [visible, setVisible] = useState<boolean>(false);

 useEffect(() => {
  if (visible) {
   setFecha(new Date().toLocaleTimeString());
   interval = setInterval(() => {
    setFecha(new Date().toLocaleTimeString());
   }, 1000);
  }
  return () => {
   clearInterval(interval);
  };
 }, [visible]);

 return (
  <>
   <h1>Hola Mundo</h1>
   <button
    onClick={() => {
     setVisible(true);
    }}
   >
    Click
   </button>
   <button
    onClick={() => {
     setVisible(false);
    }}
   >
    Stop
   </button>
   <p>{visible && fecha}</p>
  </>
 );
}
