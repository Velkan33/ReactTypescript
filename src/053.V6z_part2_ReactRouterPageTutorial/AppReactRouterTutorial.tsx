import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
 // Create the Router passing an array with an object composed by 'path', 'element', 'errorElement'.
 createBrowserRouter,
 // Create a Component with a param router that will have the created browser router.
 RouterProvider,
 // Return an object inside the 'errorElement' component, that is called, this error object can be used to expose the error through statusText or message key. It is used in the 'error-page' file
 useRouteError,
 // This will access the children component to use it inside the parent component.It is used in the 'root' file
 Outlet,
 // This will change the route address
 Link,
 // This will load the loader data to be used in the component.It is used on several components
 useLoaderData,
 // This seems like a regular form but will have some extra uses like 'action', that will change the URL and like 'method'.It is used on several components.`
 Form,
 // This callback will redirect to a parameter URL (In this app is used as a return on the 'edit/EditContact' component)
 redirect,
 // This is the type of the action parameters, is to use in typescript.It is called on severals components
 ActionFunctionArgs,
 // This is similar to Link except that it have parameters isActive and isPending, that can be used to change the className concurrently.
 NavLink,
 // It allows to access the object navigation inside a nested element, navigation object example:
 // {
 //     "state": "loading",
 //     "location": {
 //         "pathname": "/",
 //         "search": "",
 //         "hash": "",
 //         "state": {
 //             "_isRedirect": true
 //         },
 //         "key": "hp8liq2d"
 //     },
 //     "formMethod": "post",
 //     "formAction": "/contacts/ygcjrgl/destroy",
 //     "formEncType": "application/x-www-form-urlencoded",
 //     "formData": {}
 // }.Is used in the 'Root' component
 useNavigation,
 // Is used to return or advance an amount of pages.It is used in 'edit' file.
 useNavigate,
 // Is used to serialize and submit the element pass to it, in this project is used to send a get form for the search bar in the 'root' file.
 useSubmit,
 // Is to send a form without changing the url, is used in the 'Contact' component.
 useFetcher,
 // This is used to create the root structure with Elements <Element/> structure
 createRoutesFromElements,
 // This is used to create the object in an element structure
 Route,
 BrowserRouter,
 Routes,
} from 'react-router-dom';

// --------------------------------// ANCHOR - More secondary and useful methods inside the 'root' file, the 'contacts' file and the 'Contact' file (new URL(), new URLSearchParams().has(), )
import './styles/AppStyle.css';
import Root, {
 loader as rootLoader,
 action as rootAction,
} from './routes/root';
import ErrorPage from './error-page';
import Contact, {
 loader as contactLoader,
 action as contactAction,
} from './routes/Contact';
import EditContact, {
 loader as editLoader,
 action as editAction,
} from './routes/edit';
import DeleteContact, {
 loader as deleteLoader,
 action as deleteAction,
} from './routes/delete';
import Index from './routes';

export function AppReactRouterTutorial() {
 const router = createBrowserRouter([
  {
   path: '/',
   element: <Root />,
   errorElement: <ErrorPage />,
   children: [
    // NOTE - We create a pathless route that wrap the rest of elements to make the error page participate in the UI, this is the same as writing the error page for every children.
    {
     errorElement: <ErrorPage />,
     children: [
      {
       path: 'contacts/:contactId',
       element: <Contact />,
       loader: contactLoader,
       action: contactAction,
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
       errorElement: <p>Oops! There was an error.</p>,
      },
      // index:true tells the router to match and render this component when the user is at the parent route exact path.
      {
       index: true,
       element: <Index />,
      },
     ],
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

// IMPORTANT - We could create all the dynamic before, with a more stylistic way.

export default function AppReactRouterTutorial2() {
 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route
    path="/"
    element={<Root />}
    loader={rootLoader}
    action={rootAction}
    errorElement={<ErrorPage />}
   >
    <Route errorElement={<ErrorPage />}>
     <Route
      path="contacts/:contactId"
      element={<Contact />}
      loader={contactLoader}
      action={contactAction}
     />
     <Route
      path="contacts/:contactId/edit"
      element={<EditContact />}
      loader={editLoader}
      action={editAction}
     />
     <Route
      path="contacts/:contactId/destroy"
      element={<DeleteContact />}
      loader={deleteLoader}
      action={deleteAction}
      errorElement={<p>Oops! There was an error.</p>}
     />
     <Route index element={<Index />} />
    </Route>
   </Route>
  )
 );
 return <RouterProvider router={router} />;
}
// We could also reduce this just wraping the Route Component into a Routes component and this one inside a BrowserRouter and returning this one.
// export default function AppReactRouterTutorial3() {
//  return (
//   <BrowserRouter>
//    <Routes>
//     <Route
//      path="/"
//      element={<Root />}
//      loader={rootLoader}
//      action={rootAction}
//      errorElement={<ErrorPage />}
//     >
//      <Route errorElement={<ErrorPage />}>
//       <Route
//        path="contacts/:contactId"
//        element={<Contact />}
//        loader={contactLoader}
//        action={contactAction}
//       />
//       <Route
//        path="contacts/:contactId/edit"
//        element={<EditContact />}
//        loader={editLoader}
//        action={editAction}
//       />
//       <Route
//        path="contacts/:contactId/destroy"
//        element={<DeleteContact />}
//        loader={deleteLoader}
//        action={deleteAction}
//        errorElement={<p>Oops! There was an error.</p>}
//       />
//       <Route index element={<Index />} />
//      </Route>
//     </Route>
//    </Routes>
//   </BrowserRouter>
//  );
// }
