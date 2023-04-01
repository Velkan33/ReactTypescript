import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import MyReducer from "./Reducer";
import { initialTasks } from "./tasks";

//Type Export
export type InitialState = typeof initialState;
export type Dispatch = { type: string; id?: number; newText?: string };

//State and Dispatch Context
export const MyContextState = createContext<null | InitialState>(null);
export const MyContextDispatch = createContext<null | React.Dispatch<Dispatch>>(
 null
);

//State and Dispatch Use
export const MyStateUse = () => useContext(MyContextState);
export const MyDispatchUse = () => useContext(MyContextDispatch);

//Initial State
let initialState = {
 isEditing: false,
 initialTasks,
};

//JSX
export default function StateDispatchProvider({
 children,
}: {
 children: JSX.Element;
}) {
 const [state, dispatch] = useImmerReducer(MyReducer, initialState);
 return (
  <MyContextState.Provider value={state}>
   <MyContextDispatch.Provider value={dispatch}>
    {children}
   </MyContextDispatch.Provider>
  </MyContextState.Provider>
 );
}
