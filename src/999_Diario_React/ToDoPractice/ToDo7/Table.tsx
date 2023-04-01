import React from 'react';
import { useStateProvider } from './ReducerContext';
import TableBody from './TableBody';

export default function Table() {
 const state = useStateProvider();
 if (state === null) return <h2>Error en el State</h2>;
 const tareasTotales = state.length;
 const tareasCompletadas = state.filter((el) => el.completed).length;

 if (state.length > 0) {
  return (
   <table className="border">
    <thead>
     <tr>
      <th>Tareas</th>
      <th>Acciones</th>
     </tr>
    </thead>
    {state.map((el) => (
     <TableBody key={el.id} id={el.id} />
    ))}
    <tfoot>
     <tr>
      <td>
       <p>{`Tareas Completadas ${tareasCompletadas} de ${tareasTotales}`}</p>
      </td>
     </tr>
    </tfoot>
   </table>
  );
 }

 return <h2>No hay tareas</h2>;
}
