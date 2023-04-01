import React from "react";
import { useImmer } from "use-immer";

interface Position {
 x: number;
 y: number;
}

export default function RedDot() {
 const [position, updatePosition] = useImmer<Position | null>(null);

 function handleMove(e: React.PointerEvent<HTMLDivElement>) {
  if (position === null) {
   updatePosition({ x: 0, y: 0 });
  }
  updatePosition((draft) => {
   if (draft === null) return;
   draft.x = e.clientX;
   draft.y = e.clientY;
  });
 }

 let pointerPosition = { x: 0, y: 0 };
 if (position !== null) {
  pointerPosition = {
   x: position.x,
   y: position.y,
  };
 }

 return (
  <>
   <div
    className="h-screen w-screen border"
    onPointerMove={(e) => handleMove(e)}
   >
    <div
     className={`h-6 w-6 border bg-red-500 rounded-full relative`}
     style={{
      top: `${pointerPosition.y}px`,
      left: `${pointerPosition.x}px`,
      transform: "translate(-50%, -50%)",
     }}
    ></div>
   </div>
  </>
 );
}
