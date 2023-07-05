import React from 'react';
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

export default function ButtonsBackForward({
 query,
 dispatch,
}: {
 query: string;
 dispatch: React.Dispatch<Action>;
}) {
 const setQuery = (value: string) => {
  dispatch({ type: 'ADD_QUERY', query: value });
 };
 const MyFetchSongRes = useFetchSong(query, setQuery, dispatch);
 if (dispatch === null) return <h3>Dispatch is null</h3>;

 const { handleSubmit, setPage, page } = MyFetchSongRes;
 const handleClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  ejem: 'back' | 'forward'
 ) => {
  if (ejem === 'back') {
   const prevPage = page - 1;
   setPage(prevPage);
   handleSubmit(e, prevPage);
  }
  if (ejem === 'forward') {
   const nextPage = page + 1;
   setPage(nextPage);
   handleSubmit(e, nextPage);
  }
 };

 return (
  <>
   <button
    type="button"
    disabled={page === 1}
    onClick={(e) => handleClick(e, 'back')}
    className="disabled:text-gray-400 disabled:border-0 md:text-3xl text-xl border-2 rounded-md px-2 py-1 bg-black/25 backdrop-blur-sm antialiased"
   >
    Prev page
   </button>
   <button
    type="button"
    onClick={(e) => handleClick(e, 'forward')}
    className="md:text-3xl text-xl antialiased border-2 rounded-md px-2 py-1 bg-black/25 backdrop-blur-sm hover:border-1"
   >
    Next page
   </button>
  </>
 );
}
