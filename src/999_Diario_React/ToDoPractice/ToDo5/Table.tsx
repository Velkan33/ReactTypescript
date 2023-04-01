import React, { useRef, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useMyDispatchContext, useMyStateContext } from './ReducerContext';

export default function Table({ id }: { id: number }) {
 const [isEditing, updateIsEditing] = useState(false);
 const [editingText, updateEditingText] = useImmer('');
 const state = useMyStateContext();
 const dispatch = useMyDispatchContext();
 const mySaveButton = useRef<HTMLInputElement>(null);
 const myInputArea = useRef<HTMLInputElement>(null);
 // Effects
 useEffect(() => {
  function handleClickOutside(e: MouseEvent) {
   e.stopPropagation();
   if (e.target !== mySaveButton.current && e.target !== myInputArea.current) {
    updateIsEditing((isEdit) => {
     return false;
    });
   }
  }
  document.addEventListener('click', handleClickOutside);
  return () => {
   document.removeEventListener('click', handleClickOutside);
  };
 }, []);
 // Effects end

 // State & Dispatch validation
 if (!state || !dispatch) return <code>Error en Table</code>;
 const element = state.find((el) => el.id === id);
 if (!element) return <code>Error en Table</code>;

 // Handelers
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const nextIsEditing = !isEditing;
  updateIsEditing(nextIsEditing);
  if (nextIsEditing) {
   updateEditingText(element.text);
  } else {
   dispatch({ type: 'edit', id, text: editingText });
  }
 };
 const handleCheck = () => {
  dispatch({ type: 'check', id });
 };
 const handleWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateEditingText(e.target.value);
 };
 const handleDelete = () => {
  dispatch({ type: 'delete', id });
 };
 // Handelers end

 return (
  <form onSubmit={handleSubmit}>
   <input type="checkbox" onChange={handleCheck} checked={element.done} />
   {isEditing ? (
    <input
     ref={myInputArea}
     className="border mx-2 text-white bg-blue-600"
     type="text"
     onChange={handleWrite}
     value={editingText}
    />
   ) : (
    <p className="inline-block">{element.text}</p>
   )}
   <input
    ref={mySaveButton}
    type="submit"
    value={isEditing ? 'Save' : 'Edit'}
   />
   <input type="button" value="delete" onClick={handleDelete} />
  </form>
 );
}
