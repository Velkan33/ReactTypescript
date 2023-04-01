import React, { useEffect, useRef } from "react";
import { useImmer } from "use-immer";
import { useMyDispatch, useMyTask } from "./ReducerContext";

export default function Element({ id }: { id: number }) {
 const [isEditing, updateIsEditing] = useImmer(false);
 const [nonSavedText, updateNonSavedText] = useImmer("");
 const mySaveButton = useRef(null);
 const myInputArea = useRef(null);

 //** ------  Mouse and Key event from input */
 const myMouseEvent = (e: MouseEvent) => {
  if (e.target !== mySaveButton.current && e.target !== myInputArea.current) {
   updateIsEditing(false);
  }
 };
 const myKeyEvent = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
   updateIsEditing(false);
  }
 };
 useEffect(() => {
  document.addEventListener("click", myMouseEvent);
  document.addEventListener("keydown", myKeyEvent);
  return () => {
   document.removeEventListener("click", myMouseEvent);
   document.removeEventListener("keydown", myKeyEvent);
  };
 }, []);
 //** -- End */

 const state = useMyTask();
 const dispatch = useMyDispatch();

 if (dispatch === null || state === null) return <></>;

 const MyActualElement = state.find((el) => el.id === id);

 if (MyActualElement === undefined) return <></>;

 const handleCheck = () => {
  dispatch({ type: "CHECK", id });
 };

 const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateNonSavedText(e.target.value);
 };

 //Edit
 const handleEdit = () => {
  let nextEditionState = !isEditing;
  if (nextEditionState) {
   updateNonSavedText(MyActualElement.text);
  } else {
   dispatch({ type: "PUT", text: nonSavedText, id });
  }
  updateIsEditing(nextEditionState);
 };

 const handleDelete = () => {
  dispatch({ type: "DELETE", id });
 };

 return (
  <>
   <form
    onSubmit={(e) => {
     e.preventDefault();
     handleEdit();
    }}
   >
    <input
     type="checkbox"
     onChange={handleCheck}
     checked={MyActualElement.done}
     className="inline-block"
    />
    {isEditing ? (
     <input
      className="border mx-2 min-w-[8rem]"
      ref={myInputArea}
      type="text"
      onChange={handleTextChange}
      value={nonSavedText}
      autoFocus={true}
     />
    ) : (
     <p className="inline-block mx-2 min-w-[10rem]">{MyActualElement.text}</p>
    )}

    <input
     type="submit"
     ref={mySaveButton}
     value={isEditing ? "Save" : "Edit"}
    />
    <input type="button" onClick={handleDelete} value="Delete" />
   </form>
  </>
 );
}
