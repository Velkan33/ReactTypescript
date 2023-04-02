import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

type SubResponse = { id: number; firstName: string; age: number };
type Response = {
 users: SubResponse[];
};

export default function useMyFetch({
 limit,
 skip,
}: {
 limit: number;
 skip: number;
}) {
 const [responseArray, setResponseArray] = useState<[] | SubResponse[]>([]);
 useEffect(() => {
  let ignore = false;
  fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    window.console.warn(res.status, res.statusText, res);
    return null;
   })
   .then((data: Response | null) => {
    if (data !== null && !ignore)
     setResponseArray((r) => [...r, ...data.users]);
   });
  return () => {
   ignore = true;
  };
 }, [limit, skip]);
 return [responseArray];
}
