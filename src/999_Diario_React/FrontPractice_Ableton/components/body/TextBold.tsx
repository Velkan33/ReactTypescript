import React from "react";

export default function BoldText({ children }: { children: JSX.Element }) {
 return (
  <div className={`flex flex-col items-center justify-center w-full`}>
   <div
    className={`xl:max-w-[45%] md:max-w-[70%] lg:relative max-w-[80%] static`}
   >
    <h2
     className={`lg:text-2xl text-lg mt-24 font-bold tracking-normal text-zinc-600`}
    >
     {children}
    </h2>
   </div>
  </div>
 );
}
