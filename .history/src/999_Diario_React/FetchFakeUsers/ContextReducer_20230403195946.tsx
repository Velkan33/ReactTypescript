import React, { createContext } from 'react';

const MyStateContext = createContext(null);
const MyDispatchContext = createContext(null);

export default function ContextReducer({
 children,
}: {
 children: JSX.Element;
}) {
 return (
  <MyStateContext.Provider value={}>
   <MyDispatchContext.Provider value={}>{children}</MyDispatchContext.Provider>
  </MyStateContext.Provider>
 );
}
