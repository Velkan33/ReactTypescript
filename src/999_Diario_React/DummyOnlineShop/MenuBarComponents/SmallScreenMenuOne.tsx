import React from 'react';
import { useMyState } from '../ReducerContext';

export default function SmallScreenMenuOne({
 children,
}: {
 children: JSX.Element;
}) {
 const state = useMyState();
 if (state === null) return <h3>State empty</h3>;
 const hiddenClass =
  'sm:w-[24rem] w-[75vw] min-h-[30rem] bg-white absolute top-[6rem] lg:top-[4rem] origin-right -left-[75vw] sm:-left-[24rem] -z-20 opacity-0 overflow-y-scroll';
 const notHiddenClass =
  'sm:w-[24rem] w-[75vw] max-h-[75vh] bg-white absolute top-[6rem] lg:top-[4rem] -left-[75vw] sm:-left-[24rem] translate-x-[100%] -z-20 transition duration-500 opacity-100 overflow-y-scroll';
 return (
  <div
   className={
    state.menuOpen === null || state.menuOpen === 0
     ? hiddenClass
     : notHiddenClass
   }
  >
   {children}
  </div>
 );
}
