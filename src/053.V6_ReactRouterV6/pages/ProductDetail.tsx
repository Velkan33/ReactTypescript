import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
 const param = useParams();
 const products = [
  { id: 1, name: 'Product1', price: '100' },
  { id: 2, name: 'Product2', price: '200' },
  { id: 3, name: 'Product3', price: '300' },
  { id: 4, name: 'Product4', price: '400' },
  { id: 5, name: 'Product5', price: '500' },
 ];
 const product = products.find((el) => el.id.toString() === param.id);
 if (!product) return <p>Empty product</p>;
 return (
  <>
   <div>ProductDetail {product.id}</div>
   <div>Name: {product.name}</div>
   <div>Price: {product.price}</div>
  </>
 );
}
