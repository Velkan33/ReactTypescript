import React from 'react';
import MenuBar from './MenuBarComponents/MenuBar';
import ReducerContext from './ReducerContext';

import Desk from './Desk';
// Tengo que agnadir para comprar mas de un producto.Agnadir un menu alternativo para moviles, poder abrir el carrito de compras.
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
