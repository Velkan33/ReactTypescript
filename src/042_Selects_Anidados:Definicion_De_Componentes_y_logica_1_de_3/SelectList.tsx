import React from 'react';

function SelectList({
 title,
 url,
 handleChange,
}: {
 title: string;
 url: string;
 handleChange: unknown;
}) {
 return (
  <div className="text-gray-700">
   <select name="" id="">
    <option value="">- - -</option>
   </select>
  </div>
 );
}

export default SelectList;
