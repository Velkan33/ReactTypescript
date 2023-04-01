import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

export const initialTasks = [
 { id: 0, text: 'Philosopher’s Path', done: true },
 { id: 1, text: 'Visit the temple', done: false },
 { id: 2, text: 'Drink matcha', done: false },
];

interface Action {
 type: string;
 id?: number;
 text?: string;
}

const MyDispatchContext = createContext<React.Dispatch<Action> | null>(null);
const MyStateContext = createContext<typeof initialTasks | null>(null);

export const useDispatchContext = () => {
 return useContext(MyDispatchContext);
};
export const useStateContext = () => {
 return useContext(MyStateContext);
};

function myReducer(draft: typeof initialTasks, action: Action) {
 switch (action.type) {
  case 'add':
   {
    if (typeof action.id !== 'number' || typeof action.text !== 'string') break;
    const { id, text } = action;
    draft.push({ id, text, done: false });
   }
   break;
  case 'edit':
   {
    if (typeof action.id !== 'number' || typeof action.text !== 'string') break;
    const { id, text } = action;
    const element = draft.find((el) => el.id === id);
    if (element) element.text = text;
   }
   break;
  case 'delete':
   {
    if (typeof action.id !== 'number') break;
    const { id } = action;
    const elementIndex = draft.findIndex((el) => el.id === id);
    draft.splice(elementIndex, 1);
   }
   break;

  default:
   break;
 }
}

const myListaLocal = localStorage.getItem('myLista');

const MyInitialData = myListaLocal ? JSON.parse(myListaLocal) : initialTasks;

export default function ReducerContext({
 children,
}: {
 children: JSX.Element;
}) {
 const [state, dispatch] = useImmerReducer(myReducer, MyInitialData);
 localStorage.setItem('myLista', JSON.stringify(state));

 return (
  <MyDispatchContext.Provider value={dispatch}>
   <MyStateContext.Provider value={state}>{children}</MyStateContext.Provider>
  </MyDispatchContext.Provider>
 );
}
