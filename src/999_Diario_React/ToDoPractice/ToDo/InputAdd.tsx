import React from "react";
import { useImmer } from "use-immer";
import { useDispatch } from "./ReducerContext";
import { nextId } from "./tasks";

export default function InputAdd() {
 const [id, updateId] = useImmer(nextId);
 const [text, updateText] = useImmer("");
 let dispatch = useDispatch();

 const handleAdd = () => {
  updateId((draft) => draft + 1);
  updateText("");
  dispatch && text.length > 0 && dispatch({ type: "Add", id, text });
 };
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateText(e.target.value);
 };

 return (
  <>
   <input
    type="text"
    placeholder="Add Tasks"
    value={text}
    onChange={handleChange}
   />
   <button
    className={"disabled:opacity-50"}
    onClick={handleAdd}
    disabled={text.length === 0}
   >
    Add
   </button>
  </>
 );
}
