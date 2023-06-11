import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
 const navigate = useNavigate();
 return (
  <>
   <div>Login</div>
   <button
    type="button"
    className="rounded m-1 px-1 bg-slate-200"
    onClick={() => navigate(-1)}
   >
    back
   </button>
  </>
 );
}
