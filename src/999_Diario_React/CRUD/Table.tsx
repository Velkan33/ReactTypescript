import React from 'react';
import TableRow from './TableRow';
import { useStateContext } from './ReducerContext/ReducerContext';

export default function Table() {
 const temp = useStateContext();
 if (temp === null) return <div>loading ...</div>;
 return (
  <table>
   <thead>
    <tr>
     <th>Nombre</th>
     <th>Constelacion</th>
     <th>Acciones</th>
    </tr>
   </thead>
   <tbody>
    {temp.map((el) => {
     return (
      <TableRow
       key={el.id}
       nombre={el.nombre}
       constelacion={el.constelacion}
       id={el.id}
      />
     );
    })}
   </tbody>
  </table>
 );
}
