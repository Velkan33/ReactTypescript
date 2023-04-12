import React, { createContext, useContext, useReducer, useEffect } from 'react';

type StateType = {
 categories: string[];
 menuOpen: null | number[];
};
type Action = {
 type: string;
 data?: string[];
 value?: number;
};
const initialState = { categories: [], menuOpen: null };

const MyState = createContext<null | StateType>(null);
const MyDispatch = createContext<null | React.Dispatch<Action>>(null);

export const useMyState = () => useContext(MyState);
export const useMyDispatch = () => useContext(MyDispatch);

function reducer(state: StateType, action: Action) {
 switch (action.type) {
  case 'ADD_CATEGORIES':
   if (!action.data) return state;
   return { ...state, categories: action.data };
  case 'SET_MENU_OPEN':
   if (typeof action.value !== 'number') return state;
   if (state.menuOpen === null) {
    return { ...state, menuOpen: [action.value] };
   }

   return { ...state, menuOpen: [...state.menuOpen, action.value] };
  case 'DELETE_MENU_OPEN': {
   if (typeof action.value !== 'number' || state.menuOpen === null)
    return state;
   const nextArr = state.menuOpen.filter((el) => el !== action.value);
   return { ...state, menuOpen: nextArr };
  }
  case 'CLEAR_MENU_OPEN': {
   if (state.menuOpen === null) return state;
   return { ...state, menuOpen: [] };
  }
  default:
   return state;
 }
}
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

 return (
  <MyState.Provider value={state}>
   <MyDispatch.Provider value={dispatch}>{children}</MyDispatch.Provider>
  </MyState.Provider>
 );
}
