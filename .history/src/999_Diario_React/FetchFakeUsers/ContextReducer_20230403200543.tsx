import React, { createContext, useContext } from 'react';
type SubResponse = { id: number; firstName: string; age: number };

MyStateType = {
data:[]|SubResponse[]}

const MyStateContext = createContext<null|MyStateType>(null);
const MyDispatchContext = createContext(null);

const useMyState = () => useContext(MyStateContext);
const useMyDispatch = () => useContext(MyDispatchContext);
export useMyState;
export useMyDispatch;

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
