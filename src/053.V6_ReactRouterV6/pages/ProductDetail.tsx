import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const buttonClass =
 'px-2 rounded hover shadow hover:shadow-none bg-slate-600 hover:bg-slate-800 text-white transition';

// STUB - Here start the ProductDetail component
export default function ProductDetail({
 products,
}: {
 products: { id: number; name: string; price: string }[];
}) {
 const param = useParams();
 const navigate = useNavigate();

 const handleBackClick = () => navigate(-1);

 const product = products.find((el) => el.id.toString() === param.id);
 if (!product) return <p>Empty product</p>;
 return (
  <>
   <div>ProductDetail {product.id}</div>
   <div>Name: {product.name}</div>
   <div>Price: {product.price}</div>
   <button className={buttonClass} type="button" onClick={handleBackClick}>
    Back
   </button>
  </>
 );
}
