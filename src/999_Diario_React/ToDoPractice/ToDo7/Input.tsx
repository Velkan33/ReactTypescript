import React from 'react';
import { useImmer } from 'use-immer';
import { useDispatchProvider } from './ReducerContext';

export default function Input() {
 const [input, updateInput] = useImmer('');
 const dispatch = useDispatchProvider();
 if (dispatch === null) return <h2>Error en el Dispatch</h2>;
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  dispatch({ type: 'Add', task: input, id: Date.now() });
  updateInput('');
 };
 return (
  <form onSubmit={handleSubmit}>
   <input
    className="text-black/75"
    type="text"
    placeholder="Add Task"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
     updateInput(e.target.value);
    }}
    value={input}
   />
   <input type="submit" value="Add" className="border cursor-pointer p-1" />
  </form>
 );
}
