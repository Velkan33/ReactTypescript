import { InitialForm } from '../tools/TSTypes';

const validationsForm = (form: InitialForm) => {
 const errorObject = { name: '', email: '', subject: '', comments: '' };
 const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
 const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 const regexComments = /^.{0,255}$/;

 if (!regexName.test(form.name)) {
  errorObject.name =
   'El nombre solo puede estar compuesto por letras y numeros';
 } else {
  errorObject.name = '';
 }
 if (form.email && !regexEmail.test(form.email)) {
  errorObject.email =
   'El email debe ser un email valido, ejemplo john@gmail.com';
 } else {
  errorObject.email = '';
 }
 if (!/^.{0,50}$/.test(form.subject)) {
  errorObject.subject =
   'El asunto solo puede estar compuesto por letras y numeros';
 } else {
  errorObject.subject = '';
 }

 if (!regexComments.test(form.comments)) {
  errorObject.comments = 'Los comentarios no deben exceder los 255 caracteres';
 } else {
  errorObject.comments = '';
 }
 return errorObject;
};
export default validationsForm;
