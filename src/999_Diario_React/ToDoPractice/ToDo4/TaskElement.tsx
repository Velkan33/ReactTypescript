import React, { useRef } from 'react';
import { flushSync } from 'react-dom';
import { useImmer } from 'use-immer';
import { useMyDispatch, useMyTasks } from './Reducer';

export default function TaskElement({ id }: { id: number }) {
 const [isEditing, updateIsEditing] = useImmer(false);
 const [text, updateText] = useImmer('');
 const myRef = useRef<null | HTMLInputElement>(null);
 const dispatch = useMyDispatch();
 const tasks = useMyTasks();
 if (!dispatch || !tasks) return <div />;
 const element = tasks.find((el) => el.id === id);

 const handleCheck = () => {
  dispatch({ type: 'CHECK', id });
 };
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const nextEditingState = !isEditing;
  flushSync(() => {
   updateIsEditing(nextEditingState);
   updateText(element ? element.text : '');
  });

  if (nextEditingState && myRef.current) {
   myRef.current.focus();
  } else if (!nextEditingState) {
   dispatch({ type: 'PUT', text, id });
  }
 };
 const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateText(e.target.value);
 };

 const handleDelete = () => {
  dispatch({ type: 'DELETE', id });
 };
 return (
  <form onSubmit={handleSubmit}>
   <input
    type="checkbox"
    onChange={handleCheck}
    checked={element ? element.done : false}
   />
   {isEditing ? (
    <input type="text" onChange={handleTextChange} value={text} ref={myRef} />
   ) : (
    <p className="inline-block">{element && element.text}</p>
   )}

   <input type="submit" value={isEditing ? 'Save' : 'Edit'} />
   <input type="button" value="Delete" onClick={handleDelete} />
  </form>
 );
}
