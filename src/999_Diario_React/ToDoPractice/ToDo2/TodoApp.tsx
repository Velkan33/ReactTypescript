import React from "react";
import Input from "./Input";
import { TaskDispatch } from "./Reducer";
import TaskList from "./TaskList";

export default function TodoApp() {
 return (
  <TaskDispatch>
   <>
    <h1 className={"mb-2 text-center text-3xl font-bold"}>Todo App</h1>
    <Input />
    <br />
    <TaskList />
   </>
  </TaskDispatch>
 );
}
