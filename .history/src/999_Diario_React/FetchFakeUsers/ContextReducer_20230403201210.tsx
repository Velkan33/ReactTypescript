import React, { createContext, useContext, useState } from 'react';
import { useImmerReducer } from 'use-immer';

type SubResponse = { id: number; firstName: string; age: number };

type MyStateType = {
 data: [] | SubResponse[];
};
const myInitialState = {
 data: [],
};

const MyStateContext = createContext<null | MyStateType>(null);
const MyDispatchContext = createContext(null);

export const useMyState = () => useContext(MyStateContext);
export const useMyDispatch = () => useContext(MyDispatchContext);

function MyReducer(draft, action) {
 switch (action.type) {
  case 'ADD':
   draft.push(1);
   break;

  default:
   break;
 }
}

export default function ContextReducer({
 children,
}: {
 children: JSX.Element;
}) {
 const [myDraft, dispatch] = useImmerReducer(MyReducer, myInitialState);

 return (
  <MyStateContext.Provider value={}>
   <MyDispatchContext.Provider value={}>{children}</MyDispatchContext.Provider>
  </MyStateContext.Provider>
 );
}
