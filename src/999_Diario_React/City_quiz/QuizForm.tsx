import React, { useState, useEffect, useRef } from "react";
import { Classes } from "../../assets/Classes";

export default function QuizForm(): JSX.Element {
 const [text, setText] = useState<string | null>(null);
 const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

 //Style variable
 const classes = Classes();

 //Event Handlers
 function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
  setText(e.target.value);
 }

 function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
  if (e.key !== "Enter") return;
  e.preventDefault();
  handleSubmit();
 }

 function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
  if (e) e.preventDefault();

  // setIsCorrect
  if (typeof text === "string" && text.toLowerCase().trim() === "cuba") {
   setIsCorrect(true);
  } else {
   setIsCorrect(false);
  }
 }

 /* Returns */

 //Respuesta incorrecta
 if (isCorrect === false) {
  return <h2 className={classes.h2}>Good Try But is Wrong</h2>;
 }
 //Respuesta correcta
 if (isCorrect) {
  return (
   <h2 className={classes.h2}>
    {/**Display Correct message */}
    {typeof text === "string" &&
     text.slice(0, 1).toUpperCase() + text.slice(1) + " " + "is correct"}{" "}
   </h2>
  );
 }
 //Default Return

 return (
  <>
   <p className={classes.text}>Cual es el pais natal de VelkanAlpha?</p>
   <br />
   <form onSubmit={(e) => handleSubmit(e)}>
    <textarea
     className="text-black"
     onChange={(e) => handleChange(e)}
     onKeyDown={(e) => handleKeyDown(e)}
    >
     {text}
    </textarea>
    <br />
    <input
     className={classes.button}
     name="submit"
     type="submit"
     value="Submit"
     disabled={text === null || text === ""}
    />
   </form>
  </>
 );
}
