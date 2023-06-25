import React from 'react';
import {
 Route,
 RouterProvider,
 createBrowserRouter,
 createRoutesFromElements,
} from 'react-router-dom';
import SongFinderApp from './SongFinderApp';
import CrudApi from './CrudApp';

export default function BaseApp() {
 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={}>
    <Route path="/crudApi" element={<CrudApi />} />
    <Route path="/songFinder" element={<SongFinderApp />} />
   </Route>
  )
 );
 return <RouterProvider router={router} />;
}
