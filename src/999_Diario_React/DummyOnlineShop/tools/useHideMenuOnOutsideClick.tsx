import React, { useEffect } from 'react';
import { Action } from './typescriptTypes';

export default function useHideMenuOnOutsideClick({
 dispatch,
 dataset,
}: {
 dispatch: React.Dispatch<Action> | null;
 dataset: string;
}) {
 useEffect(() => {
  function MyEvent(e: MouseEvent) {
   const { target } = e;

   if (
    (target as HTMLButtonElement).dataset.id === dataset &&
    dispatch !== null
   ) {
    dispatch({ type: 'CLEAR_MENU_OPEN' });
   }
  }
  document.addEventListener('click', MyEvent);

  return () => {
   document.removeEventListener('click', MyEvent);
  };
 }, [dispatch, dataset]);
}
