import React from 'react';
import { useMyState } from '../ReducerContext';

export default function ProductMainBuyOptions() {
 const state = useMyState();

 if (state === null) return <h2>Error en el state, productMainBuyOption</h2>;
 const ProductData = state.selectedProductData;
 return (
  <div className="lg:w-80 md:w-60 w-full mb-16 relative self-start border border-black justify-self-end py-4 [box-shadow:10px_10px_0_black]">
   <div className="flex items-center gap-3 px-3">
    <span className="text-3xl text-[#cc0000]">${ProductData?.price}</span>
    {ProductData && ProductData.discountPercentage > 0 && (
     <>
      <span className="bg-[#cc0000]/75 text-white font-normal rounded-full px-2 py-[.1rem] text-sm">
       SAVE {ProductData?.discountPercentage}%
      </span>
      <span>
       <del>
        $
        {Math.ceil((ProductData.price * ProductData.discountPercentage) / 100) +
         ProductData.price}
       </del>
      </span>
     </>
    )}
   </div>
   <p className="px-3 py-3">
    {ProductData !== null &&
     '★'.repeat(Math.round(ProductData.rating)) +
      '☆'.repeat(5 - Math.round(ProductData.rating))}{' '}
    {ProductData?.rating}
   </p>
   <div className="flex gap-3 px-3 mt-4">
    <p
     className={
      ProductData !== null && ProductData?.stock > 10
       ? 'font-normal grid place-items-center border  rounded px-2'
       : 'font-normal grid place-items-center border rounded text-[red-500]'
     }
    >
     stock:{ProductData?.stock}
    </p>
    <button
     type="button"
     className=" flex-1 mx-auto inline-block rounded-md py-2 hover:bg-[#9c0000] bg-[#cc0000] font-normal text-white"
    >
     Add to cart
    </button>
   </div>
  </div>
 );
}
