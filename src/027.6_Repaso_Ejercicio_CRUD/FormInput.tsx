import React, { useState, useEffect, useRef } from "react";
import { Classes } from "../assets/Classes";
import {
 handleDelete,
 handleReset,
 handleSubmit,
 handleUpdate,
 Request,
} from "./handleUtils";
import { isResponse, isResponseArray, ResponseType } from "./typeUtils";

export default function Form({
 input,
 setInput,
 response,
 setResponse,
 actId,
 setActId,
}: {
 input: { value: string; text: "Crear" | "Actualizar" };
 setInput: CallableFunction;
 response: ResponseType[];
 setResponse: CallableFunction;
 actId: number;
 setActId: CallableFunction;
}) {
 function handleChange(value: React.ChangeEvent<HTMLInputElement>) {
  setInput({ ...input, value: value.target.value });
 }

 return (
  <form
   className="text-black px-2"
   onSubmit={(e) => {
    e.preventDefault();
    handleSubmit({ input, setInput, response, setResponse, actId, setActId });
   }}
  >
   <input
    type="text"
    className={"border"}
    value={input.value}
    onChange={(e) => handleChange(e)}
   />
   <input
    type="submit"
    value={input.text}
    className="text-black disabled:opacity-50 border px-2 py-1 rounded-md"
    disabled={input.value.length === 0}
   />
   <input
    type="button"
    value="Reset"
    className="text-black border px-2 py-1 rounded-md"
    onClick={() => handleReset({ setInput, setActId })}
   />
  </form>
 );
}
