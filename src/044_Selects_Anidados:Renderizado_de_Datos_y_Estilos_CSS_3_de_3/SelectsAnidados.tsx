import React, { useState } from 'react';
import SelectList from './SelectList';

function SelectsAnidados() {
 const [state, setState] = useState('');
 const [town, setTown] = useState('');
 const [suburb, setSuburb] = useState('');

 const estadosEndpoint = `https://api.copomex.com/query/get_estados?token=pruebas`;
 const municipiosEndpoint = `https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`;
 const coloniasEndpoint = `https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=pruebas`;

 return (
  <div className=" h-screen ">
   <h2 className="text-4xl text-center py-4">Selects Anidados</h2>
   <SelectList
    title="estado"
    url={estadosEndpoint}
    handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
     setState(e.target.value);
    }}
   />

   {state && (
    <SelectList
     title="municipio"
     url={municipiosEndpoint}
     handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      setTown(e.target.value);
     }}
    />
   )}

   {town && (
    <SelectList
     title="colonia"
     url={coloniasEndpoint}
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
