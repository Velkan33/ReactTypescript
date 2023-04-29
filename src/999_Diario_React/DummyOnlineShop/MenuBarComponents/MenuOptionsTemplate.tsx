import React, { useRef, useEffect } from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';

export default function MenuOptionsTemplate({
 children,
 elemNumber,
}: {
 children: JSX.Element;
 elemNumber: number;
}) {
 const state = useMyState();
 const dispatch = useMyDispatch();
 const myRef = useRef<null | HTMLDivElement>(null);

 useEffect(() => {
  if (myRef.current !== null) {
   console.log('hola');
   myRef.current?.scrollTo({ top: 0 });
  }
 }, []);

 if (state === null || dispatch === null) return <div>Error with Context</div>;
 const { menuOpen } = state;
 const isOpen = 'w-fit animate-slideIn   absolute  top-16 left-0  -z-30';
 const isClosed =
  'w-fit animate-slideOut -translate-y-full  absolute top-16 left-0  -z-30';
 let componentStyle =
  'w-fit absolute top-16 -translate-y-full border-solid border-red-600 border-2 left-0  -z-20';
 if (menuOpen !== null && menuOpen[0] === elemNumber) {
  componentStyle = isOpen;
 } else if (
  menuOpen !== null &&
  menuOpen.includes(elemNumber) &&
  menuOpen.length > 1 &&
  menuOpen[0] !== elemNumber
 ) {
  componentStyle = isClosed;
 }

 return (
  <div className={componentStyle}>
   <div
    className=" w-80 left-20 bg-white rounded-b-md text-sm font-normal max-h-[35rem] overflow-y-scroll  "
    ref={myRef}
   >
    {children}
   </div>
  </div>
 );
}
