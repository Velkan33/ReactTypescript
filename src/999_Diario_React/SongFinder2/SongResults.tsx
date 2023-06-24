import React from 'react';
import { useMySongContext, useMySongDispatch } from './SongContextReducer';
import SongResultElement from './SongResultElement';
import ButtonsBackForward from './ButtonsBackForward';
import Loader from './Components/Loader';

interface State {
 title: string;
 artist_names: string | string[];
 header_image_thumbnail_url: string;
 header_image_url: string;
 id: number;
 release_date_for_display: string;
}

export default function SongResults() {
 const LastState = useMySongContext();
 const dispatch = useMySongDispatch();
 if (LastState === null || dispatch === null) return <h3>No Results</h3>;
 const { state, query, loading } = LastState;

 return (
  <>
   {!loading ? (
    <div className="grid place-items-center mt-16 pb-16">
     {state.map((song: State) => (
      <SongResultElement key={song.id} data={song} />
     ))}
    </div>
   ) : (
    <Loader center />
   )}
   {state.length > 0 && (
    <div className="fixed bottom-4 left-[50%] -translate-x-[50%] flex gap-4">
     <ButtonsBackForward dispatch={dispatch} query={query} />
    </div>
   )}
  </>
 );
}
