import React from 'react';
import useFetch from './useFetch';
import Loader from '../041_Buscador_De_Canciones:Renderizado_de_UI_y_estilos_CSS(5_de_5)/Components/Loader';
import clickSound from './assets/modernClick.wav';
import selectSound from './assets/myClick.wav';
import Message from '../041_Buscador_De_Canciones:Renderizado_de_UI_y_estilos_CSS(5_de_5)/Components/ErrorMessage';

interface ErrorType {
 cause: {
  status: number;
  statusText: string;
 };
}

function SelectList({
 title,
 url,
 handleChange,
}: {
 title: 'estado' | 'municipio' | 'colonia';
 url: string;
 handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
 const { data, error, loading } = useFetch(url);
 if (error)
  return (
   <Message
    msg={`Error ${(error as ErrorType).cause.status}: ${
     (error as ErrorType).cause.statusText
    }`}
   />
  );
 if (!data) return null;

 const id = `select-${title}`;
 const firstLetterUpper = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

 const options = data ? data.response : null;
 const translatedCategory = {
  estado: 'estado',
  municipio: 'municipios',
  colonia: 'colonia',
 }[title];

 const playOpen = () => {
  new Audio(clickSound).play();
 };
 const playSelect = () => {
  new Audio(selectSound).play();
 };

 return (
  <div className="">
   <label className="mx-2 my-1 w-20 inline-block" htmlFor={id}>
    {firstLetterUpper(title)}
   </label>
   {loading && (
    <div className="block">
     <Loader />
    </div>
   )}
   {!loading && (
    <select
     className="text-gray-700"
     name={id}
     id={id}
     onChange={(e) => {
      handleChange(e);
      playOpen();
     }}
     onClick={playSelect}
    >
     <option value={id}>Elige un {title}</option>
     {options &&
      options[translatedCategory].map((el: string) => (
       <option key={el} value={el}>
        {firstLetterUpper(el)}
       </option>
      ))}
    </select>
   )}
  </div>
 );
}

export default SelectList;
