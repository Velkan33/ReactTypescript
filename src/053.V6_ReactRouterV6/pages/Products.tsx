import React from 'react';
import { Link } from 'react-router-dom';

export default function Products({
 products,
}: {
 products: { id: number; name: string; price: string }[];
}) {
 return (
  <section>
   <ul>
    {products.map((el) => (
     <li key={el.id}>
      <Link to={`/products/${el.id}`}>
       <button type="button" className="mt-2 ml-2 border px-2 py-1 rounded">
        {el.name}
       </button>
      </Link>
     </li>
    ))}
   </ul>
  </section>
 );
}
