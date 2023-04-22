import React from 'react';

type Action = {
 type: string;
 data?: string[] | Product[];
 selectedData?: Product;
 value?: number;
 urlData?: string;
};
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
