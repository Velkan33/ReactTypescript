import React from "react";
import { useImmer } from "use-immer";
import { classes } from "./App";
import { MyDispatchUse, MyStateUse } from "./ContextStateProvider";
export default function TaskElement({ id }: { id: number }): JSX.Element {
 const [isEditing, updateIsEditing] = useImmer(false);
 const state = MyStateUse();
 const dispatch = MyDispatchUse();
 if (state === null || dispatch === null) return <>Err</>;

 //Handles
 console.log(state);
 let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch({ type: "changeText", id, newText: e.target.value });
 };
 let handleDelete = () => {
  dispatch({ type: "delete", id });
 };

 //Estado retornado real
 return (
  <>
   {" "}
   {/** handle Checkbox */}
   <input
    onChange={() => {
     dispatch({ type: "handleCheck", id });
    }}
    className={classes.checkbox}
    type="checkbox"
    checked={state.initialTasks.find((el) => el.id === id)?.done}
   />
   {/**handle Input */}
   {isEditing ? (
    <input
     onChange={handleChange}
     className={"border px-1 mx-1"}
     type="text"
     value={state.initialTasks.find((el) => el.id === id)?.text}
    />
   ) : (
    <p className={classes.text}>
     {state.initialTasks.find((el) => el.id === id)?.text}
    </p>
   )}
   <button
    onClick={() => {
     updateIsEditing((draft) => !draft);
    }}
    className={classes.botton}
   >
    {isEditing ? "Save" : "Edit"}
   </button>
   <button
    className={classes.botton + " !bg-cyan-600 mb-2"}
    onClick={handleDelete}
   >
    Delete
   </button>
  </>
 );
}
