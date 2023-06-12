import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import { Classes } from '../../assets/Classes';
import { CrudForm } from './CrudForm';
import CrudTable from './CrudTable';
import { initialDb } from './initialDb';

export default function CrudApp() {
 const classes = Classes();
 const [db, updateDb] = useImmer(initialDb);

 return (
  <>
   <h2 className={classes.h1}>CRUD App</h2>
   <CrudForm />
   <CrudTable data={db} />
  </>
 );
}
