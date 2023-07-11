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
 // updateDataToEdit,
 updateForm,
}: {
 data: DataType[] | [];
 deleteData: CallableFunction;
 // updateDataToEdit: CallableFunction;
 updateForm: CallableFunction;
}) {
 // console.log(data);
 return (
  <>
   <h2 className="text-3xl">Data</h2>
   <table>
    <thead>
     <tr>
      <th className=" px-2 my-2">Nombre</th>
      <th className=" px-2 my-2">Constelacion</th>
      <th className=" px-2 my-2">Acciones</th>
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
       // updateDataToEdit={updateDataToEdit}
       updateForm={updateForm}
      />
     ))
    )}
   </table>
  </>
 );
}
