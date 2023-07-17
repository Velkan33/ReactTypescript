import React from 'react';
import {
 Link,
 Outlet,
 Route,
 RouterProvider,
 createBrowserRouter,
 createRoutesFromElements,
 useNavigate,
} from 'react-router-dom';

import SongQueryForm from './SongQueryForm';
import SongResults from './SongResults';
import SongDispatcherReducer from './SongContextReducer';
import SongFinderHeader from './SongFinderHeader';

// ANCHOR En Esta app vamos a guardar las canciones favoritas en el localStorage
export default function SongFinderAppRouter() {
 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route
    path="/"
    element={
     <>
      <header>
       <SongFinderHeader />
       <Link to="/" className="rounded-xl bg-white/25 p-2 ml-2">
        Home
       </Link>
       <Link to="/results" className="rounded-xl bg-white/25 p-2 ml-2">
        Results
       </Link>
       <SongQueryForm />
      </header>
      <article>
       <Outlet />
      </article>
     </>
    }
   >
    <Route path="/results" element={<SongResults />} />
   </Route>
  )
 );
 return (
  <SongDispatcherReducer>
   <div className="min-h-screen w-screen bg-gradient-to-br text-white from-blue-600 to-red-600">
    <RouterProvider router={router} />
   </div>
  </SongDispatcherReducer>
 );
}
