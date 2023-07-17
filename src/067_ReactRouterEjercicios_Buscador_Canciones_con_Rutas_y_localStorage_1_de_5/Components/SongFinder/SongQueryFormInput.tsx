import React, { useState } from 'react';
import { redirect, useActionData, useNavigate } from 'react-router-dom';
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
 // We are finding the song by the query, true or false
 const [isQuery, setIsQuery] = useState(false);
 // to navigate to the results page
 const navigate = useNavigate();
 // Song query name
 const setSongQueryName = (value: string) => {
  dispatch({ type: 'ADD_QUERY', query: value });
 };
 // useFetchSong custom hook
 const { handleSearch } = useFetchSong(state.query, setSongQueryName, dispatch);

 // Search submit
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  handleSearch(e);
  setIsQuery(false);
  return navigate('/results');
 };

 return (
  <form onSubmit={handleSubmit} className="mx-auto w-fit pt-8">
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
