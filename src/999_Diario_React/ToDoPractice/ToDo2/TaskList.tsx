import React, { Fragment } from "react";
import { useTasks } from "./Reducer";
import TaskElement from "./TaskElement";

export default function TaskList() {
 const tasks = useTasks();
 return (
  <>
   {tasks &&
    tasks.map((el) => (
     <Fragment key={el.id}>
      <TaskElement id={el.id} />
     </Fragment>
    ))}
  </>
 );
}
