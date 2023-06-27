import React, { useEffect, useRef } from 'react';

export default function LyricsComponent({
 lyrics,
 loading,
}: {
 lyrics: string;
 loading: boolean;
}) {
 const myRef = useRef<null | HTMLDivElement>(null);
 useEffect(() => {
  if (myRef.current !== null && lyrics !== '' && !loading) {
   myRef.current.innerHTML = lyrics;
  }
 }, [lyrics, loading, myRef]);

 if (lyrics === '' || loading) return <h2>...loading</h2>;
 return (
  <div
   className="p-2 bg-gradient-to-r  from-indigo-900 to-indigo-500 text-white border-t col-span-2 grid
place-items-center py-8"
   ref={myRef}
  >
   ...loading
  </div>
 );
}
