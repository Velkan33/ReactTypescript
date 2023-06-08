// import { useMyState } from '../context/ContextProvider';

// export default function Contact() {
//  const statePack = useMyState();
//  if (statePack === null) return <h2>Error en el state</h2>;
//  const { state, setState } = statePack;
//  setState('Velkan');
//  return <h1>Contact {state}</h1>;
// }

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Services() {
 return (
  <>
   <h2 className="mt-2 mx-2 text-xl">Services</h2>
   {/** Nav Section */}
   <nav>
    <Link to="/services" className="border px-1 rounded bg-slate-200 m-1">
     Home
    </Link>
    <Link to="/services/guarantee" className="px-1 rounded border bg-slate-200">
     Guarantee
    </Link>
   </nav>
   {/** End Nav Section */}

   {/** This Outlet component will call the nested component of Services that is called through path, but rendering the Services component too. Works like a children parameter */}
   <Outlet />
  </>
 );
}
