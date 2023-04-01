import React from "react";
import { DataType } from "./CrudTable";

function CrudTableTbody({ nombre, constelacion, id }: DataType) {
 return (
  <>
   <tbody>
    <tr>
     <td>{nombre}</td>
     <td>{constelacion}</td>
     <td>
      <button className="border px-1">Editar</button>
      <button className="border px-1">Eliminar</button>
     </td>
    </tr>
   </tbody>
  </>
 );
}

export default CrudTableTbody;
