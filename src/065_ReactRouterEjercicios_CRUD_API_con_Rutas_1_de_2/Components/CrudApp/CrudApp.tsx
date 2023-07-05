import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import initialDb from './initialDb';
import helpHttp from '../../../034_Inicializar_estado_con_AJAX_(3/helpers/helperHttp';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}
const { get, del, post, put } = helpHttp();
const myUrl = 'http://localhost:6655/santos';

/** En esta clase 34 Jon crea un use effect para actualizar la base de datos */

export default function CrudApi3() {
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
 const navigate = useNavigate();

 useEffect(() => {
  async function getData() {
   const res = await get(myUrl);
   if (res?.ok !== false) {
    console.log('todo bien');
    updateDb(() => res);
   } else {
    console.log('todo mal');
    updateDb(() => []);
   }
  }
  getData();
 }, [updateDb]);

 const createData = (data: DataType) => {
  let nextId = 0;
  if (db.length > 0) nextId = db[db.length - 1].id + 1;
  const nextBody = {
   nombre: data.nombre,
   constelacion: data.constelacion,
   id: nextId,
  };
  updateDb((draft) => {
   draft.push(nextBody);
  });
  // SECTION Server create petition
  post(myUrl, {
   headers: { 'content-type': 'application/json' },
   body: nextBody,
  });
 };
 const updateData = (data: DataType) => {
  updateDb((draft) => {
   return draft.map((el) => (el.id === data.id ? data : el));
  });
  // Server update petition
  put(`${myUrl}/${data.id}`, {
   headers: { 'content-type': 'application/json' },
   body: data,
  });
 };

 // LINK - DELETE
 const deleteData = ({ id, nombre }: { id: number; nombre: string }) => {
  const willDelete = window.confirm(`Want to delete "${nombre}"?`);
  if (willDelete) {
   updateDb((draft) => {
    return draft.filter((el) => el.id !== id);
   });
   // SECTION Server delete petition
   del(`${myUrl}/${id}`);
  }

  if (dataToEdit !== null && id === dataToEdit.id) {
   updateForm({ nombre: '', constelacion: '', id: null });
   updateDataToEdit(null);
  }
 };
 return (
  <div className="grid md:grid-cols-2 items-start max-w-[800px] place-items-center mt-8 mx-auto">
   <section>
    <button
     type="button"
     onClick={() => navigate(-1)}
     className=" border fixed top-3 left-3 rounded-full h-8 w-8 bg-gray-300/50 hover:bg-gray-400/50 "
    >
     <span className="text-xl">&#x2190;</span>
    </button>
    <h2 className="text-4xl">CRUD App</h2>
    <CrudForm
     createData={createData}
     updateData={updateData}
     dataToEdit={dataToEdit}
     updateDataToEdit={updateDataToEdit}
     form={form}
     updateForm={updateForm}
    />
   </section>
   <section className="md:mt-0 mt-6">
    <CrudTable
     data={db}
     updateDataToEdit={updateDataToEdit}
     deleteData={deleteData}
     updateForm={updateForm}
    />
   </section>
  </div>
 );
}
