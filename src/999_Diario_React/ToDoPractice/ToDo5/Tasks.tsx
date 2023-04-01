import React from 'react';
import { useMyStateContext } from './ReducerContext';

import Table from './Table';

export default function Tasks() {
 const state = useMyStateContext();
 if (!state) return <code>Error en Task</code>;
 return (
  <div>
   <ul>
    {state.map((el) => (
     <li key={el.id}>
      <Table id={el.id} />
     </li>
    ))}
   </ul>
  </div>
 );
}
