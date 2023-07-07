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
import SongFinderApp from '../Components/SongFinder/SongFinderApp';

import MenuRouter from './MenuRouter';
import Message from '../Components/ErrorMessage';
import CrudAppIndex from '../Components/CrudApp/CrudAppIndex';
import CrudAppTable from '../Components/CrudApp/CrudAppTable';
import CrudAppCreate from '../Components/CrudApp/CrudAppCreate';
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
   <>
    <Route path="/" element={<MenuRouter />} />

    <Route path="songFinder" element={<SongFinderApp />} />
    <Route
     path="crud"
     element={<CrudAppIndex />}
     errorElement={<Message msg="Site unreacheable error" />}
    >
     <Route
      path=""
      element={
       <CrudAppTable
        dataToEdit={dataToEdit}
        updateDataToEdit={updateDataToEdit}
        form={form}
        updateForm={updateForm}
       />
      }
     />
     <Route
      path="add"
      element={
       <CrudAppCreate
        dataToEdit={dataToEdit}
        updateDataToEdit={updateDataToEdit}
        form={form}
        updateForm={updateForm}
       />
      }
      // action={createAction}
     />
    </Route>
   </>
  )
 );
 return <RouterProvider router={router} />;
}
