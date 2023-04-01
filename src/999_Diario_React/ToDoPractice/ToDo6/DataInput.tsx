import React, { useRef } from 'react';
import { useImmer } from 'use-immer';
import { useDispatchContext, useStateContext } from './ReducerContext';

export default function DataInput() {
 const [myText, updateMyText] = useImmer<string>('');
 const myRef = useRef<null | HTMLInputElement>(null);
 const dispatch = useDispatchContext();
 const state = useStateContext();
 if (!dispatch || !state) return <div />;

 let nextId = 0;
 if (state.length > 0) {
  nextId = state[state.length - 1].id + 1;
 }

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  dispatch({ type: 'add', text: myText, id: nextId });
  updateMyText('');
  if (myRef.current) {
   if (myRef.current) {
    myRef.current.focus();
   }
  }
 };
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateMyText(e.target.value);
 };
 return (
  <form onSubmit={handleSubmit}>
   <input
    ref={myRef}
    className="border"
    type="text"
    value={myText}
    onChange={handleChange}
   />
   <input className="border" type="submit" value="Add" />
  </form>
 );
}
