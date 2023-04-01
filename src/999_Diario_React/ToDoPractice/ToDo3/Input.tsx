import React from "react";
import { useImmer } from "use-immer";
import { useMyDispatch, useMyTask } from "./ReducerContext";

export default function Input() {
 const [text, updateText] = useImmer("");
 const dispatch = useMyDispatch();
 const state = useMyTask();
 if (state === null) return <></>;
 const id = state.length > 0 ? state[state.length - 1].id + 1 : 0;

 const handleSubmit = () => {
  dispatch && text.length > 0 && dispatch({ type: "PUSH", text, id });
  updateText("");
 };
 const handleEditText = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateText(e.target.value);
 };

 return (
  <>
   <form
    onSubmit={(e) => {
     e.preventDefault();
     handleSubmit();
    }}
   >
    <input
     type="text"
     className="border"
     onChange={handleEditText}
     value={text}
    />
    <input
     className={"disabled:opacity-50 bg-lime-400"}
     type="submit"
     value="Add"
     disabled={text.length === 0}
    />
   </form>
  </>
 );
}
