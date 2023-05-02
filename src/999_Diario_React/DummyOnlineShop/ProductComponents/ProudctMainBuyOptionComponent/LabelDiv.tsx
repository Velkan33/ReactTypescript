import React from 'react';

export default function LabelDiv({ children }: { children: JSX.Element }) {
 return (
  <div className="grid w-full border gap-1 py-2 px-2 max-h-[7rem] md:max-h-[5rem] overflow-y-scroll">
   {children}
  </div>
 );
}
