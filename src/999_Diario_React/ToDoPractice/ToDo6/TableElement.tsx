import React, { useRef, useState } from 'react';
import { useDispatchContext, useStateContext } from './ReducerContext';
import InputEdit from './InputEdit';
import { useOnClick } from './useOnClick';

export default function TableElement({ id }: { id: number }) {
 const [isEditing, updateIsEditing] = useState<boolean>(false);
 const [nextText, setNextText] = useState('');
 const myInputRef = useRef(null);
 const mySaveRef = useRef(null);

 useOnClick({ myInputRef, mySaveRef, updateIsEditing });

 const state = useStateContext();
 const dispatch = useDispatchContext();
 if (!state || !dispatch) return <div />;
 const element = state.find((el) => el.id === id);
 if (!element) return <div />;

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const nextIsEditing = !isEditing;
  updateIsEditing(nextIsEditing);
  if (!nextIsEditing) {
   dispatch({ type: 'edit', id, text: nextText });
  } else {
   setNextText(element.text);
  }
 };

 const handleSave = (e: React.ChangeEvent<HTMLInputElement>) => {
  setNextText(e.target.value);
 };

 const handleDelete = () => {
  dispatch({ type: 'delete', id });
 };

 return (
  <form className="block" onSubmit={handleSubmit}>
   {isEditing ? (
    <InputEdit text={element.text} handleSave={handleSave} ref={myInputRef} />
   ) : (
    <p>{element.text}</p>
   )}
   <input
    ref={mySaveRef}
    className="border w-fit"
    type="submit"
    value={isEditing ? 'Save' : 'Edit'}
   />
   <input
    className="border w-fit"
    type="button"
    value="Delete"
    onClick={handleDelete}
   />
  </form>
 );
}
