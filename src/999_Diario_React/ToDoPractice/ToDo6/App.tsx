import React from 'react';
import DataInput from './DataInput';
import TableData from './TableData';
import ReducerContext from './ReducerContext';

export default function MyTodoApp6() {
 return (
  <ReducerContext>
   <>
    <DataInput />
    <TableData />
   </>
  </ReducerContext>
 );
}
