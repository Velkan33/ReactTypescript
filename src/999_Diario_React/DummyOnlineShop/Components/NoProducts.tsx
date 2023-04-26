import React from 'react';

export default function NoProducts({ query }: { query: string }) {
 const { hash } = window.location;
 const hashString = hash.replaceAll('_', ' ').slice(1);
 const hashHaveQuery = hashString.match(/(?<=q=)[a-zA-Z]*/);
 if (hashHaveQuery === null) return <p />;
 return (
  <div className="grid place-items-center bg-[#c53434] text-white py-4 px-4  [box-shadow:5px_5px_0_black]">
   <h3>&quot;{hashHaveQuery[0]}&quot;</h3>
   <p>We couldn&rsquo;t find a match for your search.</p>
  </div>
 );
}
