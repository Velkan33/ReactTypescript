import React from 'react';
import { useImmer } from 'use-immer';
import { useMyDispatchContext, useMyStateContext } from './ReducerContext';

export default function Input() {
 const [text, setText] = useImmer('');
 const dispatch = useMyDispatchContext();
 const state = useMyStateContext();
 if (!dispatch || !state) return <div />;

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  let nextId = 0;
  if (state.length) {
   nextId = state[state.length - 1].id + 1;
  }
  dispatch({ type: 'add', text, id: nextId });
  setText('');
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setText(e.target.value);
 };
 return (
  <form onSubmit={handleSubmit}>
   <input className="border" type="text" value={text} onChange={handleChange} />
   <input type="submit" />
  </form>
 );
}
