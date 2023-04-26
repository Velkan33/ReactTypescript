import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMyDispatch, useMyState } from '../ReducerContext';
import { Product } from '../tools/typescriptTypes';

export default function ProductCard({ el }: { el: Product }) {
 const { ref, inView } = useInView();
 const state = useMyState();
 const dispatch = useMyDispatch();
 const urlToFetch =
  state && state.urlToFetch
   ? state.urlToFetch
   : 'https://dummyjson.com/products?limit=10&skip=';
 // ANCHOR - Fetch IntersectionObserver
 useEffect(() => {
  let ignore = false;
  if (!ignore && inView && dispatch) {
   fetch(urlToFetch + (el.id + 4))
    .then((res) => res.json())
    .then((json) => dispatch({ type: 'ADD_PRODUCTS', data: json.products }));
  }
  return () => {
   ignore = true;
  };
 }, [inView, dispatch, el.id, urlToFetch]);
 // ANCHOR - Fetch End
 if (!state || !dispatch) return <p>Error en la card</p>;
 const isAlmostLast =
  state.allProducts.length > 5
   ? el.id === state.allProducts[state.allProducts.length - 4].id
   : false;

 const handleClick = () => {
  window.location.hash = `${el.title.replaceAll(' ', '_')}/id=${el.id}`;
  dispatch({ type: 'SET_SELECTED_PRODUCT_ID', value: el.id });
 };
 // SECTION - JSX.Element
 return (
  <button
   type="button"
   onClick={handleClick}
   ref={isAlmostLast ? ref : null}
   className="group relative transition [box-shadow:10px_10px_0_black] border border-black  hover:shadow-xl hover:scale-105 overflow-hidden bg-white sm:h-80 sm:w-60 w-full min-h-[30rem] sm:min-h-fit"
  >
   <div className="object-contain grid place-items-center sm:h-40 h-80 overflow-hidden relative">
    {!el.images[1] && (
     <img
      className="absolute  transition duration-700 max-h-full"
      src={el.images[0]}
      alt={el.title}
     />
    )}
    {el.images[1] && (
     <img
      className="absolute group-hover:opacity-0 opacity-100 transition duration-700 max-h-full"
      src={el.images[0]}
      alt={el.title}
     />
    )}
    {el.images[1] && (
     <img
      className="absolute opacity-0 group-hover:opacity-100 transition duration-700 max-h-full"
      src={el.images[1]}
      alt={el.title}
     />
    )}
   </div>
   <div className="my-4 relative flex px-8 sm:px-3 items-center">
    <p className="inline text-lg sm:text-base">{el.title}</p>

    <span className="font-normal ml-4">{el.rating}</span>
    <span>&#x2730;</span>
   </div>
   <div className="flex relative items-center  justify-between sm:px-3 px-8 w-full mb-4 sm:mb-2">
    <p className=" text-2xl sm:text-xl font-normal">{el.price}$</p>
    <input
     type="button"
     className="border bg-[#cc0000] hover:bg-[#ac0000] text-white sm:px-4 sm:py-1 px-6 py-2 text-lg rounded"
     value="Add to cart"
    />
   </div>
  </button>
 );
}
