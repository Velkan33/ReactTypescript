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
export default function singleProductFetch(
 dispatch: React.Dispatch<Action>,
 selectedProductId: number
) {
 fetch(`https://dummyjson.com/products/${selectedProductId}`)
  .then((res) => res.json())
  .then((json) =>
   dispatch({ type: 'SET_SELECTED_PRODUCT_DATA', selectedData: json })
  );
}
