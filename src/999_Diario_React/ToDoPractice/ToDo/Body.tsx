import React from "react";

export default function Body({ children }: { children: JSX.Element }) {
 return (
  <>
   <h2>Todo App</h2>
   {children}
  </>
 );
}
