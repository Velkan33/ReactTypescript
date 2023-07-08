import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import {
 Route,
 RouterProvider,
 createBrowserRouter,
 createRoutesFromElements,
} from 'react-router-dom';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
// import initialDb from './initialDb';
import helpHttp from '../../../034_Inicializar_estado_con_AJAX_(3/helpers/helperHttp';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}
const { get, del, put, post } = helpHttp();
const myUrl = 'http://localhost:6655/santos';

/** En esta clase 34 Jon crea un use effect para actualizar la base de datos */

export default function CrudAppIndex() {
 const [db, updateDb] = useImmer<DataType[]>([]);
 const [dataToEdit, updateDataToEdit] = useImmer<null | DataType>(null);
 const [form, updateForm] = useImmer<{
  nombre: string;
  constelacion: string;
  id: null | number;
 }>({
  nombre: '',
  constelacion: '',
  id: null,
 });

 useEffect(() => {
  async function getData() {
   const res = await get(myUrl);
   if (res?.ok !== false) {
    window.console.log('todo bien');
    updateDb(() => res);
   } else {
    window.console.log('todo mal');
    updateDb(() => []);
   }
  }
  getData();
 }, [updateDb]);

 // LINK - CREATE
 const createData = (data: DataType) => {
  let nextId = 0;
  if (db.length > 0) nextId = db[db.length - 1].id + 1;
  updateDb((draft) => {
   draft.push({
    nombre: data.nombre,
    constelacion: data.constelacion,
    id: nextId,
   });
  });
  post('http://localhost:6655/santos', {
   body: { nombre: form.nombre, constelacion: form.constelacion },
   headers: { 'content-type': 'application/json' },
  });
 };
 // LINK - UPDATE
 const updateData = (data: DataType) => {
  updateDb((draft) => {
   return draft.map((el) => (el.id === data.id ? data : el));
  });
  // console.log(data);
  put(`${myUrl}/${data.id}`, {
   body: data,
   headers: { 'content-type': 'application/json' },
  });
 };

 // LINK - DELETE
 const deleteData = ({ id, nombre }: { id: number; nombre: string }) => {
  const willDelete = window.confirm(`Want to delete "${nombre}"?`);
  if (willDelete) {
   updateDb((draft) => {
    return draft.filter((el) => el.id !== id);
   });
   del(`${myUrl}/${id}`);
  }

  if (dataToEdit !== null && id === dataToEdit.id) {
   updateForm({ nombre: '', constelacion: '', id: null });
   updateDataToEdit(null);
  }
 };

 // SECTION - Router
 const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
     path="/"
     element={
      <CrudForm
       createData={createData}
       updateData={updateData}
       dataToEdit={dataToEdit}
       updateDataToEdit={updateDataToEdit}
       form={form}
       updateForm={updateForm}
      />
     }
    />
    <Route
     path="/table"
     element={
      <CrudTable
       data={db}
       updateDataToEdit={updateDataToEdit}
       deleteData={deleteData}
       updateForm={updateForm}
      />
     }
    />
   </>
  )
 );
 return <RouterProvider router={router} />;
}
// (
//   <div className="grid md:grid-cols-2 items-start max-w-[800px] place-items-center mt-8 mx-auto">
//    <section>
//     <h2 className="text-4xl">CRUD App</h2>
//    </section>
//    <section className="md:mt-0 mt-6">

//    </section>
//   </div>
//  );
