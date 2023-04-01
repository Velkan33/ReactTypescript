import React, { Fragment } from "react";
import { useTasks } from "./ReducerContext";
import TaskElement from "./TaskElement";
import { initialTasks } from "./tasks";

export default function TaskList() {
 let tasks = useTasks();
 return (
  <>
   {tasks &&
    tasks.map((el) => (
     <Fragment key={el.id}>
      <TaskElement id={el.id} />
      <br />
     </Fragment>
    ))}
  </>
 );
}
