import React, { useState } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import Loader from '../36_Peticiones_HTTP_to_API/Components/Loader';

export default function SongSearch() {
 const [search, setSearch] = useState(null);
 const [lyric, setLyric] = useState(null);
 const [bio, setBio] = useState(null);
 const [loading, setLoading] = useState(false);

 const handleSearch = (data: unknown) => {
  console.log(data);
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
