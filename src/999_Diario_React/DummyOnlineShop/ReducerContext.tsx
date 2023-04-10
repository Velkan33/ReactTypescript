import React, { createContext, useContext, useReducer, useEffect } from 'react';

type StateType = {
 categories: string[];
};
type Action = {
 type: string;
 data: string[];
};
const initialState = { categories: [] };

const MyState = createContext<null | StateType>(null);
const MyDispatch = createContext<null | React.Dispatch<Action>>(null);

export const useMyState = () => useContext(MyState);
export const useMyDispatch = () => useContext(MyDispatch);

function reducer(state: StateType, action: Action) {
 switch (action.type) {
  case 'ADD_CATEGORIES':
   return { ...state, categories: action.data };

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
