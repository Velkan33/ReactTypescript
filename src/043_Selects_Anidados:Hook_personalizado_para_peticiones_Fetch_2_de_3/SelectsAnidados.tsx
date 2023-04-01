import React, { useState } from 'react';
import SelectList from './SelectList';
import useFetch from './useFetch';

function SelectsAnidados() {
 const [state, setState] = useState('');
 const [town, setTown] = useState('');
 const [suburb, setSuburb] = useState('');

 useFetch('https://api.copomex.com/query/get_estados?token=pruebas');
 return (
  <div className=" h-screen ">
   <h2 className="text-4xl text-center py-4">Selects Anidados</h2>
   <SelectList
    title="Estado"
    url=""
    handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
     setState(e.target.value);
    }}
   />

   {state && (
    <SelectList
     title="Municipios"
     url=""
     handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      setTown(e.target.value);
     }}
    />
   )}

   {town && (
    <SelectList
     title="Colonia"
     url=""
     handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      setSuburb(e.target.value);
     }}
    />
   )}
   <pre>
    <code>
     {state} - {town} - {suburb}
    </code>
   </pre>
  </div>
 );
}

export default SelectsAnidados;
