import { useEffect, useState } from 'react';

interface MyResponse {
 nombre: string;
 constelacion: string;
 id: number;
}

// eslint-disable-next-line import/prefer-default-export
export function HookPersonalizado(url: string) {
 const [error, setError] = useState<null | boolean>(null);
 const [isPending, setIsPending] = useState<boolean>(true);
 const [response, setResponse] = useState<null | MyResponse[]>(null);

 let Response: MyResponse[] = [];

 async function RequestHook(arg: string) {
  try {
   const req = await fetch(url);
   if (!req.ok)
    throw {
     error: true,
     status: req.status,
     statusText: req.statusText ? req.statusText : 'Ocurrio un error',
    };
   const res = await req.json();
   Response = await res;
   setIsPending(false);
   setError(false);
   setResponse(Response);
  } catch (err) {
   setIsPending(true);
   setError(true);
   console.log(err);
  }
 }
 useEffect(() => {
  RequestHook(url);
 }, [url]);

 return { error, isPending, response };
}
