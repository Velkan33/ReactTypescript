import React, { useState } from 'react';
import LyricsComponent from './LyricsComponent';
import Loader from '../Loader';

interface State {
 title: string;
 artist_names: string | string[];
 header_image_thumbnail_url: string;
 header_image_url: string;
 id: number;
 release_date_for_display: string;
}

export default function SongResultElement({ data }: { data: State }) {
 const [showLyrics, setShowLyrics] = useState(false);
 const [lyrics, setLyrics] = useState('');
 const [loading, setLoading] = useState(false);

 const song = data.title;
 const artist = data.artist_names;
 const date = data.release_date_for_display;
 const imageThumb = data.header_image_thumbnail_url;
 // const image = data.header_image_url;
 const { id } = data;

 const handleShowLyrics = () => {
  const nextShowLyrics = !showLyrics;
  setShowLyrics(nextShowLyrics);
  if (!nextShowLyrics) return;
  if (lyrics === '') {
   const options = {
    method: 'GET',
    headers: {
     'X-RapidAPI-Key': '9a057c10fbmsh39ac27aaaacbd6ep15973bjsn3be909d6d617',
     'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    },
   };

   setLoading(true);
   fetch(
    `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id}`,
    options
   )
    .then((response) => response.json())
    .then((response) => {
     setLyrics(response.lyrics.lyrics.body.html);
     setLoading(false);
    })
    .catch((err) => window.console.error(err));
  }
 };

 const buttonText = () => {
  if (showLyrics && !loading) {
   return 'Hide Lyrics';
  }

  return 'Show Lyrics';
 };
 return (
  <div className=" bg-white text-black md:grid grid-cols-2 items-center border-4 md:w-[800px] w-[80%] mt-8 mb-4 rounded-3xl overflow-hidden">
   <img
    className="object-object-scale-down h-auto w-full"
    src={imageThumb}
    alt={song}
   />
   <div className=" place-self-center md:w-[80%]">
    <p className="text-2xl md:text-start text-center md:my-4 my-4 md:mx-0 mx-2">
     {song}
    </p>
    <p className="text-gray-700 text-xl md:my-0 mt-4 text-center md:text-start">
     {artist}
    </p>
    <p className="text-gray-600 text-md md:text-start text-center">{date}</p>
    {loading ? (
     <Loader />
    ) : (
     <button
      type="button"
      className="w-fit md:inline block text-lg my-8 border px-2 py-1 rounded m-3 mx-auto text-white bg-gradient-to-l from-violet-600 to-blue-600"
      onClick={handleShowLyrics}
     >
      {buttonText()}
     </button>
    )}
   </div>
   {showLyrics && lyrics !== '' && (
    <LyricsComponent lyrics={lyrics} loading={loading} />
   )}
  </div>
 );
}
