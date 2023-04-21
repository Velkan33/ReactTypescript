import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMyDispatch, useMyState } from '../ReducerContext';

type Product = {
 id: number;
 title: string;
 images: string[];
 price: number;
 rating: number;
 thumbnail: string;
};
export default function ProductCard({ el }: { el: Product }) {
 const { ref, inView } = useInView();
 const state = useMyState();
 const dispatch = useMyDispatch();

 // ANCHOR - Fetch IntersectionObserver
 useEffect(() => {
  let ignore = false;
  if (!ignore && inView && dispatch) {
   // Me quede pensando como hacer que solo se busque de la misma categoria en caso de tener abierta una
   fetch(`https://dummyjson.com/products?limit=10&skip=${el.id + 4}`)
    .then((res) => res.json())
    .then((json) => dispatch({ type: 'ADD_PRODUCTS', data: json.products }));
  }
  return () => {
   ignore = true;
  };
 }, [inView, dispatch, el.id]);
 // ANCHOR - Fetch End
 if (!state || !dispatch) return <p>Error en la card</p>;
 const isAlmostLast =
  el.id === state.allProducts[state.allProducts.length - 4].id; // Aqui cambie para que todos los elementos que sean casi ultimos dentro de allProducts, llamen a mas elementos. Ahora solo falta hacer lo que dice en note para que llame dependiendo de que categoria/lista de productos este abierta en el momento en el que desplacemos la vista
 // NO -decir que el largo sea mayor a X
 // NO - crear una variable en el state que sea T cuando se haga el primer
 // NOTE - convert the fetch address to a state variable
 // when click the categorie the state address change to the categorie a
 return (
  <div
   ref={isAlmostLast ? ref : null}
   className="group relative transition shadow-md  hover:shadow-xl hover:scale-105 rounded-lg overflow-hidden bg-white h-60 w-60"
  >
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
