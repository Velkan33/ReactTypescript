import React, { useState } from 'react';
import { useMyState } from '../ReducerContext';

export default function MenuOptionsTemplate({
 children,
 elemNumber,
}: {
 children: JSX.Element;
 elemNumber: number;
}) {
 const state = useMyState();
 if (state === null) return <div>Error with Context</div>;
 const { menuOpen } = state;
 const isOpen = 'w-fit animate-slideIn   absolute  top-16 left-0  -z-10';
 const isClosed =
  'w-fit animate-slideOut -translate-y-full  absolute top-16 left-0  -z-10';
 let componentStyle =
  'w-fit absolute top-16 border-solid border-red-600 border-2 left-0  -z-10';
 if (menuOpen === elemNumber) {
  componentStyle = isOpen;
 } else if (menuOpen !== elemNumber && menuOpen !== null) {
  componentStyle = isClosed;
 } else if (menuOpen === null) {
 }
 return (
  <div className={componentStyle}>
   <div className=" w-80 left-20 bg-white text-sm font-normal max-h-[35rem] overflow-y-scroll">
    {children}
   </div>
  </div>
 );
}
