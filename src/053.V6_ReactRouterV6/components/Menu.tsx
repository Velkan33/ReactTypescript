import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from './Header';

export default function Menu() {
 const buttonStyle =
  'bg-slate-900 text-white hover:underline underline-offset-[2px] decoration-1 hover:shadow-none shadow transition font-normal rounded px-2';
 return (
  <div className="flex justify-between items-center px-2 py-2 shadow sticky top-0">
   <Header />

   <nav className="flex gap-2">
    <Link to="/" className="">
     <button className={buttonStyle} type="button">
      Home
     </button>
    </Link>
    <Link to="/about" className="">
     <button className={buttonStyle} type="button">
      About
     </button>
    </Link>
    <Link to="/contact">
     <button className={buttonStyle} type="button">
      Contact
     </button>
    </Link>
   </nav>
  </div>
 );
}
