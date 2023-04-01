import React from 'react';
import { useTasks } from './ReducerContext';

export default function Acomplished() {
 const state = useTasks();
 const completedTask = state?.filter((el) => el.done).length;
 if (!state || !completedTask) return <div />;
 return (
  <p>
   Tareas completadas {completedTask} de {state.length}.
  </p>
 );
}
