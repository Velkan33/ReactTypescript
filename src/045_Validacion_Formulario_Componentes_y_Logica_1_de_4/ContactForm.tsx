import React from 'react';
import { useForm } from './hook/useForm';

const initialForm = { name: '', email: '', subject: '', comments: '' };

const validationsForm = (form: unknown) => {};

const headerClassName = 'text-3xl  font-sans';
const inputClassName =
 'border block my-2 w-full shadow-md focus:shadow-none hover:shadow-none transition duration-300';
const textAreaClassName =
 'border block my-2 w-full shadow-md focus:shadow-none hover:shadow-none transition duration-300';
const buttonClassName =
 ' rounded px-2 py-1 text-white bg-green-500 hover:bg-green-600 block my-2 shadow-md hover:shadow-none transition transition-300';
const formClassName = 'max-w-[25rem] flex flex-col items-center';
export default function ContactForm() {
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
  <div>
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
    <input className={buttonClassName} type="submit" value="Enviar" />
   </form>
  </div>
 );
}
