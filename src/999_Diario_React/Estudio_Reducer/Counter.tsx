import { useReducer } from "react";

const initialState = { count: 0 };

type ACTIONTYPE = { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
 switch (action.type) {
  case "decrement":
   return { count: state.count - Number(action.payload) };
  default:
   throw new Error();
 }
}

export default function Counter() {
 const [state, dispatch] = useReducer(reducer, initialState);

 function handleDecrement() {
  dispatch({ type: "decrement", payload: "5" });
 }

 return (
  <>
   Count: {state.count}
   <button onClick={handleDecrement}>-</button>
   <button onClick={handleDecrement}>+</button>
  </>
 );
}
