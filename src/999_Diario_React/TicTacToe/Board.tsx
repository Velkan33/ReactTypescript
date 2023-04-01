import React from 'react';
import Spaces from './Spaces';

export default function Board() {
 return (
  <div className="mt-6 grid grid-flow-row  grid-cols-3 pt-4 ">
   <Spaces id={0} />
   <Spaces id={1} />
   <Spaces id={2} />
   <Spaces id={3} />
   <Spaces id={4} />
   <Spaces id={5} />
   <Spaces id={6} />
   <Spaces id={7} />
   <Spaces id={8} />
  </div>
 );
}
