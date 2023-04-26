import React from 'react';
import { Action } from './typescriptTypes';

export default function singleProductFetch(
 dispatch: React.Dispatch<Action>,
 selectedProductId: number | string
) {
 dispatch({ type: 'SET_LOADING' });
 fetch(`https://dummyjson.com/products/${selectedProductId}`)
  .then((res) => res.json())
  .then((json) => {
   dispatch({ type: 'SET_SELECTED_PRODUCT_DATA', selectedData: json });
   dispatch({ type: 'CLEAR_LOADING' });
  });
}
