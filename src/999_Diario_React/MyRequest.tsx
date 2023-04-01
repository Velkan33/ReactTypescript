import React, { useEffect, useState } from "react";
import { HookPersonalizado } from "./useHookPersonalizado";

interface MyProps {
 nomb: string;
}
function List(props: MyProps) {
 return (
  <>
   <li>{props.nomb}</li>
  </>
 );
}

export default function MyComp() {
 let address = "http://localhost:6655/santos";
 let res = HookPersonalizado(address);

 return (
  <>
   <p>Hola mundo</p>
   <p>Como Estas</p>
   {res.response?.map((elem) => (
    <List key={elem.nombre} nomb={elem.nombre} />
   )) || <p>Cargando...</p>}
  </>
 );
}
