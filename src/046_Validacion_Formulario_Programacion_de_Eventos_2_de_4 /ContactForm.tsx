import React from 'react';
import { useForm } from './hook/useForm';
import Loader from '../041_Buscador_De_Canciones:Renderizado_de_UI_y_estilos_CSS(5_de_5)/Components/Loader';
import ErrorMessage from './ErrorMessage';

const initialForm = { name: '', email: '', subject: '', comments: '' };

const validationsForm = (form: unknown) => {};

const headerClassName = 'text-3xl  font-sans';
const inputClassName =
 'border block my-2 w-full shadow-md focus:shadow-none hover:shadow-none transition duration-300 rounded px-1';
const textAreaClassName =
 'border block my-2 w-full shadow-md focus:shadow-none hover:shadow-none transition duration-300 resize-none rounded px-1';
const buttonClassName =
 ' rounded px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 block my-2 shadow-md shadow-black/50 hover:shadow-none transition transition-500';
const formClassName = 'max-w-[25rem] flex flex-col items-center';
const formDivContainer = 'px-2';
export default function ContactForm2() {
 const {
  form,
  errors,
  loading,
  response,
  handleChange,
  handleBlur,
  handleSubmit,
 } = useForm(initialForm, validationsForm);
 return (
  <div className={formDivContainer}>
   <h2 className={headerClassName}>Formulario de contacto</h2>
   <form onSubmit={handleSubmit} className={formClassName}>
    <input
     className={inputClassName}
     type="text"
     name="name"
     placeholder="Escribe tu nombre"
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.name}
     required
    />{' '}
    <input
     className={inputClassName}
     type="text"
     name="email"
     placeholder="Escribe tu email"
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.email}
     required
    />{' '}
    <input
     className={inputClassName}
     type="text"
     name="subject"
     placeholder="Escribe el asunto"
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.subject}
     required
    />
    <textarea
     className={textAreaClassName}
     name="comments"
     rows={5}
     placeholder="Escribe tus comentarios"
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.comments}
     required
    />
    {loading && <Loader />}
    {!loading && !errors && (
     <input className={buttonClassName} type="submit" value="Enviar" />
    )}
    {errors && <ErrorMessage msg={errors} />}
   </form>
  </div>
 );
}
