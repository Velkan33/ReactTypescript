import React from 'react';
import RowButtons from './RowButtons';

export default function TableRow({
 nombre,
 constelacion,
 id,
}: {
 nombre: string;
 constelacion: string;
 id: number;
}) {
 return (
  <tr>
   <td>{nombre}</td>
   <td>{constelacion}</td>
   <td>
    <RowButtons id={id} />
   </td>
  </tr>
 );
}
