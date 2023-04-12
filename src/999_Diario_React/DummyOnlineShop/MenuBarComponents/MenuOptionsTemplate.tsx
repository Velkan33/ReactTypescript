import React from 'react';
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
 const isOpen = 'w-fit animate-slideIn   absolute block top-16 left-0  -z-10';
 const isClosed =
  'w-fit animate-slideOut -translate-y-full  block top-16 left-0  -z-10';
 let componentStyle =
  'w-screen -translate-y-full hidden absolute block top-16 left-0  -z-10';
 if (menuOpen === elemNumber) {
  componentStyle = isOpen;
 } else if (menuOpen === 0) {
  componentStyle = isClosed;
 }
 return (
  <div className={componentStyle}>
   <div className=" w-80 absolute left-20 bg-white text-sm font-normal max-h-[35rem] overflow-y-scroll">
    {children}
   </div>
  </div>
 );
}
