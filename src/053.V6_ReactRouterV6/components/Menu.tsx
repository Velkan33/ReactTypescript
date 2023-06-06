import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Header from './Header';
/* The NavLink component redirect to another component inside the single page application, and NavLink do the same with the difference that NavLink have a functionality that add style to the active one, ( this is useful for a Nav bar link) */
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
    {/* LINK: This link 'acerca' is an old link that we will redirect to new 'about' link on the 'Router' component */}
    <Link to="/acerca">
     <button className={buttonStyle} type="button">
      oldLink
     </button>
    </Link>
    {/* End Old Link */}
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
    <Link to="/products">
     <button className={buttonStyle} type="button">
      Products
     </button>
    </Link>
    <NavLink
     to="/react"
     className={({ isActive }) =>
      isActive ? ' shadow-md shadow-black/40 rounded -translate-y-0.5' : ''
     }
    >
     <button className={buttonStyle} type="button">
      React
     </button>
    </NavLink>
   </nav>
  </div>
 );
}
