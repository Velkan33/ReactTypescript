import React from 'react';

const initialForm = {
 nombre: '',
 constelacion: '',
 id: null,
};
interface DataType {
 nombre: string;
 constelacion: string;
 id: number | null;
}

export default function CrudForm({
 createData,
 updateData,
 // dataToEdit, just to show that it is not used in last version
 updateDataToEdit,
 form,
 updateForm,
}: {
 createData: CallableFunction;
 updateData: CallableFunction;
 // dataToEdit: DataType | null;
 updateDataToEdit: CallableFunction;
 form: DataType;
 updateForm: CallableFunction;
}) {
 // ANCHOR - HANDLE_CHANGE

 function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  if (e.target.name === 'nombre') {
   updateForm({
    ...form,
    nombre: e.target.value,
   });
  }
  if (e.target.name === 'constelacion') {
   updateForm({ ...form, constelacion: e.target.value });
  }
 }
 // ANCHOR - HANDLE_RESET
 const handleReset = () => {
  updateForm(initialForm);
  updateDataToEdit(null);
 };

 // ANCHOR - HANDLE_SUBMIT
 function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (!form.nombre || !form.constelacion) {
   alert('Datos Incompletos');
   return;
  }

  if (typeof form.id === 'number') {
   updateData({
    nombre: form.nombre,
    constelacion: form.constelacion,
    id: form.id,
   });
  } else {
   createData({ nombre: form.nombre, constelacion: form.constelacion });
  }
  handleReset();
 }

 return (
  <div>
   <h3 className="text-3xl">{form.id ? 'Editar' : 'Agregar'}</h3>
   <form onSubmit={handleSubmit}>
    <input
     className="block my-4 border text-black px-1 py-1 rounded-md"
     type="text"
     name="nombre"
     placeholder="Nombre"
     onChange={handleChange}
     value={form.nombre}
    />
    <input
     className="block text-black border px-1 py-1 rounded-md"
     type="text"
     name="constelacion"
     placeholder="Constelacion"
     onChange={handleChange}
     value={form.constelacion}
    />
    <div className="mt-2 flex gap-3">
     <input
      className="hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 transition cursor-pointer  my-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 font-bold"
      type="submit"
      value="Enviar"
     />
     <input
      className="hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-500 transition cursor-pointer  my-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 font-bold"
      type="reset"
      value="Limpiar"
      onClick={handleReset}
     />
    </div>
   </form>
  </div>
 );
}
