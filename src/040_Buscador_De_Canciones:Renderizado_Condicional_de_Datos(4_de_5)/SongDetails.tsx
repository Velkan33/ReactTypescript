import React from 'react';
import SongArtist from './SongArtist';
import SongLyrics from './SongLyrics';
import Message from './Components/ErrorMessage';

export default function SongDetails({
 search,
 lyric,
 bio,
}: {
 search: any;
 lyric: any;
 bio: any;
}) {
 if (!lyric || !bio) return <h3>Lyric or Bio are null</h3>;
 return (
  <div>
   <h2>Detalles</h2>
   {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
    <Message msg={`Error no existe la cancion ${search.song}`} />
   ) : (
    <SongLyrics />
   )}
   {bio.artist ? (
    <SongArtist />
   ) : (
    <Message msg={`Error no existe el artista ${search.artist}`} />
   )}
  </div>
 );
}
