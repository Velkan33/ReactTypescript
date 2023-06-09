import React from 'react';
import {
 Route,
 RouterProvider,
 createBrowserRouter,
 createRoutesFromElements,
} from 'react-router-dom';
import SongFinderApp from '../Components/SongFinder/SongFinderApp';
import CrudApi from '../Components/CrudApp/CrudApp';
import MenuRouter from './MenuRouter';

export default function BaseRouter() {
 const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<MenuRouter />} />

    <Route path="songFinder" element={<SongFinderApp />} />
    <Route path="crud" element={<CrudApi />} />
   </>
  )
 );
 return <RouterProvider router={router} />;
}
