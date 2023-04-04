import React, { createContext } from 'react';

const MyStateContext = createContext(null);

export default function ContextReducer({
 children,
}: {
 children: JSX.Element;
}) {
 return (
  <>
   {children}
   <div />
  </>
 );
}
