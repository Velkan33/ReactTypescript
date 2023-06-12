// import React, { useState } from 'react';

// interface Data {
//  artist: string;
//  song: string;
// }

// const initialForm = {
//  artist: '',
//  song: '',
// };

// export default function SongForm({
//  handleSearch,
// }: {
//  handleSearch: (data: Data) => void;
// }) {
//  const [form, setForm] = useState(initialForm);
//  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setForm({ ...form, [e.target.name]: e.target.value });
//  };

//  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   if (!form.artist || !form.song) {
//    alert('Datos Incompletos');
//    return;
//   }
//   handleSearch(form);
//   setForm(initialForm);
//  };
//  return (
//   <div>
//    <form onSubmit={handleSubmit}>
//     <input
//      className="inline-block my-2 mx-2 text-gray-800 px-1"
//      type="text"
//      onChange={handleChange}
//      value={form.artist}
//      name="artist"
//      placeholder="Nombre del Interprete"
//     />
//     <input
//      className="inline-block my-2 mx-2 text-gray-800 px-1"
//      type="text"
//      onChange={handleChange}
//      value={form.song}
//      name="song"
//      placeholder="Nombre de la Cancion"
//     />
//     <input
//      className="bg-green-500 rounded-md border-2 px-2 py-1 block "
//      type="submit"
//      value="Enviar"
//     />
//    </form>
//   </div>
//  );
// }
