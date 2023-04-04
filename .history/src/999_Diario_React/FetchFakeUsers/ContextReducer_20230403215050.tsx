import React, {
 createContext,
 useContext,
 useEffect,
 useReducer,
 useState,
} from 'react';
import { useImmerReducer } from 'use-immer';
import useMyFetch from './useMyFetch';

type SubResponse = { id: number; firstName: string; age: number };

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
  case 'More': {
   const draftCopy = draft;
   const [responseArray] = useMyFetch({ limit: 5, skip: draft.data.length });
  }
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
 const [responseArray] = useMyFetch({ limit: 25, skip: 0 });
 useEffect(() => {
  dispatch({ type: 'ADD', data: responseArray });
 }, [dispatch, responseArray]);

 return (
  <MyStateContext.Provider value={myDraft}>
   <MyDispatchContext.Provider value={dispatch}>
    {children}
   </MyDispatchContext.Provider>
  </MyStateContext.Provider>
 );
}
