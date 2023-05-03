import React from 'react';
import { Action } from './typescriptTypes';

export default function defaultFetch(dispatch: React.Dispatch<Action>) {
 dispatch({ type: 'CLEAR_MENU_OPEN' });
 dispatch({ type: 'SET_LOADING' });
 fetch('https://dummyjson.com/products?limit=20&skip=0')
  .then((res) => res.json())
  .then((json) => {
   dispatch({ type: 'CREATE_PRODUCTS', data: json.products });
   dispatch({ type: 'CLEAR_SELECTED_PRODUCT' });
   dispatch({ type: 'CLEAR_LOADING' });
  });
}
