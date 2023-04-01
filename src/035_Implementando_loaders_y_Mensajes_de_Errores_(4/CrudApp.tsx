import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import helpHttp from './helpers/helperHttp';
import Loader from './Components/Loader';
import Message from './Components/ErrorMessage';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}
const { get, del, put, post } = helpHttp();
const myUrl = 'http://localhost:6655/santos';

/** En esta clase 34 Jon crea un use effect para actualizar la base de datos */

export default function CrudApi4A() {
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
 const [loading, updateLoading] = useState(false);
 const [error, updateError] = useState<{
  status: number;
  statusText: string;
 } | null>(null);

 useEffect(() => {
  updateLoading(true);
  async function getData() {
   const res = await get(myUrl);
   if (res?.ok !== false) {
    // console.log(res);
    updateDb(() => res);
    updateLoading(false);
    updateError(null);
   } else {
    updateDb(() => []);
    updateError(res);
    updateLoading(false);
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
  // ANCHOR Peticion al backend
  post(myUrl, {
   body: { nombre: data.nombre, constelacion: data.constelacion },
   headers: { 'content-type': 'application/json' },
  });
 };
 // LINK - UPDATE
 const updateData = (data: DataType) => {
  updateDb((draft) => {
   return draft.map((el) => (el.id === data.id ? data : el));
  });
  // ANCHOR Peticion al backend
  put(`${myUrl}/${data.id}`, {
   body: { nombre: data.nombre, constelacion: data.constelacion },
   headers: { 'content-type': 'application/json' },
  });
 };

 // LINK - DELETE
 const deleteData = ({ id, nombre }: { id: number; nombre: string }) => {
  const w: Window = window;
  const willDelete = w.confirm(`Want to delete "${nombre}"?`);
  if (willDelete) {
   updateDb((draft) => {
    return draft.filter((el) => el.id !== id);
   });
   // ANCHOR Peticion al backend
   del(`${myUrl}/${id}`);
  }

  if (dataToEdit !== null && id === dataToEdit.id) {
   updateForm({ nombre: '', constelacion: '', id: null });
   updateDataToEdit(null);
  }
 };

 return (
  <div className="grid md:grid-cols-2 max-w-[800px] place-items-center mt-8 mx-auto min-h-screen">
   <section className="">
    <h2 className="text-4xl">CRUD App</h2>
    <CrudForm
     createData={createData}
     updateData={updateData}
     // dataToEdit={dataToEdit} just to show is not necessary in last version
     updateDataToEdit={updateDataToEdit}
     form={form}
     updateForm={updateForm}
    />
   </section>
   <section className="md:mt-0 mt-6 ">
    {db.length > 0 && (
     <CrudTable
      data={db}
      updateDataToEdit={updateDataToEdit}
      deleteData={deleteData}
      updateForm={updateForm}
     />
    )}
    {loading && <Loader />}
    {error && <Message msg={`Error ${error.status}: ${error.statusText}`} />}
   </section>
  </div>
 );
}
