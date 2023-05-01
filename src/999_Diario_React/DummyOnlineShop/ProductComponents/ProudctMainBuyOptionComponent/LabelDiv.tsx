import React from 'react';

export default function LabelDiv({ children }: { children: JSX.Element }) {
 return (
  <div className="grid w-full border gap-1 py-2 px-2">
   <h4 className="mx-auto">How many</h4>
   {children}
  </div>
 );
}
