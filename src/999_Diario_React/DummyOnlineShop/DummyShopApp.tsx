import React from 'react';
import MenuBar from './MenuBarComponents/MenuBar';
import ReducerContext from './ReducerContext';

import Desk from './Desk';

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
