import React from 'react';
import { Action } from './typescriptTypes';

export default function categoriesProductFetch(
 dispatch: React.Dispatch<Action>,
 el: string
) {
 const nextURL = `https://dummyjson.com/products/category/${el}?limit=10&skip=`;
 dispatch({ type: 'CLEAR_MENU_OPEN' });
 dispatch({ type: 'SET_LOADING' });
 dispatch({ type: 'SET_FETCH_URL', urlData: nextURL });
 dispatch({ type: 'CLEAR_SELECTED_PRODUCT_ID' });

 fetch(nextURL)
  .then((res) => res.json())
  .then((json) => {
   dispatch({ type: 'CREATE_PRODUCTS', data: json.products });
   dispatch({ type: 'CLEAR_LOADING' });
  });
}
