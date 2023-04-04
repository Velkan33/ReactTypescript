import React, { createContext, useContext, useState } from 'react';
import { useImmerReducer } from 'use-immer';

type SubResponse = { id: number; firstName: string; age: number };

type MyStateType = {
 data: [] | SubResponse[];
};

const MyStateContext = createContext<null | MyStateType>(null);
const MyDispatchContext = createContext(null);

export const useMyState = () => useContext(MyStateContext);
export const useMyDispatch = () => useContext(MyDispatchContext);

function MyReducer() {
switch(){
case:
}
}

export default function ContextReducer({
 children,
}: {
 children: JSX.Element;
}) {
 const [myState, dispatch] = useImmerReducer();

 return (
  <MyStateContext.Provider value={}>
   <MyDispatchContext.Provider value={}>{children}</MyDispatchContext.Provider>
  </MyStateContext.Provider>
 );
}
