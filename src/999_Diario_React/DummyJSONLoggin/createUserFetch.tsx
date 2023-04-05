import React from 'react';

type Response = {
 name?: string;
 message?: string;
};
export default function createUserFetch(
 username: string,
 password: string,
 setResponse: React.Dispatch<React.SetStateAction<null | Response>>,
 setError: React.Dispatch<React.SetStateAction<boolean>>,
 setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
 setLoading(true);
 fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({
   username,
   password,
  }),
 })
  .then((res) => {
   if (res.ok) {
    return res.json();
   }
   setError(true);
   return res.json();
  })
  .then((res) => setResponse(res))
  .finally(() => setLoading(false));
}
