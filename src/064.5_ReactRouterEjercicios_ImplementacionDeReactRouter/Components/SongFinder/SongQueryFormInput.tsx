import React, { useState } from 'react';
import useFetchSong from '../../helpers/useFetchSong';

interface Action {
 type: string;
 payload?: { result: State }[];
 query?: string;
}

interface State {
 title: string;
 artist_names: string | string[];
 header_image_thumbnail_url: string;
 header_image_url: string;
 id: number;
 release_date_for_display: string;
}
interface LastState {
 query: string;
 state: State[];
}

export default function SongQueryFormInput({
 state,
 dispatch,
}: {
 state: LastState;
 dispatch: React.Dispatch<Action>;
}) {
 const [isQuery, setIsQuery] = useState(false);
 const setSongQueryName = (value: string) => {
  dispatch({ type: 'ADD_QUERY', query: value });
 };
 const { handleSubmit } = useFetchSong(state.query, setSongQueryName, dispatch);
 return (
  <form
   onSubmit={(e) => {
    handleSubmit(e);
    setIsQuery(false);
   }}
   className="mx-auto w-fit pt-8"
  >
   <input
    className="px-1 py-1 text-black/75"
    type="text"
    placeholder="Song name"
    value={isQuery ? state.query : ''}
    onChange={(e) => {
     dispatch({ type: 'ADD_QUERY', query: e.target.value });
     setIsQuery(true);
    }}
   />
   <input
    type="submit"
    value="Search"
    className="cursor-pointer border px-2 rounded py-1 text-lg bg-green-500 first-letter"
   />
  </form>
 );
}
