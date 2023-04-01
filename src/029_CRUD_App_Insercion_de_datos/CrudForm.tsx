import { useImmer } from "use-immer";
import { setFlagsFromString } from "v8";
import { Classes } from "../assets/Classes";
import { DataType } from "./CrudTable";

const initialForm = {
 nombre: "",
 constelacion: "",
 id: null,
};

export const CrudForm = ({
 createData,
 updateData,
 dataToEdit,
 setDataToEdit,
}: {
 createData: CallableFunction;
 updateData: CallableFunction;
 dataToEdit: DataType | null;
 setDataToEdit: CallableFunction;
}) => {
 const [form, updateForm] = useImmer<{
  nombre: string;
  constelacion: string;
  id: null | number;
 }>({
  nombre: "",
  constelacion: "",
  id: null,
 });

 //ANCHOR - HANDLE_CHANGE
 function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  if (e.target.name === "nombre") {
   updateForm((draft) => {
    draft.nombre = e.target.value;
   });
  }
  if (e.target.name === "constelacion") {
   updateForm((draft) => {
    draft.constelacion = e.target.value;
   });
  }
 }
 //ANCHOR - HANDLE_SUBMIT
 function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (!form.nombre || !form.constelacion) {
   console.log(dataToEdit);
   alert("Datos Incompletos");
   return false;
  }

  form.id !== null
   ? updateData()
   : createData({ nombre: form.nombre, constelacion: form.constelacion });
  handleReset();
 }
 //ANCHOR - HANDLE_RESET
 let handleReset = () => {
  updateForm(initialForm);
  setDataToEdit(null);
 };

 let classes = Classes();
 return (
  <div>
   <h3 className={classes.h2}>Agregar</h3>
   <form onSubmit={(e) => handleSubmit(e)}>
    <input
     className="block my-4 border text-black px-1 py-1"
     type="text"
     name="nombre"
     placeholder="Nombre"
     onChange={handleChange}
     value={form.nombre}
    />
    <input
     className="block text-black border px-1 py-1"
     type="text"
     name="constelacion"
     placeholder="Constelacion"
     onChange={handleChange}
     value={form.constelacion}
    />
    <input className={classes.button} type="submit" value="Enviar" />
    <input
     className={classes.button}
     type="reset"
     value="Limpiar"
     onClick={handleReset}
    />
   </form>
  </div>
 );
};
