import React from 'react';
import { useMyState } from '../context/ContextProvider';

export default function About() {
 const statePack = useMyState();

 if (statePack === null) return <h2>Error en el state</h2>;
 const { state, setState } = statePack;

 return (
  <>
   <h1>About {state}</h1>
   <button
    className="bg-slate-200 px-2 py-1 m-1 rounded"
    type="button"
    onClick={() => setState('Kevin')}
   >
    click to change
   </button>
  </>
 );
}
