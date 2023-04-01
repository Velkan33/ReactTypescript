import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import initialDb from './initialDb';
import helpHttp from './helpers/helperHttp';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}
const { get } = helpHttp();

export default function CrudApi2() {
 const [db, updateDb] = useImmer([]);
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
 const value: any = [];

 useEffect(() => {
  async function getData() {
   const res = await get('http://localhost:6655/santos');
   updateDb(res);
   console.log('leido');
  }
  getData();
 }, [updateDb]);
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
 };
 const updateData = (data: DataType) => {
  updateDb((draft) => {
   return draft.map((el) => (el.id === data.id ? data : el));
  });
  // console.log(data);
 };

 // LINK - DELETE
 const deleteData = ({ id, nombre }: { id: number; nombre: string }) => {
  const willDelete = window.confirm(`Want to delete "${nombre}"?`);
  if (willDelete) {
   updateDb((draft) => {
    return draft.filter((el) => el.id !== id);
   });
  }

  if (dataToEdit !== null && id === dataToEdit.id) {
   updateForm({ nombre: '', constelacion: '', id: null });
   updateDataToEdit(null);
  }
 };
 return (
  <div className="grid md:grid-cols-2 items-start max-w-[800px] place-items-center mt-8 mx-auto">
   <section>
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
