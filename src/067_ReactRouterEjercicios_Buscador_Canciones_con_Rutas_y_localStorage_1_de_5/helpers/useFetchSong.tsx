import React, { SetStateAction, useEffect, useState } from 'react';

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

export default function useFetchSong(
 songName: string,
 setSongName:
  | React.Dispatch<SetStateAction<string>>
  | ((value: string) => void),
 dispatch: React.Dispatch<Action> | null
) {
 const [songResults, setSongResults] = useState<null | []>(null);
 const [page, setPage] = useState(1);

 useEffect(() => {
  let ignore = false;
  if (songResults && !ignore && dispatch !== null) {
   dispatch({ type: 'ADD_SONG', payload: songResults });
  }
  return () => {
   ignore = true;
  };
 }, [songResults, dispatch]);

 function handleSearch(
  e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  nextPage: number | null = null
 ) {
  e.preventDefault();
  const options = {
   method: 'GET',
   headers: {
    'X-RapidAPI-Key': '9a057c10fbmsh39ac27aaaacbd6ep15973bjsn3be909d6d617',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
   },
  };
  if (songName === '') {
   return;
  }
  if (dispatch !== null) dispatch({ type: 'ADD_LOADING' });
  fetch(
   `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${songName}&per_page=5&page=${
    nextPage ?? page
   }`,
   options
  )
   .then((response) => response.json())
   .then((response) => {
    setSongResults(response.hits);
    if (dispatch !== null) dispatch({ type: 'REMOVE_LOADING' });
   })
   .catch((err) => window.console.error(err));
 }
 return { handleSearch, setPage, page };
}
