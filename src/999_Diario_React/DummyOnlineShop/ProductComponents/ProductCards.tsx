import React from 'react';
import { useMyState } from '../ReducerContext';
import ProductCard from './ProductCard';
import Loader from '../Components/Loader';
import NoProducts from '../Components/NoProducts';

export default function ProductCards() {
 const state = useMyState();
 if (state === null) return <h2>Problemas con el state en ProductCards</h2>;
 const { allProducts, loading } = state;
 let ProductCardsDivClassName =
  'w-full px-4 lg:mt-16 mt-24  h-full grid  place-items-center gap-4 gap-y-8 py-8';
 if (allProducts.length > 0)
  ProductCardsDivClassName +=
   ' [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]';
 return (
  <>
   {loading && (
    <div className="border w-screen h-screen grid place-items-center">
     <Loader />
    </div>
   )}
   {!loading && (
    <div className={ProductCardsDivClassName} key={state.urlToFetch || 'base'}>
     {allProducts.length > 0 &&
      allProducts.map((el) => <ProductCard key={el.id} el={el} />)}
     {allProducts.length === 0 && <NoProducts query={state.query} />}
    </div>
   )}
  </>
 );
}
