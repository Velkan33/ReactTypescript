import React from 'react';
import {
 Route,
 RouterProvider,
 createBrowserRouter,
 createRoutesFromElements,
} from 'react-router-dom';
import SongFinderApp from '../Components/SongFinder/SongFinderApp';

import MenuRouter from './MenuRouter';
import CrudApi3 from '../Components/CrudApp/CrudApp';

export default function BaseRouter() {
 const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<MenuRouter />} />

    <Route path="songFinder" element={<SongFinderApp />} />
    <Route path="crud" element={<CrudApi3 />} />
   </>
  )
 );
 return <RouterProvider router={router} />;
}
