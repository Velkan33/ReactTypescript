import React from 'react';
import { useImmer } from 'use-immer';
import { useMyDispatch, useMyTasks } from './Reducer';

export default function Input() {
 const [nextTask, updateNextTask] = useImmer('');
 const tasks = useMyTasks();
 const dispatch = useMyDispatch();
 if (!tasks || !dispatch) return <div />;
 let nextId = 0;
 if (tasks.length > 0) {
  nextId = tasks[tasks.length - 1].id + 1;
 }

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (nextTask.length === 0) return;
  dispatch({ type: 'PUSH', text: nextTask, id: nextId });
  updateNextTask('');
 };
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateNextTask(e.target.value);
 };
 return (
  <form onSubmit={handleSubmit}>
   <input type="text" onChange={handleChange} value={nextTask} />
   <input type="submit" />
  </form>
 );
}
