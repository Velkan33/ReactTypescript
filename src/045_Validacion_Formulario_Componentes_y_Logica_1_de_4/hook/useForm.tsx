import React, { useState } from 'react';
import { InitialForm } from '../tools/TSTypes';

type ValidateForm = unknown;

export const useForm = (
 initialForm: InitialForm,
 validateForm: ValidateForm
) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState(false);
 const [loading, setLoading] = useState(false);
 const [response, setResponse] = useState(null);

 const handleChange = (
  e:
   | React.ChangeEvent<HTMLInputElement>
   | React.ChangeEvent<HTMLTextAreaElement>
 ) => {
  console.log(e.target.name);
 };
 const handleBlur = (e: unknown) => {};
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

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
