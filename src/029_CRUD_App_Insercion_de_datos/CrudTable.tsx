import React from "react";
import { Classes } from "../assets/Classes";
import CrudTableTbody from "./CrudTableTbody";

export interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}

export default function CrudTable({
 data,
 deleteData,
 setDataToEdit,
}: {
 data: DataType[] | [];
 deleteData: CallableFunction;
 setDataToEdit: CallableFunction;
}) {
 console.log(data);
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
     data.map((e) => (
      <CrudTableTbody
       key={e.id}
       {...e}
       deleteData={deleteData}
       setDataToEdit={setDataToEdit}
      />
     ))
    )}
   </table>
  </>
 );
}
