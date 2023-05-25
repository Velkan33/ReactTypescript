import React, { useState } from 'react';
import { Errors, InitialForm } from '../tools/TSTypes';
import validationsForm from '../helpers/formValidation';

export const useForm = (initialForm: InitialForm) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState<null | Errors>(null);
 const [loading, setLoading] = useState(false);
 const [response, setResponse] = useState(null);

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
