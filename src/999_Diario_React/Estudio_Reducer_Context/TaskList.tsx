import React, { Fragment } from "react";

import { MyStateUse } from "./ContextStateProvider";
import TaskElement from "./TaskElement";

export default function TaskList() {
 let state = MyStateUse();
 if (state === null) return <>Error</>;

 return (
  <>
   {state?.initialTasks.map((el) => {
    {
     /**Need to change checked status */
    }
    return (
     <Fragment key={el.id}>
      <TaskElement id={el.id} />
      <br />
     </Fragment>
    );
   })}
  </>
 );
}
