import React, { createContext, useContext, useReducer, useEffect } from 'react';
import defaultFetch from './tools/defaultFetch';
import { Action, Product, StateType } from './tools/typescriptTypes';
import manageCart from './tools/manageCart';

function dataIsProduct(arg: Product[] | string[]): arg is Product[] {
 return typeof arg[0] !== 'string';
}
const localStorageCart = window.localStorage.getItem('shopping_cart');
const initialState = {
 categories: [],
 menuOpen: null,
 allProducts: [],
 loading: false,
 urlToFetch: null,
 selectedProductId: null,
 selectedProductData: null,
 query: '',
 shoppingCart: localStorageCart ? JSON.parse(localStorageCart) : null,
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

   return { ...state, menuOpen: action.value };
  }
  // Remove the menu bar option opened
  case 'DELETE_MENU_OPEN': {
   if (state.menuOpen === null) return state;
   return { ...state, menuOpen: 0 };
  }
  case 'CLEAR_MENU_OPEN': {
   if (state.menuOpen === null) return state;
   return { ...state, menuOpen: null };
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
  // Create a shopping cart and create it inside local storage
  case 'SET_CART_STATE': {
   manageCart({ type: 'SET_CART' });
   return { ...state, shoppingCart: {} };
  }
  // Add item to shoppingCart and update localstorage
  case 'ADD_ITEM_TO_CART': {
   if (typeof action.value !== 'string' && typeof action.value !== 'number')
    return state;
   manageCart({ type: 'ADD_ITEM_ID', id: action.value, amount: action.amount });
   return {
    ...state,
    shoppingCart: { ...state.shoppingCart, [action.value]: action.amount || 1 },
   };
  }
  // Remove item from shoppingCart and update localstorage
  case 'REMOVE_ITEM_FROM_CART': {
   if (typeof action.value !== 'string' && typeof action.value !== 'number')
    return state;
   manageCart({ type: 'REMOVE_ITEM_ID', id: action.value });
   const nextCart = { ...state, shoppingCart: { ...state.shoppingCart } };
   delete nextCart.shoppingCart[action.value];
   return nextCart;
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
