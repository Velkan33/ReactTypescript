import React, { useRef } from "react";
import { useImmer } from "use-immer";
import { useDispatch, useTasks } from "./Reducer";

export default function Input() {
 const [text, updateText] = useImmer<string>("");
 const _dispatch = useDispatch();
 const _tasks = useTasks();

 let id = useRef(0);
 //Next id
 _tasks &&
  _tasks.length > 0 &&
  (id.current = _tasks[_tasks.length - 1]?.id + 1);

 const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateText(e.target.value);
 };
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  _dispatch &&
   text.length > 0 &&
   _dispatch({ type: "Push", text, id: id.current });

  updateText("");
 };
 return (
  <>
   <form onSubmit={handleSubmit}>
    <input
     className={"px-2 py-1 shadow-inner border mx-1 rounded-md"}
     type="text"
     placeholder="Add a task"
     onChange={handleText}
     value={text}
    />
    <input
     className={
      "border px-2 py-1  rounded-lg  shadow-inner disabled:hover:shadow-inner hover:shadow-none text-gray-800 disabled:text-gray-400 disabled:bg-gray-200"
     }
     type="submit"
     disabled={text.length === 0}
    />
   </form>
  </>
 );
}
