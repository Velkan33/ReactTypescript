import React, { createContext, useContext } from 'react';

type SubResponse = { id: number; firstName: string; age: number };

type MyStateType = {
 data: [] | SubResponse[];
};

const MyStateContext = createContext<null | MyStateType>(null);
const MyDispatchContext = createContext(null);

export const useMyState = () => useContext(MyStateContext);
export const useMyDispatch = () => useContext(MyDispatchContext);

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
