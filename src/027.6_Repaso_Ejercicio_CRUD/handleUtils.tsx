import { isResponse, isResponseArray, ResponseType } from "./typeUtils";
import { petition } from "./utils";
import React from "react";

let address = "http://localhost:6655/santos";

//ANCHOR - GET
export const Request = async ($setResponse: CallableFunction) => {
 //NOTE - Check data is not void
 let dataArr = await petition({ url: address });
 console.log(dataArr);
 if (isResponseArray(dataArr)) {
  $setResponse(dataArr);
 }
};

//ANCHOR - PUT preparation
export function handleUpdate({
 input,
 setInput,
 id,
 setActId,
 value,
}: {
 input: { value: string; text: "Crear" | "Actualizar" };
 setInput: CallableFunction;
 id: number;
 setActId: CallableFunction;
 value: string | undefined;
}) {
 if (typeof value !== "string") return false;
 setActId(id);
 setInput({ value, text: "Actualizar" });
}

//ANCHOR - POST | PUT
export async function handleSubmit({
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
 try {
  //LINK - Case POST
  if (actId < 0) {
   let res = await fetch(address, {
    method: "POST",
    body: JSON.stringify({ nombre: input.value }),
    headers: { "Content-type": "application/json;charset=UTF-8" },
   });
   let json = await res.json();
   await setResponse([...response, json]);
   await setInput({ ...input, value: "" });
   await handleReset({ setInput, setActId });
  }
  //LINK - Case PUT
  else {
   let res = await fetch(`${address}/${actId}`, {
    method: "PUT",
    body: JSON.stringify({ nombre: input.value }),
    headers: { "Content-type": "application/json;charset=UTF-8" },
   });
   let json = await res.json();
   setInput({ ...input, value: "" });
   let newResponse = response.map((e) => {
    if (e.id === actId) return { id: actId, nombre: input.value };
    return e;
   });
   await setResponse(newResponse);
   handleReset({ setInput, setActId });
  }
 } catch (error) {}
}

//ANCHOR - DELETE
export async function handleDelete({
 id,
 response,
 setResponse,
 setInput,
 actId,
 setActId,
}: {
 id: number;
 response: ResponseType[];
 setResponse: CallableFunction;
 setInput: CallableFunction;
 actId: number;
 setActId: CallableFunction;
}) {
 try {
  await petition({
   url: id ? `${address}/${id}` : address,
   method: "DELETE",
  });
  let newResponse = response.filter((e) => e.id !== id);
  await setResponse(newResponse);
  id === actId && handleReset({ setInput, setActId });
 } catch (err) {}
}

//ANCHOR - Handle Reset Input
export function handleReset({
 setInput,
 setActId,
}: {
 setInput: CallableFunction;
 setActId: CallableFunction;
}) {
 setInput({ value: "", text: "Crear" });
 setActId(-1);
}
