import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import Loader from '../36_Peticiones_HTTP_to_API/Components/Loader';
import helpHttp from './helpers/helperHttp';

export interface Data {
 artist: string;
 song: string;
}

/** ANCHOR: Esta clase es simbolica ya que los metodos utilizados no son los adecuados, como por ejemplo el uso innecesario del useEffect. Para ver referencia en peticion API ver en 999_Diario_React el SongFinder */
/** DANGER: Nada de esto funciona */
export default function SongSearch() {
 const [search, setSearch] = useState<null | Data>(null);
 const [lyric, setLyric] = useState(null);
 const [bio, setBio] = useState(null);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  if (search === null) return;
  const fetchData = async () => {
   const { artist, song } = search;

   const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
   const songUrl = `http://api.lyrics.ovh/v1/${artist}/${song}`;

   console.log(artistUrl, songUrl);

   setLoading(true);

   const [artistRes, songRes] = await Promise.all([
    helpHttp().get(artistUrl),
    helpHttp().get(songUrl),
   ]);

   console.log(artistRes, songRes);
  };
  fetchData();
 }, [search]);
 const handleSearch = (data: Data) => {
  console.log(data);
  setSearch(data);
 };
 return (
  <>
   <h2>Song Search</h2>
   {loading && <Loader />}
   <SongForm handleSearch={handleSearch} />
   {search && !loading && (
    <SongDetails lyric={lyric} bio={bio} search={search} />
   )}
  </>
 );
}
