import React, { useEffect, useState } from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';
import singleProductFetch from '../tools/singleProductFetch';

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
  <div className="flex justify-center relative top-24 px-4">
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
      <div className="flex lg:flex-col gap-2 order-last mr-2">
       {element.images.map((url, i) => (
        <button
         type="button"
         onClick={handleClick}
         key={url}
         className="shadow-sm max-w-[5rem] h-20 overflow-hidden"
        >
         <img src={url} alt={url} className="full" data-index={i} />
        </button>
       ))}
      </div>
      <div className="outline outline-black outline-1 grid place-items-center min-w-[10rem] order-first p-5 ">
       <img
        className="object-cover max-h-[20rem]"
        src={element.images[selectedImage]}
        alt={element.images[selectedImage]}
       />
      </div>
     </div>
     <div className="lg:w-80 w-60  border justify-self-end">buy options</div>
    </div>
   </div>
  </div>
 );
}
