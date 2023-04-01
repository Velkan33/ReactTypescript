import React from "react";
import Acomplished from "./Acomplished";
import Body from "./Body";
import InputAdd from "./InputAdd";
import ReducerContext from "./ReducerContext";
import TaskElement from "./TaskElement";
import TaskList from "./TaskList";

export default function ToDoApp() {
 return (
  <>
   <ReducerContext>
    <Body>
     <>
      <InputAdd />
      <br />
      <TaskList />
      <Acomplished />
     </>
    </Body>
   </ReducerContext>
  </>
 );
}
