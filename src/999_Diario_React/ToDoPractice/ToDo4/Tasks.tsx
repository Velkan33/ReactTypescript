import React from 'react';
import { useMyTasks } from './Reducer';
import TaskElement from './TaskElement';

export default function Tasks() {
 const tasks = useMyTasks();
 if (!tasks) return <div />;
 return (
  <ul>
   {tasks.map((el) => (
    <li key={el.id}>
     <TaskElement id={el.id} />
    </li>
   ))}
  </ul>
 );
}
