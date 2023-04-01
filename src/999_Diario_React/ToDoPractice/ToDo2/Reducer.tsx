import { createContext, useContext, useReducer } from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "./tasks";

//Interfaces
interface MyData {
 text: string;
 done: boolean;
 id: number;
}
interface interfaceAction {
 type: string;
 text?: string;
 id?: number;
}

//Initial Context
const MyTasks = createContext<null | MyData[]>(null);
const MyDispatch = createContext<null | React.Dispatch<interfaceAction>>(null);

//Use Context
export const useTasks = () => {
 return useContext(MyTasks);
};
export const useDispatch = () => {
 return useContext(MyDispatch);
};

//Provider JSX
export const TaskDispatch = ({ children }: { children: JSX.Element }) => {
 //Get Saved local storage
 const MyStorageData = localStorage.getItem("todoApp");
 let MyParsedData;
 if (MyStorageData) MyParsedData = JSON.parse(MyStorageData);
 //Initial State
 const [state, dispatch] = useImmerReducer(
  MyReducer,
  MyParsedData || initialTasks
 );
 //Save State to local Storage
 localStorage.setItem("todoApp", JSON.stringify(state));
 return (
  <>
   <MyTasks.Provider value={state}>
    <MyDispatch.Provider value={dispatch}>{children}</MyDispatch.Provider>
   </MyTasks.Provider>
  </>
 );
};

//Reducer
const MyReducer = (draft: MyData[], action: interfaceAction) => {
 switch (action.type) {
  case "Push":
   {
    if (typeof action.id !== "number" || typeof action.text !== "string")
     return;
    draft.push({ id: action.id, text: action.text, done: false });
   }
   break;
  case "Delete":
   {
    if (typeof action.id !== "number") return;
    return draft.filter((el) => el.id !== action.id);
   }
   break;
  case "Put":
   {
    if (typeof action.id !== "number" || typeof action.text !== "string")
     return;
    const element = draft.find((el) => el.id === action.id);
    element && (element.text = action.text);
   }
   break;
  case "Check":
   {
    if (typeof action.id !== "number") return;
    const element = draft.find((el) => el.id === action.id);
    element && (element.done = !element.done);
   }
   break;
  default: {
   console.warn("ocurrio un error");
  }
 }
};
