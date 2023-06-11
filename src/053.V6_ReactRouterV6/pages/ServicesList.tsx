import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function ServicesList({
 services,
}: {
 services: { id: number; name: string; price: string }[];
}) {
 return (
  <>
   <p>Services</p>
   {services.map((el) => (
    <Link to={`service${el.id}`} key={`service${el.id}`}>
     <button className="px-2 py-1 rounded bg-slate-200 m-1" type="button">
      {el.name}
     </button>
    </Link>
   ))}
   <Outlet />
  </>
 );
}
