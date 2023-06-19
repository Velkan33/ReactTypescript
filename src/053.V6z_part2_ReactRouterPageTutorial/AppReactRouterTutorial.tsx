import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
 // Create the Router passing an array with an object composed by 'path', 'element', 'errorElement'.
 createBrowserRouter,
 // Create a Component with a param router that will have the created browser router.
 RouterProvider,
 // Return an object inside the 'errorElement' component, that is called, this error object can be used to expose the error through statusText or message key.
 useRouteError,
 // This will access the children component to use it inside the parent component
 Outlet,
 // This will change the route address
 Link,
 // This will load the loader data to be used in the component
 useLoaderData,
 // This seems like a regular form but will have some extra uses like 'action', that will change the URL and like 'method'
 Form,
 // This callback will redirect to a parameter URL (In this app is used as a return on the edit/EditContact component)
 redirect,
 // This is the type of the action parameters
 ActionFunctionArgs,
 // This is similar to Link except that it have parameters isActive and isPending, that can be used to change the className concurrently.
 NavLink,
 useNavigation,
} from 'react-router-dom';
import './styles/AppStyle.css';
import Root, {
 loader as rootLoader,
 action as rootAction,
} from './routes/root';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader } from './routes/Contact';
import EditContact, {
 loader as editLoader,
 action as editAction,
} from './routes/edit';
import DeleteContact, {
 loader as deleteLoader,
 action as deleteAction,
} from './routes/delete';

export default function AppReactRouterTutorial() {
 const router = createBrowserRouter([
  {
   path: '/',
   element: <Root />,
   errorElement: <ErrorPage />,
   children: [
    {
     path: 'contacts/:contactId',
     element: <Contact />,
     loader: contactLoader,
    },
    {
     path: 'contacts/:contactId/edit',
     element: <EditContact />,
     loader: editLoader,
     action: editAction,
    },
    {
     path: 'contacts/:contactId/destroy',
     element: <DeleteContact />,
     loader: deleteLoader,
     action: deleteAction,
    },
   ],
   // In loader you set the fetch we want to do on rendering, and it will be called on the Component with a useLoaderData
   loader: rootLoader,
   // Action will be called automatically on the method-post inside the Component in a Form Component
   action: rootAction,
  },
 ]);
 return <RouterProvider router={router} />;
}
