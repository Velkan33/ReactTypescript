import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { initialTasks } from './initialTasks';

interface MyData {
 id: number;
 text: string;
 done: boolean;
}

interface MyAction {
 type: string;
 id?: number;
 text?: string;
}

const MyTasks = createContext<undefined | MyData[]>(undefined);
const MyDispatch = createContext<null | React.Dispatch<MyAction>>(null);

export const useMyTasks = () => useContext(MyTasks);
export const useMyDispatch = () => useContext(MyDispatch);

const MyReducer: (draft: MyData[], action: MyAction) => MyData[] | undefined = (
 draft,
 action
) => {
 switch (action.type) {
  case 'PUSH':
   {
    if (typeof action.id !== 'number' || !action.text) break;
    const { id, text } = action;
    draft.push({ id, text, done: false });
   }
   break;
  case 'PUT':
   {
    if (typeof action.id !== 'number' || typeof action.text !== 'string') break;
    const element = draft.find((el) => el.id === action.id);
    if (element != null) element.text = action.text;
   }
   break;
  case 'DELETE': {
   if (typeof action.id !== 'number') break;
   return draft.filter((el) => el.id !== action.id);
  }
  case 'CHECK':
   {
    if (typeof action.id !== 'number') break;
    const element = draft.find((el) => el.id === action.id);
    if (element != null) element.done = !element.done;
   }
   break;
  default: {
   return undefined;
  }
 }
 return undefined;
};

export default function ContextGiver({
 children,
}: {
 children: JSX.Element;
}): JSX.Element {
 const [tasks, dispatch] = useImmerReducer(MyReducer, initialTasks);

 return (
  <MyTasks.Provider value={tasks}>
   <MyDispatch.Provider value={dispatch}>{children}</MyDispatch.Provider>
  </MyTasks.Provider>
 );
}
