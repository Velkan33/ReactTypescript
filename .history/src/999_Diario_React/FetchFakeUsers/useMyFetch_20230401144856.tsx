import React from 'react';
import { useImmer } from 'use-immer';

export default function useMyFetch({ limit, skip }) {
 const [responseArray, updateResponseArray] = useImmer([]);
 useEffect(() => {
try{
  fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`).then(res => res.ok?res.json(): (throw res)
  );
}catch(error){
console.warn(error)}
 }, []);
 return [responseArray];
}
