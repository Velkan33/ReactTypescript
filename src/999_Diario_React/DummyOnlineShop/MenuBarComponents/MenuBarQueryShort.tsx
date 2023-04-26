import React from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';

export default function MenuBarQueryShort() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 if (!state || !dispatch)
  return <p>Error with State or Dispatch in MenuBarQueryShort</p>;
 const { query } = state;
 let closeButtonClass = 'material-symbols-outlined p-2 border-r-2 invisible';
 if (query.length > 0)
  closeButtonClass = 'material-symbols-outlined p-2 border-r-2';
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  window.location.hash = `q=${query}`;
 };
 return (
  <div className="order-3 relative flex items-center bg-gray-100 rounded-md">
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     className="bg-transparent  border-gray-300 my-[.20rem] text-sm py-[.18rem] font-normal pl-2 outline-0"
     placeholder="What can we help you find?"
     value={query}
     onChange={(e) => dispatch({ type: 'SET_QUERY', query: e.target.value })}
    />
   </form>
   <button
    type="button"
    onClick={() => dispatch({ type: 'CLEAR_QUERY' })}
    className={closeButtonClass}
    style={{ fontSize: '15px' }}
   >
    close
   </button>

   <div className="material-symbols-outlined p-2 ">search</div>
  </div>
 );
}
