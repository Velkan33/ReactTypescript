import React from "react";
import { useImmer } from "use-immer";
import { useDispatch, useTasks } from "./ReducerContext";

export default function TaskElement({ id }: { id: number }) {
 const [isEditing, updateIsEditing] = useImmer(false);
 const state = useTasks();
 if (state === null) return <></>;
 const text = state.find((el) => el.id === id)?.text;
 if (text === undefined) return <></>;
 const dispatch = useDispatch();
 if (dispatch === null) return <></>;

 let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch({
   type: "Change",
   id,
   text: e.target.value,
  });
 };

 let handleCheck = () => {
  dispatch({ type: "Check", id });
 };

 let handleDelete = () => {
  dispatch({ type: "Delete", id });
 };

 const isChecked = state.find((el) => el.id === id)?.done;

 return (
  <>
   <input type="checkbox" checked={isChecked} onChange={handleCheck} />
   {isEditing ? (
    <input type="text" value={text} onChange={handleChange} />
   ) : (
    <p>{text}</p>
   )}

   <button onClick={() => updateIsEditing(!isEditing)}>
    {isEditing ? "Save" : "Edit"}
   </button>
   <button onClick={handleDelete}>Delete</button>
  </>
 );
}
