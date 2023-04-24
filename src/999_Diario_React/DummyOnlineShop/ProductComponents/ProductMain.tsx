import React, { useEffect, useState } from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';
import singleProductFetch from '../tools/singleProductFetch';
import ProductMainBuyOptions from './ProductMainBuyOptions';
import Loader from '../Components/Loader';

export default function ProductMain({
 selectedProductId,
}: {
 selectedProductId: number;
}) {
 const [selectedImage, setSelectedImage] = useState<number>(0);
 const dispatch = useMyDispatch();
 const state = useMyState();

 useEffect(() => {
  let ignore = false;
  if (!ignore && dispatch) {
   singleProductFetch(dispatch, selectedProductId);
  }
  return () => {
   ignore = true;
  };
 }, [dispatch, selectedProductId]);
 if (!state || !dispatch || !state.selectedProductData)
  return <p>State null or dispatch null</p>;
 const element = state.selectedProductData;

 const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  setSelectedImage(Number((e.target as HTMLImageElement).dataset.index));
 };
 return (
  <>
   {' '}
   {state.loading && (
    <div className="border w-screen h-screen grid place-items-center">
     <Loader />
    </div>
   )}
   {!state.loading && (
    <div
     className="flex justify-center relative top-24 px-4"
     key={selectedProductId}
    >
     <div className="w-fit  flex flex-col items-center">
      <h2 className="self-start my-2 text-xl text-black">{element.title}</h2>
      <h4 className="max-w-2xl self-start mb-4 font-normal text-md text-gray-700">
       {element.description}
      </h4>
      <div
       className="flex flex-col md:flex-row"
       id="pict, selected picture, buy option"
      >
       <div className="flex gap-2 lg:flex-row flex-col">
        <div className="border border-black grid place-items-center min-w-[10rem] order-first p-5 ">
         <img
          className="object-cover max-h-[20rem]"
          key={element.images[selectedImage]}
          src={element.images[selectedImage]}
          alt={element.images[selectedImage]}
         />
        </div>
        <div className="flex lg:flex-col gap-2 order-last mr-2">
         {element.images.map((url, i) => {
          let selectedImageClass =
           'shadow-sm max-w-[5rem] h-20 overflow-hidden hover:outline outline-1';
          if (i === selectedImage) selectedImageClass += ' outline-dashed';
          return (
           <button
            type="button"
            onClick={handleClick}
            key={url}
            className={selectedImageClass}
            data-index={i}
           >
            <img
             src={url}
             alt={url}
             key={url}
             className="full"
             data-index={i}
            />
           </button>
          );
         })}
        </div>
       </div>
       <ProductMainBuyOptions />
      </div>
     </div>
    </div>
   )}
  </>
 );
}
