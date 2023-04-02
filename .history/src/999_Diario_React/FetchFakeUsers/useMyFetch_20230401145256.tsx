import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

export default function useMyFetch({
 limit,
 skip,
}: {
 limit: number;
 skip: number;
}) {
 const [responseArray, updateResponseArray] = useImmer([]);
 useEffect(() => {
  fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    console.warn(res.status, res.statusText, res);
   })
   .then((data) => {
    updateResponseArray((r) => r.concat(data));
   });
 }, [limit, skip]);
 return [responseArray];
}
