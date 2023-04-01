import React from 'react';

export default function Message({ msg }: { msg: string }) {
 return (
  <div className=" px-20 py-4 bg-gradient-to-r from-pink-700 to-red-400 animate-[bounce_2s_ease_infinite] rounded-xl">
   {/* {msg} */}
   <p dangerouslySetInnerHTML={{ __html: msg }} />
  </div>
 );
}
