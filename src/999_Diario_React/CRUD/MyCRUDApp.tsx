import React from 'react';
import InputForm from './InputForm';
import Table from './Table';
import ReducerContext from './ReducerContext/ReducerContext';

export default function MyCRUDApp() {
 return (
  <ReducerContext>
   <>
    <InputForm />
    <Table />
   </>
  </ReducerContext>
 );
}
