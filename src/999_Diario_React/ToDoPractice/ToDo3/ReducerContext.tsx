import React, { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialData } from "./initialData";

interface MyTasks {
 id: number;
 text: string;
 done: boolean;
}

interface MyActionType {
 type: string;
 id?: number;
 text?: string;
}
//tengo que crear el context
const ContextTasks = createContext<null | MyTasks[]>(null);
const ContextDispatch = createContext<null | React.Dispatch<MyActionType>>(
 null
);
//Creo los custom hooks para task y dispatch use
export const useMyTask = () => useContext(ContextTasks);
export const useMyDispatch = () => useContext(ContextDispatch);

//tengo que rescribir el context
export const MyContextProvider = ({ children }: { children: JSX.Element }) => {
 let myInitialValue = initialData;
 let myData = localStorage.getItem("todoApp");
 if (typeof myData === "string") {
  myInitialValue = JSON.parse(myData);
 }
 const [state, dispatch] = useImmerReducer(myReducer, myInitialValue);
 localStorage.setItem("todoApp", JSON.stringify(state));

 return (
  <>
   <ContextTasks.Provider value={state}>
    <ContextDispatch.Provider value={dispatch}>
     {children}
    </ContextDispatch.Provider>
   </ContextTasks.Provider>
  </>
 );
};

//tengo que crear el reducer

function myReducer(draft: MyTasks[], action: MyActionType) {
 switch (action.type) {
  case "PUSH":
   {
    if (typeof action.id !== "number" || typeof action.text !== "string") break;
    const { id, text } = action;

    draft.push({ id, text, done: false });
   }
   break;
  case "PUT":
   {
    if (typeof action.id !== "number" || typeof action.text !== "string") break;
    const element = draft.find((el) => el.id === action.id);
    element && (element.text = action.text);
   }
   break;
  case "DELETE":
   {
    if (typeof action.id !== "number") break;
    return draft.filter((el) => el.id !== action.id);
   }
   break;
  case "CHECK":
   {
    if (typeof action.id !== "number") break;
    const element = draft.find((el) => el.id === action.id);
    element && (element.done = !element.done);
   }
   break;
  default: {
   console.log("Algo salio mal");
  }
 }
}
