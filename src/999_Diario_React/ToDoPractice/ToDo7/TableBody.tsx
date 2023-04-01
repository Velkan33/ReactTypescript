import React, { useRef } from 'react';
import { flushSync } from 'react-dom';
import { useImmer } from 'use-immer';
import { useDispatchProvider, useStateProvider } from './ReducerContext';

export default function TableBody({ id }: { id: number }) {
 const [isEditing, updateIsEditing] = useImmer(false);
 const inputRef = useRef<HTMLInputElement>(null);
 const state = useStateProvider();
 const dispatch = useDispatchProvider();
 const element = state?.find((el) => el.id === id);
 if (state === null || element === undefined || dispatch === null)
  return <h2>Error en el State</h2>;

 const handleCheckbox = () => {
  dispatch({ type: 'Toggle', id: element.id });
 };
 const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch({ type: 'Edit', id: element.id, task: e.target.value });
 };
 const handleDelete = () => {
  dispatch({ type: 'Delete', id: element.id });
 };
 const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const nextIsEditing = !isEditing;
  flushSync(() => updateIsEditing(nextIsEditing));
  if (nextIsEditing && inputRef.current) {
   inputRef.current.focus();
  }
 };
 return (
  <tbody>
   <tr>
    <td className="px-8">
     <form onSubmit={handleSave} id="myForm">
      <input
       className="mx-2 cursor-pointer"
       type="checkbox"
       onChange={handleCheckbox}
       checked={element.completed}
      />
      {isEditing ? (
       <input
        ref={isEditing ? inputRef : null}
        className="text-black/75"
        type="text"
        value={element.task}
        onChange={handleTextChange}
       />
      ) : (
       <p className="inline-block">{element.task}</p>
      )}
     </form>
    </td>
    <td>
     <input
      className="border p-2 cursor-pointer disabled:bg-gray-600 disabled:text-gray-300"
      type="submit"
      value={isEditing ? 'Save' : 'Edit'}
      form="myForm"
      disabled={element.task === ''}
     />
     <input
      className="p-2 border cursor-pointer"
      type="button"
      value="Delete"
      onClick={handleDelete}
     />
    </td>
   </tr>
  </tbody>
 );
}
