import React from 'react';
import ProductCards from './ProductComponents/ProductCards';
import { useMyDispatch, useMyState } from './ReducerContext';
import ProductMain from './ProductComponents/ProductMain';
import useDeskUseEffect from './DeskUseEffect';

export default function Desk() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 useDeskUseEffect(dispatch, state);

 if (state === null || dispatch === null)
  return <h3>Error en el state de Desk</h3>;

 return (
  <>
   {state.selectedProductId === null && <ProductCards />}
   {state.selectedProductId !== null && (
    <ProductMain selectedProductId={state.selectedProductId} />
   )}
  </>
 );
}
