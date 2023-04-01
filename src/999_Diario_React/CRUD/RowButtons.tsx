import React from 'react';
import myInterFetch from './utils/InteractiveFetch';
import {
 useDispatchContext,
 useStateContext,
} from './ReducerContext/ReducerContext';

export default function RowButtons({ id }: { id: number }) {
 const dispatch = useDispatchContext();
 if (dispatch === null) return <div>loading ...</div>;
 const handleEdit = () => {};
 const handleDelete = () => {
  dispatch({ type: 'DELETE', id });
 };
 return (
  <>
   <button type="button" onClick={handleEdit} className="border px-2 py-1">
    Editar
   </button>
   <button type="button" onClick={handleDelete} className="border px-2 py-1">
    Borrar
   </button>
  </>
 );
}
