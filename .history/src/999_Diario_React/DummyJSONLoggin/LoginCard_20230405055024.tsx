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
     className="bg-gradient-to-r from-lime-400 to-green-600 text-white w-[10rem]  rounded-full "
    />
   </form>
  </div>
 );
}
