import { WritableDraft } from "immer/dist/internal";
import { useImmer } from "use-immer";
import { Classes } from "../assets/Classes";
import { DataType } from "./CrudTable";

export const CrudForm = ({
 createData,
 updateData,
 dataToEdit,
 setDataToEdit,
}: {
 createData: CallableFunction;
 updateData: CallableFunction;
 dataToEdit: DataType;
 setDataToEdit: CallableFunction;
}) => {
 //ANCHOR - HANDLE_CHANGE
 function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  if (e.target.name === "nombre") {
   setDataToEdit((draft: WritableDraft<DataType>) => {
    draft.nombre = e.target.value;
   });
  }
  if (e.target.name === "constelacion") {
   setDataToEdit((draft: WritableDraft<DataType>) => {
    draft.constelacion = e.target.value;
   });
  }
 }
 // ANCHOR - HANDLE_SUBMIT;
 function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log(dataToEdit.id);
  if (dataToEdit.id) {
   updateData();
  } else {
   createData({
    nombre: dataToEdit.nombre,
    constelacion: dataToEdit.constelacion,
    id: dataToEdit.id,
   });
  }
  setDataToEdit((draft: WritableDraft<DataType>) => {
   draft.nombre = "";
   draft.constelacion = "";
   draft.id = null;
  });
  console.log(dataToEdit.id);
 }
 //ANCHOR - HANDLE_RESET
 let handleReset = () => {
  setDataToEdit({ nombre: "", constelacion: "", id: null });
 };

 let classes = Classes();
 return (
  <div>
   <h3 className={classes.h2}>Agregar</h3>
   <form onSubmit={handleSubmit}>
    <input
     className="block my-4 border text-black px-1 py-1"
     type="text"
     name="nombre"
     placeholder="Nombre"
     onChange={handleChange}
     value={dataToEdit.nombre}
    />
    <input
     className="block text-black border px-1 py-1"
     type="text"
     name="constelacion"
     placeholder="Constelacion"
     onChange={handleChange}
     value={dataToEdit.constelacion}
    />
    <input className={classes.button} type="submit" value="Enviar" />
    <input
     className={classes.button}
     type="reset"
     value="Limpiar"
     onClick={(e) => handleReset()}
    />
   </form>
  </div>
 );
};
