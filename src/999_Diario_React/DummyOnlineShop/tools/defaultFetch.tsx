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
export default async function defaultFetch(dispatch: React.Dispatch<Action>) {
 const res = await fetch('https://dummyjson.com/products?limit=20&skip=0');
 const json = await res.json();
 dispatch({ type: 'CREATE_PRODUCTS', data: json.products });
 dispatch({ type: 'CLEAR_SELECTED_PRODUCT' });
}
