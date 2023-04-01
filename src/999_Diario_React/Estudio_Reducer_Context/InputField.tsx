import React from "react";
import { useImmer } from "use-immer";
import { classes } from "./App";
import { MyDispatchUse, MyStateUse } from "./ContextStateProvider";
import { nextId } from "./tasks";

export default function InputField() {
 const [text, updateText] = useImmer("");
 const [myNextId, updateMyNextId] = useImmer(nextId);
 let state = MyStateUse();
 let dispatch = MyDispatchUse();
 if (state === null || dispatch === null)
  return (
   <>
    <p>Error InputField</p>
   </>
  );
 let handleInputLocaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateText(e.target.value);
 };

 let handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
   handleCreateNew();
  }
 };
 let handleCreateNew = () => {
  if (text.length === 0) return;
  updateMyNextId((draft) => draft + 1);
  console.warn(myNextId);
  if (dispatch !== null) {
   updateText("");
   dispatch({ type: "createNew", id: myNextId, newText: text });
  }
 };
 return (
  <>
   <input
    onChange={handleInputLocaleChange}
    onKeyDown={handleKeyDown}
    className={classes.input}
    type="text"
    value={text}
   />
   <button onClick={handleCreateNew} className={classes.botton}>
    Add
   </button>
  </>
 );
}
