import React from 'react';

export default function ErrorMessage({ msg }: { msg: string }) {
 return (
  <div className="border py-2 px-6 text-white rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-400 ">
   {msg}
  </div>
 );
}
