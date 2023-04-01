import { createContext, useContext } from "react";
import React from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "./tasks";

export const MyTasks = createContext<null | InitialTasks>(null);
export const MyDispatch = createContext<null | React.Dispatch<ActionType>>(
 null
);

//Custom Types
export type InitialTasks = typeof initialTasks;
export type ActionType = { type: string; id?: number; text?: string };

//Use Context Functions
export const useTasks = () => useContext(MyTasks);
export const useDispatch = () => useContext(MyDispatch);

//Provider Function
export default function ReducerContext({
 children,
}: {
 children: JSX.Element;
}) {
 const [state, dispatch] = useImmerReducer(MyReducer, initialTasks);

 return (
  <MyTasks.Provider value={state}>
   <MyDispatch.Provider value={dispatch}>{children}</MyDispatch.Provider>
  </MyTasks.Provider>
 );
}

const MyReducer = (draft: InitialTasks, action: ActionType) => {
 switch (action.type) {
  case "Add":
   {
    action.id &&
     action.text &&
     draft.push({ id: action.id, text: action.text, done: false });
   }
   break;
  case "Change":
   {
    if (action.text === undefined || action.id === undefined) break;
    let act = draft.find((el) => el.id === action.id);
    if (act) act.text = action.text;
   }
   break;
  case "Check":
   {
    let elem = draft.find((el) => el.id === action.id);
    if (elem) elem.done = !elem.done;
   }
   break;
  case "Delete": {
   return draft.filter((el) => el.id !== action.id);
  }
  default: {
   console.log("fracaso");
  }
 }
};
