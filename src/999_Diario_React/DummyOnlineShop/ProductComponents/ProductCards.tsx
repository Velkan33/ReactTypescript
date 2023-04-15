import React from 'react';
import { useMyState } from '../ReducerContext';
import ProductCard from './ProductCard';

export default function ProductCards() {
 const state = useMyState();
 if (state === null) return <h2>Problemas con el state en ProductCards</h2>;
 const { allProducts } = state;
 return (
  <div className=" w-full px-4 mt-16 h-full grid [grid-template-columns:repeat(auto-fill,minmax(15rem,1fr))] place-items-center gap-4 gap-y-8 py-8">
   {allProducts.length > 0 &&
    allProducts.map((el) => <ProductCard key={el.id} el={el} />)}
  </div>
 );
}
