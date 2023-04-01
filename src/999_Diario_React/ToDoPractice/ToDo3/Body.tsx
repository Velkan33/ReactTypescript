import React from "react";
import Element from "./Element";
import { initialData } from "./initialData";
import { useMyTask } from "./ReducerContext";

export default function Body() {
 const state = useMyTask();

 return (
  <>
   <ul>
    {state &&
     state.map((el) => (
      <li key={el.id}>
       <Element id={el.id} />
      </li>
     ))}
   </ul>
  </>
 );
}
