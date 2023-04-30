import React from 'react';
import MenuBar from './MenuBarComponents/MenuBar';
import ReducerContext from './ReducerContext';

import Desk from './Desk';
import manageCart from './tools/manageCart';

export default function DummyShopApp() {
 manageCart({ type: 'SET_CART' });
 return (
  <ReducerContext>
   <div className=" min-w-full">
    <MenuBar />
    <Desk />
   </div>
  </ReducerContext>
 );
}
// Para el carrito puedo guardarlo en el window.localStorage
// Pros
/** Se queda almacenado cada vez que abra la pagina */
