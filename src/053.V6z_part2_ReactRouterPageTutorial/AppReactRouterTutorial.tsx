import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/AppStyle.css';
import Root from './routes/root';
import ErrorPage from './error-page';

export default function AppReactRouterTutorial() {
 const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <ErrorPage /> },
 ]);
 return <RouterProvider router={router} />;
}
