import React, { useState } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import Loader from '../36_Peticiones_HTTP_to_API/Components/Loader';

export interface Data {
 artist: string;
 song: string;
}
export default function SongSearch() {
 const [search, setSearch] = useState<null | Data>(null);
 const [lyric, setLyric] = useState(null);
 const [bio, setBio] = useState(null);
 const [loading, setLoading] = useState(false);

 const handleSearch = (data: Data) => {
  console.log(data);
  setSearch(data);
 };
 return (
  <>
   <h2>Song Search</h2>
   {loading && <Loader />}
   <SongForm handleSearch={handleSearch} />
   <SongDetails lyric={lyric} bio={bio} search={search} />
  </>
 );
}
