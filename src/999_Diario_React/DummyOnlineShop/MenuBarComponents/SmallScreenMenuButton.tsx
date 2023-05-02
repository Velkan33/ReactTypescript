import React from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';

export default function SmallScreenMenuButton() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 if (state === null || dispatch === null)
  return <h3>State or dispatch are null</h3>;
 const handleSmallScreenMenuOpen = () => {
  if (!state.menuOpen) {
   dispatch({ type: 'SET_MENU_OPEN', value: 1 });
  } else {
   dispatch({ type: 'DELETE_MENU_OPEN' });
  }
 };
 return (
  <button
   type="button"
   className="material-symbols-outlined sm:order-2 rounded hover:bg-gray-100 p-1"
   style={{ fontSize: '35px' }}
   onClick={handleSmallScreenMenuOpen}
  >
   menu
  </button>
 );
}
