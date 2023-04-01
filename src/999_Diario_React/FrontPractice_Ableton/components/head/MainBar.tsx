import React from "react";
import MainBarFr1 from "./MainBarFr1";
import MainBarFr2 from "./MainBarFr2";

export default function MainBar() {
 return (
  <div className="flex justify-between px-8 py-4 font-bold">
   <MainBarFr1 />
   <MainBarFr2 />
  </div>
 );
}
