import React from 'react';
import MenuBar from './MenuBarComponents/MenuBar';
import ReducerContext from './ReducerContext';

import Desk from './Desk';
// Tengo que agnadir para comprar mas de un producto.Agnadir un menu alternativo para moviles, poder abrir el carrito de compras.

// TODO crear el select en el componente que selecciona la cantidad de productos a agnadir al carrito con un checked
export default function DummyShopApp() {
 return (
  <ReducerContext>
   <div className=" min-w-full">
    <MenuBar />
    <Desk />
   </div>
  </ReducerContext>
 );
}
