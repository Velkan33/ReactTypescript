import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import Login from './Login';

export default function PrivateAuth() {
 const navigate = useNavigate();
 return (
  <>
   <div>Private</div>
   <button
    type="button"
    className="m-1 px-1 rounded bg-slate-200"
    onClick={() => navigate(-1)}
   >
    back
   </button>
  </>
 );
}
