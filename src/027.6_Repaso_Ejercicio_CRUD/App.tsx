import React, { useState, useEffect, useRef } from "react";
import { Classes } from "../assets/Classes";
import Form from "./FormInput";
import {
 handleDelete,
 handleReset,
 handleSubmit,
 handleUpdate,
 Request,
} from "./handleUtils";
import { isResponse, isResponseArray, ResponseType } from "./typeUtils";

export default function CRUD() {
 const [response, setResponse] = useState<ResponseType[]>([]);
 const [input, setInput] = useState<{
  value: string;
  text: "Crear" | "Actualizar";
 }>({ value: "", text: "Crear" });
 const [actId, setActId] = useState<number>(-1);

 useEffect(() => {
  //REVIEW - handleUtils.tsx
  Request(setResponse);
 }, []);

 let classe = Classes();

 //ANCHOR - Props pasada al Form
 let myProps = { input, setInput, response, setResponse, actId, setActId };
 return (
  <>
   <h2 className={classe.h1}>Santos</h2>
   <ul className={(classe.list, classe.text)}>
    {response.map((e) => (
     <li key={e.id}>
      {/* //NOTE - Call Put */}
      <span
       onClick={() =>
        handleUpdate({
         input,
         setInput,
         id: e.id,
         setActId,
         value: e.nombre,
        })
       }
       className="cursor-pointer text-black"
      >
       {e.nombre}
      </span>{" "}
      {/* //NOTE - Call Delete */}
      <span
       className="cursor-pointer border px-2 rounded-md"
       onClick={() =>
        handleDelete({
         id: e.id,
         response,
         setResponse,
         setInput,
         actId,
         setActId,
        })
       }
      >
       x
      </span>
     </li>
    ))}
   </ul>
   {/* // NOTE - Call Post */}

   <Form {...myProps} />
  </>
 );
}
