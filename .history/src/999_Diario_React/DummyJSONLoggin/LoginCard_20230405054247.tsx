import React from 'react';

export default function LoginCard() {
 return (
  <div className="bg-white text-gray-800 p-8">
   <form className="grid gap-4">
    <input type="text" className="rounded-full border" />
    <input type="text" className="border rounded-full" />
    <input
     type="submit"
     value="Create Account"
     className="bg-green-500 text-white w-[10rem] border"
    />
   </form>
  </div>
 );
}
