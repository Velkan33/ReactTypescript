import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
 // Create the Router passing an array with an object composed by 'path', 'element', 'errorElement'.
 createBrowserRouter,
 // Create a Component with a param router that will have the created browser router.
 RouterProvider,
 // Return an object with the error that can be used to expose the error
 useRouteError,
 // This will access the children component to use it inside the parent component
 Outlet,
 // This will change the route address
 Link,
 // This will load the loader data to be used in the component
 useLoaderData,
} from 'react-router-dom';
import './styles/AppStyle.css';
import Root, { loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/Contact';

export default function AppReactRouterTutorial() {
 const router = createBrowserRouter([
  {
   path: '/',
   element: <Root />,
   errorElement: <ErrorPage />,
   children: [{ path: 'contacts/:contactId', element: <Contact /> }],
   // In loader you set the fetch we want to do on rendering
   loader: rootLoader,
  },
 ]);
 return <RouterProvider router={router} />;
}
