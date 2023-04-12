import React from 'react';
import MenuBar from './MenuBarComponents/MenuBar';
import ReducerContext from './ReducerContext';

export default function DummyShopApp() {
 return (
  <ReducerContext>
   <div className="min-h-[200vh] min-w-full">
    {/* <p className="w-20 text-center bg-white block p-4 rounded-md mx-auto">
    Hello
   </p> */}
    <MenuBar />
   </div>
  </ReducerContext>
 );
}
