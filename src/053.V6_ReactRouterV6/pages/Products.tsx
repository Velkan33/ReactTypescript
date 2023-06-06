import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
 const products = [
  { id: 1, name: 'Product1', price: '100' },
  { id: 2, name: 'Product2', price: '200' },
  { id: 3, name: 'Product3', price: '300' },
  { id: 4, name: 'Product4', price: '400' },
  { id: 5, name: 'Product5', price: '500' },
 ];
 return (
  <section>
   <h1>Products</h1>
   <ul>
    {products.map((el) => (
     <li key={el.id}>
      <Link to={`/products/${el.id}`}>
       <button type="button" className="border px-2 py-1 rounded">
        {el.name}
       </button>
      </Link>
     </li>
    ))}
   </ul>
  </section>
 );
}
