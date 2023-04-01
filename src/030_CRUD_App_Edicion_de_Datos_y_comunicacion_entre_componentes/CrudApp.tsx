import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import { Classes } from '../assets/Classes';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import initialDb from './initialDb';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}

export default function CrudApp() {
 const classes = Classes();
 const [db, updateDb] = useImmer(initialDb);
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
 const deleteData = (id: number) => {
  updateDb((draft) => {
   return draft.filter((el) => el.id !== id);
  });
  if (dataToEdit !== null && id === dataToEdit.id) {
   updateForm({ nombre: '', constelacion: '', id: null });
   updateDataToEdit(null);
  }
 };
 return (
  <>
   <h2 className={classes.h1}>CRUD App</h2>
   <CrudForm
    createData={createData}
    updateData={updateData}
    dataToEdit={dataToEdit}
    updateDataToEdit={updateDataToEdit}
    form={form}
    updateForm={updateForm}
   />
   <CrudTable
    data={db}
    updateDataToEdit={updateDataToEdit}
    deleteData={deleteData}
    updateForm={updateForm}
   />
  </>
 );
}
