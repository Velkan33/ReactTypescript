import React, { useState } from 'react';
import { InitialForm } from '../tools/TSTypes';

type ValidateForm = unknown;

export const useForm = (
 initialForm: InitialForm,
 validateForm: ValidateForm
) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState('');
 const [loading, setLoading] = useState(false);
 const [response, setResponse] = useState(null);

 const handleChange = (
  e:
   | React.ChangeEvent<HTMLInputElement>
   | React.ChangeEvent<HTMLTextAreaElement>
 ) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };
 const handleBlur = (e: unknown) => {};
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
