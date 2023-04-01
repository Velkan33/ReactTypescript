import React from 'react';
import { useStateContext } from './ReducerContext';
import TableElement from './TableElement';

export default function TableData() {
 const state = useStateContext();
 if (!state) return <div />;
 return (
  <ul>
   {state.map((el) => (
    <li key={el.id}>
     <TableElement id={el.id} />
    </li>
   ))}
  </ul>
 );
}
