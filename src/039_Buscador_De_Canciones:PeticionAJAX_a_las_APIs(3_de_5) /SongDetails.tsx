import React from 'react';
import SongArtist from './SongArtist';
import SongLyrics from './SongLyrics';

export default function SongDetails({
 search,
 lyric,
 bio,
}: {
 search: unknown;
 lyric: unknown;
 bio: unknown;
}) {
 return (
  <div>
   <h2>Detalles</h2>
   <SongArtist />
   <SongLyrics />
  </div>
 );
}
