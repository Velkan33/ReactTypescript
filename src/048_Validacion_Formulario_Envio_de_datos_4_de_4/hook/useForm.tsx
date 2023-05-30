import React, { useState } from 'react';
import { Errors, InitialForm } from '../tools/TSTypes';
import validationsForm from '../helpers/formValidation';

export const useForm = (initialForm: InitialForm) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState<null | Errors>(null);
 const [loading, setLoading] = useState(false);
 const [response, setResponse] = useState<null | boolean>(null);

 const handleChange = (
  e:
   | React.ChangeEvent<HTMLInputElement>
   | React.ChangeEvent<HTMLTextAreaElement>
 ) => {
  const nextForm = { ...form, [e.target.name]: e.target.value };
  setForm(nextForm);
  if (errors && errors.email) {
   setErrors(validationsForm(nextForm));
  }
 };
 const handleBlur = (
  e:
   | React.ChangeEvent<HTMLInputElement>
   | React.ChangeEvent<HTMLTextAreaElement>
 ) => {
  const nextForm = { ...form, [e.target.name]: e.target.value };
  setForm(nextForm);
  setErrors(validationsForm(nextForm));
 };
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  setLoading(true);
  setResponse(false);
  fetch('https://formsubmit.co/ajax/spanboxfyou@gmail.com', {
   method: 'POST',
   body: JSON.stringify({
    name: form.name,
    message: form.comments,
    email: form.email,
    _subject: form.subject,
    _captcha: 'false',
    _next: 'https://spanboxng.com',
    _autoresponse:
     'Thank you for contacting us, we will get back to you as soon as possible.',
   }),
   headers: { 'Content-type': 'application/json' },
  }).then(() => {
   setLoading(false);
   setResponse(true);
   setTimeout(() => {
    setResponse(false);
   }, 5000);
   setForm(initialForm);
  });
  e.preventDefault();
 };

 return {
  form,
  errors,
  loading,
  response,
  handleChange,
  handleBlur,
  handleSubmit,
 };
};

export const text = 'some text';
