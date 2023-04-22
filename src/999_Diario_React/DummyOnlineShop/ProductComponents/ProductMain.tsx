import React, { useEffect } from 'react';
import { useMyDispatch } from '../ReducerContext';
import singleProductFetch from '../tools/singleProductFetch';

export default function ProductMain({
 selectedProductId,
}: {
 selectedProductId: number;
}) {
 const dispatch = useMyDispatch();
 useEffect(() => {
  let ignore = false;
  if (!ignore && dispatch) {
   singleProductFetch(dispatch, selectedProductId);
  }
  return () => {
   ignore = true;
  };
 }, [dispatch, selectedProductId]);
 return <div>ProductMain</div>;
}
