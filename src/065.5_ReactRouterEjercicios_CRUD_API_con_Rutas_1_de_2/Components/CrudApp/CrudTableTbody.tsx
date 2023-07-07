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
  updateDataToEdit({ nombre, constelacion, id });
  updateForm({ nombre, constelacion, id });
 };

 return (
  <tbody className="border-t">
   <tr>
    <td>{nombre}</td>
    <td>{constelacion}</td>
    <td>
     <button
      onClick={handleDataToEdit}
      className="hover:bg-gray-400 transition border px-2 py-1 my-1 mx-1 bg-gray-300 font-bold rounded-sm"
      type="submit"
     >
      Editar
     </button>
     <button
      onClick={() => deleteData({ id, nombre })}
      className="hover:bg-gray-400 transition border px-2 py-1 my-1 mx-1 bg-gray-300 font-bold rounded-sm"
      type="button"
     >
      Eliminar
     </button>
    </td>
   </tr>
  </tbody>
 );
}
