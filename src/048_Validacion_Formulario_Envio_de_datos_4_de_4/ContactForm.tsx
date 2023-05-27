import React from 'react';
import { useForm } from './hook/useForm';
import Loader from '../041_Buscador_De_Canciones:Renderizado_de_UI_y_estilos_CSS(5_de_5)/Components/Loader';
import ErrorMessage from './ErrorMessage';
import { InitialForm } from './tools/TSTypes';

const initialForm = { name: '', email: '', subject: '', comments: '' };

const headerClassName = 'text-3xl  font-sans';
const inputClassName =
 'border block my-2 w-full shadow-md focus:shadow-none hover:shadow-none transition duration-300 rounded px-1';
const textAreaClassName =
 'border block my-2 w-full shadow-md focus:shadow-none hover:shadow-none transition duration-300 resize-none rounded px-1';
const buttonClassName =
 ' rounded px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 block my-2 shadow-md shadow-black/50 hover:shadow-none transition transition-500';
const formClassName = 'max-w-[25rem] flex flex-col items-center';
const formDivContainer = 'px-2';
const errorMessageClass =
 'rounded bg-red-600 text-white px-2 before:content-[""] before:bg-red-600 before:h-2 before:w-2 before:absolute before:left-[50%] before:-top-2 before:clip-path-triangle  relative text-center leading-5 py-1';
export default function ContactForm4() {
 const {
  form,
  errors,
  loading,
  response,
  handleChange,
  handleBlur,
  handleSubmit,
 } = useForm(initialForm);
 return (
  <div className={formDivContainer}>
   <h2 className={headerClassName}>Formulario de contacto</h2>
   <form onSubmit={handleSubmit} className={formClassName}>
    <input
     className={
      errors && errors.name
       ? `${inputClassName} outline-2 outline-red-600 border-2 border-red-600`
       : inputClassName
     }
     type="text"
     name="name"
     placeholder="Escribe tu nombre"
     onBlur={handleBlur}
     onChange={handleBlur}
     value={form.name}
     title="Escribe aqui tu nombre. Debe estar compuesto por letras y numeros"
     required
    />{' '}
    <p
     className={
      errors && errors.name
       ? `${errorMessageClass} animate-slideIn `
       : `${errorMessageClass} hidden before:hidden`
     }
    >
     {errors && errors.name}
    </p>
    <input
     className={
      errors && errors.email
       ? `${inputClassName} outline-2 outline-red-600 border-2 border-red-600`
       : inputClassName
     }
     type="text"
     name="email"
     placeholder="Escribe tu email"
     onBlur={handleBlur}
     onChange={handleChange}
     value={form.email}
     title="Escribe aqui tu email. Debe ser un email valido, ejemplo: john@gmail.com"
     required
    />{' '}
    <p
     className={
      errors && errors.email
       ? `${errorMessageClass} animate-slideIn `
       : `${errorMessageClass} hidden before:hidden`
     }
    >
     {errors && errors.email}
    </p>
    <input
     className={
      errors && errors.subject
       ? `${inputClassName} outline-2 outline-red-600 border-2 border-red-600`
       : inputClassName
     }
     type="text"
     name="subject"
     placeholder="Escribe el asunto"
     onBlur={handleBlur}
     onChange={handleBlur}
     value={form.subject}
     maxLength={51}
     title="Escribe aqui el asunto a tratar. Debe tener un maximo de 50 caracteres"
     required
    />
    <p
     className={
      errors && errors.subject
       ? `${errorMessageClass} animate-slideIn`
       : `${errorMessageClass} hidden before:hidden`
     }
    >
     {errors && errors.subject}
    </p>
    <textarea
     className={
      errors && errors.comments
       ? `${textAreaClassName} outline-2 outline-red-600 border-2 border-red-600`
       : textAreaClassName
     }
     name="comments"
     rows={5}
     placeholder="Escribe tus comentarios"
     onBlur={handleBlur}
     onChange={handleBlur}
     value={form.comments}
     maxLength={256}
     title="Escribe aqui tus comentarios. Debe tener un maximo de 255 caracteres"
     required
    />
    <p
     className={
      errors && errors.comments
       ? `${errorMessageClass} animate-slideIn `
       : `${errorMessageClass} hidden before:hidden`
     }
    >
     {errors && errors.comments}
    </p>
    {loading && <Loader />}
    {!loading && (
     <input className={buttonClassName} type="submit" value="Enviar" />
    )}
    {/* {errors && <ErrorMessage msg="some error" />} */}
   </form>
  </div>
 );
}
