import React, { useState, useEffect } from 'react';

import createUserFetch from './createUserFetch';
import Loader from './Components/Loader';
import Message from './Components/ErrorMessage';

type Response = {
 name?: string;
 message?: string;
};
export default function LoginCard() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [passHidden, setPassHidden] = useState(true);
 const [response, setResponse] = useState<null | Response>(null);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  createUserFetch(username, password, setResponse, setError, setLoading);
 };

 const FinalMessage = error ? (
  <Message
   msg={response && response.message ? response.message : 'Invalid Credentials'}
  />
 ) : (
  <input
   form="userForm"
   type="submit"
   value="Login"
   className="bg-gradient-to-r from-lime-600 to-green-600 text-white w-[10rem] h-10 mx-auto mt-2 rounded-full "
  />
 );
 // ANCHOR - Action after succes
 if (!error && response && !response.message) {
  console.log(response);
 }

 return (
  <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl shadow-black/25">
   <form className="grid gap-4" id="userForm" onSubmit={handleSubmit}>
    <label htmlFor="name" className="text-lg">
     Username
     <input
      id="name"
      type="text"
      className="text-lg border rounded-md w-full bg-white pl-2"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setUsername(e.target.value);
      }}
      onFocus={() => setError(false)}
      value={username}
     />
    </label>
    <label htmlFor="pass" className="text-lg">
     Password
     <input
      id="pass"
      type={passHidden ? 'password' : 'text'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      onFocus={() => setError(false)}
      className="pl-2 border text-lg rounded-md w-full"
      autoComplete="off"
     />
    </label>
    <label htmlFor="show-pass" className="mx-auto">
     <input
      checked={!passHidden}
      onChange={() => {
       setPassHidden(!passHidden);
      }}
      type="checkbox"
      id="show-pass"
      className="appearance-none border-black border h-3 w-3 p-[1px]  rounded-sm mx-1 checked:bg-lime-500"
     />
     Show password
    </label>
    {loading ? (
     <div className="mx-auto">
      <Loader />
     </div>
    ) : (
     FinalMessage
    )}
   </form>
  </div>
 );
}
