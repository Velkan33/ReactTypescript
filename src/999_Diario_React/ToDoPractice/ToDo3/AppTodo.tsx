import React from "react";
import Body from "./Body";
import Input from "./Input";
import { MyContextProvider } from "./ReducerContext";

export default function AppTodo() {
 return (
  <MyContextProvider>
   <>
    <h2>My Todo App</h2>
    <Input />
    <Body />
   </>
  </MyContextProvider>
 );
}
