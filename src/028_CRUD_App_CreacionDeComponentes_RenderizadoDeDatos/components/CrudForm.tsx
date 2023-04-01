import { useImmer } from "use-immer";
import { Classes } from "../../assets/Classes";

export const CrudForm = () => {
 const [input, updateInput] = useImmer<{
  nombre: string;
  constelacion: string;
 }>({ nombre: "", constelacion: "" });

 //ANCHOR - HANDLE_CHANGE
 function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  if (e.target.name === "nombre") {
   updateInput((draft) => {
    draft.nombre = e.target.value;
   });
  }
  if (e.target.name === "constelacion") {
   updateInput((draft) => {
    draft.constelacion = e.target.value;
   });
  }
 }
 //ANCHOR - HANDLE_SUBMIT
 function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
 }
 //ANCHOR - HANDLE_RESET
 let handleReset = () => {
  console.log("hola");
 };

 let classes = Classes();
 return (
  <div>
   <h3 className={classes.h2}>Agregar</h3>
   <form onSubmit={(e) => handleSubmit(e)}>
    <input
     className="block my-4 text-black"
     type="text"
     name="nombre"
     placeholder="Nombre"
     onChange={(e) => handleChange(e)}
     value={input.nombre}
    />
    <input
     className="block text-black"
     type="text"
     name="constelacion"
     placeholder="Constelacion"
     onChange={(e) => handleChange(e)}
     value={input.constelacion}
    />
    <input className={classes.button} type="submit" value="Enviar" />
    <input
     className={classes.button}
     type="reset"
     value="Limpiar"
     onClick={(e) => handleReset}
    />
   </form>
  </div>
 );
};
