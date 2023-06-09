import React from 'react';
import {
 NavLink,
 Route,
 RouterProvider,
 createBrowserRouter,
 createRoutesFromElements,
} from 'react-router-dom';
import SongFinderApp from '../Components/SongFinder/SongFinderApp';

import MenuRouter from './MenuRouter';
import CrudApi3 from '../Components/CrudApp/CrudApp';
import Message from '../Components/ErrorMessage';

export default function BaseRouter() {
 const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<MenuRouter />} />

    <Route path="songFinder" element={<SongFinderApp />} />
    <Route
     path="crud"
     element={<CrudApi3 />}
     errorElement={<Message msg="Site unreacheable error" />}
    />
   </>
  )
 );
 return <RouterProvider router={router} />;
}
