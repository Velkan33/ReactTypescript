import React from 'react';

interface NewDataType extends DataType {
 deleteData: CallableFunction;
 updateDataToEdit: CallableFunction;
 updateForm: CallableFunction;
}
export interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}

export default function CrudTableTbody({
 nombre,
 constelacion,
 id,
 deleteData,
 updateDataToEdit,
 updateForm,
}: NewDataType) {
 // TODO - Cambiar el data to edit que modificara una elemento del database
 const handleDataToEdit = () => {
  // console.log({ nombre, constelacion, id });
  updateDataToEdit({ nombre, constelacion, id });
  updateForm({ nombre, constelacion, id });
 };

 return (
  <tbody>
   <tr>
    <td>{nombre}</td>
    <td>{constelacion}</td>
    <td>
     <button onClick={handleDataToEdit} className="border px-1" type="button">
      Editar
     </button>
     <button
      onClick={() => deleteData(id)}
      className="border px-1"
      type="button"
     >
      Eliminar
     </button>
    </td>
   </tr>
  </tbody>
 );
}
