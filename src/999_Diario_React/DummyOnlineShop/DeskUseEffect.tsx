import React, { useEffect } from 'react';
import defaultFetch from './tools/defaultFetch';
import categoriesProductFetch from './tools/categoriesProductFetch';

type Product = {
 id: number;
 title: string;
 images: string[];
 price: number;
 rating: number;
 thumbnail: string;
 description: string;
 category: string;
 stock: number;
 discountPercentage: number;
};
type StateType = {
 categories: string[];
 allProducts: Product[];
 menuOpen: null | number[];
 loading: boolean;
 urlToFetch: string | null;
 selectedProductId: number | null;
 selectedProductData: null | Product;
};
type Action = {
 type: string;
 data?: string[] | Product[];
 selectedData?: Product;
 value?: number;
 urlData?: string;
};

export default function useDeskUseEffect(
 dispatch: React.Dispatch<Action> | null,
 state: StateType | null
) {
 useEffect(() => {
  function hashChangeEvent() {
   // e: HashChangeEvent
   const { hash } = window.location;
   const hashString = hash.replaceAll('_', ' ').slice(1);
   if (
    // REVIEW - location.hash is empty(initalPage)
    hash === '' &&
    dispatch !== null
   ) {
    defaultFetch(dispatch);
   } else if (
    // REVIEW - Is one of the categories
    state &&
    dispatch &&
    state.categories.includes(hashString)
   ) {
    categoriesProductFetch(dispatch, hashString);
   }
   // NOTE Can add conditions if more hash types
  }
  window.addEventListener('hashchange', hashChangeEvent);
  return () => window.removeEventListener('hashchange', hashChangeEvent);
 }, [dispatch, state]);
}
