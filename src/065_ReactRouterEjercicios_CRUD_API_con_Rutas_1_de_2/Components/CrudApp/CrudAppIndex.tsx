import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useImmer } from 'use-immer';
import styles from '../../Styles/styles';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}
export default function CrudAppIndex() {
 return (
  <div className="ml-16">
   <h2 className="text-4xl mb-4">CRUD App</h2>
   <NavLink
    to="/crud"
    className={(isActive) => `${(isActive ? 'active' : '') + styles.button}`}
   >
    Santos
   </NavLink>
   <NavLink
    to="/crud/add"
    className={(isActive) => (isActive ? 'active' : '') + styles.button}
   >
    Add
   </NavLink>
   <Outlet />
  </div>
 );
}
