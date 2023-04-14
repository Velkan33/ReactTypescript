import React from 'react';

type Product = {
 id: number;
 title: string;
 images: string[];
 price: number;
 rating: number;
 thumbnail: string;
};
export default function ProductCard({ el }: { el: Product }) {
 return (
  <div className="group relative transition shadow-md  hover:shadow-xl hover:scale-105 rounded-lg overflow-hidden bg-white h-60 w-60">
   <div className=" object-cover h-40 overflow-hidden relative">
    {!el.images[1] && (
     <img
      className="absolute  transition duration-700"
      src={el.images[0]}
      alt={el.title}
     />
    )}
    {el.images[1] && (
     <img
      className="absolute group-hover:opacity-0 opacity-100 transition duration-700"
      src={el.images[0]}
      alt={el.title}
     />
    )}
    {el.images[1] && (
     <img
      className="absolute opacity-0 group-hover:opacity-100 transition duration-700"
      src={el.images[1]}
      alt={el.title}
     />
    )}
   </div>
   <div className="mx-2 mt-2">
    <p className="inline ">{el.title}</p>

    <span className="inline font-normal ml-6">{el.rating}</span>
    <span>&#x2730;</span>
    <p className="absolute bottom-2 left-2 text-lg font-normal">{el.price}$</p>
   </div>
  </div>
 );
}
