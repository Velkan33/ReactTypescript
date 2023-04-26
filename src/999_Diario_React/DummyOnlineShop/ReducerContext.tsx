import React, { createContext, useContext, useReducer, useEffect } from 'react';
import defaultFetch from './tools/defaultFetch';
import { Action, Product, StateType } from './tools/typescriptTypes';

function dataIsProduct(arg: Product[] | string[]): arg is Product[] {
 return typeof arg[0] !== 'string';
}
const initialState = {
 categories: [],
 menuOpen: null,
 allProducts: [],
 loading: false,
 urlToFetch: null,
 selectedProductId: null,
 selectedProductData: null,
 query: '',
};

const MyState = createContext<null | StateType>(null);
const MyDispatch = createContext<null | React.Dispatch<Action>>(null);

export const useMyState = () => useContext(MyState);
export const useMyDispatch = () => useContext(MyDispatch);
// ANCHOR REDUCER
function reducer(state: StateType, action: Action) {
 switch (action.type) {
  // Add the categories to be displayed on the categories window
  case 'ADD_CATEGORIES': {
   if (!action.data || dataIsProduct(action.data)) return state;
   return { ...state, categories: action.data };
  }
  // Create an array of products from a fetch, overwrite the previous data
  case 'CREATE_PRODUCTS': {
   if (!action.data || !dataIsProduct(action.data)) return state;
   return { ...state, allProducts: action.data };
  }
  // Add products from a fetch to the products array, dont overwrite the previous data
  case 'ADD_PRODUCTS': {
   if (!action.data || !dataIsProduct(action.data)) return state;
   const list = [...state.allProducts];
   const nextList = [...list, ...action.data];
   return { ...state, allProducts: nextList };
  }
  // Set the menu bar option open, is a number array that show the menu option is open by number in the array
  case 'SET_MENU_OPEN': {
   if (typeof action.value !== 'number') return state;
   if (state.menuOpen === null) {
    return { ...state, menuOpen: [action.value] };
   }
   return { ...state, menuOpen: [...state.menuOpen, action.value] };
  }
  // Remove the menu bar option opened
  case 'DELETE_MENU_OPEN': {
   if (typeof action.value !== 'number' || state.menuOpen === null)
    return state;
   const nextArr = state.menuOpen.filter((el) => el !== action.value);
   return { ...state, menuOpen: nextArr };
  }
  // Remove all the menu bar option opened
  case 'CLEAR_MENU_OPEN': {
   if (state.menuOpen === null) return state;
   return { ...state, menuOpen: [] };
  }
  // Set loading to true
  case 'SET_LOADING': {
   return { ...state, loading: true };
  }
  // Set loading to false
  case 'CLEAR_LOADING': {
   return { ...state, loading: false };
  }
  // Set url to fetch when scroll
  case 'SET_FETCH_URL': {
   if (typeof action.urlData !== 'string' || !action.urlData) return state;
   return { ...state, urlToFetch: action.urlData };
  }
  // Remove url to fetch when scroll
  case 'CLEAR_FETCH_URL': {
   return { ...state, urlToFetch: null };
  }
  // Set the selected product
  case 'SET_SELECTED_PRODUCT_ID': {
   if (!action.value) return state;
   return { ...state, selectedProductId: action.value };
  }
  // Clear the selected product;
  case 'CLEAR_SELECTED_PRODUCT_ID': {
   return { ...state, selectedProductId: null };
  }
  // Set selected product data
  case 'SET_SELECTED_PRODUCT_DATA': {
   if (!action.selectedData) return state;
   return { ...state, selectedProductData: action.selectedData };
  }
  // Set query value
  case 'SET_QUERY': {
   if (action.query === null || action.query === undefined) return state;
   return { ...state, query: action.query };
  }
  // Clear query value
  case 'CLEAR_QUERY': {
   return { ...state, query: '' };
  }
  default:
   return state;
 }
}
// ANCHOR REDUCER END

// SECTION CONTEXT
export default function ReducerContext({
 children,
}: {
 children: JSX.Element;
}) {
 const [state, dispatch] = useReducer(reducer, initialState);

 useEffect(() => {
  let ignore = false;
  if (!ignore) {
   fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((json) => dispatch({ type: 'ADD_CATEGORIES', data: json }));
  }

  return () => {
   ignore = true;
  };
 }, []);
 useEffect(() => {
  let ignore = false;
  if (!ignore && window.location.hash === '') {
   defaultFetch(dispatch);
  }
  return () => {
   ignore = true;
  };
 }, []);

 return (
  <MyState.Provider value={state}>
   <MyDispatch.Provider value={dispatch}>{children}</MyDispatch.Provider>
  </MyState.Provider>
 );
}
