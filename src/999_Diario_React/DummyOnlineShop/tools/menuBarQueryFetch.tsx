import React from 'react';
import { Action } from './typescriptTypes';

export default function menuBarQueryFetch(
 query: string,
 dispatch: React.Dispatch<Action>
) {
 const nextURL =
  query.length > 0
   ? `https://dummyjson.com/products/search?q=${query}`
   : 'https://dummyjson.com/products?limit=20&skip=0';
 dispatch({ type: 'CLEAR_MENU_OPEN' });
 dispatch({ type: 'SET_LOADING' });
 dispatch({ type: 'SET_FETCH_URL', urlData: nextURL });
 dispatch({ type: 'CLEAR_SELECTED_PRODUCT_ID' });

 fetch(nextURL)
  .then((res) => res.json())
  .then((json) => {
   // console.log(json);
   dispatch({ type: 'CREATE_PRODUCTS', data: json.products });
   dispatch({ type: 'CLEAR_LOADING' });
  });
}
