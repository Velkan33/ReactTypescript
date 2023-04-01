import React, { useState } from "react";
import { useImmer } from "use-immer";
import { Classes } from "../assets/Classes";
import { CrudForm } from "./CrudForm";
import CrudTable, { DataType } from "./CrudTable";
import { initialDb } from "./initialDb";

export default function CrudApp() {
 let classes = Classes();
 const [db, updateDb] = useImmer(initialDb);
 const [dataToEdit, setDataToEdit] = useImmer<null | DataType>(null);

 const createData = (data: DataType) => {
  let nextId = db[db.length - 1].id + 1;
  updateDb((draft) => {
   draft.push({
    nombre: data.nombre,
    constelacion: data.constelacion,
    id: nextId,
   });
  });
 };
 const updateData = (data: unknown) => {
  console.log(data);
 };
 const deleteData = (id: unknown) => {};
 return (
  <>
   <h2 className={classes.h1}>CRUD App</h2>
   <CrudForm
    createData={createData}
    updateData={updateData}
    dataToEdit={dataToEdit}
    setDataToEdit={setDataToEdit}
   />
   <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
  </>
 );
}
