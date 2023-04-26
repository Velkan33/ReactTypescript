import React, { useEffect } from 'react';
import defaultFetch from './tools/defaultFetch';
import categoriesProductFetch from './tools/categoriesProductFetch';
import singleProductFetch from './tools/singleProductFetch';
import { Action, StateType } from './tools/typescriptTypes';
import menuBarQueryFetch from './tools/menuBarQueryFetch';

export default function useDeskUseEffect(
 dispatch: React.Dispatch<Action> | null,
 state: StateType | null
) {
 useEffect(() => {
  function hashChangeEvent() {
   // e: HashChangeEvent
   const { hash } = window.location;
   const hashString = hash.replaceAll('_', ' ').slice(1);
   const hashHaveId = hashString.match(/(?<=id=)[0-9]*/);
   const hashHaveQuery = hashString.match(/(?<=q=)[a-zA-Z]*/);

   if (
    // REVIEW - location.hash is empty(initalPage)
    hash === '' &&
    dispatch !== null
   ) {
    defaultFetch(dispatch);
    dispatch({ type: 'CLEAR_FETCH_URL' });
    dispatch({ type: 'CLEAR_SELECTED_PRODUCT_ID' });
   } else if (
    // REVIEW - location.hash have 'id=number'
    state &&
    dispatch &&
    hashHaveId
   ) {
    dispatch({ type: 'SET_SELECTED_PRODUCT_ID', value: Number(hashHaveId[0]) });
    singleProductFetch(dispatch, hashHaveId[0]);
   } else if (
    // REVIEW - location.hash have 'q=string'
    dispatch &&
    hashHaveQuery
   ) {
    menuBarQueryFetch(hashHaveQuery[0], dispatch);
   } else if (dispatch) {
    categoriesProductFetch(dispatch, hashString);
   }

   // NOTE Can add conditions if more hash types
  }
  window.addEventListener('hashchange', hashChangeEvent);
  window.addEventListener('load', hashChangeEvent);
  return () => {
   window.removeEventListener('hashchange', hashChangeEvent);
   window.removeEventListener('load', hashChangeEvent);
  };
 }, [dispatch, state]);
}
