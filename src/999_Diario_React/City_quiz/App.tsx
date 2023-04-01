import React from "react";
import { Classes } from "../../assets/Classes";
import QuizForm from "./QuizForm";

export default function CityQuiz() {
 const classes = Classes();
 return (
  <div>
   <h2 className={classes.h2}>City Quiz</h2>
   <br />
   <QuizForm />
  </div>
 );
}
