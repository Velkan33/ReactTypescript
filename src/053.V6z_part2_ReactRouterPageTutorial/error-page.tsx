import React from 'react';
import { useRouteError } from 'react-router-dom';

interface ErrorType {
 statusText: string;
 message: string;
}

export default function ErrorPage() {
 const error = useRouteError();
 console.error(error);
 return (
  <div id="error-page">
   <h1 className="text-2xl">Oops!</h1>
   <p>Sorry, an unexpected error has occurred.</p>
   <p>
    <i>{(error as ErrorType).statusText || (error as ErrorType).message}</i>
   </p>
  </div>
 );
}
