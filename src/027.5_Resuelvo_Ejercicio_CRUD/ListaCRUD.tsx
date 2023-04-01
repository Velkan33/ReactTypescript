import React, { Fragment, useState, useEffect, useRef } from 'react';
import request from './utils/fetch';

export interface Element {
 id: number;
 nombre: string;
 constelacion: string;
}
// ANCHOR - Para comprobar que el response sea de type Element[]
function isElement(
 response: React.MutableRefObject<unknown>
): response is React.MutableRefObject<Element[]> {
 return typeof (response.current as Element[]).length === 'number';
}
let readFetch = true;
// SECTION - Funcion principal
function ListaCRUD() {
 const body: null | string = null;
 const defaultUrl = 'http://localhost:6655/santos';

 const [res, setRes] = useState<Element[]>([]);
 const response: React.MutableRefObject<unknown> = useRef();
 const Prom = async () => {
  const url = defaultUrl;
  const method = 'GET';
  const headers = { 'Content-type': 'application/json;charset=UTF-8' };
  response.current = await request({ url, method, body, headers });
  if (isElement(response)) {
   // STUB - Igualar el state a la respuesta
   setRes(response.current);
  }
 };
 // SECTION - Para hacer la peticion
 useEffect(() => {
  // SECTION - Para llamar el fetch de manera asincrona

  if (readFetch) {
   Prom();
  }
  // NOTE - ReadFetch = false // Evita el doble render de React
  readFetch = false;
 }, []);

 // NOTE - Manejador de peticiones
 const handleClick = async ({
  id,
  method,
  url,
  nombre = 'Kevin',
 }: {
  id: number | string;
  method: string;
  url: string;
  nombre?: string;
 }) => {
  const headers = { 'Content-type': 'application/json;charset=UTF-8' };
  await request({
   url: `${url}/${id}`,
   method,
   body: JSON.stringify({ nombre, constelacion: 'tierra' }),
   headers,
  });
  Prom();
 };

 // SECTION - Lista de elementos del fetch junto a los botones del CRUD
 const list = res.map((el: Element) => (
  <Fragment key={el.id}>
   <li>{el.nombre}</li>
   <button
    type="button"
    className="border p-1 px-2"
    onClick={async () =>
     handleClick({ id: el.id, method: 'DELETE', url: defaultUrl })
    }
   >
    X
   </button>
   <button
    type="button"
    className="border p-1 px-2"
    onClick={async () =>
     handleClick({ id: '', method: 'POST', url: defaultUrl })
    }
   >
    +
   </button>
   <button
    type="button"
    className="border p-1 px-2"
    onClick={async () =>
     handleClick({ id: el.id, method: 'PUT', url: defaultUrl, nombre: 'Ken' })
    }
   >
    ch
   </button>
  </Fragment>
 ));

 return <ul>{list}</ul>;
}

export default ListaCRUD;
