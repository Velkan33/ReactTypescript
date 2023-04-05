import React from 'react';

export default function LoginCard() {
 return (
  <div className="bg-white text-gray-800 p-8">
   <form className="grid ">
    <input type="text" />
    <input type="text" className="border" />
    <input type="submit" value="Create Account" className="border" />
   </form>
  </div>
 );
}
