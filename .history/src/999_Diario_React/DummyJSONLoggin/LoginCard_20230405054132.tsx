import React from 'react';

export default function LoginCard() {
 return (
  <div className="bg-white text-gray-800 p-8">
   <form className="grid gap-2">
    <input type="text" className="rounded-full border" />
    <input type="text" className="border rounded-full" />
    <input type="submit" value="Create Account" className="border" />
   </form>
  </div>
 );
}
