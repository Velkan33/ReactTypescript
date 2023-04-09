import React from 'react';

const linksStyle =
 'bg-white text-gray-700 hover:text-black hover:bg-gray-100/75 px-3 py-2 rounded-md my-2';
export default function MenuBar() {
 window.console.log('hela');
 return (
  <div className="bg-white shadow-md shadow-black/25">
   <div className="flex gap-2 px-4 py-2 items-center">
    <a
     href="http://www.google.com"
     className="grid place-items-center w-14 bg-white h-14"
    >
     <div
      id="logo"
      className="bg-red-600 rounded-[50%] h-3 w-3 [box-shadow:0_0_0_7px_white_,_0_0_0_14px_#dc2626] "
     />
    </a>
    <a href="http://www.google.com" className={linksStyle}>
     Categories
    </a>
    <a href="http://www.google.com" className={linksStyle}>
     Deals
    </a>
    <a href="http://www.google.com" className={linksStyle}>
     What&apos;s New
    </a>
    <a href="http://www.google.com" className={linksStyle}>
     Essentials
    </a>
   </div>
  </div>
 );
}
