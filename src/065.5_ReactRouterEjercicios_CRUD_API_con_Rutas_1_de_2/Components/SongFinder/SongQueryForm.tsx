import React from 'react';
import { useMySongContext, useMySongDispatch } from './SongContextReducer';
import SongQueryFormInput from './SongQueryFormInput';

export default function SongQueryForm() {
 const dispatch = useMySongDispatch();
 const state = useMySongContext();

 if (dispatch === null || state === null) return <div>Dispatch is null</div>;

 return (
  <div className="">
   <SongQueryFormInput state={state} dispatch={dispatch} />
  </div>
 );
}
