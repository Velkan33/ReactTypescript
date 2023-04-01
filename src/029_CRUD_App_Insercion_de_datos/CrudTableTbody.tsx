import { WritableDraft } from "immer/dist/internal";
import React from "react";
import { DataType } from "./CrudTable";

interface NewDataType extends DataType {
 deleteData: CallableFunction;
 setDataToEdit: CallableFunction;
}

export default function CrudTableTbody({
 nombre,
 constelacion,
 id,
 deleteData,
 setDataToEdit,
}: NewDataType) {
 //Cambiar el data to edit que modificara una elemento del database
 let handleDataToEdit = () => {
  setDataToEdit((draft: WritableDraft<DataType>) => {
   return { nombre, constelacion, id };
  });
 };
 return (
  <>
   <tbody>
    <tr>
     <td>{nombre}</td>
     <td>{constelacion}</td>
     <td>
      <button onClick={handleDataToEdit} className="border px-1">
       Editar
      </button>
      <button onClick={(e) => deleteData()} className="border px-1">
       Eliminar
      </button>
     </td>
    </tr>
   </tbody>
  </>
 );
}
