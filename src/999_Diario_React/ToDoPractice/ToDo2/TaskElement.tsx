import React from "react";
import { useImmer } from "use-immer";
import { useDispatch, useTasks } from "./Reducer";

export default function TaskElement({ id }: { id: number }) {
 const [isEditing, updateIsEditing] = useImmer(false);
 const [text, updateText] = useImmer("");
 const _dispatch = useDispatch();

 const state = useTasks();
 const myElement = state?.find((el) => el.id === id);

 const handleEdit = () => {
  updateIsEditing(!isEditing);
 };
 const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateText(e.target.value);
 };
 const handleDelete = () => {
  _dispatch && _dispatch({ type: "Delete", id });
 };
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  _dispatch && _dispatch({ type: "Put", text, id });
 };
 const handleCheck = () => {
  _dispatch && _dispatch({ type: "Check", id });
 };

 return (
  <>
   <form onSubmit={handleSubmit}>
    <input
     type="checkbox"
     className={"mx-2"}
     checked={myElement && myElement.done}
     onChange={handleCheck}
    />
    {isEditing ? (
     <input
      type="text"
      className={"min-w-[12rem] border px-2 py-1 rounded-md shadow-inner"}
      defaultValue={myElement && myElement.text}
      onChange={handleText}
      autoFocus
     />
    ) : (
     <p className={"inline-block min-w-[12rem]"}>
      {myElement && myElement.text}
     </p>
    )}
    <input
     onClick={handleEdit}
     className={"px-2 py-1 bg-blue-400 text-white border mx-1 rounded-md"}
     type="submit"
     value={isEditing ? "Save" : "Edit"}
    />
    <button
     onClick={handleDelete}
     type="button"
     className={"px-2 py-1 border bg-red-400 text-white rounded-md mb-2"}
    >
     Delete
    </button>
   </form>
  </>
 );
}
