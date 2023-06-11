import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
 return (
  <>
   <h2>Home</h2>
   <Link to="/login" className="rounded m-1 bg-slate-200 px-1">
    Login
   </Link>
   <Link to="/private" className="rounded m-1 bg-slate-200 px-1">
    Private
   </Link>
  </>
 );
}
