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
 updateDataToEdit,
 form,
 updateForm,
}: {
 createData: CallableFunction;
 updateData: CallableFunction;
 updateDataToEdit: CallableFunction;
 form: DataType;
 updateForm: CallableFunction;
}) {
 // ANCHOR - HANDLE_CHANGE

 function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  // console.log(form);
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
   // eslint-disable-next-line no-alert
   window.alert('Datos Incompletos');
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
    <input
     className="hover:bg-gray-400 transition cursor-pointer border mx-2 my-2 px-2 py-1 rounded-md bg-gray-300 font-bold"
     type="submit"
     value="Enviar"
    />
    <input
     className="transition hover:bg-gray-400 cursor-pointer border mx-2 my-2 px-2 py-1 rounded-md bg-gray-300 font-bold"
     type="reset"
     value="Limpiar"
     onClick={handleReset}
    />
   </form>
  </div>
 );
}
