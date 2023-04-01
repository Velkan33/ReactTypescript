import React, { useState, useEffect } from "react";

interface Response {
 nombre: string;
 constelacion: string;
 id: number;
}

export default function PeticionesAsincronasMy(): JSX.Element {
 const [respuesta, setRespuesta] = useState<JSX.Element[]>();
 const [peticion, setPeticion] = useState<boolean>();

 useEffect(() => {
  //NOTE - Hice la peticion fuera para dejar la logica asincrona fuera del use effect.
  handlePeticion();
 }, []);
 let handlePeticion = async (): Promise<void> => {
  fetch("http://localhost:6655/santos")
   .then((res) => (res.ok ? res.json() : Promise.reject(res)))
   .then((json) => {
    return json.map((el: Response) => <li key={el.id}>{el.nombre}</li>);
   })
   .then((arr) => setRespuesta(arr));
 };

 return (
  <>
   <ul>{respuesta}</ul>
  </>
 );
}
