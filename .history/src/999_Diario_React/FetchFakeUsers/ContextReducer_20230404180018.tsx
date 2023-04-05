import React, { createContext, useContext, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

type Response = {
 users: SubResponse[];
};
type SubResponse = {
 id: number;
 firstName: string;
 age: number;
 image: string;
 username: string;
};

type MyStateType = {
 data: [] | SubResponse[];
};
type ActionType = {
 type: string;
 data?: SubResponse[];
};
const myInitialState = {
 data: [],
};

const MyStateContext = createContext<null | MyStateType>(null);
const MyDispatchContext = createContext<null | React.Dispatch<ActionType>>(
 null
);

export const useMyState = () => useContext(MyStateContext);
export const useMyDispatch = () => useContext(MyDispatchContext);

function MyReducer(draft: MyStateType, action: ActionType) {
 switch (action.type) {
  case 'ADD':
   {
    const draftCopy = draft;
    if (!action.data) break;
    draftCopy.data = [...draft.data, ...action.data];
   }
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

 useEffect(() => {
  let ignore = false;
  fetch(`https://dummyjson.com/users?limit=25&skip=0`)
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    window.console.warn(res.status, res.statusText, res);
    return null;
   })
   .then((data: Response | null) => {
    if (data !== null && !ignore) dispatch({ type: 'ADD', data: data.users });
   });
  return () => {
   ignore = true;
  };
 }, [dispatch]);

 return (
  <MyStateContext.Provider value={myDraft}>
   <MyDispatchContext.Provider value={dispatch}>
    {children}
   </MyDispatchContext.Provider>
  </MyStateContext.Provider>
 );
}
