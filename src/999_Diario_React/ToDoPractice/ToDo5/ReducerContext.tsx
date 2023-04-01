import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

export const initialTasks = [
 { id: 0, text: 'Philosopher’s Path', done: true },
 { id: 1, text: 'Visit the temple', done: false },
 { id: 2, text: 'Drink matcha', done: false },
];

function myReducer(draft: Tasks[], action: Action): Tasks[] | undefined {
 switch (action.type) {
  case 'add':
   if (typeof action.id !== 'number' || typeof action.text !== 'string') break;
   draft.push({ id: action.id, text: action.text, done: false });
   break;
  case 'delete':
   if (typeof action.id !== 'number') break;
   return draft.filter((el) => el.id !== action.id);
  case 'edit':
   {
    if (typeof action.id !== 'number' || typeof action.text !== 'string') break;
    const element = draft.find((el) => el.id === action.id);
    if (element) element.text = action.text;
   }
   break;
  case 'check':
   {
    if (typeof action.id !== 'number') break;
    const element = draft.find((el) => el.id === action.id);
    if (element) element.done = !element.done;
   }
   break;
  default: {
   break;
  }
 }
 return undefined;
}

interface Tasks {
 id: number;
 text: string;
 done: boolean;
}

interface Action {
 type: string;
 id?: number;
 text?: string;
}

const MyStateContext = createContext<null | Tasks[]>(null);
const MyDispatchContext = createContext<null | React.Dispatch<Action>>(null);

export const useMyStateContext = () => useContext(MyStateContext);
export const useMyDispatchContext = () => useContext(MyDispatchContext);

let MyInitialTasks = initialTasks;
const MyTasks = localStorage.getItem('MyTasks');
if (MyTasks) {
 MyInitialTasks = JSON.parse(MyTasks);
}

export default function ReducerContext({
 children,
}: {
 children: JSX.Element;
}) {
 const [state, dispatch] = useImmerReducer(myReducer, MyInitialTasks);
 localStorage.setItem('MyTasks', JSON.stringify(state));
 return (
  <MyStateContext.Provider value={state}>
   <MyDispatchContext.Provider value={dispatch}>
    {children}
   </MyDispatchContext.Provider>
  </MyStateContext.Provider>
 );
}
