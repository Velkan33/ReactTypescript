import React, { useState, useEffect } from 'react';

type ReturnTypes = [
 { response: { estado?: []; municipios?: []; colonia?: [] } } | null,
 string | null,
 React.Dispatch<React.SetStateAction<string | null>>
];
const regex = /https:\/\/.*\/.*\/.*\.*\/.*\?/;

export default function usePlaceFetch({
 address,
 prevSelectedDependency,
}: {
 address: string;
 prevSelectedDependency?: string | null;
}): ReturnTypes {
 const [responseObj, setResponse] = useState<null | {
  response: { estado?: []; municipios?: []; colonia?: [] };
 }>(null);
 const [selectedResponse, setSelectedResponse] = useState<null | string>(null);

 useEffect(() => {
  let ignore = false;
  const hasSelectedDependency = regex.test(address);
  if (ignore || !address) return () => {};
  if (hasSelectedDependency) {
   if (prevSelectedDependency !== null && prevSelectedDependency !== '_empty') {
    fetch(address)
     .then((res) => res.json())
     .then(setResponse);
   } else {
    setResponse(null);
   }
  } else {
   fetch(address)
    .then((res) => res.json())
    .then(setResponse);
  }
  return () => {
   ignore = true;
  };
 }, [address, prevSelectedDependency]);
 return [responseObj, selectedResponse, setSelectedResponse];
}
