import { useReducer, useState, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import changeColor from "./reducer";

let date = new Date();
let startIsBlack = "violet-600";

function changeTime(actualTime: string, action: string) {
 return action;
}

export default function TimeColor() {
 const [time, dispatchTime] = useImmerReducer(
  changeTime,
  date.toLocaleTimeString()
 );
 const [isBlack, dispatch] = useImmerReducer(changeColor, startIsBlack);

 function onClick() {
  if (isBlack === "violet-600") {
   dispatch({
    type: false,
    color: "white",
   });
  } else {
   dispatch({
    type: true,
    color: "violet-600",
   });
  }
 }

 useEffect(() => {
  setInterval(() => {
   dispatchTime(new Date().toLocaleTimeString());
  }, 50);
 }, []);

 return (
  <>
   <div className={`border shadow-lg`}>
    <div className={`h-40 w-40 border bg-${isBlack} m-4`}></div>
    <button
     onClick={onClick}
     className={`border mx-auto block py-1 px-2 text-white bg-violet-600 rounded-md`}
    >
     Click me
    </button>
    <p className={`text-center font-bold`}>{time}</p>
   </div>
  </>
 );
}
