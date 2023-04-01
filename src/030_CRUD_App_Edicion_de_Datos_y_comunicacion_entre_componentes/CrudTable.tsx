import React from 'react';
// import { Classes } from '../assets/Classes';
import CrudTableTbody from './CrudTableTbody';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}

export default function CrudTable({
 data,
 deleteData,
 updateDataToEdit,
 updateForm,
}: {
 data: DataType[] | [];
 deleteData: CallableFunction;
 updateDataToEdit: CallableFunction;
 updateForm: CallableFunction;
}) {
 // console.log(data);
 return (
  <>
   <h3>Tabla de Datos</h3>
   <table>
    <thead>
     <tr>
      <th className="border px-2">Nombre</th>
      <th className="border px-2">Constelacion</th>
      <th className="border px-2">Acciones</th>
     </tr>
    </thead>
    {data.length === 0 ? (
     <tbody>
      <tr>
       <td>Sin Datos</td>
      </tr>
     </tbody>
    ) : (
     data.map((el) => (
      <CrudTableTbody
       key={el.id}
       nombre={el.nombre}
       constelacion={el.constelacion}
       id={el.id}
       deleteData={deleteData}
       updateDataToEdit={updateDataToEdit}
       updateForm={updateForm}
      />
     ))
    )}
   </table>
  </>
 );
}
