import React, { useState } from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';
import LabelDiv from './ProudctMainBuyOptionComponent/LabelDiv';
import LabelInput from './ProudctMainBuyOptionComponent/LabelInput';
import posibleAmountToBuy from '../tools/posibleAmountToBuy';

export default function ProductMainBuyOptions() {
 const [addMore, setAddMore] = useState(false);
 const state = useMyState();
 const dispatch = useMyDispatch();

 if (state === null || dispatch === null)
  return <h2>Error en el state, productMainBuyOption</h2>;
 const ProductData = state.selectedProductData;
 // Empty ProductData return
 if (ProductData === null) return <h3>Error on product Data</h3>;
 //
 const isOnCart =
  state.shoppingCart &&
  Object.keys(state.shoppingCart).includes(ProductData.id.toString());
 const isNotOnCartButtonStyle =
  ' flex-1 mx-auto inline-block rounded-md py-2 hover:bg-[#9c0000] bg-[#cc0000] font-normal text-white';
 const isOnCartButtonStyle =
  'flex-1 mx-auto inline-block rounded-md py-2  bg-white text-green-700 hover:text-green-600 border border-2 border-green-700 hover:border-green-600  font-normal';

 const handleAddToCartClick = () => {
  if (state.shoppingCart === null) dispatch({ type: 'SET_CART_STATE' });
  if (!isOnCart) {
   dispatch({ type: 'ADD_ITEM_TO_CART', value: ProductData.id });
  }

  if (isOnCart) setAddMore(!addMore);
 };
 /// ///
 const handleMoreItemsRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
  setAddMore(!addMore);

  if (Number(e.target.value) > 0) {
   dispatch({
    type: 'ADD_ITEM_TO_CART',
    value: ProductData.id,
    amount: Number(e.target.value),
   });
   return;
  }
  dispatch({ type: 'REMOVE_ITEM_FROM_CART', value: ProductData.id });
 };
 /// ///
 const amountToBuy = posibleAmountToBuy(ProductData.price);
 return (
  <div className="lg:w-80 md:w-60 w-full mb-16 relative self-start border border-black justify-self-end py-4 [box-shadow:10px_10px_0_black]">
   <div className="flex items-center gap-3 px-3">
    <span className="text-3xl text-[#cc0000]">${ProductData.price}</span>
    {ProductData.discountPercentage > 0 && (
     <>
      <span className="bg-[#cc0000]/75 text-white font-normal rounded-full px-2 py-[.1rem] text-sm">
       SAVE {ProductData.discountPercentage}%
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
    {'★'.repeat(Math.round(ProductData.rating)) +
     '☆'.repeat(5 - Math.round(ProductData.rating))}{' '}
    {ProductData.rating}
   </p>
   <div className="flex gap-3 px-3 mt-4 items-center">
    <p
     className={
      ProductData.stock > 10
       ? 'font-normal grid place-items-center border py-2  rounded px-2'
       : 'font-normal grid place-items-center border py-2 rounded text-[red-500]'
     }
    >
     stock:{ProductData.stock}
    </p>
    {addMore && (
     <LabelDiv>
      <>
       {amountToBuy.map((el: number) => (
        <LabelInput key={el} amount={el} handler={handleMoreItemsRadio} />
       ))}
      </>
     </LabelDiv>
    )}
    {!addMore && (
     <button
      type="button"
      className={isOnCart ? isOnCartButtonStyle : isNotOnCartButtonStyle}
      onClick={handleAddToCartClick}
     >
      {isOnCart
       ? `${state.shoppingCart && state.shoppingCart[ProductData.id]} in cart`
       : 'Add to cart'}
      {isOnCart && <span className="text-xl pl-2">↓</span>}
     </button>
    )}
   </div>
  </div>
 );
}
