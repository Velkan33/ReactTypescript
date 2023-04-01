import React from "react";

export default function TextNormal({ children }: { children: JSX.Element }) {
 return (
  <div className={`flex flex-col items-center justify-center w-full`}>
   <div className={`xl:max-w-[45%] md:max-w-[70%] max-w-[80%] `}>
    <p className={`lg:text-base text-sm mt-4 mb-24`}>{children}</p>
   </div>
  </div>
 );
}
