import React from 'react';
import {
 NavLink,
 Route,
 RouterProvider,
 createBrowserRouter,
 createRoutesFromElements,
 redirect,
} from 'react-router-dom';
import { useImmer } from 'use-immer';
import Message from '../Components/ErrorMessage';
import CrudAppIndex from '../Components/CrudApp/CrudAppIndex';

// import { action as createAction } from '../Components/CrudApp/CrudForm';

interface DataType {
 nombre: string;
 constelacion: string;
 id: number;
}
export default function BaseRouter() {
 const [dataToEdit, updateDataToEdit] = useImmer<null | DataType>(null);
 const [form, updateForm] = useImmer<{
  nombre: string;
  constelacion: string;
  id: null | number;
 }>({
  nombre: '',
  constelacion: '',
  id: null,
 });
 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route
    path="/"
    element={<CrudAppIndex />}
    errorElement={<Message msg="Site unreacheable error" />}
   />
  )
 );
 return <RouterProvider router={router} />;
}
