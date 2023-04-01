import { Classes } from "../../assets/Classes";
import { useReducer } from "react";

type Change =
 | {
    type: "change";
    color: "black";
   }
 | { type: "reset"; color: "white" };

function myReducer(color: string, action: Change) {
 switch (action.type) {
  case "change": {
   return action.color;
  }
  case "reset": {
   return action.color;
  }
  default: {
   return "blue";
  }
 }
}

export default function App() {
 const [color, dispatch] = useReducer(myReducer, "white");

 function handleClick() {
  dispatch({
   type: "change",
   color: "black",
  });
 }
 function handleReset() {
  dispatch({
   type: "reset",
   color: "white",
  });
 }

 let classes = Classes();
 return (
  <>
   <div>
    <div
     className={`h-40 w-40 bg-${color} shadow-xl shadow-black/50 mx-auto`}
    ></div>
    <button className={classes.button + " text-white"} onClick={handleClick}>
     Click Me
    </button>
    <button className={classes.button + " text-white"} onClick={handleReset}>
     Reset
    </button>
   </div>
  </>
 );
}
