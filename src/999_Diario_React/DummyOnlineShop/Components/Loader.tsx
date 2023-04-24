import React from 'react';

export default function Loader() {
 return (
  <div className=" inline-block w-[50px] h-[50px] after:content-['_'] after:block after:w-[50px] after:h-[50px] after:m-[8px] after:rounded-[50%] after:[border:6px_solid_#cc0000] after:[border-color:#cc0000_transparent] after:animate-spin" />
 );
}
