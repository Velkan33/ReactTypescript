import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

type subResponse = { id: number; firstName: string; age: number }
type Response = {
 users: [];
};

export default function useMyFetch({
 limit,
 skip,
}: {
 limit: number;
 skip: number;
}) {
 const [responseArray, setResponseArray] = useState<[]|>([]);
 useEffect(() => {
  fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    console.warn(res.status, res.statusText, res);
   })
   .then((data: Response) => {
    setResponseArray([...data[users]]);
   });
 }, [limit, skip]);
 return [responseArray];
}
